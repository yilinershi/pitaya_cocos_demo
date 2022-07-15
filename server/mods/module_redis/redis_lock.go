package module_redis

import (
	"errors"
	"github.com/go-redis/redis"
	"github.com/google/uuid"
	"github.com/topfreegames/pitaya/logger"
	"sync"
	"time"
)

type (
	RedisLock struct {
		dieChan chan struct{}
		rwLock  sync.RWMutex
		key     string
		uuid    string
		client  *redis.Client
	}

	InvokeMethod func(args ...interface{}) (interface{}, error)
)

func NewRedisLock(key string) *RedisLock {
	cli, err := GetRedisClient()
	if err != nil {
		logger.Log.Error("NewRedisLock failed! no redis client!")
		return nil
	}

	if cli == nil {
		logger.Log.Error("NewRedisLock failed!  client is null!")
		return nil
	}

	return &RedisLock{
		dieChan: make(chan struct{}, 1),
		key:     key,
		client:  cli,
	}
}

func (r *RedisLock) TryLock(method InvokeMethod, timeout time.Duration) (interface{}, error) {
	r.rwLock.Lock()
	defer r.rwLock.Unlock()

	var err error
	go func() {
		for {
			if r.uuid == "" {
				r.uuid = uuid.New().String()
				hasSet, err1 := r.client.SetNX(r.key, r.uuid, timeout).Result()
				if err1 != nil {
					err = err1
					r.dieChan <- struct{}{}
					return
				}

				if hasSet {
					r.dieChan <- struct{}{}
					return
				}
			}

			time.Sleep(5 * time.Millisecond)
		}
	}()

	select {
	case <-r.dieChan:
		if err != nil {
			return nil, err
		}

		return method()
	case <-time.After(timeout):
		return nil, errors.New("lock timeout")
	}
}

func (r *RedisLock) UnLock() (bool, error) {
	if r.uuid == "" {
		return false, errors.New("[BUG]出现并发问题,锁已经被释放")
	}

	//执行语句释放redis
	script := "if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end"
	result, err := r.client.Do("EVAL", script, 1, r.key, r.uuid).Bool()
	if err != nil {
		return false, err
	}

	if !result {
		return false, errors.New("[BUG]出现分布式并发释放锁错误")
	}

	r.uuid = ""
	return true, nil
}

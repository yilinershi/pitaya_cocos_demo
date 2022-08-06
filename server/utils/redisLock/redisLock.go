package redisLock

import (
	"errors"
	"github.com/go-redis/redis"
	"github.com/google/uuid"
	"sync"
	"time"
)

type (
	RedisLock struct {
		dieChan   chan struct{}
		rwLock    sync.RWMutex
		lockKey   string //锁的key
		lockValue string //锁的value
		client    *redis.Client
	}
	InvokeMethod func(args ...interface{}) (interface{}, error)
)

func NewRedisLock(client *redis.Client, lockKey string) *RedisLock {
	return &RedisLock{
		dieChan: make(chan struct{}, 1),
		lockKey: lockKey,
		client:  client,
	}
}

func (r *RedisLock) TryLock(method InvokeMethod, timeout time.Duration) (interface{}, error) {
	r.rwLock.Lock()
	defer r.rwLock.Unlock()
	var err error
	go func() {
		for {
			if r.lockValue == "" {
				r.lockValue = uuid.New().String() //这里创建一个锁的value,放到reids里
				hasSet, setErr := r.client.SetNX(r.lockKey, r.lockValue, timeout).Result()
				if setErr != nil {
					err = setErr
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
	if r.lockValue == "" {
		return false, errors.New("[BUG]出现并发问题,锁已经被释放")
	}
	//执行语句释放redis
	script := "if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end"
	result, err := r.client.Do("EVAL", script, 1, r.lockKey, r.lockValue).Bool()
	if err != nil {
		return false, err
	}
	if !result {
		return false, errors.New("[BUG]出现分布式并发释放锁错误")
	}
	r.lockValue = ""
	return true, nil
}

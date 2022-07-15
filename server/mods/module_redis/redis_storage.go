package module_redis

import (
	"github.com/go-redis/redis"
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/modules"
)

type RedisStorage struct {
	modules.Base
	Client *redis.Client
}

func NewRedisStorage() *RedisStorage {
	r := &RedisStorage{
		Client: redis.NewClient(&redis.Options{
			Addr:     pitaya.GetConfig().GetString("module.redis.addr"),
			Password: pitaya.GetConfig().GetString("module.redis.password"),
			DB:       pitaya.GetConfig().GetInt("module.redis.db"),
		}),
	}
	return r
}

func (this *RedisStorage) Init() error {
	_, err := this.Client.Ping().Result()
	if err != nil {
		return err
	}

	return nil
}

func (this *RedisStorage) Shutdown() error {
	err := this.Client.Close()
	if err != nil {
		return err
	}

	return nil
}

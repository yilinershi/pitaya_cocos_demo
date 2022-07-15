package module_redis

import (
	"github.com/go-redis/redis"
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/logger"
)

func GetRedisClient() (*redis.Client, error) {
	redisStorage, err := pitaya.GetModule("redisStorage")
	if err != nil {
		logger.Log.Errorf("GetDbEnginer failed,error:%s", err.Error())
		return nil, err
	}
	return redisStorage.(*RedisStorage).Client, nil
}

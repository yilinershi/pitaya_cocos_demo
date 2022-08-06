package redisClient

import (
	"github.com/go-redis/redis"
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/modules"
	"server/constants"
	"sync"
)

var (
	manager *Manager
	once    sync.Once
)

type Manager struct {
	modules.Base
	Client *redis.Client
}

func (this *Manager) GetClient() *redis.Client {
	return this.Client
}

func NewManager() *Manager {
	once.Do(func() {
		manager = &Manager{
			Client: redis.NewClient(&redis.Options{
				Addr:     pitaya.GetConfig().GetString("redis.addr"),
				Password: pitaya.GetConfig().GetString("redis.password"),
				DB:       pitaya.GetConfig().GetInt("redis.db"),
			}),
		}
	})
	return manager
}

func GetManager() *Manager {
	if m, err := pitaya.GetModule(constants.ModuleReids); err == nil {
		return m.(*Manager)
	}
	return nil
}

func (this *Manager) Init() error {
	_, err := this.Client.Ping().Result()
	if err != nil {
		return err
	}
	return nil
}

func (this *Manager) Shutdown() error {
	err := this.Client.Close()
	if err != nil {
		return err
	}
	return nil
}

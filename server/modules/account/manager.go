package account

import (
	"encoding/json"
	"errors"
	"github.com/go-redis/redis"
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/logger"
	"github.com/topfreegames/pitaya/modules"
	"server/constants"
	"server/modules/account/model"
	"server/modules/redisClient"
	"sync"
)

var (
	manager *Manager
	once    sync.Once
)

type Manager struct {
	modules.Base
}

func NewManager() *Manager {
	once.Do(func() {
		manager = &Manager{}
	})
	return manager
}

func GetManager() *Manager {
	if m, err := pitaya.GetModule(constants.ModuleAccount); err == nil {
		return m.(*Manager)
	}
	return nil
}

func (this *Manager) GetKey() string {
	return "account"
}

func (this *Manager) GetFiled(account string) string {
	return account
}

func (this *Manager) GetLoginFiled() string {
	return "login"
}

func (this *Manager) SaveAccount(r *model.Account) error {
	bytes, err := json.Marshal(r)
	if err != nil {
		return errors.New(`{code:-1,msg:"账号数据json解析出错"}`)
	}
	err = redisClient.GetManager().GetClient().HSet(this.GetKey(), this.GetFiled(r.Account), bytes).Err()
	if err != nil {
		logger.Log.Errorf("[BaseDao] AddCache failed,error:%s", err.Error())
		return errors.New(`{code:-2,msg:"保存账号数据出错"}`)
	}
	return nil
}

func (this *Manager) HasRegister(account string) bool {
	isHave, err := redisClient.GetManager().GetClient().HExists(this.GetKey(), this.GetFiled(account)).Result()
	if err != nil && err != redis.Nil {
		logger.Log.Errorf("account HasRegister err", err.Error())
		return false
	}
	return isHave
}

func (this *Manager) GetAccount(account string) *model.Account {
	result, err := redisClient.GetManager().GetClient().HGet(this.GetKey(), this.GetFiled(account)).Result()
	if err != nil && err != redis.Nil {
		logger.Log.Errorf("get account form account_db err", err.Error())
		return nil
	}
	r := new(model.Account)
	err2 := json.Unmarshal([]byte(result), r)
	if err2 != nil {
		return nil
	}
	return r
}

package user

import (
	"encoding/json"
	"errors"
	"fmt"
	"github.com/go-redis/redis"
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/logger"
	"github.com/topfreegames/pitaya/modules"
	"server/constants"
	"server/modules/redisClient"
	"server/modules/user/model"
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
	if m, err := pitaya.GetModule(constants.ModuleUser); err == nil {
		return m.(*Manager)
	}
	return nil
}

func (this *Manager) GetKey() string {
	return fmt.Sprintf("user")
}

func (this *Manager) NewUser(uid string) error {
	u := &model.User{
		UserId: uid,
		BaseInfo: &model.BaseInfo{
			Avatar:   "",
			NickName: fmt.Sprintf("玩家%s", uid),
			Gender:   0,
		},
		Money: &model.MoneyInfo{
			Gold:    1000,
			Diamond: 1000,
		},
	}
	this.saveUser(u)
	return nil
}

func (this *Manager) GetFiled(userId string) string {
	return userId
}

func (this *Manager) saveUser(u *model.User) error {
	bytes, err := json.Marshal(u)
	if err != nil {
		return err
	}
	err = redisClient.GetManager().GetClient().HSet(this.GetKey(), this.GetFiled(u.UserId), bytes).Err()
	if err != nil {
		logger.Log.Errorf("[BaseDao] AddCache failed,error:%s", err.Error())
		return err
	}
	return nil
}

func (this *Manager) GetUser(uid string) *model.User {
	result, err := redisClient.GetManager().GetClient().HGet(this.GetKey(), this.GetFiled(uid)).Result()
	if err != nil && err != redis.Nil {
		logger.Log.Errorf("get account form account_db err", err.Error())
		return nil
	}
	u := new(model.User)
	err2 := json.Unmarshal([]byte(result), u)
	if err2 != nil {
		return nil
	}
	return u
}

func (this *Manager) ChangeUserNickName(uid, nickname string) error {
	u := this.GetUser(uid)
	if u == nil {
		logger.Log.Errorf("找不到玩家,err:%s")
		return errors.New(`{code:1,msg:"ChangeUserNickName，找不到玩家数据"}`)
	}
	u.BaseInfo.NickName = nickname

	err2 := this.saveUser(u)
	if err2 != nil {
		return errors.New(`{code:2,msg:"ChangeUserNickName，保存玩家数据失败"}`)
	}
	return nil
}

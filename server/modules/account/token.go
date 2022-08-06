package account

import (
	"encoding/json"
	"errors"
	"github.com/topfreegames/pitaya/logger"
	"server/modules/account/model"
	"server/modules/redisClient"
	"time"
)

func (this *Manager) GetTokenKey(token string) string {
	return token
}

func (this *Manager) GetUserIdByToken(token string) string {
	result, err1 := redisClient.GetManager().GetClient().Get(this.GetTokenKey(token)).Result()
	if err1 != nil {
		logger.Log.Errorf("GetUserIdByToken,error:%t", err1.Error())
		return ""
	}
	var t model.Token
	if err2 := json.Unmarshal([]byte(result), &t); err2 != nil {
		return ""
	}
	return t.UserId
}

func (this *Manager) SaveTokenNx(token, uid string) error {
	//保存login信息，这里利用redis的setNX,让token的过期时间，重连时，可以直接拿token重连
	exTime := time.Hour * 24

	s := &model.Token{
		UserId: uid,
		Token:  token,
		ExTime: time.Now().Add(time.Hour * 24),
	}

	bytes, err1 := json.Marshal(s)
	if err1 != nil {
		return errors.New(`{code:-1,msg:"账号数据json解析出错"}`)
	}

	hasSet, err2 := redisClient.GetManager().GetClient().SetNX(this.GetTokenKey(s.Token), bytes, exTime).Result()
	if err2 != nil || hasSet == false {
		logger.Log.Errorf("SaveTokenNx,error:%s", err2.Error())
		return errors.New(`{code:3,msg:"保存token数据出错"}`)
	}
	return nil
}

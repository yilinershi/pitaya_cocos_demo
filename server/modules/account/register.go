package account

import (
	"errors"
	"server/modules/account/model"
	"server/modules/idGenerator"
	"server/modules/user"
	"time"
)

func (this *Manager) OnRegister(account, password string) error {
	if this.HasRegister(account) {
		return errors.New(`{code:1,msg:"注册账号已存在"}`)
	}
	uid, err := idGenerator.GetManager().GenUserId()
	if err != nil {
		return errors.New(`{code:2,msg:"注册账号时，生成uid错误"}`)
	}
	r := &model.Account{
		Account:    account,
		Password:   password,
		RegisterAt: time.Now(),
		UserId:     uid,
	}
	err2 := this.SaveAccount(r)
	if err2 != nil {
		return errors.New(`{code:3,msg:"保存账号到数据库错误"}`)
	}

	//step4:账号注册成功，创建一个默认的user，保存到数据库
	err4 := user.GetManager().NewUser(uid)
	if err4 != nil {
		return errors.New(`{code:4,msg:"保存user到数据库错误"}`)
	}
	return nil
}

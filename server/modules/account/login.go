package account

import (
	"errors"
	"github.com/google/uuid"
	"time"
)

func (this *Manager) DoLogin(_account, password string) (string, error) {
	a := this.GetAccount(_account)
	if a.Password != password {
		return "", errors.New(`{code:1,msg:"登录密码错误"}`)
	}
	//login的model
	a.Token = uuid.NewString()
	a.LoginAt = time.Now()
	this.SaveAccount(a)

	//保存token,token在redis中一定时间后会过期，利用redis的这一特性，可以防止登录后长时间不连ws或tcp
	if err := this.SaveTokenNx(a.Token, a.UserId); err != nil {
		return "", errors.New(`{code:2,msg:"保存token出错"}`)
	}
	return a.Token, nil
}

package dao

import (
	"github.com/topfreegames/pitaya/logger"
	"server/pojo"
	"sync"
)

var (
	AccountInfo        *daoAccountInfo
	daoAccountInfoOnce sync.Once
)

type daoAccountInfo struct {
	BaseDao
}

func NewAccountDao() *daoAccountInfo {
	daoAccountInfoOnce.Do(func() {
		AccountInfo = &daoAccountInfo{}
	})
	return AccountInfo
}

func (this *daoAccountInfo) Init() {
	this.BaseDao.Init()
	isExist, _ := this.enginer.IsTableExist(pojo.DbAccountInfo{})
	logger.Log.Infoln(" >>>>>>> [table account_info]  isExist =", isExist)
	if isExist == false {
		genTableErr := this.enginer.Sync2(&pojo.DbAccountInfo{})
		if genTableErr != nil {
			logger.Log.Errorln("gen [table account_info] error, err=", genTableErr)
		}
	}
}

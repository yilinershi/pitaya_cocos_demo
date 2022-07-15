package dao

import (
	"github.com/topfreegames/pitaya/logger"
	"server/pojo"
	"sync"
)

var (
	Player        *daoPlayer
	daoPlayerOnce sync.Once
)

type daoPlayer struct {
	BaseDao
}

func NewPlayerDao() *daoPlayer {
	daoPlayerOnce.Do(func() {
		Player = &daoPlayer{}
	})
	return Player
}

func (this *daoPlayer) Init() {
	this.BaseDao.Init()
	isExist, _ := this.enginer.IsTableExist(pojo.DbPlayer{})
	logger.Log.Infoln(" >>>>>>> [table player] isExist ====", isExist)
	if isExist == false {
		genTableErr := this.enginer.Sync2(&pojo.DbPlayer{}) //创建一张空的表
		if genTableErr != nil {
			logger.Log.Errorln("gen [table player] error, err=", genTableErr)
		}

	}
}

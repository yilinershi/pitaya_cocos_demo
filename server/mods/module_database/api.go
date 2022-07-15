package module_database

import (
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/logger"
	"github.com/xormplus/xorm"
)

func GetDbEnginer() (*xorm.Engine, error) {
	enginer, err := pitaya.GetModule("databaseStorage")
	if err != nil {
		logger.Log.Errorf("GetDbEnginer failed,error:%s", err.Error())
		return nil, err
	}
	if enginer == nil {
		logger.Log.Errorln("GetDbEnginer failed, enginer is nil")
		return nil, nil
	}
	return enginer.(*DatabaseStorage).Enginer, nil
}

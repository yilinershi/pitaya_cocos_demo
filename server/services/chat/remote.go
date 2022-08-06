package chat

import (
	"github.com/topfreegames/pitaya/component"
	"github.com/topfreegames/pitaya/logger"
)

type Remote struct {
	component.Base
}

func (this *Remote) Init() {
	logger.Log.Info("chat remote 启动成功")
}

func NewRemote() *Remote {
	return &Remote{}
}

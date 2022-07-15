package connector

import (
	"context"
	"fmt"
	"github.com/topfreegames/pitaya/component"
)

type Remote struct {
	component.Base
}

func NewRemote() *Remote {
	return &Remote{}
}

//RefreshLocation todo 当玩家进入某个房间或服务时，通过connector服务器，当前玩家原在位置
func (c *Remote) RefreshLocation(ctx context.Context) error {
	fmt.Println("更新位置")
	return nil
}

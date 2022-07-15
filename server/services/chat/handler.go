package chat

import (
	"context"
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/component"
	"github.com/topfreegames/pitaya/logger"
	"server/constants"
	"server/pb/pb_chat"
	"server/pb/pb_common"
)

type Handler struct {
	component.Base
}

//聊天玩家的基础信息表
var mapPlayerInfo map[string]*pb_common.PlayerBaseInfo

func (this *Handler) Init() {
	logger.Log.Info("chat handler 启动成功")
	//世界聊天频道
	pitaya.GroupCreate(context.Background(), constants.WoldGroup)

	mapPlayerInfo = make(map[string]*pb_common.PlayerBaseInfo)
}

func NewHandler() *Handler {
	return &Handler{}
}

//NotifyChat 路由 -> Chat.Handler.NotifyChat
func (this *Handler) NotifyChat(ctx context.Context, input *pb_chat.InputChatInfo) {
	logger.Log.Info("[Chat.Handler.NotifyChat], input=", input)
	s := pitaya.GetSessionFromCtx(ctx)

	if input.Channel == pb_chat.ChatGroup_World {
		pitaya.GroupBroadcast(ctx, "Connector", constants.WoldGroup, "Chat.Handler.PushChat",
			&pb_chat.SyncChatInfo{
				Group: input.Channel,
				ChatInfo: &pb_chat.ChatInfo{
					Content: input.Content,
					From:    mapPlayerInfo[s.UID()],
				},
			})
	} else {
		//todo 在其它频道发言
	}

}

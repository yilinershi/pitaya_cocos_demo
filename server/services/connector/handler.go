package connector

import (
	"context"
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/component"
	"github.com/topfreegames/pitaya/logger"
	"github.com/topfreegames/pitaya/session"
	"server/constants"
)

// Handler 结构体必须继承一下 Base 类
type Handler struct {
	component.Base
}

func NewHandler() *Handler {
	return &Handler{}
}

func (this *Handler) Init() {
	session.OnSessionBind(func(ctx context.Context, s *session.Session) error {
		logger.Log.Infoln("session 绑定成功")
		s.OnClose(func() {
			onUserOffline(ctx, s)
		})
		onUserOnline(ctx, s)
		return nil
	})
}

func onUserOnline(ctx context.Context, s *session.Session) {
	joinPlayerToChatGroup(ctx, s.UID())
}

func onUserOffline(ctx context.Context, session *session.Session) {
	removePlayerFromChatGroup(ctx, session.UID())
}

//离开聊天group
func removePlayerFromChatGroup(ctx context.Context, uid string) {
	//打印一下人数
	membersCount1, _ := pitaya.GroupMembers(ctx, constants.WoldGroup)
	logger.Log.Infof("离开前,[%s group]人数：%d", constants.WoldGroup, len(membersCount1))
	pitaya.GroupRemoveMember(ctx, constants.WoldGroup, uid)
	//打印一下人数
	membersCount2, _ := pitaya.GroupMembers(ctx, constants.WoldGroup)
	logger.Log.Infof("离开后,[%s group]人数：%d", constants.WoldGroup, len(membersCount2))
}

//加入聊天group
func joinPlayerToChatGroup(ctx context.Context, uid string) {
	membersCount1, _ := pitaya.GroupMembers(ctx, constants.WoldGroup)
	logger.Log.Infof("加入前，group[%s]人数：%d", constants.WoldGroup, len(membersCount1))
	//加入聊天室
	if isContain, _ := pitaya.GroupContainsMember(ctx, constants.WoldGroup, uid); isContain {
		logger.Log.Infof("加入group错误,[%s group]玩家已存在：%s", constants.WoldGroup, uid)
	} else {
		pitaya.GroupAddMember(ctx, constants.WoldGroup, uid)
		membersCount2, _ := pitaya.GroupMembers(ctx, constants.WoldGroup)
		logger.Log.Infof("加入后，[%s group]人数：%d", constants.WoldGroup, len(membersCount2))
	}
}

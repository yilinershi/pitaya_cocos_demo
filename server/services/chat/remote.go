package chat

import (
	"context"
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/component"
	"github.com/topfreegames/pitaya/logger"
	"server/constants"
	"server/pb/pb_chat"
	"server/pb/pb_common"
	"server/pb/pb_rpc"
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

func (this *Remote) JoinWorldGroup(ctx context.Context, req *pb_rpc.ReqJoinChatGroup) (*pb_rpc.RespJoinChatGroup, error) {
	rpcResp := new(pb_rpc.RespJoinChatGroup)
	switch req.Group {
	case pb_chat.ChatGroup_World:
		//打印一下人数
		members, _ := pitaya.GroupMembers(ctx, constants.WoldGroup)
		logger.Log.Infof("加入前，group[%s]人数：%d", constants.WoldGroup, len(members))
		//加入聊天室
		//strPlayerGuid := strconv.FormatInt(req.Player.Guid, 10)
		if isContain, _ := pitaya.GroupContainsMember(ctx, constants.WoldGroup, req.Player.Guid); isContain {
			logger.Log.Infof("加入group错误,[%s group]玩家已存在：%s", constants.WoldGroup, req.Player.Guid)
		} else {
			err := pitaya.GroupAddMember(ctx, constants.WoldGroup, req.Player.Guid)
			members2, _ := pitaya.GroupMembers(ctx, constants.WoldGroup)
			logger.Log.Infof("加入后，[%s group]人数：%d", constants.WoldGroup, len(members2))
			if err != nil {
				rpcResp.ErrCode = pb_common.ErrorCode_Default
				return rpcResp, err
			}
		}

	case pb_chat.ChatGroup_Club:
		//todo 玩家一登录，就加入工会聊天频道里

		//clubId := req.Tag //工会id
		//members, _ := pitaya.GroupMembers(ctx, fmt.Sprintf("club_%s", clubId))
		//logger.Log.Infof("当前group[%s]人数：", woldGroup, len(members))
	}
	mapPlayerInfo[req.Player.Guid] = req.Player
	rpcResp.ErrCode = pb_common.ErrorCode_OK
	return rpcResp, nil
}

func (this *Remote) LeaveWorldGroup(ctx context.Context, req *pb_rpc.ReqLeaveChatGroup) (*pb_rpc.RespLeaveChatGroup, error) {

	rpcResp := new(pb_rpc.RespLeaveChatGroup)
	switch req.Group {
	case pb_chat.ChatGroup_World:
		//打印一下人数
		members1, _ := pitaya.GroupMembers(ctx, constants.WoldGroup)
		logger.Log.Infof("离开前,[%s group]人数：%d", constants.WoldGroup, len(members1))

		err := pitaya.GroupRemoveMember(ctx, constants.WoldGroup, req.PlayerGuid)
		//打印一下人数
		members2, _ := pitaya.GroupMembers(ctx, constants.WoldGroup)
		logger.Log.Infof("离开后,[%s group]人数：%d", constants.WoldGroup, len(members2))
		rpcResp := new(pb_rpc.RespLeaveChatGroup)
		if err != nil {
			rpcResp.ErrCode = pb_common.ErrorCode_Default
			return rpcResp, err
		}
	}
	delete(mapPlayerInfo, req.PlayerGuid)
	rpcResp.ErrCode = pb_common.ErrorCode_OK
	return rpcResp, nil
}

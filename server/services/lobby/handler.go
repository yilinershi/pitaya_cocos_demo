package lobby

import (
	"context"
	"errors"
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/component"
	"github.com/topfreegames/pitaya/logger"
	"server/modules/account"
	"server/modules/user"
	"server/pb/pb_common"
	"server/pb/pb_lobby"
)

type Handler struct {
	component.Base
}

func (this *Handler) Init() {
	logger.Log.Info("大厅服务器启动成功")
}

func (this *Handler) AfterInit() {

}

func NewHandler() *Handler {
	return &Handler{}
}

func (this *Handler) CallBind(ctx context.Context, req *pb_lobby.ReqBind) (*pb_lobby.RespBind, error) {
	logger.Log.Info("[CallBind] req=", req)
	s := pitaya.GetSessionFromCtx(ctx)
	resp := new(pb_lobby.RespBind)
	resp.ErrCode = pb_common.ErrorCode_OK
	//todo 用户可能已经别的设备,登录需要先踢出去
	userId := account.GetManager().GetUserIdByToken(req.Token)
	if userId == "" {
		resp.ErrCode = pb_common.ErrorCode_AuthFailed
		return resp, errors.New("请先登录后，再来进行长连接！")
	}
	s.Bind(ctx, userId)
	s.PushToFront(ctx)
	logger.Log.Info("[CallBind] resp=", resp)
	return resp, nil
}

func (this *Handler) CallGetUserInfo(ctx context.Context, req *pb_lobby.ReqUserInfo) (*pb_lobby.RespUserInfo, error) {
	logger.Log.Info("[CallGetUserInfo] req=", req)
	s := pitaya.GetSessionFromCtx(ctx)

	userInfo := user.GetManager().GetUser(s.UID())
	if userInfo == nil {
		return nil, errors.New(`code:1,msg:"无法获取用户信息"`)
	}
	resp := &pb_lobby.RespUserInfo{
		BaseInfo: &pb_common.UserBaseInfo{
			Uid:      userInfo.UserId,
			NickName: userInfo.BaseInfo.NickName,
			Avatar:   userInfo.BaseInfo.Avatar,
			Gender:   pb_common.Gender(userInfo.BaseInfo.Gender),
		},
	}

	logger.Log.Info("[CallGetUserInfo] resp=", resp)
	return resp, nil
}

//CallChangeUserInfo 修改玩家信息
func (this *Handler) CallChangeUserInfo(ctx context.Context, req *pb_lobby.ReqChangePlayerInfo) (*pb_lobby.RespChangePlayerInfo, error) {
	logger.Log.Info("[CallChangeUserInfo] req=", req)
	s := pitaya.GetSessionFromCtx(ctx)
	resp := new(pb_lobby.RespChangePlayerInfo)
	err := user.GetManager().ChangeUserNickName(s.UID(), req.NickName)
	logger.Log.Info("[CallChangeUserInfo] resp=", req)
	return resp, err
}

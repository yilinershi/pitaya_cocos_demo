package lobby

import (
	"context"
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/component"
	"github.com/topfreegames/pitaya/logger"
	"server/dao"
	"server/pb/pb_common"
	"server/pb/pb_lobby"
	"server/pojo"
)

type Handler struct {
	component.Base
}

func (this *Handler) Init() {
	logger.Log.Info("大厅服务器启动成功")
	dao.RegisterDao(dao.NewPlayerDao())
	dao.StartupDaoes()
}

func (this *Handler) AfterInit() {

}

func NewHandler() *Handler {
	return &Handler{}
}

//CallChangePlayerInfo 修改玩家信息
func (this *Handler) CallChangePlayerInfo(ctx context.Context, req *pb_lobby.ReqChangePlayerInfo) (*pb_lobby.RespChangePlayerInfo, error) {
	logger.Log.Info("[CallChangePlayerInfo] req=", req)
	s := pitaya.GetSessionFromCtx(ctx)
	resp := new(pb_lobby.RespChangePlayerInfo)

	//step1:获取player信息
	r, err1 := dao.Player.Get(&pojo.DbPlayer{
		Guid: s.UID(),
	})
	if err1 != nil || r == nil {
		resp.ErrCode = pb_common.ErrorCode_Default
		logger.Log.Errorf("找不到玩家,err:%s", err1.Error())
		//把玩家T下线
		s.Kick(ctx)
		return resp, err1
	}
	dbPlayer := r.(*pojo.DbPlayer)

	//step2:修改player信息
	if req.Avatar != "" {
		dbPlayer.Avatar = req.Avatar
	}
	if req.NickName != "" {
		dbPlayer.NickName = req.NickName
	}
	if req.Gender != pb_common.Gender_Unknow {
		dbPlayer.Gender = int(req.Gender)
	}
	err2 := dao.Player.Update(dbPlayer, "guid=", s.UID())
	if err2 != nil {
		resp.ErrCode = pb_common.ErrorCode_Default
		logger.Log.Errorf("找不到玩家,err:%s", err1.Error())
		//把玩家T下线
		return resp, err2
	}
	resp.ErrCode = pb_common.ErrorCode_OK
	return resp, nil
}

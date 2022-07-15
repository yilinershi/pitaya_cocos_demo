package connector

import (
	"context"
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/component"
	"github.com/topfreegames/pitaya/logger"
	"github.com/topfreegames/pitaya/session"
	"server/dao"
	"server/pb/pb_chat"
	"server/pb/pb_common"
	"server/pb/pb_lobby"
	"server/pb/pb_rpc"
	"server/pojo"
)

// Handler 结构体必须继承一下 Base 类
type Handler struct {
	component.Base
	onLineMap map[string]*session.Session //在线玩家表
}

//Init 这个函数会在启动时自己调用
func (this *Handler) Init() {
	logger.Log.Info("ServerHttpGate服务器启动成功")

	//该服务器用到哪些就加载哪些dao
	dao.RegisterDao(dao.NewGuidGenertorDao())
	dao.RegisterDao(dao.NewAccountDao())
	dao.RegisterDao(dao.NewPlayerDao())
	dao.StartupDaoes()
}

func (this *Handler) AfterInit() {
	logger.Log.Infoln("connector Handler after init")
}

func (this *Handler) Shutdown() {
	dao.ShutdownDaoes()
}

func NewHandler() *Handler {
	return &Handler{
		onLineMap: make(map[string]*session.Session, 0),
	}
}

//CallAuth 路由Connector.Handler.CallAuth对应的方法，首字母大写才能被调用
func (this *Handler) CallAuth(ctx context.Context, req *pb_lobby.ReqAuth) (*pb_lobby.RespAuth, error) {

	logger.Log.Info("[Connector] CallAuth req=", req)
	s := pitaya.GetSessionFromCtx(ctx)

	resp := new(pb_lobby.RespAuth)

	//step1:获取account信息
	r, _ := dao.AccountInfo.Get(&pojo.DbAccountInfo{
		Token: req.Token,
	})

	if r == nil {
		resp.ErrCode = pb_common.ErrorCode_AuthFailed
		logger.Log.Errorf("[callAuth],找不到用户登录数据,玩家未登录过！")
		//把玩家T下线
		s.Kick(ctx)
		return resp, nil
	}

	playerGuid := r.(*pojo.DbAccountInfo).PlayerGuid
	//step2:获取player信息
	p, err := dao.Player.Get(&pojo.DbPlayer{
		Guid: playerGuid,
	})
	dbPlayer := p.(*pojo.DbPlayer)
	if err != nil || p == nil {
		logger.Log.Errorf("获取db player信息失败,err:%s", err.Error())
		resp.ErrCode = pb_common.ErrorCode_Default
		return resp, nil
	}

	//step3:绑定session ,pitaya的bind函数参数2为字符串，这里int64转一下string
	s.Bind(ctx, playerGuid) // binding session uid
	logger.Log.Infoln("bind session s.uid=", s.UID())

	//step4:在线session列表
	this.onLineMap[playerGuid] = s

	//step5: 世界频道加入玩家
	rpcReq := &pb_rpc.ReqJoinChatGroup{
		Group: pb_chat.ChatGroup_World,
		Player: &pb_common.PlayerBaseInfo{
			Guid:     playerGuid,
			NickName: dbPlayer.NickName,
			Avatar:   dbPlayer.Avatar,
			Gender:   pb_common.Gender(dbPlayer.Gender),
		},
	}
	rpcResp := &pb_rpc.RespJoinChatGroup{}
	rpcErr := pitaya.RPC(ctx, "Chat.Remote.JoinWorldGroup", rpcResp, rpcReq)
	if rpcErr != nil {
		resp.ErrCode = pb_common.ErrorCode_Default
		return resp, nil
	}

	//step6:关闭时调用
	s.OnClose(func() {
		this.onLeave(ctx)
	})

	resp.ErrCode = pb_common.ErrorCode_OK
	resp.BaseInfo = &pb_common.PlayerBaseInfo{
		Guid:     dbPlayer.Guid,
		NickName: dbPlayer.NickName,
		Gender:   pb_common.Gender(dbPlayer.Gender),
		Avatar:   dbPlayer.Avatar,
	}

	logger.Log.Info("CallAuth resp=", resp)
	return resp, nil
}

func (this *Handler) onLeave(ctx context.Context) {
	s := pitaya.GetSessionFromCtx(ctx)
	//暂时只是打印一下人数
	delete(this.onLineMap, s.UID())
	onLineNum := len(this.onLineMap)
	logger.Log.Infoln("player Guid lost link, guid=%d,onLineNume=%d\n", s.UID(), onLineNum)

	//离开聊天group
	rpcReq := &pb_rpc.ReqLeaveChatGroup{
		Group:      pb_chat.ChatGroup_World,
		PlayerGuid: s.UID(),
	}
	rpcResp := &pb_rpc.RespLeaveChatGroup{}
	if err := pitaya.RPC(ctx, "Chat.Remote.LeaveWorldGroup", rpcResp, rpcReq); err != nil {
		logger.Log.Errorln("rpc chat leave group err", err)
	}

}

package http_gate

import (
	"fmt"
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/component"
	"github.com/topfreegames/pitaya/logger"
	"google.golang.org/protobuf/proto"
	"io/ioutil"
	"net/http"
	"server/constants"
	"server/dao"
	"server/pb/pb_common"
	"server/pb/pb_http"
	"server/pojo"
	"time"
)

type ServerHttpGate struct {
	component.Base
}

//Init 这个函数会在启动时自己调用
func (this *ServerHttpGate) Init() {
	logger.Log.Info("ServerHttpGate服务器启动成功")

	//该服务器用到哪些就加载哪些dao
	dao.RegisterDao(dao.NewGuidGenertorDao())
	dao.RegisterDao(dao.NewAccountDao())
	dao.RegisterDao(dao.NewPlayerDao())

	dao.StartupDaoes()
}

func (this *ServerHttpGate) AfterInit() {
	logger.Log.Infoln("ServerHttpGate after init")
	go this.start()
}

func (this *ServerHttpGate) Shutdown() {
	dao.ShutdownDaoes()
}

func NewServerHttpGate() *ServerHttpGate {
	return &ServerHttpGate{}
}

//自定义该http服务器的启动方法，监听等，大家自己改
func (this *ServerHttpGate) start() {
	port := fmt.Sprintf(":%d", pitaya.GetConfig().GetInt("net.http.port"))
	srv := &http.Server{Addr: port}
	http.HandleFunc("/entry", this.entry)
	http.HandleFunc("/register", this.register)
	http.HandleFunc("/login", this.login)
	go srv.ListenAndServe()
}

//entry 客户端与服务器连接的第一个方法，这个方法用来获取
func (this *ServerHttpGate) entry(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	buf, _ := ioutil.ReadAll(r.Body)
	req := new(pb_http.ReqEntry)
	if err := proto.Unmarshal(buf, req); err != nil {
		return
	}
	logger.Log.Info("[entry], req.Secret=%s\n", req.Secret)
	resp := new(pb_http.RespEntry)
	//todo 验证req.toekn，用于确保连上服务器的客户端是正确的客户端

	resp.ErrCode = pb_common.ErrorCode_OK
	resp.LoginUrl = fmt.Sprintf("http://%s:%d/login", pitaya.GetConfig().GetString("net.http.ip"), pitaya.GetConfig().GetInt("net.http.port"))
	resp.RegisterUrl = fmt.Sprintf("http://%s:%d/register", pitaya.GetConfig().GetString("net.http.ip"), pitaya.GetConfig().GetInt("net.http.port"))
	resp.TcpUrl = &pb_http.RespEntry_Addr{
		Host: pitaya.GetConfig().GetString("net.tcp.ip"),
		Port: int32(pitaya.GetConfig().GetInt("net.tcp.port")),
	}
	resp.WebSocketUrl = &pb_http.RespEntry_Addr{
		Host: pitaya.GetConfig().GetString("net.ws.ip"),
		Port: int32(pitaya.GetConfig().GetInt("net.ws.port")),
	}

	if pbByte, err := proto.Marshal(resp); err == nil {
		logger.Log.Info("[entry] result=%v\n", resp)
		w.Write(pbByte)
	}
}

func (this *ServerHttpGate) register(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型

	buf, _ := ioutil.ReadAll(r.Body)
	req := new(pb_http.ReqRegister)
	if err := proto.Unmarshal(buf, req); err != nil {
		return
	}
	logger.Log.Info("onRegister req=", req)
	resp := new(pb_http.RespRegister)

	//回复http的resp
	doResp := func() {
		logger.Log.Infof("[register] result=%v\n", resp)
		pbByte, err := proto.Marshal(resp)
		if err != nil {
			logger.Log.Errorf("onRegister resp to byte error, err=", err)
			return
		}
		w.Write(pbByte)
	}

	//step0:账号是否存在
	isExist := isAccountExisit(req.Account)
	if isExist {
		resp.ErrCode = pb_common.ErrorCode_RegisterAccountExit
		doResp()
		return
	}

	//step1:生成account的guid
	accountGuid, err1 := dao.GuidGenerator.GenGuid(constants.GuidTypeAccount)
	if err1 != nil {
		logger.Log.Errorf("guid generator account failed,error:%s", err1.Error())
		resp.ErrCode = pb_common.ErrorCode_Default
		doResp()
		return
	}

	//step2:生成player的guid
	playerGuid, err2 := dao.GuidGenerator.GenGuid(constants.GuidTypePlayer)
	if err2 != nil {
		logger.Log.Errorf("guid generator player failed,error:%s", err2.Error())
		resp.ErrCode = pb_common.ErrorCode_Default
		doResp()
		return
	}

	accountData := &pojo.DbAccountInfo{
		AccountId:  accountGuid,
		ChannelId:  req.ChannelId,
		Account:    req.Account,
		AppId:      req.AppId,
		Password:   req.Password,
		MacId:      req.MacId,
		RegisterAt: time.Now(),
		PlayerGuid: playerGuid, //account与player的对应关系
	}

	//step3:account 保存数据库
	err3 := dao.AccountInfo.Add(accountData)
	if err3 != nil {
		logger.Log.Errorf("CreateLocalAccount failed,error:%s", err3.Error())
		resp.ErrCode = pb_common.ErrorCode_Default
		doResp()
		return
	}

	//step4:账号注册成功，创建一个默认的player，保存到数据库
	player := &pojo.DbPlayer{
		Guid:     playerGuid,
		Gender:   int(pb_common.Gender_Unknow),
		Avatar:   "",
		NickName: req.Account,
	}
	err4 := dao.Player.Add(player)
	if err4 != nil {
		logger.Log.Errorf("Create DbPlayer failed,error:%s", err4.Error())
		resp.ErrCode = pb_common.ErrorCode_Default
		doResp()
		return
	}

	resp.ErrCode = pb_common.ErrorCode_OK
	doResp()
}

func (this *ServerHttpGate) login(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型

	buf, _ := ioutil.ReadAll(r.Body)
	req := new(pb_http.ReqLogin)
	if err := proto.Unmarshal(buf, req); err != nil {
		return
	}
	logger.Log.Infoln("onLogin req=", req)

	//回复客户端
	resp := new(pb_http.RespLogin)
	doResp := func() {
		logger.Log.Infof("[login] result=%v\n", resp)
		if pbByte, err := proto.Marshal(resp); err == nil {
			w.Write(pbByte)
		}
	}

	//case1:账号是否存在
	isExist := isAccountExisit(req.Account)
	if isExist == false {
		resp.ErrCode = pb_common.ErrorCode_LoginAccountUnExistent
		doResp()
		return
	}

	//case2:db中没有数据
	accountData, err := dao.AccountInfo.Get(&pojo.DbAccountInfo{
		Account: req.Account,
	})
	if err != nil || accountData == nil {
		logger.Log.Errorf("[managerAccount] IsAccountExisit failed,err:%s", err.Error())
		resp.ErrCode = pb_common.ErrorCode_LoginAccountUnExistent
		doResp()
		return
	}

	//case3: 对应的密码是否正确
	dbAccount := accountData.(*pojo.DbAccountInfo)
	if dbAccount.Password != req.Password {
		resp.ErrCode = pb_common.ErrorCode_LoginPasswordError
		doResp()
		return
	}

	//case4: 新的account_info保存到数据库中
	dbAccount.Token, _ = dao.GuidGenerator.GenGuid(constants.GuidTypeToken)
	dbAccount.LoginAt = time.Now()
	if err = dao.AccountInfo.Update(accountData, "accountId=?", dbAccount.AccountId); err != nil {
		resp.ErrCode = pb_common.ErrorCode_Default
		doResp()
		return
	}

	//case5: login success!
	resp.ErrCode = pb_common.ErrorCode_OK
	resp.Token = dbAccount.Token
	doResp()
}

//isAccountExisit 账户是否存在
func isAccountExisit(account string) bool {
	r, err := dao.AccountInfo.Get(&pojo.DbAccountInfo{
		Account: account,
	})
	if err != nil {
		logger.Log.Errorf("[managerAccount] IsAccountExisit failed,err:%s", err.Error())
		return false
	}

	if r == nil {
		return false
	}

	return true
}

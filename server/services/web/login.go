package web

import (
	"fmt"
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/component"
	"github.com/topfreegames/pitaya/logger"
	"google.golang.org/protobuf/proto"
	"io/ioutil"
	"net/http"
	"server/modules/account"
	"server/pb/pb_common"
	"server/pb/pb_http"
)

type Web struct {
	component.Base
}

func NewHandler() *Web {
	return &Web{}
}

//Init 这个函数会在启动时自己调用
func (this *Web) Init() {
	this.start()
}

func (this *Web) start() {
	port := fmt.Sprintf(":%d", pitaya.GetConfig().GetInt("net.http.port"))
	srv := &http.Server{Addr: port}
	http.HandleFunc("/entry", this.entry)
	http.HandleFunc("/register", this.register)
	http.HandleFunc("/login", this.login)
	srv.ListenAndServe()
}

func (this *Web) entry(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	buf, _ := ioutil.ReadAll(r.Body)
	req := new(pb_http.ReqEntry)
	if err := proto.Unmarshal(buf, req); err != nil {
		return
	}
	logger.Log.Info("[entry], req.Secret=%s\n", req.Secret)
	resp := new(pb_http.RespEntry)
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

func (this *Web) register(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	buf, _ := ioutil.ReadAll(r.Body)
	req := new(pb_http.ReqRegister)
	if err := proto.Unmarshal(buf, req); err != nil {
		return
	}
	logger.Log.Info("onRegister req=", req)
	if req.Account == "" || req.Password == "" {
		return
	}
	resp := new(pb_http.RespRegister)
	err := account.GetManager().OnRegister(req.Account, req.Password)
	if err != nil {
		resp.ErrCode = pb_common.ErrorCode_Default
		return
	}
	resp.ErrCode = pb_common.ErrorCode_OK
	logger.Log.Infof("[register] result=%v\n", resp)
	pbByte, err := proto.Marshal(resp)
	if err != nil {
		logger.Log.Errorf("onRegister resp to byte error, err=", err)
		return
	}
	w.Write(pbByte)
}

func (this *Web) login(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	buf, _ := ioutil.ReadAll(r.Body)
	req := new(pb_http.ReqLogin)
	if err := proto.Unmarshal(buf, req); err != nil {
		return
	}
	logger.Log.Infoln("onLogin req=", req)
	if req.Account == "" {
		return
	}
	resp := new(pb_http.RespLogin)
	//回复客户端
	doResp := func() {
		logger.Log.Infof("[login] result=%v\n", resp)
		if pbByte, err := proto.Marshal(resp); err == nil {
			w.Write(pbByte)
		}
	}

	if !account.GetManager().HasRegister(req.Account) {
		resp.ErrCode = pb_common.ErrorCode_LoginAccountUnExistent
		doResp()
		return
	}

	token, err := account.GetManager().DoLogin(req.Account, req.Password)
	if err == nil {
		resp.ErrCode = pb_common.ErrorCode_OK
		resp.Token = token
	}
	doResp()
}

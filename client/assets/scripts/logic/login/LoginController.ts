import proto from "../../../../proto_js/proto.js";
import { Http } from "../../net/http/Http";
import { Pitaya, } from "../../net/pitaya/Pitaya";
import { Session } from "./LoginModel";

const starx = (window as any).starx;

export class LoginController {


    private static url = "http://127.0.0.1:8088/entry"

    public static async Start() {
        console.log("LoginController Start!")
        await this.OnEntry()
    }

    public static async OnEntry() {
        let req: proto.http.IReqEntry = {
            Env: proto.http.ReqEntry.EnumEnv.Dev,  //测试的客户端
            GameVersion: "1.0.0",
            ResVersion: "1.0.0",
            Secret: "s88it786hihfbwsdfgxtxcv_ysdyxv",
        }
        let reqByte = proto.http.ReqEntry.encode(req).finish()
        let respByte = await Http.Post(this.url, reqByte)
        let resp = proto.http.RespEntry.decode(respByte)
        console.log("OnEntry resp=", resp)

        if (resp.ErrCode == proto.common.ErrorCode.OK) {
            Session.RegisterUrl = resp.RegisterUrl
            Session.LoginUrl = resp.LoginUrl
            Session.TcpUrl.Host = resp.TcpUrl?.Host as string
            Session.TcpUrl.Port = resp.TcpUrl?.Port as number
            Session.WsUrl.Host = resp.WebSocketUrl?.Host as string
            Session.WsUrl.Port = resp.WebSocketUrl?.Port as number
        }
    }

    /**
     * 注册
     * @param account 
     * @param password 
     * @returns 
     */
    public static async OnRegister(account: string, password: string) {
        let req: proto.http.IReqRegister = {
            Account: account,
            Password: password,
        }
        let reqByte = proto.http.ReqRegister.encode(req).finish()
        let respByte = await Http.Post(Session.RegisterUrl, reqByte)
        let resp = proto.http.RespEntry.decode(respByte)
        console.log("OnRegister resp=", resp)

    }

    /**
     * 登录
     * @param account 
     * @param password 
     * @returns 
     */
    public static async OnLogin(account: string, password: string) {
        let req: proto.http.IReqLogin = {
            Account: account,
            Password: password,
        }
        let reqByte = proto.http.ReqLogin.encode(req).finish()
        let respByte = await Http.Post(Session.LoginUrl, reqByte)
        let resp = proto.http.RespLogin.decode(respByte)
        console.log("OnLogin resp=", resp)
        Session.Account.token = resp.Token
    }


    public static async OnCallBind() {
        let req: proto.lobby.IReqBind = {
            Token: Session.Account.token
        }
        let reqByte = proto.lobby.ReqBind.encode(req).finish()
        let respByte = await Pitaya.Call("Lobby.Handler.CallBind", reqByte)
        let resp = proto.lobby.RespBind.decode(respByte)
        console.log("OnCallBind resp=", resp)
        if (resp.ErrCode != proto.common.ErrorCode.OK) {
            return
        }
    }


    public static async GetUserInfo() {
        let req: proto.lobby.IReqUserInfo = {}
        let reqByte = proto.lobby.ReqUserInfo.encode(req).finish()
        let respByte = await Pitaya.Call("Lobby.Handler.CallGetUserInfo", reqByte)
        let resp = proto.lobby.RespUserInfo.decode(respByte)
        console.log("GetUserInfo resp=", resp)
    }

    //测试notify/push消息 -> chat
    private static TestChat() {

        Pitaya.Push("Chat.Handler.PushChat", (data: any) => {
            let pushData = proto.chat.SyncChatInfo.decode(data)
            console.log("Chat.Handler.PushChat, pushData=", pushData)
        })

        let notifyData = proto.chat.InputChatInfo.encode({
            Channel: proto.chat.ChatGroup.World,
            Content: "hello world"
        }).finish()
        Pitaya.Notify("Chat.Handler.NotifyChat", notifyData)
    }

}
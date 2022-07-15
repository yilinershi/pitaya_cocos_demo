System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, Http, Pitaya, Session, LoginController, _crd, starx;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../../proto_js/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttp(extras) {
    _reporterNs.report("Http", "../../net/http/Http", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPitaya(extras) {
    _reporterNs.report("Pitaya", "../../net/pitaya/Pitaya", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "./LoginModel", _context.meta, extras);
  }

  _export("LoginController", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      Http = _unresolved_3.Http;
    }, function (_unresolved_4) {
      Pitaya = _unresolved_4.Pitaya;
    }, function (_unresolved_5) {
      Session = _unresolved_5.Session;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8d69e79ZxOgKe3RFRmk5Lk", "LoginController", undefined);

      starx = window.starx;

      _export("LoginController", LoginController = class LoginController {
        static async Start() {
          console.log("LoginController Start!");
          await this.OnEntry();
        }

        static async OnEntry() {
          let req = {
            Env: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).http.ReqEntry.EnumEnv.Dev,
            //测试的客户端
            GameVersion: "1.0.0",
            ResVersion: "1.0.0",
            Secret: "s88it786hihfbwsdfgxtxcv_ysdyxv"
          };
          let reqByte = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).http.ReqEntry.encode(req).finish();
          let respByte = await (_crd && Http === void 0 ? (_reportPossibleCrUseOfHttp({
            error: Error()
          }), Http) : Http).Post(this.url, reqByte);
          let resp = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).http.RespEntry.decode(respByte);
          console.log("OnEntry resp=", resp);

          if (resp.ErrCode == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).common.ErrorCode.OK) {
            var _resp$TcpUrl, _resp$TcpUrl2, _resp$WebSocketUrl, _resp$WebSocketUrl2;

            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).RegisterUrl = resp.RegisterUrl;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).LoginUrl = resp.LoginUrl;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).TcpUrl.Host = (_resp$TcpUrl = resp.TcpUrl) == null ? void 0 : _resp$TcpUrl.Host;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).TcpUrl.Port = (_resp$TcpUrl2 = resp.TcpUrl) == null ? void 0 : _resp$TcpUrl2.Port;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).WsUrl.Host = (_resp$WebSocketUrl = resp.WebSocketUrl) == null ? void 0 : _resp$WebSocketUrl.Host;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).WsUrl.Port = (_resp$WebSocketUrl2 = resp.WebSocketUrl) == null ? void 0 : _resp$WebSocketUrl2.Port;
          }
        }
        /**
         * 注册
         * @param account 
         * @param password 
         * @returns 
         */


        static async OnRegister(account, password) {
          let req = {
            Account: account,
            Password: password
          };
          let reqByte = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).http.ReqRegister.encode(req).finish();
          let respByte = await (_crd && Http === void 0 ? (_reportPossibleCrUseOfHttp({
            error: Error()
          }), Http) : Http).Post((_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).RegisterUrl, reqByte);
          let resp = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).http.RespEntry.decode(respByte);
          console.log("OnRegister resp=", resp);
        }
        /**
         * 登录
         * @param account 
         * @param password 
         * @returns 
         */


        static async OnLogin(account, password) {
          let req = {
            Account: account,
            Password: password
          };
          let reqByte = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).http.ReqLogin.encode(req).finish();
          let respByte = await (_crd && Http === void 0 ? (_reportPossibleCrUseOfHttp({
            error: Error()
          }), Http) : Http).Post((_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).LoginUrl, reqByte);
          let resp = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).http.RespLogin.decode(respByte);
          console.log("OnLogin resp=", resp);
          (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).Account.token = resp.Token;
        }

        static async OnConnectorAuth() {
          await (_crd && Pitaya === void 0 ? (_reportPossibleCrUseOfPitaya({
            error: Error()
          }), Pitaya) : Pitaya).Init((_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).WsUrl.Host, (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
            error: Error()
          }), Session) : Session).WsUrl.Port);
          let reqByte = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).lobby.ReqAuth.encode({
            Token: (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Account.token
          }).finish();
          let respByte = await (_crd && Pitaya === void 0 ? (_reportPossibleCrUseOfPitaya({
            error: Error()
          }), Pitaya) : Pitaya).Call("Connector.Handler.CallAuth", reqByte);

          if (reqByte) {
            var _resp$BaseInfo, _resp$BaseInfo2, _resp$BaseInfo3, _resp$BaseInfo4;

            let resp = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).lobby.RespAuth.decode(respByte);

            if (resp.ErrCode != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).common.ErrorCode.OK) {
              return;
            }

            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).PlayerData.NickName = (_resp$BaseInfo = resp.BaseInfo) == null ? void 0 : _resp$BaseInfo.NickName;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).PlayerData.Gender = (_resp$BaseInfo2 = resp.BaseInfo) == null ? void 0 : _resp$BaseInfo2.Gender;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).PlayerData.Avatar = (_resp$BaseInfo3 = resp.BaseInfo) == null ? void 0 : _resp$BaseInfo3.Avatar;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).PlayerData.Guid = (_resp$BaseInfo4 = resp.BaseInfo) == null ? void 0 : _resp$BaseInfo4.Guid;
            console.log("session.playerData =", (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).PlayerData);
          }

          this.TestChat();
        } //测试notify/push消息 -> chat


        static TestChat() {
          (_crd && Pitaya === void 0 ? (_reportPossibleCrUseOfPitaya({
            error: Error()
          }), Pitaya) : Pitaya).Push("Chat.Handler.PushChat", data => {
            let pushData = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).chat.SyncChatInfo.decode(data);
            console.log("Chat.Handler.PushChat, pushData=", pushData);
          });
          let notifyData = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).chat.InputChatInfo.encode({
            Channel: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).chat.ChatGroup.World,
            Content: "hello world"
          }).finish();
          (_crd && Pitaya === void 0 ? (_reportPossibleCrUseOfPitaya({
            error: Error()
          }), Pitaya) : Pitaya).Notify("Chat.Handler.NotifyChat", notifyData);
        }

      });

      LoginController.url = "http://127.0.0.1:8088/entry";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=922d5ab0eb4afdd32bbf6fb72271b4205a47c41d.js.map
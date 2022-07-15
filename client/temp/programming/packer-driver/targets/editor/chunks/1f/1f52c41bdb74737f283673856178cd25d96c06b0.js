System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, Http, Session, LoginController, _crd;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../../proto_js/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttp(extras) {
    _reporterNs.report("Http", "../../net/http/Http", _context.meta, extras);
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
      Session = _unresolved_4.Session;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8d69e79ZxOgKe3RFRmk5Lk", "LoginController", undefined);

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
          }), Http) : Http).Post("http://127.0.0.1:8088/entry", reqByte);
          let resp = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).http.RespEntry.decode(respByte);
          console.log("OnEntry resp=", resp);

          if (resp.ErrCode == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).common.ErrorCode.OK) {
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).RegisterUrl = resp.RegisterUrl;
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).LoginUrl = resp.LoginUrl;
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
          }), Session) : Session).LoginUrl, reqByte);
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


        static async OnLogin(account, password) {// let req: ProtocolGate.Login.Request = new ProtocolGate.Login.Request();
          // req.account = account
          // req.password = password
          // let resp = await PinusUtil.call<ProtocolGate.Login.Request, ProtocolGate.Login.Response>(ProtocolGate.Login.Router, req)
          // if (resp.errCode != ErrorCode.SUCCEED) {
          //     console.log(ErrorCode2Str(resp.errCode))
          //     return
          // }
          // Session.account.uid = resp.uid
          // Session.account.token = resp.token
          // Session.host = resp.host
          // Session.port = resp.port
        }
        /**
         * 断开gate服务器，转而连接connector服务器，连接需要检测登录的授权码
         * @param account 
         * @param password 
         * @returns 
         */


        static async OnConnectorAuth() {// //先与gate服务器断开连接
          // PinusUtil.disconnect()
          // //再与connector服务器连接
          // await PinusUtil.init(Session.host, Session.port)
          // //创建req
          // let req: ProtocolConnector.Auth.Request = new ProtocolConnector.Auth.Request()
          // req.token = Session.account.token
          // req.uid = Session.account.uid
          // //进行登录验证
          // let resp = await PinusUtil.call<ProtocolConnector.Auth.Request, ProtocolConnector.Auth.Response>(ProtocolConnector.Auth.Router, req)
          // if (resp.errCode != ErrorCode.SUCCEED) {
          //     console.log(ErrorCode2Str(resp.errCode))
          //     return
          // }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1f52c41bdb74737f283673856178cd25d96c06b0.js.map
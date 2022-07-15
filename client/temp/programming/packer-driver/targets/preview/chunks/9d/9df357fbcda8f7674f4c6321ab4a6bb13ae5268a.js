System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, Http, Session, LoginController, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        static Start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            console.log("LoginController Start!");
            yield _this.OnEntry();
          })();
        }

        static OnEntry() {
          return _asyncToGenerator(function* () {
            var req = {
              Env: (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).http.ReqEntry.EnumEnv.Dev,
              //测试的客户端
              GameVersion: "1.0.0",
              ResVersion: "1.0.0",
              Secret: "s88it786hihfbwsdfgxtxcv_ysdyxv"
            };
            var reqByte = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).http.ReqEntry.encode(req).finish();
            var respByte = yield (_crd && Http === void 0 ? (_reportPossibleCrUseOfHttp({
              error: Error()
            }), Http) : Http).Post("http://127.0.0.1:8088/entry", reqByte);
            var resp = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
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
          })();
        }
        /**
         * 注册
         * @param account 
         * @param password 
         * @returns 
         */


        static OnRegister(account, password) {
          return _asyncToGenerator(function* () {
            var req = {
              Account: account,
              Password: password
            };
            var reqByte = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).http.ReqRegister.encode(req).finish();
            var respByte = yield (_crd && Http === void 0 ? (_reportPossibleCrUseOfHttp({
              error: Error()
            }), Http) : Http).Post((_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).LoginUrl, reqByte);
            var resp = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).http.RespEntry.decode(respByte);
            console.log("OnRegister resp=", resp);
          })();
        }
        /**
         * 登录
         * @param account 
         * @param password 
         * @returns 
         */


        static OnLogin(account, password) {// let req: ProtocolGate.Login.Request = new ProtocolGate.Login.Request();
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

          return _asyncToGenerator(function* () {})();
        }
        /**
         * 断开gate服务器，转而连接connector服务器，连接需要检测登录的授权码
         * @param account 
         * @param password 
         * @returns 
         */


        static OnConnectorAuth() {// //先与gate服务器断开连接
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

          return _asyncToGenerator(function* () {})();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9df357fbcda8f7674f4c6321ab4a6bb13ae5268a.js.map
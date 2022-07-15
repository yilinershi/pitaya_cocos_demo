System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, Http, Pitaya, Session, LoginController, _crd, starx;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        static Start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            console.log("LoginController Start!");
            yield _this.OnEntry();
          })();
        }

        static OnEntry() {
          var _this2 = this;

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
            }), Http) : Http).Post(_this2.url, reqByte);
            var resp = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
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
            }), Session) : Session).RegisterUrl, reqByte);
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


        static OnLogin(account, password) {
          return _asyncToGenerator(function* () {
            var req = {
              Account: account,
              Password: password
            };
            var reqByte = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).http.ReqLogin.encode(req).finish();
            var respByte = yield (_crd && Http === void 0 ? (_reportPossibleCrUseOfHttp({
              error: Error()
            }), Http) : Http).Post((_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).LoginUrl, reqByte);
            var resp = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).http.RespLogin.decode(respByte);
            console.log("OnLogin resp=", resp);
            (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Account.token = resp.Token;
          })();
        }

        static OnConnectorAuth() {
          return _asyncToGenerator(function* () {
            yield (_crd && Pitaya === void 0 ? (_reportPossibleCrUseOfPitaya({
              error: Error()
            }), Pitaya) : Pitaya).Init((_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).WsUrl.Host, (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).WsUrl.Port);
            var reqByte = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).lobby.ReqAuth.encode({
              Token: (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Account.token
            }).finish();
            var respByte = yield (_crd && Pitaya === void 0 ? (_reportPossibleCrUseOfPitaya({
              error: Error()
            }), Pitaya) : Pitaya).Call("Connector.Handler.CallAuth", reqByte);

            if (reqByte) {
              var _resp$BaseInfo, _resp$BaseInfo2, _resp$BaseInfo3, _resp$BaseInfo4;

              var resp = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
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
          })();
        }

      });

      LoginController.url = "http://127.0.0.1:8088/entry";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db6ceec87a621e5bbd31b3bd35f060751301ab0b.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, LoginModel, AccountData, UserData, _crd, Session;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../../proto_js/proto.js", _context.meta, extras);
  }

  _export({
    LoginModel: void 0,
    AccountData: void 0,
    UserData: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57383GYOlBGO7738nHn4AVt", "LoginModel", undefined);

      _export("LoginModel", LoginModel = class LoginModel {
        constructor() {
          this.Account = new AccountData();
          this.UserInfo = new UserData();
          this.LoginUrl = '';
          this.RegisterUrl = '';
          this.WsUrl = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).http.RespEntry.Addr();
          this.TcpUrl = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).http.RespEntry.Addr();
        }

      });

      _export("AccountData", AccountData = class AccountData {
        constructor() {
          this.account = '';
          this.password = '';
          this.uid = 0;
          this.token = '';
        }

      });

      _export("UserData", UserData = class UserData {
        constructor() {
          this.uid = 0;
          this.gold = 0;
          this.avator = '';
          this.nickName = '';
          this.gender = 0;
        }

      }); //给LoignModel起个别名，session表示连接


      _export("Session", Session = new LoginModel());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1c9ff32c63e77294c07ce28541878dc75738849a.js.map
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, LoginModel, AccountData, PlayerData, _crd, Session;

  _export({
    LoginModel: void 0,
    AccountData: void 0,
    PlayerData: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57383GYOlBGO7738nHn4AVt", "LoginModel", undefined);

      _export("LoginModel", LoginModel = class LoginModel {
        constructor() {
          this.Account = new AccountData();
          this.PlayerData = new PlayerData();
          this.LoginUrl = '';
          this.RegisterUrl = '';
          this.WsUrl = {
            Host: "",
            Port: 0
          };
          this.TcpUrl = {
            Host: "",
            Port: 0
          };
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

      _export("PlayerData", PlayerData = class PlayerData {
        constructor() {
          this.Guid = '';
          this.Avatar = '';
          this.NickName = '';
          this.Gender = 0;
        }

      }); //给LoignModel起个别名，session表示连接


      _export("Session", Session = new LoginModel());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8771cf608041f089b35c6f18fe4bd1a0ec9a3007.js.map
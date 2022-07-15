System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, LoginModel, AccountData, UserData, _crd, Session;

  _export({
    LoginModel: void 0,
    AccountData: void 0,
    UserData: void 0
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
          this.UserInfo = new UserData();
          this.LoginUrl = '';
          this.RegisterUrl = '';
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
//# sourceMappingURL=bd345924389ceb2b467539f113869f170e6b6ec3.js.map
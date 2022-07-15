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
          this.account = void 0;
          this.userInfo = void 0;
          this.host = void 0;
          this.port = void 0;
          this.account = new AccountData();
          this.userInfo = new UserData();
        }

      });

      _export("AccountData", AccountData = class AccountData {
        constructor() {
          this.account = void 0;
          this.password = void 0;
          this.uid = void 0;
          this.token = void 0;
        }

      });

      _export("UserData", UserData = class UserData {
        constructor() {
          this.uid = void 0;
          this.gold = void 0;
          this.avator = void 0;
          this.nickName = void 0;
          this.gender = void 0;
        }

      }); //给LoignModel起个别名，session表示连接


      _export("Session", Session = new LoginModel());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a8e6cca7c0fe2ab09fb607c611a34f0655a15b30.js.map
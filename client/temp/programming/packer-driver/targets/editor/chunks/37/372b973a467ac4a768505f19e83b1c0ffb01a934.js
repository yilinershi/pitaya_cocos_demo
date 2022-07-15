System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, director, EditBox, find, _decorator, LoginController, _dec, _class, _crd, ccclass, property, LoginView;

  function _reportPossibleCrUseOfLoginController(extras) {
    _reporterNs.report("LoginController", "./LoginController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      Component = _cc.Component;
      director = _cc.director;
      EditBox = _cc.EditBox;
      find = _cc.find;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      LoginController = _unresolved_2.LoginController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "485b2sC+f5DRKn/QBvMMJil", "LoginView", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 客户端从login开始，整个客户端没用什么框架，写得比较简单
       */

      _export("LoginView", LoginView = (_dec = ccclass("LoginView"), _dec(_class = class LoginView extends Component {
        constructor(...args) {
          super(...args);
          this._editBoxAccount = new EditBox();
          this._editBoxPassword = new EditBox();
          this._buttonRegister = new Button();
          this._buttonLogin = new Button();
        }

        onLoad() {
          var _find, _find2, _find3, _find4;

          this._editBoxAccount = (_find = find("EditBox_Account", this.node)) == null ? void 0 : _find.getComponent(EditBox);
          this._editBoxPassword = (_find2 = find("EditBox_Password", this.node)) == null ? void 0 : _find2.getComponent(EditBox);
          this._buttonRegister = (_find3 = find("Button_Register", this.node)) == null ? void 0 : _find3.getComponent(Button);
          this._buttonLogin = (_find4 = find("Button_Login", this.node)) == null ? void 0 : _find4.getComponent(Button);
        }

        async start() {
          this.refreshAccountAndPassword();
          await (_crd && LoginController === void 0 ? (_reportPossibleCrUseOfLoginController({
            error: Error()
          }), LoginController) : LoginController).Start();
        }

        onEnable() {
          var _this$_buttonLogin, _this$_buttonRegister;

          (_this$_buttonLogin = this._buttonLogin) == null ? void 0 : _this$_buttonLogin.node.on('click', () => {
            this.buttonLoginClick();
          });
          (_this$_buttonRegister = this._buttonRegister) == null ? void 0 : _this$_buttonRegister.node.on('click', () => this.buttonRegisterClick());
        }

        onDisable() {
          var _this$_buttonLogin2, _this$_buttonRegister2;

          (_this$_buttonLogin2 = this._buttonLogin) == null ? void 0 : _this$_buttonLogin2.node.off('click', () => {
            this.buttonLoginClick();
          });
          (_this$_buttonRegister2 = this._buttonRegister) == null ? void 0 : _this$_buttonRegister2.node.off('click', () => this.buttonRegisterClick());
        }

        refreshAccountAndPassword() {
          this._editBoxAccount.string = "";
          this._editBoxPassword.string = "";

          if (localStorage.getItem("account") != null) {
            this._editBoxAccount.string = localStorage.getItem("account");
          }

          if (localStorage.getItem("password") != null) {
            this._editBoxPassword.string = localStorage.getItem("password");
          }
        }

        async buttonLoginClick() {
          localStorage.setItem("account", this._editBoxAccount.string);
          localStorage.setItem("password", this._editBoxPassword.string);
          await (_crd && LoginController === void 0 ? (_reportPossibleCrUseOfLoginController({
            error: Error()
          }), LoginController) : LoginController).OnLogin(this._editBoxAccount.string, this._editBoxPassword.string);
          await (_crd && LoginController === void 0 ? (_reportPossibleCrUseOfLoginController({
            error: Error()
          }), LoginController) : LoginController).OnConnectorAuth();
          director.loadScene("lobby", (err, scene) => {
            if (err != null) {
              return;
            }
          });
        }

        async buttonRegisterClick() {
          localStorage.setItem("account", this._editBoxAccount.string);
          localStorage.setItem("password", this._editBoxPassword.string);
          await (_crd && LoginController === void 0 ? (_reportPossibleCrUseOfLoginController({
            error: Error()
          }), LoginController) : LoginController).OnRegister(this._editBoxAccount.string, this._editBoxPassword.string);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=372b973a467ac4a768505f19e83b1c0ffb01a934.js.map
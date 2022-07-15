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
          this._editBoxAccount = void 0;
          this._editBoxPassword = void 0;
          this._buttonRegister = void 0;
          this._buttonLogin = void 0;
        }

        onLoad() {
          this._editBoxAccount = find("EditBox_Account", this.node).getComponent(EditBox);
          this._editBoxPassword = find("EditBox_Password", this.node).getComponent(EditBox);
          this._buttonRegister = find("Button_Register", this.node).getComponent(Button);
          this._buttonLogin = find("Button_Login", this.node).getComponent(Button);
        }

        async start() {
          this.refreshAccountAndPassword();
          await (_crd && LoginController === void 0 ? (_reportPossibleCrUseOfLoginController({
            error: Error()
          }), LoginController) : LoginController).Start(); // await PinusUtil.init('127.0.0.1', 3250)
          // await PinusUtil.call("server_lobby.Lobby.ReqAuth", {})
        }

        onEnable() {
          this._buttonLogin.node.on('click', () => {
            this.buttonLoginClick();
          });

          this._buttonRegister.node.on('click', () => this.buttonRegisterClick());
        }

        onDisable() {
          this._buttonLogin.node.off('click', () => {
            this.buttonLoginClick();
          });

          this._buttonRegister.node.off('click', () => this.buttonRegisterClick());
        }

        refreshAccountAndPassword() {
          this._editBoxAccount.string = "";
          this._editBoxPassword.string = "";

          if (localStorage.getItem("account") != undefined) {
            this._editBoxAccount.string = localStorage.getItem("account");
          }

          if (localStorage.getItem("password") != undefined) {
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
//# sourceMappingURL=93b4589bc6ea19236e132816f62093b6d5cc4719.js.map
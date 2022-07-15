System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, director, EditBox, find, _decorator, PitayaWs, LoginController, _dec, _class, _crd, ccclass, property, LoginView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPitayaWs(extras) {
    _reporterNs.report("PitayaWs", "../../net/pitaya/Pitaya", _context.meta, extras);
  }

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
      PitayaWs = _unresolved_2.PitayaWs;
    }, function (_unresolved_3) {
      LoginController = _unresolved_3.LoginController;
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
        constructor() {
          super(...arguments);
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

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.refreshAccountAndPassword();

            yield (_crd && LoginController === void 0 ? (_reportPossibleCrUseOfLoginController({
              error: Error()
            }), LoginController) : LoginController).Start();
          })();
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

        buttonLoginClick() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            console.log("buttonLoginClick");
            localStorage.setItem("account", _this2._editBoxAccount.string);
            localStorage.setItem("password", _this2._editBoxPassword.string);
            yield (_crd && LoginController === void 0 ? (_reportPossibleCrUseOfLoginController({
              error: Error()
            }), LoginController) : LoginController).OnLogin(_this2._editBoxAccount.string, _this2._editBoxPassword.string);
            yield (_crd && LoginController === void 0 ? (_reportPossibleCrUseOfLoginController({
              error: Error()
            }), LoginController) : LoginController).OnConnectorAuth();
            director.loadScene("lobby", (err, scene) => {
              if (err != null) {
                return;
              }
            });
          })();
        }

        buttonRegisterClick() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            // localStorage.setItem("account", this._editBoxAccount.string)
            // localStorage.setItem("password", this._editBoxPassword.string)
            // await LoginController.OnRegister(this._editBoxAccount.string, this._editBoxPassword.string)
            console.log("buttonRegisterClick");
            localStorage.setItem("account", _this3._editBoxAccount.string);
            localStorage.setItem("password", _this3._editBoxPassword.string);
            yield (_crd && LoginController === void 0 ? (_reportPossibleCrUseOfLoginController({
              error: Error()
            }), LoginController) : LoginController).OnLogin(_this3._editBoxAccount.string, _this3._editBoxPassword.string);
            (_crd && PitayaWs === void 0 ? (_reportPossibleCrUseOfPitayaWs({
              error: Error()
            }), PitayaWs) : PitayaWs).StartXCallAuth();
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6bf7d42ec1573766ffd27fdcf42979b8c1dbb447.js.map
import { Button, Component, director, EditBox, find, Label, _decorator } from "cc";
import { Pitaya } from "../../net/pitaya/Pitaya";
import { LoginController } from "./LoginController";

const { ccclass, property } = _decorator;


/**
 * 客户端从login开始，整个客户端没用什么框架，写得比较简单
 */
@ccclass("LoginView")
export class LoginView extends Component {

    private _editBoxAccount: EditBox = new EditBox();
    private _editBoxPassword: EditBox = new EditBox();
    private _buttonRegister: Button = new Button();
    private _buttonLogin: Button = new Button();

    public onLoad() {
        this._editBoxAccount = find("EditBox_Account", this.node)?.getComponent(EditBox) as EditBox;
        this._editBoxPassword = find("EditBox_Password", this.node)?.getComponent(EditBox) as EditBox;
        this._buttonRegister = find("Button_Register", this.node)?.getComponent(Button) as Button;
        this._buttonLogin = find("Button_Login", this.node)?.getComponent(Button) as Button;
    }

    public async start() {
        this.refreshAccountAndPassword()
        await LoginController.Start()
    }

    public onEnable() {
        this._buttonLogin?.node.on('click', () => { this.buttonLoginClick() })
        this._buttonRegister?.node.on('click', () => this.buttonRegisterClick())
    }

    public onDisable() {
        this._buttonLogin?.node.off('click', () => { this.buttonLoginClick() })
        this._buttonRegister?.node.off('click', () => this.buttonRegisterClick())
    }

    private refreshAccountAndPassword() {
        this._editBoxAccount.string = ""
        this._editBoxPassword.string = ""
        if (localStorage.getItem("account") != null) {
            this._editBoxAccount.string = localStorage.getItem("account") as string;
        }
        if (localStorage.getItem("password") != null) {
            this._editBoxPassword.string = localStorage.getItem("password") as string;
        }
    }

    private async buttonLoginClick() {
        localStorage.setItem("account", this._editBoxAccount.string)
        localStorage.setItem("password", this._editBoxPassword.string)
        await LoginController.OnLogin(this._editBoxAccount.string, this._editBoxPassword.string)
        await LoginController.OnConnectorAuth()
        director.loadScene("lobby", (err, scene) => {
            if (err != null) {
                return
            }
        })
    }

    private async buttonRegisterClick() {
        localStorage.setItem("account", this._editBoxAccount.string)
        localStorage.setItem("password", this._editBoxPassword.string)
        await LoginController.OnRegister(this._editBoxAccount.string, this._editBoxPassword.string)

    }

}
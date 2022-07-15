

export class LoginModel {
    public Account: AccountData = new AccountData()
    public PlayerData: PlayerData = new PlayerData()
    public LoginUrl: string = ''
    public RegisterUrl: string = ''
    public WsUrl: { Host: string, Port: number } = { Host: "", Port: 0 }
    public TcpUrl: { Host: string, Port: number } = { Host: "", Port: 0 }
}

export class AccountData {
    public account: string = ''
    public password: string = ''
    public uid: number = 0
    public token: string = ''
}

export class PlayerData {
    public Guid: string = ''
    public Avatar: string = ''
    public NickName: string = ''
    public Gender: number = 0
}


//给LoignModel起个别名，session表示连接
export let Session = new LoginModel()
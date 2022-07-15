import { Pomelo } from "./Pomelo";

export class Pitaya {
    //websocket
    private static ws: WebSocket;
    //回调map
    private static callbacks = new Map<number, Function>();
    //路由map
    private static routeMap = new Map<string, Function>();
    //请求的id,每次请求自增1
    private static reqId: number = 0
    //整个pitaya连接成功后的回调
    private static onConnectSuccess: Function | null = null;

    //step1:包装成await/async
    public static async Init(host: string, port: number) {
        return new Promise((resolve, reject) => {
            this.onConnectSuccess = () => {
                resolve(true)
            }
            let url = `ws://${host}:${port}`
            this.connector(url)
        })
    }

    //step2:初始化
    private static connector(url: string) {
        this.ws = new WebSocket(url);
        this.ws.binaryType = 'arraybuffer';
        this.ws.onclose = (ev: any) => { console.log("websocket close", ev) };
        this.ws.onerror = (ev: any) => { console.log("websocket err", ev) };
        this.ws.onmessage = (ev: any) => { this.onMessage(ev) };
        this.ws.onopen = (ev: any) => {
            this.sendHandShake()
        };
    }

    //step3:发送handshake
    private static async sendHandShake() {
        let handshakeBuffer = {
            'sys': {
                type: "pitaya_cocos",
                version: "1.0.0",
                rsa: {}
            },
            'user': {}
        };
        let msg = Pomelo.Protocol.StrEncode(JSON.stringify(handshakeBuffer))
        let pkg = Pomelo.Package.Encode(Pomelo.Package.TYPE_HANDSHAKE, msg);
        this.ws.send(pkg.buffer);
    }


    //step4:收到消息,分发
    private static onMessage(ev: any) {
        let msgs = Pomelo.Package.Decode(ev.data);
        if (Array.isArray(msgs)) {
            for (let i = 0; i < msgs.length; i++) {
                let msg = msgs[i];
                this.dispatch(msg)
            }
        } else {
            this.dispatch(msgs)
        }
    }

    /**
     * step5, 解析消息分发器
     * @param msg 收到的服务器消息
     * @returns 
     */
    private static dispatch(msg: { type: number, body?: Uint8Array }) {
        switch (msg.type) {
            case Pomelo.Package.TYPE_HANDSHAKE:
                {
                    let data = JSON.parse(Pomelo.Protocol.StrDecode(msg.body as Uint8Array));
                    console.log(" handshake msg.code", data.code)
                    if (data.code === 501) {
                        return;
                    }
                    if (data.code !== 200) {
                        return;
                    }

                    //step6: handshake回应，不然服务器会断开
                    let obj = Pomelo.Package.Encode(Pomelo.Package.TYPE_HANDSHAKE_ACK);
                    this.ws.send(obj.buffer);

                    //step7: 连接成功回调，加到step1的Promise
                    if (this.onConnectSuccess) {
                        this.onConnectSuccess()
                    }
                }
                break
            case Pomelo.Package.TYPE_HEARTBEAT:
                this.heartbeat(msg.body)
                break
            case Pomelo.Package.TYPE_DATA:
                this.onData(msg.body as ArrayBuffer)
                break
            case Pomelo.Package.TYPE_KICK:
                this.onKick(msg.body)
                break
        }
    }


    private static heartbeat(data?: ArrayBuffer) {


    }

    private static onKick(data?: ArrayBuffer) {


    }

    private static onData(data: ArrayBuffer) {
        let msg = Pomelo.Message.Decode(data);
        switch (msg.type) {
            case Pomelo.Message.TYPE_RESPONSE:
                {
                    var cb = this.callbacks.get(msg.id);
                    this.callbacks.delete(msg.id);
                    if (cb) {
                        cb(msg.body);
                    }
                }
                break;
            case Pomelo.Message.TYPE_PUSH:
                {
                    var cb = this.routeMap.get(msg.route as string);
                    if (cb) {
                        cb(msg.body);
                    }
                }
                break;
        }
    }

    /**
     * Call方法，即req-resp模式
     * @param route 路由
     * @param msg 
     * @returns 
     */
    public static async Call(route: string, data: any) {
        if (!route) {
            return;
        }
        return new Promise((resolve, reject) => {
            this.reqId++;
            let type = Pomelo.Message.TYPE_REQUEST;
            let msg = Pomelo.Message.Encode(this.reqId, type, 0, route, data);
            let packet = Pomelo.Package.Encode(Pomelo.Package.TYPE_DATA, msg);
            this.ws.send(packet.buffer);
            this.callbacks.set(this.reqId, (data: any) => {
                resolve(data);
            });

        })
    };

    /**
     * Notify方法，即notify服务器，不需要收到回复消息
     * @param route 路由
     * @param data 发送服务器的数据
     * @returns 
     */
    public static Notify(route: string, data: any) {
        let type = Pomelo.Message.TYPE_NOTIFY;
        let msg = Pomelo.Message.Encode(this.reqId, type, 0, route, data);
        let packet = Pomelo.Package.Encode(Pomelo.Package.TYPE_DATA, msg);
        this.ws.send(packet.buffer);
    }

    /**
    * Push方法，监听来自服务器的Push消息
    * @param route 路由
    * @param func 监听消息
    * @returns 
    */
    public static Push(route: string, func: Function) {
        if (this.routeMap.has(route)) {
            return;
        }
        this.routeMap.set(route, func);
    }
}


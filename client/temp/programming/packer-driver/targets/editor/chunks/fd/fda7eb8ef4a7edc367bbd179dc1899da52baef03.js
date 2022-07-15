System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, Pomelo, PitayaWs, _crd, protocol;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../../proto_js/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPomelo(extras) {
    _reporterNs.report("Pomelo", "./Pomelo", _context.meta, extras);
  }

  _export("PitayaWs", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      proto = _unresolved_2.default;
    }, function (_unresolved_3) {
      Pomelo = _unresolved_3.Pomelo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "966feQbgDJKVJnSFR2vhENj", "Pitaya", undefined);

      protocol = window.Protocol;

      _export("PitayaWs", PitayaWs = class PitayaWs {
        static async Init(host, port) {
          let handshakeBuffer = {
            'sys': {
              type: "pitaya_cocos",
              version: "1.0.0",
              rsa: {}
            },
            'user': {}
          };
          return new Promise((reslove, reject) => {
            this._ws = new WebSocket('ws://' + host + ":" + port);
            this._reqId = 0;
            this._ws.binaryType = 'arraybuffer';

            this._ws.onclose = ev => {
              console.log("websocket close", ev);
              reject(ev);
            };

            this._ws.onerror = ev => {
              console.log("websocket err", ev);
              reject(ev);
            };

            this._ws.onmessage = ev => {
              console.log("websocket onmessage", ev);

              let dispatch = msg => {
                switch (msg.type) {
                  case (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                    error: Error()
                  }), Pomelo) : Pomelo).Package.TYPE_HANDSHAKE:
                    this.handshake(msg.body);
                    break;

                  case (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                    error: Error()
                  }), Pomelo) : Pomelo).Package.TYPE_HEARTBEAT:
                    this.heartbeat(msg.body);
                    break;

                  case (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                    error: Error()
                  }), Pomelo) : Pomelo).Package.TYPE_DATA:
                    this.onData(msg.body);
                    break;

                  case (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                    error: Error()
                  }), Pomelo) : Pomelo).Package.TYPE_KICK:
                    this.onKick(msg.body);
                    break;
                }
              };

              let msgs = (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                error: Error()
              }), Pomelo) : Pomelo).Package.decode(ev);

              if (Array.isArray(msgs)) {
                for (let i = 0; i < msgs.length; i++) {
                  let msg = msgs[i];
                  dispatch(msg);
                }

                return;
              }

              dispatch(msgs);
            };

            this._ws.onopen = ev => {
              let handshakePkg = (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                error: Error()
              }), Pomelo) : Pomelo).Protocol.strencode(JSON.stringify(handshakeBuffer));
              var pkg = (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                error: Error()
              }), Pomelo) : Pomelo).Package.encode((_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                error: Error()
              }), Pomelo) : Pomelo).Package.TYPE_HANDSHAKE, handshakePkg);

              this._ws.send(pkg.buffer);

              console.log("websocket open", ev);
              reslove(ev);
            };
          });
        }

        static handshake(data) {}

        static heartbeat(data) {}

        static onKick(data) {}

        static onData(data) {
          const msg = (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
            error: Error()
          }), Pomelo) : Pomelo).Message.decode(data);

          if (msg.route == "Connector.Handler.CallAuth") {
            let resp = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).lobby.RespAuth.decode(msg.body);
            console.log("Connector.Handler.CallAuth, resp=", resp);
          }
        }

        static Call(route, data) {
          this._reqId++; // let msg = Pomelo.Message.encode(this._reqId, Pomelo.Message.TYPE_REQUEST, 0, route, data);
          // let pkg = Pomelo.Package.encode(Pomelo.Package.TYPE_DATA, msg)
          // this._ws.send(pkg.buffer);

          let msg = (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
            error: Error()
          }), Pomelo) : Pomelo).Message.encode(this._reqId, (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
            error: Error()
          }), Pomelo) : Pomelo).Message.TYPE_REQUEST, 0, route, data);
          let pkg = (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
            error: Error()
          }), Pomelo) : Pomelo).Package.encode((_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
            error: Error()
          }), Pomelo) : Pomelo).Package.TYPE_DATA, msg);

          this._ws.send(pkg.buffer);
        }

      }); // export class Network extends EventTarget implements ISchedulable {
      //     // --- EventTarget begin ---
      //     event(name: string, data: any = null) {
      //         if (this.hasEventListener(name)) {
      //             this.emit(name, data);
      //         }
      //         else {
      //             warn('Network.passPack [' + name + '] no listener')
      //         }
      //     }
      //     // --- EventTarget end ---
      //     // --- instance begin ---
      //     private static _instance: Network = null;
      //     public static get instance(): Network {
      //         if (!this._instance) this._instance = new Network();
      //         return this._instance;
      //     }
      //     // --- instance end ---
      //     // --- ISchedulable begin ---
      //     private _id: string = null;
      //     public get uuid(): string {
      //         if (!this._id) this._id = 'Network-' + new Date().getTime();
      //         return this._id;
      //     }
      //     // --- ISchedulable end ---
      //     private _client: SocketClient = null;
      //     public get client(): SocketClient { return this._client; }
      //     private _reconnectEnable: boolean = false;
      //     private _reconnecting: boolean = false;
      //     private _reconnectAttempts: number = 0;
      //     private _heartbeatPassed: number = 0;
      //     private _heartbeatInterval: number = 0;
      //     private _heartbeatTimeout: number;
      //     private _shouldHeartbeat: boolean = false;
      //     private _requestId: number = 1;
      //     public get uniqueRequestId(): number {
      //         this._requestId++;
      //         if (this._requestId >= 40000) this._requestId = 1;
      //         return this._requestId;
      //     }
      //     // Map from request id to route
      //     _requestRouteMap: Map<number, number | string> = new Map();
      //     // callback from request id
      //     _requestCallbackMap: Map<number, (data: any) => void> = new Map();
      //     _handshakeBuffer: IHandshakeBuffer = {
      //         sys: {
      //             type: JS_WS_CLIENT_TYPE,
      //             version: JS_WS_CLIENT_VERSION,
      //             rsa: {}
      //         },
      //         user: {}
      //     };
      //     _routeMap: Map<string, number> = null;
      //     _routeMapBack: Map<number, string> = null;
      //     constructor() {
      //         super();
      //         this._client = new SocketClient(this);
      //         Scheduler.enableForTarget(this);
      //         director.getScheduler().schedule(this.heartbeatCheck, this, 0.1, macro.REPEAT_FOREVER, 0, false);
      //     }
      //     // --- Socket begin ---
      //     onOpen(socket: SocketClient) {
      //         if (this._reconnecting) {
      //             this.event(Events.RECONNECTED);
      //         }
      //         this.event(Events.CONNECTED);
      //         this.resetReconnect();
      //         var obj = Package.encode(Package.TYPE_HANDSHAKE, Protocol.strencode(JSON.stringify(this._handshakeBuffer)));
      //         this.client.sendBuffer(obj);
      //     }
      //     onRecv(socket: SocketClient, data: ArrayBuffer) {
      //         this.processPackage(Package.decode(data));
      //         // new package arrived, update the heartbeat timeout
      //         this.renewHeartbeatTimeout();
      //     }
      //     onErr(socket: SocketClient) {
      //         this.event(Events.ERROR);
      //     }
      //     onClose(socket: SocketClient) {
      //         this.event(Events.CLOSED);
      //         if (this._reconnectEnable && this._reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
      //             this._reconnecting = true;
      //             this._reconnectAttempts++;
      //             this._connect();
      //         }
      //     }
      //     connectTimeout(socket: SocketClient) {
      //         this.event(Events.ERROR);
      //         if (this._reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
      //             this._reconnecting = true;
      //             this._reconnectAttempts++;
      //             this._connect();
      //         }
      //     }
      //     // --- Socket end ---
      //     private resetReconnect() {
      //         this._reconnecting = false;
      //         this._reconnectAttempts = 0;
      //     }
      //     private renewHeartbeatTimeout() {
      //         this._heartbeatPassed = 0;
      //     }
      //     private handshake(data: ArrayBuffer) {
      //         const d: { code: number, sys: { heartbeat: number, dict: any } } = JSON.parse(Protocol.strdecode(data));
      //         if (d && d.code === RES_OLD_CLIENT) {
      //             this.event(Events.HANDSHAKEERROR);
      //             return;
      //         }
      //         if (d && d.code !== RES_OK) {
      //             this.event(Events.HANDSHAKEERROR);
      //             return;
      //         }
      //         if (d && d.sys && d.sys.heartbeat) {
      //             this._heartbeatInterval = d.sys.heartbeat;              // heartbeat interval
      //             this._heartbeatTimeout = this._heartbeatInterval * 2;   // max heartbeat timeout
      //         } else {
      //             this._heartbeatInterval = 0;
      //             this._heartbeatTimeout = 0;
      //         }
      //         if (d && d.sys) {
      //             const dict = d.sys.dict;
      //             // Init compress dict
      //             if (dict) {
      //                 this._routeMap = new Map();
      //                 this._routeMapBack = new Map();
      //                 for (const key in dict) {
      //                     if (Object.prototype.hasOwnProperty.call(dict, key)) {
      //                         const value: number = dict[key];
      //                         this._routeMap.set(key, value);
      //                         this._routeMapBack.set(value, key);
      //                     }
      //                 }
      //             }
      //         }
      //         this.client.sendBuffer(Package.encode(Package.TYPE_HANDSHAKE_ACK));
      //         this.event(Events.HANDSHAKEOVER);
      //     }
      //     private heartbeat(data: ArrayBuffer) {
      //         if (!this._heartbeatInterval) {
      //             // no heartbeat
      //             return;
      //         }
      //         this._shouldHeartbeat = true;
      //     }
      //     private heartbeatCheck(dt: number) {
      //         if (!this._heartbeatInterval) return;
      //         if (!this._client.isConnected) {
      //             this._heartbeatPassed = 0;
      //             return;
      //         }
      //         this._heartbeatPassed += dt;
      //         if (this._shouldHeartbeat) {
      //             if (this._heartbeatPassed > this._heartbeatInterval) {
      //                 this.client.sendBuffer(Package.encode(Package.TYPE_HEARTBEAT));
      //                 this.renewHeartbeatTimeout();
      //             }
      //             return;
      //         }
      //         if (this._heartbeatPassed > this._heartbeatTimeout) {
      //             console.error('server heartbeat timeout');
      //             if (this._reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
      //                 this._reconnecting = true;
      //                 this._reconnectAttempts++;
      //                 this._connect();
      //             }
      //         }
      //     }
      //     private onData(data: ArrayBuffer) {
      //         const msg = this.decode(data);
      //         if (!msg) {
      //             console.error('onData decode failed');
      //             return;
      //         }
      //         if (msg.id) {
      //             // if have a id then find the callback function with the request
      //             var cb = this._requestCallbackMap.get(msg.id);
      //             this._requestCallbackMap.delete(msg.id);
      //             cb && cb(msg.body);
      //             return;
      //         }
      //         // server push message
      //         this.event(msg.route as string, msg.body);
      //     }
      //     onKick(data: ArrayBuffer) {
      //         data = JSON.parse(Protocol.strdecode(data));
      //         this.event(Events.BEENKICKED, data);
      //     }
      //     private _messageHandlers: Map<number, (data: ArrayBuffer) => void> = null;
      //     get messageHandlers(): Map<number, (data: ArrayBuffer) => void> {
      //         if (!this._messageHandlers) {
      //             this._messageHandlers = new Map();
      //             this._messageHandlers.set(Package.TYPE_HANDSHAKE, this.handshake.bind(this));
      //             this._messageHandlers.set(Package.TYPE_HEARTBEAT, this.heartbeat.bind(this));
      //             this._messageHandlers.set(Package.TYPE_DATA, this.onData.bind(this));
      //             this._messageHandlers.set(Package.TYPE_KICK, this.onKick.bind(this));
      //         }
      //         return this._messageHandlers;
      //     }
      //     private processPackage(msgs: { type: number, body?: Uint8Array } | { type: number, body?: Uint8Array }[]) {
      //         if (Array.isArray(msgs)) {
      //             for (var i = 0; i < msgs.length; i++) {
      //                 var msg = msgs[i];
      //                 this.messageHandlers.get(msg.type)(msg.body);
      //             }
      //         } else {
      //             this.messageHandlers.get(msgs.type)(msgs.body);
      //         }
      //     }
      //     private _url: string = null;
      //     private _connect(url: string = null): void {
      //         this._closeConnet();
      //         this._url = url || this._url;
      //         this.client.connect(this._url);
      //     }
      //     public static connect(url: string): void {
      //         this.instance._connect(url);
      //     }
      //     private _closeConnet(): void {
      //         this._reconnecting = false;
      //         this.client.close();
      //     }
      //     public static closeConnet(): void {
      //         this.instance._closeConnet();
      //     }
      //     public packProto(data: any, protoStruct: any): Uint8Array {
      //         let buffer: Uint8Array = null;
      //         if (data && protoStruct) {
      //             let message: any = null;
      //             if (protoStruct) {
      //                 message = protoStruct.create(data);
      //                 buffer = protoStruct.encode(message).finish();
      //             }
      //         }
      //         return buffer;
      //     }
      //     public parseProto(buffer: Uint8Array, protoStruct: any): any {
      //         let decoded: any = null;
      //         if (buffer && buffer.length && protoStruct) {
      //             try {
      //                 decoded = protoStruct.decode(buffer);
      //             }
      //             catch (e) {
      //                 console.error(e);
      //                 decoded = null;
      //             }
      //         }
      //         return decoded;
      //     }
      //     private decode(data: string | ArrayBuffer): {
      //         id: number,
      //         route: number | string,
      //         body: any,
      //     } {
      //         // probuff decode
      //         const msg = Message.decode(data);
      //         if (msg.id > 0) {
      //             msg.route = this._requestRouteMap.get(msg.id);
      //             this._requestRouteMap.delete(msg.id);
      //             if (!msg.route) {
      //                 return null;
      //             }
      //         }
      //         let route = msg.route;
      //         // Decompose route from dict
      //         if (msg.compressRoute) {
      //             route = this._routeMapBack.get(route as number);
      //             if (!route) return null;
      //             msg.route = route;
      //         }
      //         const cmd = Structs.getCmd(route as string);
      //         msg.body = this.parseProto(msg.body, cmd.server);
      //         return msg;
      //     }
      //     private encode(reqId: number, route: number | string, msg: any): Uint8Array {
      //         var type = reqId ? Message.TYPE_REQUEST : Message.TYPE_NOTIFY;
      //         const cmd = Structs.getCmd(route as string);
      //         msg = this.packProto(msg, cmd.client);
      //         var compressRoute = 0;
      //         if (this._routeMap.has(route as string)) {
      //             route = this._routeMap.get(route as string);
      //             compressRoute = 1;
      //         }
      //         return Message.encode(reqId, type, compressRoute, route, msg);
      //     }
      //     public _request(route: string, msg: any, cb: (data: any) => void) {
      //         route = route || msg.route;
      //         if (!route) {
      //             return;
      //         }
      //         const reqId = this.uniqueRequestId;
      //         this._sendMessage(reqId, route, msg);
      //         this._requestCallbackMap.set(reqId, cb);
      //         this._requestRouteMap.set(reqId, route);
      //     }
      //     public static request(route: string, msg: any, cb?: (data: any) => void) {
      //         this.instance._request(route, msg, cb);
      //     }
      //     private _sendMessage(reqId: number, route: number | string, msg: any): void {
      //         const message = this.encode(reqId, route, msg);
      //         this.client.sendBuffer(Package.encode(Package.TYPE_DATA, message));
      //     }
      //     public static notify(route: number | string, msg: any): void {
      //         this.instance._sendMessage(0, route, msg);
      //     }
      // }


      PitayaWs._ws = void 0;
      PitayaWs._reqId = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fda7eb8ef4a7edc367bbd179dc1899da52baef03.js.map
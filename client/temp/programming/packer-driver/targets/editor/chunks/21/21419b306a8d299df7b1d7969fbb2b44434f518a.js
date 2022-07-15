System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Pomelo, Pitaya, _crd, starx, protocol;

  function _reportPossibleCrUseOfPomelo(extras) {
    _reporterNs.report("Pomelo", "./Pomelo", _context.meta, extras);
  }

  _export("Pitaya", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Pomelo = _unresolved_2.Pomelo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "966feQbgDJKVJnSFR2vhENj", "Pitaya", undefined);

      starx = window.starx;
      protocol = window.Protocol;

      _export("Pitaya", Pitaya = class Pitaya {
        //websocket
        //回调map
        //路由map
        //请求的id,每次请求自增1
        //整个pitaya连接成功后的回调
        //step1:初始化
        static Init(host, port) {
          let url = `ws://${host}:${port}`;
          this.ws = new WebSocket(url);
          this.ws.binaryType = 'arraybuffer';

          this.ws.onclose = ev => {
            console.log("websocket close", ev);
          };

          this.ws.onerror = ev => {
            console.log("websocket err", ev);
          };

          this.ws.onmessage = ev => {
            this.onMessage(ev);
          };

          this.ws.onopen = ev => {
            this.sendHandShake();
          };
        } //step2:发送handshake


        static async sendHandShake() {
          let handshakeBuffer = {
            'sys': {
              type: "pitaya_cocos",
              version: "1.0.0",
              rsa: {}
            },
            'user': {}
          };
          let handshakePkg = protocol.strencode(JSON.stringify(handshakeBuffer));
          let pkg = protocol.Package.encode(protocol.Package.TYPE_HANDSHAKE, handshakePkg);
          this.ws.send(pkg.buffer);
        } //step3:收到消息


        static onMessage(ev) {
          let msgs = protocol.Package.decode(ev.data);

          if (Array.isArray(msgs)) {
            for (let i = 0; i < msgs.length; i++) {
              let msg = msgs[i];
              this.dispatch(msg);
            }
          } else {
            this.dispatch(msgs);
          }
        }
        /**
         * 消息分发器
         * @param msg 收到的服务器消息
         * @returns 
         */


        static dispatch(msg) {
          switch (msg.type) {
            case (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
              error: Error()
            }), Pomelo) : Pomelo).Package.TYPE_HANDSHAKE:
              {
                let data = JSON.parse(protocol.strdecode(msg.body));
                console.log(" handshake msg.code", data.code);

                if (data.code === 501) {
                  return;
                }

                if (data.code !== 200) {
                  return;
                } //step4: handshake回应，不然服务器会断开


                let obj = protocol.Package.encode(protocol.Package.TYPE_HANDSHAKE_ACK);
                this.ws.send(obj.buffer);

                if (this.OnConnectSuccess) {
                  this.OnConnectSuccess();
                  this.OnConnectSuccess = null;
                }
              }
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
        }

        static heartbeat(data) {}

        static onKick(data) {}

        static onData(data) {}

        static Call(route, data) {}

        static CallAuth() {}

        static request(route, msg, cb) {
          if (!route) {
            return;
          }

          this.reqId++;
          console.error("pitaya reqid", this.reqId);
          this.sendMessage(this.reqId, route, msg);
          this.callbacks.set(this.reqId, cb);
          this.routeMap.set(this.reqId, route);
        }

        static sendMessage(reqId, route, data) {
          let type = reqId ? protocol.Message.TYPE_REQUEST : protocol.Message.TYPE_NOTIFY;
          let msg = protocol.Message.encode(reqId, type, 0, route, data);
          let packet = protocol.Package.encode(protocol.Package.TYPE_DATA, msg);
          this.ws.send(packet.buffer);
        }

      });

      Pitaya.ws = void 0;
      Pitaya.callbacks = new Map();
      Pitaya.routeMap = new Map();
      Pitaya.reqId = 0;
      Pitaya.OnConnectSuccess = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21419b306a8d299df7b1d7969fbb2b44434f518a.js.map
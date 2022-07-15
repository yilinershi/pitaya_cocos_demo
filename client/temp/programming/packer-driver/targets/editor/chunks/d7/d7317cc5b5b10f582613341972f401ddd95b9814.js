System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Pitaya, _crd, starx, protocol;

  _export("Pitaya", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
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
        //step1:包装成await/async
        static async Init(host, port) {
          return new Promise((resolve, reject) => {
            this.onConnectSuccess = () => {
              resolve(true);
            };

            let url = `ws://${host}:${port}`;
            this.connector(url);
          });
        } //step2:初始化


        static connector(url) {
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
        } //step3:发送handshake


        static async sendHandShake() {
          let handshakeBuffer = {
            'sys': {
              type: "pitaya_cocos",
              version: "1.0.0",
              rsa: {}
            },
            'user': {}
          };
          let msg = protocol.Protocol.strencode(JSON.stringify(handshakeBuffer));
          let pkg = protocol.Package.encode(protocol.Package.TYPE_HANDSHAKE, msg);
          this.ws.send(pkg.buffer);
        } //step4:收到消息,分发


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
         * step5, 解析消息分发器
         * @param msg 收到的服务器消息
         * @returns 
         */


        static dispatch(msg) {
          switch (msg.type) {
            case protocol.Package.TYPE_HANDSHAKE:
              {
                let data = JSON.parse(protocol.Protocol.strdecode(msg.body));
                console.log(" handshake msg.code", data.code);

                if (data.code === 501) {
                  return;
                }

                if (data.code !== 200) {
                  return;
                } //step6: handshake回应，不然服务器会断开


                let obj = protocol.Package.encode(protocol.Package.TYPE_HANDSHAKE_ACK);
                this.ws.send(obj.buffer); //step7: 连接成功回调，加到step1的Promise

                if (this.onConnectSuccess) {
                  this.onConnectSuccess();
                }
              }
              break;

            case protocol.Package.TYPE_HEARTBEAT:
              this.heartbeat(msg.body);
              break;

            case protocol.Package.TYPE_DATA:
              this.onData(msg.body);
              break;

            case protocol.Package.TYPE_KICK:
              this.onKick(msg.body);
              break;
          }
        }

        static heartbeat(data) {}

        static onKick(data) {}

        static onData(data) {
          let msg = protocol.Message.decode(data);

          if (msg.route) {
            console.log("on data, msg.route=", msg.route);
          }

          if (msg.type = protocol.Message.TYPE_RESPONSE) {
            var cb = this.callbacks.get(msg.id);
            this.callbacks.delete(msg.id);

            if (typeof cb !== 'function') {
              return;
            }

            cb(msg.body);
          }
        }
        /**
         * Call方法，即req-resp模式
         * @param route 路由
         * @param msg 
         * @returns 
         */


        static async Call(route, msg) {
          if (!route) {
            return;
          }

          return new Promise((resolve, reject) => {
            this.reqId++;
            this.sendMessage(this.reqId, route, msg);
            this.callbacks.set(this.reqId, data => {
              resolve(data);
            });
            this.routeMap.set(this.reqId, route);
          });
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
      Pitaya.onConnectSuccess = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d7317cc5b5b10f582613341972f401ddd95b9814.js.map
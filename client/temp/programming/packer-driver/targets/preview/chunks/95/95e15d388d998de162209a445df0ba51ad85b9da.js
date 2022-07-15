System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Pitaya, _crd, protocol;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  _export("Pitaya", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "966feQbgDJKVJnSFR2vhENj", "Pitaya", undefined);

      protocol = window.Protocol;

      _export("Pitaya", Pitaya = class Pitaya {
        //websocket
        //回调map
        //路由map
        //请求的id,每次请求自增1
        //整个pitaya连接成功后的回调
        //step1:包装成await/async
        static Init(host, port) {
          var _this = this;

          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              _this.onConnectSuccess = () => {
                resolve(true);
              };

              var url = "ws://" + host + ":" + port;

              _this.connector(url);
            });
          })();
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


        static sendHandShake() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var handshakeBuffer = {
              'sys': {
                type: "pitaya_cocos",
                version: "1.0.0",
                rsa: {}
              },
              'user': {}
            };
            var msg = protocol.strencode(JSON.stringify(handshakeBuffer));
            var pkg = protocol.Package.encode(protocol.Package.TYPE_HANDSHAKE, msg);

            _this2.ws.send(pkg.buffer);
          })();
        } //step4:收到消息,分发


        static onMessage(ev) {
          var msgs = protocol.Package.decode(ev.data);

          if (Array.isArray(msgs)) {
            for (var i = 0; i < msgs.length; i++) {
              var msg = msgs[i];
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
                var data = JSON.parse(protocol.strdecode(msg.body));
                console.log(" handshake msg.code", data.code);

                if (data.code === 501) {
                  return;
                }

                if (data.code !== 200) {
                  return;
                } //step6: handshake回应，不然服务器会断开


                var obj = protocol.Package.encode(protocol.Package.TYPE_HANDSHAKE_ACK);
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
          var msg = protocol.Message.decode(data);

          if (msg.route) {
            console.log("on data, msg.route=", msg.route);
          }

          if (msg.type = protocol.Message.TYPE_RESPONSE) {
            var cb = this.callbacks.get(msg.id);
            this.callbacks.delete(msg.id);

            if (cb) {
              cb(msg.body);
            }
          }
        }
        /**
         * Call方法，即req-resp模式
         * @param route 路由
         * @param msg 
         * @returns 
         */


        static Call(route, data) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (!route) {
              return;
            }

            return new Promise((resolve, reject) => {
              _this3.reqId++;
              var type = _this3.reqId ? protocol.Message.TYPE_REQUEST : protocol.Message.TYPE_NOTIFY;
              var msg = protocol.Message.encode(_this3.reqId, type, 0, route, data);
              console.log("[js] 11111111 msg= ", msg);
              var packet = protocol.Package.encode(protocol.Package.TYPE_DATA, msg);
              console.log("[js] 22222222 packet= ", packet);

              _this3.ws.send(packet.buffer);

              _this3.callbacks.set(_this3.reqId, data => {
                resolve(data);
              });

              _this3.routeMap.set(_this3.reqId, route);
            });
          })();
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
//# sourceMappingURL=95e15d388d998de162209a445df0ba51ad85b9da.js.map
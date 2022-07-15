System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, Pomelo, PitayaWs, _crd, starx, protocol;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

      starx = window.starx;
      protocol = window.Protocol;

      _export("PitayaWs", PitayaWs = class PitayaWs {
        static Init(host, port) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var handshakeBuffer = {
              'sys': {
                type: "pitaya_cocos",
                version: "1.0.0",
                rsa: {}
              },
              'user': {}
            };
            return new Promise((reslove, reject) => {
              _this._ws = new WebSocket('ws://localhost:3250');
              _this.reqId = 0;
              _this._ws.binaryType = 'arraybuffer';

              _this._ws.onclose = ev => {
                console.log("websocket close", ev);
                reject(false);
              };

              _this._ws.onerror = ev => {
                console.log("websocket err", ev);
                reject(false);
              };

              _this._ws.onmessage = ev => {
                var dispatch = msg => {
                  switch (msg.type) {
                    case (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                      error: Error()
                    }), Pomelo) : Pomelo).Package.TYPE_HANDSHAKE:
                      _this.handshake(msg.body);

                      break;

                    case (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                      error: Error()
                    }), Pomelo) : Pomelo).Package.TYPE_HEARTBEAT:
                      _this.heartbeat(msg.body);

                      break;

                    case (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                      error: Error()
                    }), Pomelo) : Pomelo).Package.TYPE_DATA:
                      _this.onData(msg.body);

                      break;

                    case (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                      error: Error()
                    }), Pomelo) : Pomelo).Package.TYPE_KICK:
                      _this.onKick(msg.body);

                      break;
                  }
                };

                var msgs = protocol.Package.decode(ev.data);
                console.log("websocket onmessage", msgs);

                if (Array.isArray(msgs)) {
                  for (var i = 0; i < msgs.length; i++) {
                    var msg = msgs[i];
                    dispatch(msg);
                  }
                } else {
                  dispatch(msgs);
                }

                console.log("websocket on message ,reslove");
                reslove(true);
              };

              _this._ws.onopen = ev => {
                var handshakePkg = protocol.strencode(JSON.stringify(handshakeBuffer));
                var pkg = protocol.Package.encode(protocol.Package.TYPE_HANDSHAKE, handshakePkg);

                _this._ws.send(pkg.buffer);
              };
            });
          })();
        }

        static handshake(data) {
          var msg = JSON.parse(protocol.strdecode(data));
          console.log(" handshake msg.code", msg.code);

          if (msg.code === this.RES_OLD_CLIENT) {
            // starx.emit('error', 'client version not fullfill');
            return;
          }

          if (msg.code !== this.RES_OK) {
            // starx.emit('error', 'handshake fail');
            return;
          } // handshakeInit(msg);
          // var obj = Package.encode(Package.TYPE_HANDSHAKE_ACK);
          // send(obj);
          // if (initCallback) {
          //     initCallback(socket);
          // }

        }

        static heartbeat(data) {}

        static onKick(data) {}

        static onData(data) {// const msg = Pomelo.Message.decode(data);
          // if (msg.route == "Connector.Handler.CallAuth") {
          //     let resp = proto.lobby.RespAuth.decode(msg.body)
          //     console.log("Connector.Handler.CallAuth, resp=", resp)
          // }
        }

        static Call(route, data) {// console.log(" pitaya call")
          // this.reqId++;
          // let msg = protocol.Message.encode(this.reqId, Pomelo.Message.TYPE_REQUEST, 0, route, data);
          // let pkg = protocol.Package.encode(Pomelo.Package.TYPE_DATA, msg)
          // // let msg = Pomelo.Message.encode(this._reqId, Pomelo.Message.TYPE_REQUEST, 0, route, data);
          // // let pkg = Pomelo.Package.encode(Pomelo.Package.TYPE_DATA, msg)
          // this._ws.send(pkg.buffer);
          // this.testStartX()
        }

        static CallAuth() {
          var token = "aa";
          console.log("startx token ", token);
          var reqByte = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).lobby.ReqAuth.encode({
            Token: token
          }).finish();
          console.log(" pitaya 1-1 1-1 1-1 reqByte ", reqByte);
          this.request("Connector.Handler.CallAuth", reqByte, () => {});
        }

        static StartXCallAuth() {
          starx.init({
            host: "localhost",
            //Session.WsUrl.Host,
            port: 3250 //Session.WsUrl.Port

          }, () => {
            var token = "aa";
            console.log("startx token ", token);
            var reqByte = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).lobby.ReqAuth.encode({
              Token: token
            }).finish();
            console.error("startx 2-1 2-1 2-1 ", reqByte);
            starx.request("Connector.Handler.CallAuth", reqByte, e => {
              var resp = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).lobby.RespAuth.decode(e);
              console.log(" Connector.Handler.CallAuth, success resp= ", resp);
            });
          });
        }

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

        static sendMessage(reqId, route, msg) {
          var encodeMsg = this.encode(reqId, route, msg);
          console.log(" pitaya  1-2 1-2 1-2     msg ", encodeMsg);
          var packet = protocol.Package.encode(protocol.Package.TYPE_DATA, encodeMsg);
          console.log(" pitaya  1-3 1-3 1-3     packet ", packet);
          this.send(packet);
        }

        static send(packet) {
          this._ws.send(packet);
        }

        static encode(reqId, route, msg) {
          var type = reqId ? protocol.Message.TYPE_REQUEST : protocol.Message.TYPE_NOTIFY;
          return protocol.Message.encode(reqId, type, 0, route, msg);
        }

      });

      PitayaWs._ws = void 0;
      PitayaWs.callbacks = new Map();
      PitayaWs.routeMap = new Map();
      PitayaWs.reqId = void 0;
      PitayaWs.RES_OK = 200;
      PitayaWs.RES_FAIL = 500;
      PitayaWs.RES_OLD_CLIENT = 501;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89a07187a1bf9f976414280285b758dda52a826f.js.map
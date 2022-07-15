System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, Session, Pomelo, PitayaWs, _crd, starx, protocol;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../../proto_js/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSession(extras) {
    _reporterNs.report("Session", "../../logic/login/LoginModel", _context.meta, extras);
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
      Session = _unresolved_3.Session;
    }, function (_unresolved_4) {
      Pomelo = _unresolved_4.Pomelo;
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
              _this._ws = new WebSocket('ws://127.0.0.1:3250');
              _this.reqId = 0;
              _this._ws.binaryType = 'arraybuffer';

              _this._ws.onclose = ev => {
                console.log("websocket close", ev); // reject(ev)
              };

              _this._ws.onerror = ev => {
                console.log("websocket err", ev); // reject(ev)
              };

              _this._ws.onmessage = ev => {
                console.log("websocket onmessage", ev);

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

                var msgs = (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                  error: Error()
                }), Pomelo) : Pomelo).Package.decode(ev);

                if (Array.isArray(msgs)) {
                  for (var i = 0; i < msgs.length; i++) {
                    var msg = msgs[i];
                    dispatch(msg);
                  }

                  return;
                }

                dispatch(msgs);
              };

              _this._ws.onopen = ev => {
                // let handshakePkg = Pomelo.strencode(JSON.stringify(handshakeBuffer))
                // var pkg = Pomelo.Package.encode(Pomelo.Package.TYPE_HANDSHAKE, handshakePkg);
                // this._ws.send(pkg.buffer);
                console.log("websocket open", ev);
                reslove(ev);
              };
            });
          })();
        }

        static handshake(data) {}

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
          // console.log(" pitaya call")
          // this.reqId++;
          var reqByte = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).lobby.ReqAuth.encode({
            Token: (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Account.token
          }).finish(); // let msg = protocol.Message.encode(this.reqId, Pomelo.Message.TYPE_REQUEST, 0, "Connector.Handler.CallAuth", reqByte);
          // let pkg = protocol.Package.encode(Pomelo.Package.TYPE_DATA, msg)
          // // let msg = Pomelo.Message.encode(this._reqId, Pomelo.Message.TYPE_REQUEST, 0, route, data);
          // // let pkg = Pomelo.Package.encode(Pomelo.Package.TYPE_DATA, msg)
          // this._ws.send(pkg.buffer);

          this.testStartX();
          this.request("Connector.Handler.CallAuth", reqByte, () => {});
        }

        static testStartX() {
          starx.init({
            host: (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).WsUrl.Host,
            port: (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).WsUrl.Port
          }, () => {
            starx.request("Connector.Handler.CallAuth", (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).lobby.ReqAuth.encode({
              Token: (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Account.token
            }).finish(), e => {
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
          this.sendMessage(this.reqId, route, msg);
          this.callbacks.set(this.reqId, cb);
          this.routeMap.set(this.reqId, route);
        }

        static sendMessage(reqId, route, msg) {
          msg = this.encode(reqId, route, msg);
          var packet = protocol.Package.encode(protocol.Package.TYPE_DATA, msg);
          this.send(packet);
        }

        static send(packet) {
          this._ws.send(packet.buffer);
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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=46751db97be56e4abab6c082a4cc9fdd24f4aea2.js.map
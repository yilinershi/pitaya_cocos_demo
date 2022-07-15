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
              _this._ws = new WebSocket('ws://' + host + ":" + port);
              _this._reqId = 0;
              _this._ws.binaryType = 'arraybuffer';

              _this._ws.onclose = ev => {
                console.log("websocket close", ev);
                reject(ev);
              };

              _this._ws.onerror = ev => {
                console.log("websocket err", ev);
                reject(ev);
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
                var handshakePkg = (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                  error: Error()
                }), Pomelo) : Pomelo).Protocol.strencode(JSON.stringify(handshakeBuffer));
                var pkg = (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                  error: Error()
                }), Pomelo) : Pomelo).Package.encode((_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                  error: Error()
                }), Pomelo) : Pomelo).Package.TYPE_HANDSHAKE, handshakePkg);

                _this._ws.send(pkg.buffer);

                console.log("websocket open", ev);
                reslove(ev);
              };
            });
          })();
        }

        static handshake(data) {}

        static heartbeat(data) {}

        static onKick(data) {}

        static onData(data) {
          var msg = (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
            error: Error()
          }), Pomelo) : Pomelo).Message.decode(data);

          if (msg.route == "Connector.Handler.CallAuth") {
            var resp = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).lobby.RespAuth.decode(msg.body);
            console.log("Connector.Handler.CallAuth, resp=", resp);
          }
        }

        static Call(route, data) {
          this._reqId++;
          var msg = protocol.Message.encode(this._reqId, (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
            error: Error()
          }), Pomelo) : Pomelo).Message.TYPE_REQUEST, 0, route, data);
          var pkg = protocol.Package.encode((_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
            error: Error()
          }), Pomelo) : Pomelo).Package.TYPE_DATA, msg);

          this._ws.send(pkg.buffer); // this.testStartX()

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

      });

      PitayaWs._ws = void 0;
      PitayaWs._reqId = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4d5236a84a0ced298ef185bae8d3355681f4a81c.js.map
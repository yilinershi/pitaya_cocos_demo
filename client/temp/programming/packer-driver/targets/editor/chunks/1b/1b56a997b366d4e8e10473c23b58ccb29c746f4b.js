System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, Session, Pomelo, PitayaWs, _crd, starx, protocol;

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
            this._ws = new WebSocket('ws://127.0.0.1:3250');
            this._reqId = 0;
            this._ws.binaryType = 'arraybuffer';

            this._ws.onclose = ev => {
              console.log("websocket close", ev); // reject(ev)
            };

            this._ws.onerror = ev => {
              console.log("websocket err", ev); // reject(ev)
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
              // let handshakePkg = Pomelo.strencode(JSON.stringify(handshakeBuffer))
              // var pkg = Pomelo.Package.encode(Pomelo.Package.TYPE_HANDSHAKE, handshakePkg);
              // this._ws.send(pkg.buffer);
              console.log("websocket open", ev);
              reslove(ev);
            };
          });
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

        static Call(route, data) {
          console.log(" pitaya call");
          this._reqId++; // let msg = protocol.Message.encode(this._reqId, Pomelo.Message.TYPE_REQUEST, 0, route, data);
          // let pkg = protocol.Package.encode(Pomelo.Package.TYPE_DATA, msg)

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
              let resp = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
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
//# sourceMappingURL=1b56a997b366d4e8e10473c23b58ccb29c746f4b.js.map
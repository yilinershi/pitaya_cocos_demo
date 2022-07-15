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
            this._ws = new WebSocket('ws://localhost:3250');
            this.reqId = 0;
            this._ws.binaryType = 'arraybuffer';

            this._ws.onclose = ev => {
              console.log("websocket close", ev);
              reject(false);
            };

            this._ws.onerror = ev => {
              console.log("websocket err", ev);
              reject(false);
            };

            this._ws.onmessage = ev => {
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

              let msgs = protocol.Package.decode(ev);
              console.log("websocket onmessage", msgs);

              if (Array.isArray(msgs)) {
                for (let i = 0; i < msgs.length; i++) {
                  let msg = msgs[i];
                  dispatch(msg);
                }
              } else {
                dispatch(msgs);
              }

              console.log("websocket on message ,reslove");
              reslove(true);
            };

            this._ws.onopen = ev => {
              let handshakePkg = protocol.strencode(JSON.stringify(handshakeBuffer));
              var pkg = protocol.Package.encode(protocol.Package.TYPE_HANDSHAKE, handshakePkg);

              this._ws.send(pkg.buffer);
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
          let reqByte = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).lobby.ReqAuth.encode({
            Token: (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Account.token
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
            let reqByte = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).lobby.ReqAuth.encode({
              Token: (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
                error: Error()
              }), Session) : Session).Account.token
            }).finish();
            console.error(" 2-1 2-1 2-1 ", reqByte);
            starx.request("Connector.Handler.CallAuth", reqByte, e => {
              let resp = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
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
          var encodeMsg = this.encode(reqId, route, msg);
          console.log(" pitaya  1-2 1-2 1-2     msg ", encodeMsg);
          var packet = protocol.Package.encode(protocol.Package.TYPE_DATA, encodeMsg);
          console.log(" pitaya  1-3 1-3 1-3     packet ", packet); // this.send(packet);
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
//# sourceMappingURL=c51e9c5b78ea949a01126d5215863bc4a0a04a2a.js.map
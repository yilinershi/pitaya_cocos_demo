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
            var url = "ws://" + host + ":" + port;
            yield _this.NewWebSocket(url);
            yield _this.sendHandShake();
          })();
        }

        static NewWebSocket(url) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            return new Promise((reslove, reject) => {
              _this2._ws = new WebSocket(url);
              _this2._ws.binaryType = 'arraybuffer';

              _this2._ws.onclose = ev => {
                console.log("websocket close", ev);
              };

              _this2._ws.onerror = ev => {
                console.log("websocket err", ev);
              };

              _this2._ws.onmessage = ev => {
                _this2.onMessage(ev);
              };

              _this2._ws.onopen = ev => {
                reslove(true);
              };
            });
          })();
        }

        static onMessage(ev) {
          var dispatch = msg => {
            switch (msg.type) {
              case (_crd && Pomelo === void 0 ? (_reportPossibleCrUseOfPomelo({
                error: Error()
              }), Pomelo) : Pomelo).Package.TYPE_HANDSHAKE:
                {
                  var data = JSON.parse(protocol.strdecode(msg.body));
                  console.log(" handshake msg.code", data.code);

                  if (data.code === 501) {
                    return;
                  }

                  if (data.code !== 200) {
                    return;
                  } //一定要握手回应，不然服务器会断开


                  var obj = protocol.Package.encode(protocol.Package.TYPE_HANDSHAKE_ACK);
                  this.send(obj);
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
          };

          var msgs = protocol.Package.decode(ev.data);

          if (Array.isArray(msgs)) {
            for (var i = 0; i < msgs.length; i++) {
              var msg = msgs[i];
              dispatch(msg);
            }
          } else {
            dispatch(msgs);
          }
        }

        static sendHandShake() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var handshakeBuffer = {
              'sys': {
                type: "pitaya_cocos",
                version: "1.0.0",
                rsa: {}
              },
              'user': {}
            };
            var handshakePkg = protocol.strencode(JSON.stringify(handshakeBuffer));
            var pkg = protocol.Package.encode(protocol.Package.TYPE_HANDSHAKE, handshakePkg);

            _this3._ws.send(pkg.buffer);
          })();
        }

        static heartbeat(data) {}

        static onKick(data) {}

        static onData(data) {}

        static Call(route, data) {}

        static CallAuth() {
          var reqByte = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).lobby.ReqAuth.encode({
            Token: (_crd && Session === void 0 ? (_reportPossibleCrUseOfSession({
              error: Error()
            }), Session) : Session).Account.token
          }).finish();
          this.request("Connector.Handler.CallAuth", reqByte, () => {});
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
      PitayaWs.reqId = 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=487af5684d78ef0442f1ed17d83f2a220d581f1d.js.map
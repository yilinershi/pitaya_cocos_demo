System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, Pomelo, PitayaWs, _crd;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../../../proto_js/proto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPomelo(extras) {
    _reporterNs.report("Pomelo", "./pomelo", _context.meta, extras);
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

      _export("PitayaWs", PitayaWs = class PitayaWs {
        static Init(url) {
          this._ws = new WebSocket(url);
          this._ws.binaryType = 'arraybuffer';

          this._ws.onopen = ev => {
            console.log("websocket open", ev);
          };

          this._ws.onclose = ev => {
            console.log("websocket close", ev);
          };

          this._ws.onerror = ev => {
            console.log("websocket err", ev);
          };

          this._ws.onmessage = ev => {
            var dispatch = msg => {
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

      });

      PitayaWs._ws = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ed6e501d28329926c4895393c66d54613008b447.js.map
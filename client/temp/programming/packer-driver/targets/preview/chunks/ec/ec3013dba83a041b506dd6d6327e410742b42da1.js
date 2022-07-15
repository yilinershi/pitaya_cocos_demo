System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Http, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  _export("Http", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc6daDqplhPnK9MaM6yrhmM", "Http", undefined);

      _export("Http", Http = class Http {
        static Post(url, req) {
          return _asyncToGenerator(function* () {
            return new Promise((reslove, reject) => {
              var xhr = new XMLHttpRequest();
              xhr.open("post", url, true);
              xhr.responseType = "arraybuffer"; // 坑点！

              xhr.setRequestHeader("Content-Type", "application/protobuf"); //坑点！

              xhr.onload = response => {
                console.log("response", xhr.response);

                if (xhr.readyState == 4 && xhr.status == 200) {
                  var resp = new Uint8Array(xhr.response);
                  reslove(resp);
                } else {
                  reject();
                }
              };

              xhr.send(req);
            });
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec3013dba83a041b506dd6d6327e410742b42da1.js.map
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Http, _crd;

  _export("Http", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc6daDqplhPnK9MaM6yrhmM", "Http", undefined);

      _export("Http", Http = class Http {
        static async Post(url, req) {
          return new Promise((reslove, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("post", url, true);
            xhr.responseType = "arraybuffer"; // 坑点！

            xhr.setRequestHeader("Content-Type", "application/protobuf"); //坑点！

            xhr.onload = response => {
              console.log("response", xhr.response);

              if (xhr.readyState == 4 && xhr.status == 200) {
                let resp = new Uint8Array(xhr.response);
                reslove(resp);
              } else {
                reject();
              }
            };

            xhr.send(req);
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1ddf17b676a14b698902778b566b4b7bbf81b757.js.map
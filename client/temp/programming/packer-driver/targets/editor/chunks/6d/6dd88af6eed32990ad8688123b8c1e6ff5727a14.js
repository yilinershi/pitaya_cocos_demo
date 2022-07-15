System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, Pomelo;

  _export("Pomelo", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "154efQTugpDBpa7yW0bip/l", "Pomelo", undefined);

      (function (_Pomelo) {
        const PKG_HEAD_BYTES = 4;
        const MSG_FLAG_BYTES = 1;
        const MSG_ROUTE_CODE_BYTES = 2; //const MSG_ID_MAX_BYTES = 5;

        const MSG_ROUTE_LEN_BYTES = 1;
        const MSG_ROUTE_CODE_MAX = 0xffff;
        const MSG_COMPRESS_ROUTE_MASK = 0x1;
        const MSG_COMPRESS_GZIP_MASK = 0x1;
        const MSG_COMPRESS_GZIP_ENCODE_MASK = 1 << 4;
        const MSG_TYPE_MASK = 0x7;

        function strencode(str) {
          // return Buffer.from(str);
          var byteArray = new Uint8Array(str.length * 3);
          var offset = 0;

          for (var i = 0; i < str.length; i++) {
            var charCode = str.charCodeAt(i);
            var codes = null;

            if (charCode <= 0x7f) {
              codes = [charCode];
            } else if (charCode <= 0x7ff) {
              codes = [0xc0 | charCode >> 6, 0x80 | charCode & 0x3f];
            } else {
              codes = [0xe0 | charCode >> 12, 0x80 | (charCode & 0xfc0) >> 6, 0x80 | charCode & 0x3f];
            }

            for (var j = 0; j < codes.length; j++) {
              byteArray[offset] = codes[j];
              ++offset;
            }
          }

          var _buffer = new Uint8Array(offset);

          copyArray(_buffer, 0, byteArray, 0, offset);
          return _buffer;
        }

        _Pomelo.strencode = strencode;

        function copyArray(dest, doffset, src, soffset, length) {
          for (var index = 0; index < length; index++) {
            dest[doffset++] = src[soffset++];
          }
        }

        _Pomelo.copyArray = copyArray;
        ;
        /**
         * client decode
         * msg String data
         * return Message Object
         */

        function strdecode(buffer) {
          var bytes = new Uint8Array(buffer);
          var array = [];
          var offset = 0;
          var charCode = 0;
          var end = bytes.length;

          while (offset < end) {
            if (bytes[offset] < 128) {
              charCode = bytes[offset];
              offset += 1;
            } else if (bytes[offset] < 224) {
              charCode = ((bytes[offset] & 0x3f) << 6) + (bytes[offset + 1] & 0x3f);
              offset += 2;
            } else {
              charCode = ((bytes[offset] & 0x0f) << 12) + ((bytes[offset + 1] & 0x3f) << 6) + (bytes[offset + 2] & 0x3f);
              offset += 3;
            }

            array.push(charCode);
          }

          return String.fromCharCode.apply(null, array);
        }

        _Pomelo.strdecode = strdecode;

        class Package {
          static encode(type, body) {
            var length = body ? body.length : 0;
            var buffer = new Uint8Array(PKG_HEAD_BYTES + length);
            var index = 0;
            buffer[index++] = type & 0xff;
            buffer[index++] = length >> 16 & 0xff;
            buffer[index++] = length >> 8 & 0xff;
            buffer[index++] = length & 0xff;

            if (body) {
              copyArray(buffer, index, body, 0, length);
            }

            return buffer;
          }

          static decode(buffer) {
            var offset = 0;
            var bytes = new Uint8Array(buffer);
            var length = 0;
            var rs = new Array();

            while (offset < bytes.length) {
              var type = bytes[offset++];
              length = (bytes[offset++] << 16 | bytes[offset++] << 8 | bytes[offset++]) >>> 0;
              var body = length ? Buffer.alloc(length) : Buffer.alloc(0);
              copyArray(body, 0, bytes, offset, length);
              offset += length;
              rs.push({
                type: type,
                body: body
              });
            }

            return rs.length === 1 ? rs[0] : rs;
          }

        }

        Package.TYPE_HANDSHAKE = 1;
        Package.TYPE_HANDSHAKE_ACK = 2;
        Package.TYPE_HEARTBEAT = 3;
        Package.TYPE_DATA = 4;
        Package.TYPE_KICK = 5;
        _Pomelo.Package = Package;

        class Message {
          /**
          * Message protocol encode.
          *
          * @param  {Number} id            message id
          * @param  {Number} type          message type
          * @param  {Number} compressRoute whether compress route
          * @param  {Number|String} route  route code or route string
          * @param  {Buffer} msg           message body bytes
          * @return {Buffer}               encode result
          */
          static encode(id, type, compressRoute, route, msg, compressGzip) {
            var idBytes = msgHasId(type) ? caculateMsgIdBytes(id) : 0;
            var msgLen = MSG_FLAG_BYTES + idBytes;

            if (msgHasRoute(type)) {
              if (compressRoute) {
                if (typeof route !== 'number') {
                  throw new Error('error flag for number route!');
                }

                msgLen += MSG_ROUTE_CODE_BYTES;
              } else {
                msgLen += MSG_ROUTE_LEN_BYTES;

                if (route) {
                  let routeBuffer = strencode(route);

                  if (routeBuffer.length > 255) {
                    throw new Error('route maxlength is overflow');
                  }

                  msgLen += routeBuffer.length;
                }
              }
            }

            if (msg) {
              msgLen += msg.length;
            }

            var buffer = Buffer.alloc(msgLen);
            var offset = 0; // add flag

            offset = encodeMsgFlag(type, compressRoute, buffer, offset); // add message id

            if (msgHasId(type)) {
              offset = encodeMsgId(id, buffer, offset);
            } // add route


            if (msgHasRoute(type)) {
              offset = encodeMsgRoute(compressRoute, route, buffer, offset);
            } // add body


            if (msg) {
              offset = encodeMsgBody(msg, buffer, offset);
            }

            return buffer;
          }
          /**
           * Message protocol decode.
           *
           * @param   buffer message bytes
           * @return         message object
           */


        }

        Message.TYPE_REQUEST = 0;
        Message.TYPE_NOTIFY = 1;
        Message.TYPE_RESPONSE = 2;
        Message.TYPE_PUSH = 3;

        Message.decode = function (buffer) {
          var bytes = buffer;
          var bytesLen = bytes.length || bytes.byteLength;
          var offset = 0;
          var id = 0;
          var route = 0; // parse flag

          var flag = bytes[offset++];
          var compressRoute = flag & MSG_COMPRESS_ROUTE_MASK;
          var type = flag >> 1 & MSG_TYPE_MASK;
          var compressGzip = flag >> 4 & MSG_COMPRESS_GZIP_MASK; // parse id

          if (msgHasId(type)) {
            var m = 0;
            var i = 0;

            do {
              //m = parseInt(bytes[offset]);
              m = bytes[offset];
              id += (m & 0x7f) << 7 * i;
              ++offset;
              ++i;
            } while (m >= 128);
          } // parse route


          if (msgHasRoute(type)) {
            if (compressRoute) {
              route = bytes[offset++] << 8 | bytes[offset++];
            } else {
              var routeLen = bytes[offset++];
              route = bytes.toString('binary', offset, offset + routeLen);
              offset += routeLen;
            }
          } // parse body


          var bodyLen = bytesLen - offset;
          var body = Buffer.alloc(bodyLen);
          bytes.copy(body, 0, offset, offset + bodyLen);
          return {
            id,
            type,
            compressRoute,
            route,
            body,
            compressGzip
          };
        };

        _Pomelo.Message = Message;

        function msgHasId(type) {
          return type === Message.TYPE_REQUEST || type === Message.TYPE_RESPONSE;
        }

        _Pomelo.msgHasId = msgHasId;
        ;

        function msgHasRoute(type) {
          return type === Message.TYPE_REQUEST || type === Message.TYPE_NOTIFY || type === Message.TYPE_PUSH;
        }

        _Pomelo.msgHasRoute = msgHasRoute;
        ;

        function caculateMsgIdBytes(id) {
          var len = 0;

          do {
            len += 1;
            id >>= 7;
          } while (id > 0);

          return len;
        }

        _Pomelo.caculateMsgIdBytes = caculateMsgIdBytes;
        ;

        function encodeMsgFlag(type, compressRoute, buffer, offset) {
          if (type !== Message.TYPE_REQUEST && type !== Message.TYPE_NOTIFY && type !== Message.TYPE_RESPONSE && type !== Message.TYPE_PUSH) {
            throw new Error('unkonw message type: ' + type);
          }

          buffer[offset] = type << 1 | (compressRoute ? 1 : 0);
          return offset + MSG_FLAG_BYTES;
        }

        _Pomelo.encodeMsgFlag = encodeMsgFlag;
        ;

        function encodeMsgId(id, buffer, offset) {
          do {
            var tmp = id % 128;
            var next = Math.floor(id / 128);

            if (next !== 0) {
              tmp = tmp + 128;
            }

            buffer[offset++] = tmp;
            id = next;
          } while (id !== 0);

          return offset;
        }

        _Pomelo.encodeMsgId = encodeMsgId;
        ;

        function encodeMsgRoute(compressRoute, route, buffer, offset) {
          if (compressRoute) {// if (route > MSG_ROUTE_CODE_MAX) {
            //     throw new Error('route number is overflow');
            // }
            // buffer[offset++] = (route >> 8) & 0xff;
            // buffer[offset++] = route & 0xff;
          } else {
            if (route) {
              buffer[offset++] = route.length & 0xff;
              copyArray(buffer, offset, route, 0, route.length);
              offset += route.length;
            } else {
              buffer[offset++] = 0;
            }
          }

          return offset;
        }

        _Pomelo.encodeMsgRoute = encodeMsgRoute;
        ;

        function encodeMsgBody(msg, buffer, offset) {
          copyArray(buffer, offset, msg, 0, msg.length);
          return offset + msg.length;
        }

        _Pomelo.encodeMsgBody = encodeMsgBody;
        ;
      })(Pomelo || _export("Pomelo", Pomelo = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6dd88af6eed32990ad8688123b8c1e6ff5727a14.js.map
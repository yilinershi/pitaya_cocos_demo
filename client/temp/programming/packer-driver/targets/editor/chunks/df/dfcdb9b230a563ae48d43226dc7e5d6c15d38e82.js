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
          return new Buffer(str);
        }

        _Pomelo.strencode = strencode;

        function strdecode(buffer) {
          // encoding defaults to 'utf8'
          return buffer.toString();
        }

        _Pomelo.strdecode = strdecode;

        class Package {
          static encode(type, body) {
            var length = body ? body.length : 0;
            var buffer;

            if (type !== Package.TYPE_DATA) {
              buffer = Buffer.alloc(PKG_HEAD_BYTES + length);
            } else {
              length -= PKG_HEAD_BYTES;
              buffer = body;
            }

            var index = 0;
            buffer[index++] = type & 0xff;
            buffer[index++] = length >> 16 & 0xff;
            buffer[index++] = length >> 8 & 0xff;
            buffer[index++] = length & 0xff;

            if (body && type !== Package.TYPE_DATA) {
              body.copy(buffer, index, 0, length);
            }

            return buffer;
          }

          static encodeBatch(bodys) {
            if (bodys.length === 0) {
              return null;
            }

            let length = 0;

            for (let i = 0, l = bodys.length; i < l; ++i) {
              length += bodys[i].length;
            }

            let buffer = Buffer.alloc(length);
            let index = 0,
                typeFlag = Package.TYPE_DATA & 0xff;

            for (let i = 0, l = bodys.length; i < l; ++i) {
              let body = bodys[i],
                  bodyLen = body.length - PKG_HEAD_BYTES;
              buffer[index++] = typeFlag;
              buffer[index++] = bodyLen >> 16 & 0xff;
              buffer[index++] = bodyLen >> 8 & 0xff;
              buffer[index++] = bodyLen & 0xff;
              body.copy(buffer, index, 4, bodyLen);
              index += bodyLen - 4;
            }

            return buffer;
          }

          static decode(buffer) {
            var offset = 0;
            var length = 0;
            var rs = new Array();

            while (offset < buffer.length) {
              var type = buffer[offset++];
              length = (buffer[offset++] << 16 | buffer[offset++] << 8 | buffer[offset++]) >>> 0;
              var body = length ? Buffer.alloc(length) : undefined;

              if (body) {
                buffer.copy(body, 0, offset, offset + length);
              }

              offset += length;
              rs.push({
                type: type,
                body: body
              });
            }

            return rs;
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
           * @param  id            message id
           * @param  type          message type
           * @param  compressRoute whether compress route
           * @param  route         route code or route string
           * @param  msg           message body bytes
           * @return               encode result
           */
          static encode(id, type, compressRoute, route, msg, compressGzip) {
            // caculate message max length
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
                  let buff = strencode(route);

                  if (buff.length > 255) {
                    throw new Error('route maxlength is overflow');
                  }

                  msgLen += buff.length;
                }
              }
            }

            if (msg) {
              msgLen += msg.length;
            }

            var buffer = new Buffer(PKG_HEAD_BYTES + msgLen);
            var offset = PKG_HEAD_BYTES; // add flag

            offset = encodeMsgFlag(type, compressRoute, buffer, offset, compressGzip); // add message id

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

        /**
         * Package protocol encode.
         *
         * Pomelo package format:
         * +------+-------------+------------------+
         * | type | body length |       body       |
         * +------+-------------+------------------+
         *
         * Head: 4bytes
         *   0: package type,
         *      1 - handshake,
         *      2 - handshake ack,
         *      3 - heartbeat,
         *      4 - data
         *      5 - kick
         *   1 - 3: big-endian body length
         * Body: body length bytes
         *
         * @param  {Number}    type   package type
         * @param  {ByteArray} body   body content in bytes
         * @return {ByteArray}        new byte array that contains encode result
         */
        function msgHasId(type) {
          return type === Message.TYPE_REQUEST || type === Message.TYPE_RESPONSE;
        }

        function msgHasRoute(type) {
          return type === Message.TYPE_REQUEST || type === Message.TYPE_NOTIFY || type === Message.TYPE_PUSH;
        }

        function caculateMsgIdBytes(id) {
          var len = 0;

          do {
            len += 1;
            id >>= 7;
          } while (id > 0);

          return len;
        }

        function encodeMsgFlag(type, compressRoute, buffer, offset, compressGzip) {
          if (type !== Message.TYPE_REQUEST && type !== Message.TYPE_NOTIFY && type !== Message.TYPE_RESPONSE && type !== Message.TYPE_PUSH) {
            throw new Error('unkonw message type: ' + type);
          }

          buffer[offset] = type << 1 | (compressRoute ? 1 : 0);

          if (compressGzip) {
            buffer[offset] = buffer[offset] | MSG_COMPRESS_GZIP_ENCODE_MASK;
          }

          return offset + MSG_FLAG_BYTES;
        }

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

        function encodeMsgRoute(compressRoute, route, buffer, offset) {
          if (compressRoute) {
            if (route > MSG_ROUTE_CODE_MAX) {
              throw new Error('route number is overflow');
            }

            buffer[offset++] = route >> 8 & 0xff;
            buffer[offset++] = route & 0xff;
          } else {
            if (route) {
              buffer[offset++] = route.length & 0xff;
              buffer.write(route, offset, route.length, 'binary');
              offset += route.length;
            } else {
              buffer[offset++] = 0;
            }
          }

          return offset;
        }

        function encodeMsgBody(msg, buffer, offset) {
          msg.copy(buffer, offset, 0, msg.length);
          return offset + msg.length;
        }
      })(Pomelo || _export("Pomelo", Pomelo = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dfcdb9b230a563ae48d43226dc7e5d6c15d38e82.js.map
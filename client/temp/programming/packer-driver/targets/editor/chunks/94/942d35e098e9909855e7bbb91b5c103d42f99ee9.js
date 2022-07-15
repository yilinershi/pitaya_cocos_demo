System.register(["__unresolved_0", "protobufjs/minimal.js"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_protobufjsMinimalJs) {
      _req = _protobufjsMinimalJs.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
        "use strict";

        var $protobuf = require("protobufjs/minimal.js"); // Common aliases


        var $Reader = $protobuf.Reader,
            $Writer = $protobuf.Writer,
            $util = $protobuf.util; // Exported root namespace

        var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

        $root.chat = function () {
          /**
           * Namespace chat.
           * @exports chat
           * @namespace
           */
          var chat = {};
          /**
           * ChatGroup enum.
           * @name chat.ChatGroup
           * @enum {number}
           * @property {number} World=0 World value
           * @property {number} Club=1 Club value
           */

          chat.ChatGroup = function () {
            var valuesById = {},
                values = Object.create(valuesById);
            values[valuesById[0] = "World"] = 0;
            values[valuesById[1] = "Club"] = 1;
            return values;
          }();

          chat.InputChatInfo = function () {
            /**
             * Properties of an InputChatInfo.
             * @memberof chat
             * @interface IInputChatInfo
             * @property {chat.ChatGroup|null} [Channel] InputChatInfo Channel
             * @property {string|null} [Content] InputChatInfo Content
             */

            /**
             * Constructs a new InputChatInfo.
             * @memberof chat
             * @classdesc Represents an InputChatInfo.
             * @implements IInputChatInfo
             * @constructor
             * @param {chat.IInputChatInfo=} [properties] Properties to set
             */
            function InputChatInfo(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * InputChatInfo Channel.
             * @member {chat.ChatGroup} Channel
             * @memberof chat.InputChatInfo
             * @instance
             */


            InputChatInfo.prototype.Channel = 0;
            /**
             * InputChatInfo Content.
             * @member {string} Content
             * @memberof chat.InputChatInfo
             * @instance
             */

            InputChatInfo.prototype.Content = "";
            /**
             * Creates a new InputChatInfo instance using the specified properties.
             * @function create
             * @memberof chat.InputChatInfo
             * @static
             * @param {chat.IInputChatInfo=} [properties] Properties to set
             * @returns {chat.InputChatInfo} InputChatInfo instance
             */

            InputChatInfo.create = function create(properties) {
              return new InputChatInfo(properties);
            };
            /**
             * Encodes the specified InputChatInfo message. Does not implicitly {@link chat.InputChatInfo.verify|verify} messages.
             * @function encode
             * @memberof chat.InputChatInfo
             * @static
             * @param {chat.IInputChatInfo} message InputChatInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            InputChatInfo.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.Channel != null && Object.hasOwnProperty.call(message, "Channel")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.Channel);
              if (message.Content != null && Object.hasOwnProperty.call(message, "Content")) writer.uint32(
              /* id 2, wireType 2 =*/
              18).string(message.Content);
              return writer;
            };
            /**
             * Encodes the specified InputChatInfo message, length delimited. Does not implicitly {@link chat.InputChatInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.InputChatInfo
             * @static
             * @param {chat.IInputChatInfo} message InputChatInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            InputChatInfo.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an InputChatInfo message from the specified reader or buffer.
             * @function decode
             * @memberof chat.InputChatInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.InputChatInfo} InputChatInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            InputChatInfo.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.chat.InputChatInfo();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.Channel = reader.int32();
                    break;

                  case 2:
                    message.Content = reader.string();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes an InputChatInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.InputChatInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.InputChatInfo} InputChatInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            InputChatInfo.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an InputChatInfo message.
             * @function verify
             * @memberof chat.InputChatInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            InputChatInfo.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.Channel != null && message.hasOwnProperty("Channel")) switch (message.Channel) {
                default:
                  return "Channel: enum value expected";

                case 0:
                case 1:
                  break;
              }
              if (message.Content != null && message.hasOwnProperty("Content")) if (!$util.isString(message.Content)) return "Content: string expected";
              return null;
            };
            /**
             * Creates an InputChatInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.InputChatInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.InputChatInfo} InputChatInfo
             */


            InputChatInfo.fromObject = function fromObject(object) {
              if (object instanceof $root.chat.InputChatInfo) return object;
              var message = new $root.chat.InputChatInfo();

              switch (object.Channel) {
                case "World":
                case 0:
                  message.Channel = 0;
                  break;

                case "Club":
                case 1:
                  message.Channel = 1;
                  break;
              }

              if (object.Content != null) message.Content = String(object.Content);
              return message;
            };
            /**
             * Creates a plain object from an InputChatInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.InputChatInfo
             * @static
             * @param {chat.InputChatInfo} message InputChatInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            InputChatInfo.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.Channel = options.enums === String ? "World" : 0;
                object.Content = "";
              }

              if (message.Channel != null && message.hasOwnProperty("Channel")) object.Channel = options.enums === String ? $root.chat.ChatGroup[message.Channel] : message.Channel;
              if (message.Content != null && message.hasOwnProperty("Content")) object.Content = message.Content;
              return object;
            };
            /**
             * Converts this InputChatInfo to JSON.
             * @function toJSON
             * @memberof chat.InputChatInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            InputChatInfo.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return InputChatInfo;
          }();

          chat.ChatInfo = function () {
            /**
             * Properties of a ChatInfo.
             * @memberof chat
             * @interface IChatInfo
             * @property {common.IPlayerBaseInfo|null} [From] ChatInfo From
             * @property {string|null} [Content] ChatInfo Content
             */

            /**
             * Constructs a new ChatInfo.
             * @memberof chat
             * @classdesc Represents a ChatInfo.
             * @implements IChatInfo
             * @constructor
             * @param {chat.IChatInfo=} [properties] Properties to set
             */
            function ChatInfo(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * ChatInfo From.
             * @member {common.IPlayerBaseInfo|null|undefined} From
             * @memberof chat.ChatInfo
             * @instance
             */


            ChatInfo.prototype.From = null;
            /**
             * ChatInfo Content.
             * @member {string} Content
             * @memberof chat.ChatInfo
             * @instance
             */

            ChatInfo.prototype.Content = "";
            /**
             * Creates a new ChatInfo instance using the specified properties.
             * @function create
             * @memberof chat.ChatInfo
             * @static
             * @param {chat.IChatInfo=} [properties] Properties to set
             * @returns {chat.ChatInfo} ChatInfo instance
             */

            ChatInfo.create = function create(properties) {
              return new ChatInfo(properties);
            };
            /**
             * Encodes the specified ChatInfo message. Does not implicitly {@link chat.ChatInfo.verify|verify} messages.
             * @function encode
             * @memberof chat.ChatInfo
             * @static
             * @param {chat.IChatInfo} message ChatInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ChatInfo.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.From != null && Object.hasOwnProperty.call(message, "From")) $root.common.PlayerBaseInfo.encode(message.From, writer.uint32(
              /* id 1, wireType 2 =*/
              10).fork()).ldelim();
              if (message.Content != null && Object.hasOwnProperty.call(message, "Content")) writer.uint32(
              /* id 3, wireType 2 =*/
              26).string(message.Content);
              return writer;
            };
            /**
             * Encodes the specified ChatInfo message, length delimited. Does not implicitly {@link chat.ChatInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.ChatInfo
             * @static
             * @param {chat.IChatInfo} message ChatInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ChatInfo.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a ChatInfo message from the specified reader or buffer.
             * @function decode
             * @memberof chat.ChatInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.ChatInfo} ChatInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ChatInfo.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.chat.ChatInfo();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.From = $root.common.PlayerBaseInfo.decode(reader, reader.uint32());
                    break;

                  case 3:
                    message.Content = reader.string();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a ChatInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.ChatInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.ChatInfo} ChatInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ChatInfo.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a ChatInfo message.
             * @function verify
             * @memberof chat.ChatInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            ChatInfo.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";

              if (message.From != null && message.hasOwnProperty("From")) {
                var error = $root.common.PlayerBaseInfo.verify(message.From);
                if (error) return "From." + error;
              }

              if (message.Content != null && message.hasOwnProperty("Content")) if (!$util.isString(message.Content)) return "Content: string expected";
              return null;
            };
            /**
             * Creates a ChatInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.ChatInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.ChatInfo} ChatInfo
             */


            ChatInfo.fromObject = function fromObject(object) {
              if (object instanceof $root.chat.ChatInfo) return object;
              var message = new $root.chat.ChatInfo();

              if (object.From != null) {
                if (typeof object.From !== "object") throw TypeError(".chat.ChatInfo.From: object expected");
                message.From = $root.common.PlayerBaseInfo.fromObject(object.From);
              }

              if (object.Content != null) message.Content = String(object.Content);
              return message;
            };
            /**
             * Creates a plain object from a ChatInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.ChatInfo
             * @static
             * @param {chat.ChatInfo} message ChatInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            ChatInfo.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.From = null;
                object.Content = "";
              }

              if (message.From != null && message.hasOwnProperty("From")) object.From = $root.common.PlayerBaseInfo.toObject(message.From, options);
              if (message.Content != null && message.hasOwnProperty("Content")) object.Content = message.Content;
              return object;
            };
            /**
             * Converts this ChatInfo to JSON.
             * @function toJSON
             * @memberof chat.ChatInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            ChatInfo.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ChatInfo;
          }();

          chat.SyncChatInfo = function () {
            /**
             * Properties of a SyncChatInfo.
             * @memberof chat
             * @interface ISyncChatInfo
             * @property {chat.ChatGroup|null} [Group] SyncChatInfo Group
             * @property {chat.IChatInfo|null} [ChatInfo] SyncChatInfo ChatInfo
             */

            /**
             * Constructs a new SyncChatInfo.
             * @memberof chat
             * @classdesc Represents a SyncChatInfo.
             * @implements ISyncChatInfo
             * @constructor
             * @param {chat.ISyncChatInfo=} [properties] Properties to set
             */
            function SyncChatInfo(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * SyncChatInfo Group.
             * @member {chat.ChatGroup} Group
             * @memberof chat.SyncChatInfo
             * @instance
             */


            SyncChatInfo.prototype.Group = 0;
            /**
             * SyncChatInfo ChatInfo.
             * @member {chat.IChatInfo|null|undefined} ChatInfo
             * @memberof chat.SyncChatInfo
             * @instance
             */

            SyncChatInfo.prototype.ChatInfo = null;
            /**
             * Creates a new SyncChatInfo instance using the specified properties.
             * @function create
             * @memberof chat.SyncChatInfo
             * @static
             * @param {chat.ISyncChatInfo=} [properties] Properties to set
             * @returns {chat.SyncChatInfo} SyncChatInfo instance
             */

            SyncChatInfo.create = function create(properties) {
              return new SyncChatInfo(properties);
            };
            /**
             * Encodes the specified SyncChatInfo message. Does not implicitly {@link chat.SyncChatInfo.verify|verify} messages.
             * @function encode
             * @memberof chat.SyncChatInfo
             * @static
             * @param {chat.ISyncChatInfo} message SyncChatInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            SyncChatInfo.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.Group != null && Object.hasOwnProperty.call(message, "Group")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.Group);
              if (message.ChatInfo != null && Object.hasOwnProperty.call(message, "ChatInfo")) $root.chat.ChatInfo.encode(message.ChatInfo, writer.uint32(
              /* id 2, wireType 2 =*/
              18).fork()).ldelim();
              return writer;
            };
            /**
             * Encodes the specified SyncChatInfo message, length delimited. Does not implicitly {@link chat.SyncChatInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.SyncChatInfo
             * @static
             * @param {chat.ISyncChatInfo} message SyncChatInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            SyncChatInfo.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a SyncChatInfo message from the specified reader or buffer.
             * @function decode
             * @memberof chat.SyncChatInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.SyncChatInfo} SyncChatInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            SyncChatInfo.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.chat.SyncChatInfo();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.Group = reader.int32();
                    break;

                  case 2:
                    message.ChatInfo = $root.chat.ChatInfo.decode(reader, reader.uint32());
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a SyncChatInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.SyncChatInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.SyncChatInfo} SyncChatInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            SyncChatInfo.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a SyncChatInfo message.
             * @function verify
             * @memberof chat.SyncChatInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            SyncChatInfo.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.Group != null && message.hasOwnProperty("Group")) switch (message.Group) {
                default:
                  return "Group: enum value expected";

                case 0:
                case 1:
                  break;
              }

              if (message.ChatInfo != null && message.hasOwnProperty("ChatInfo")) {
                var error = $root.chat.ChatInfo.verify(message.ChatInfo);
                if (error) return "ChatInfo." + error;
              }

              return null;
            };
            /**
             * Creates a SyncChatInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.SyncChatInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.SyncChatInfo} SyncChatInfo
             */


            SyncChatInfo.fromObject = function fromObject(object) {
              if (object instanceof $root.chat.SyncChatInfo) return object;
              var message = new $root.chat.SyncChatInfo();

              switch (object.Group) {
                case "World":
                case 0:
                  message.Group = 0;
                  break;

                case "Club":
                case 1:
                  message.Group = 1;
                  break;
              }

              if (object.ChatInfo != null) {
                if (typeof object.ChatInfo !== "object") throw TypeError(".chat.SyncChatInfo.ChatInfo: object expected");
                message.ChatInfo = $root.chat.ChatInfo.fromObject(object.ChatInfo);
              }

              return message;
            };
            /**
             * Creates a plain object from a SyncChatInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.SyncChatInfo
             * @static
             * @param {chat.SyncChatInfo} message SyncChatInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            SyncChatInfo.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.Group = options.enums === String ? "World" : 0;
                object.ChatInfo = null;
              }

              if (message.Group != null && message.hasOwnProperty("Group")) object.Group = options.enums === String ? $root.chat.ChatGroup[message.Group] : message.Group;
              if (message.ChatInfo != null && message.hasOwnProperty("ChatInfo")) object.ChatInfo = $root.chat.ChatInfo.toObject(message.ChatInfo, options);
              return object;
            };
            /**
             * Converts this SyncChatInfo to JSON.
             * @function toJSON
             * @memberof chat.SyncChatInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            SyncChatInfo.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SyncChatInfo;
          }();

          return chat;
        }();

        $root.common = function () {
          /**
           * Namespace common.
           * @exports common
           * @namespace
           */
          var common = {};
          /**
           * ErrorCode enum.
           * @name common.ErrorCode
           * @enum {number}
           * @property {number} Default=0 Default value
           * @property {number} OK=1 OK value
           * @property {number} EntryError=2 EntryError value
           * @property {number} LoginAccountUnExistent=3 LoginAccountUnExistent value
           * @property {number} LoginPasswordError=4 LoginPasswordError value
           * @property {number} RegisterAccountExit=5 RegisterAccountExit value
           * @property {number} AuthFailed=6 AuthFailed value
           * @property {number} ChangePlayerInfoFailed=7 ChangePlayerInfoFailed value
           */

          common.ErrorCode = function () {
            var valuesById = {},
                values = Object.create(valuesById);
            values[valuesById[0] = "Default"] = 0;
            values[valuesById[1] = "OK"] = 1;
            values[valuesById[2] = "EntryError"] = 2;
            values[valuesById[3] = "LoginAccountUnExistent"] = 3;
            values[valuesById[4] = "LoginPasswordError"] = 4;
            values[valuesById[5] = "RegisterAccountExit"] = 5;
            values[valuesById[6] = "AuthFailed"] = 6;
            values[valuesById[7] = "ChangePlayerInfoFailed"] = 7;
            return values;
          }();
          /**
           * Gender enum.
           * @name common.Gender
           * @enum {number}
           * @property {number} Unknow=0 Unknow value
           * @property {number} Male=1 Male value
           * @property {number} Female=2 Female value
           */


          common.Gender = function () {
            var valuesById = {},
                values = Object.create(valuesById);
            values[valuesById[0] = "Unknow"] = 0;
            values[valuesById[1] = "Male"] = 1;
            values[valuesById[2] = "Female"] = 2;
            return values;
          }();
          /**
           * PackSystem enum.
           * @name common.PackSystem
           * @enum {number}
           * @property {number} Web=0 Web value
           * @property {number} Android=1 Android value
           * @property {number} IOS=2 IOS value
           * @property {number} Win=3 Win value
           * @property {number} HongMeng=4 HongMeng value
           */


          common.PackSystem = function () {
            var valuesById = {},
                values = Object.create(valuesById);
            values[valuesById[0] = "Web"] = 0;
            values[valuesById[1] = "Android"] = 1;
            values[valuesById[2] = "IOS"] = 2;
            values[valuesById[3] = "Win"] = 3;
            values[valuesById[4] = "HongMeng"] = 4;
            return values;
          }();

          common.PlayerBaseInfo = function () {
            /**
             * Properties of a PlayerBaseInfo.
             * @memberof common
             * @interface IPlayerBaseInfo
             * @property {string|null} [Guid] PlayerBaseInfo Guid
             * @property {string|null} [NickName] PlayerBaseInfo NickName
             * @property {common.Gender|null} [Gender] PlayerBaseInfo Gender
             * @property {string|null} [Avatar] PlayerBaseInfo Avatar
             */

            /**
             * Constructs a new PlayerBaseInfo.
             * @memberof common
             * @classdesc Represents a PlayerBaseInfo.
             * @implements IPlayerBaseInfo
             * @constructor
             * @param {common.IPlayerBaseInfo=} [properties] Properties to set
             */
            function PlayerBaseInfo(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * PlayerBaseInfo Guid.
             * @member {string} Guid
             * @memberof common.PlayerBaseInfo
             * @instance
             */


            PlayerBaseInfo.prototype.Guid = "";
            /**
             * PlayerBaseInfo NickName.
             * @member {string} NickName
             * @memberof common.PlayerBaseInfo
             * @instance
             */

            PlayerBaseInfo.prototype.NickName = "";
            /**
             * PlayerBaseInfo Gender.
             * @member {common.Gender} Gender
             * @memberof common.PlayerBaseInfo
             * @instance
             */

            PlayerBaseInfo.prototype.Gender = 0;
            /**
             * PlayerBaseInfo Avatar.
             * @member {string} Avatar
             * @memberof common.PlayerBaseInfo
             * @instance
             */

            PlayerBaseInfo.prototype.Avatar = "";
            /**
             * Creates a new PlayerBaseInfo instance using the specified properties.
             * @function create
             * @memberof common.PlayerBaseInfo
             * @static
             * @param {common.IPlayerBaseInfo=} [properties] Properties to set
             * @returns {common.PlayerBaseInfo} PlayerBaseInfo instance
             */

            PlayerBaseInfo.create = function create(properties) {
              return new PlayerBaseInfo(properties);
            };
            /**
             * Encodes the specified PlayerBaseInfo message. Does not implicitly {@link common.PlayerBaseInfo.verify|verify} messages.
             * @function encode
             * @memberof common.PlayerBaseInfo
             * @static
             * @param {common.IPlayerBaseInfo} message PlayerBaseInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            PlayerBaseInfo.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.Guid != null && Object.hasOwnProperty.call(message, "Guid")) writer.uint32(
              /* id 1, wireType 2 =*/
              10).string(message.Guid);
              if (message.NickName != null && Object.hasOwnProperty.call(message, "NickName")) writer.uint32(
              /* id 2, wireType 2 =*/
              18).string(message.NickName);
              if (message.Gender != null && Object.hasOwnProperty.call(message, "Gender")) writer.uint32(
              /* id 3, wireType 0 =*/
              24).int32(message.Gender);
              if (message.Avatar != null && Object.hasOwnProperty.call(message, "Avatar")) writer.uint32(
              /* id 4, wireType 2 =*/
              34).string(message.Avatar);
              return writer;
            };
            /**
             * Encodes the specified PlayerBaseInfo message, length delimited. Does not implicitly {@link common.PlayerBaseInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.PlayerBaseInfo
             * @static
             * @param {common.IPlayerBaseInfo} message PlayerBaseInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            PlayerBaseInfo.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a PlayerBaseInfo message from the specified reader or buffer.
             * @function decode
             * @memberof common.PlayerBaseInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.PlayerBaseInfo} PlayerBaseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            PlayerBaseInfo.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.common.PlayerBaseInfo();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.Guid = reader.string();
                    break;

                  case 2:
                    message.NickName = reader.string();
                    break;

                  case 3:
                    message.Gender = reader.int32();
                    break;

                  case 4:
                    message.Avatar = reader.string();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a PlayerBaseInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.PlayerBaseInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.PlayerBaseInfo} PlayerBaseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            PlayerBaseInfo.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a PlayerBaseInfo message.
             * @function verify
             * @memberof common.PlayerBaseInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            PlayerBaseInfo.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.Guid != null && message.hasOwnProperty("Guid")) if (!$util.isString(message.Guid)) return "Guid: string expected";
              if (message.NickName != null && message.hasOwnProperty("NickName")) if (!$util.isString(message.NickName)) return "NickName: string expected";
              if (message.Gender != null && message.hasOwnProperty("Gender")) switch (message.Gender) {
                default:
                  return "Gender: enum value expected";

                case 0:
                case 1:
                case 2:
                  break;
              }
              if (message.Avatar != null && message.hasOwnProperty("Avatar")) if (!$util.isString(message.Avatar)) return "Avatar: string expected";
              return null;
            };
            /**
             * Creates a PlayerBaseInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.PlayerBaseInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.PlayerBaseInfo} PlayerBaseInfo
             */


            PlayerBaseInfo.fromObject = function fromObject(object) {
              if (object instanceof $root.common.PlayerBaseInfo) return object;
              var message = new $root.common.PlayerBaseInfo();
              if (object.Guid != null) message.Guid = String(object.Guid);
              if (object.NickName != null) message.NickName = String(object.NickName);

              switch (object.Gender) {
                case "Unknow":
                case 0:
                  message.Gender = 0;
                  break;

                case "Male":
                case 1:
                  message.Gender = 1;
                  break;

                case "Female":
                case 2:
                  message.Gender = 2;
                  break;
              }

              if (object.Avatar != null) message.Avatar = String(object.Avatar);
              return message;
            };
            /**
             * Creates a plain object from a PlayerBaseInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.PlayerBaseInfo
             * @static
             * @param {common.PlayerBaseInfo} message PlayerBaseInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            PlayerBaseInfo.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.Guid = "";
                object.NickName = "";
                object.Gender = options.enums === String ? "Unknow" : 0;
                object.Avatar = "";
              }

              if (message.Guid != null && message.hasOwnProperty("Guid")) object.Guid = message.Guid;
              if (message.NickName != null && message.hasOwnProperty("NickName")) object.NickName = message.NickName;
              if (message.Gender != null && message.hasOwnProperty("Gender")) object.Gender = options.enums === String ? $root.common.Gender[message.Gender] : message.Gender;
              if (message.Avatar != null && message.hasOwnProperty("Avatar")) object.Avatar = message.Avatar;
              return object;
            };
            /**
             * Converts this PlayerBaseInfo to JSON.
             * @function toJSON
             * @memberof common.PlayerBaseInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            PlayerBaseInfo.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PlayerBaseInfo;
          }();

          return common;
        }();

        $root.http = function () {
          /**
           * Namespace http.
           * @exports http
           * @namespace
           */
          var http = {};

          http.ReqEntry = function () {
            /**
             * Properties of a ReqEntry.
             * @memberof http
             * @interface IReqEntry
             * @property {string|null} [Secret] ReqEntry Secret
             * @property {string|null} [UUID] ReqEntry UUID
             * @property {http.ReqEntry.EnumPlatform|null} [Platform] ReqEntry Platform
             * @property {http.ReqEntry.EnumEnv|null} [Env] ReqEntry Env
             * @property {string|null} [ResVersion] ReqEntry ResVersion
             * @property {string|null} [GameVersion] ReqEntry GameVersion
             */

            /**
             * Constructs a new ReqEntry.
             * @memberof http
             * @classdesc Represents a ReqEntry.
             * @implements IReqEntry
             * @constructor
             * @param {http.IReqEntry=} [properties] Properties to set
             */
            function ReqEntry(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * ReqEntry Secret.
             * @member {string} Secret
             * @memberof http.ReqEntry
             * @instance
             */


            ReqEntry.prototype.Secret = "";
            /**
             * ReqEntry UUID.
             * @member {string} UUID
             * @memberof http.ReqEntry
             * @instance
             */

            ReqEntry.prototype.UUID = "";
            /**
             * ReqEntry Platform.
             * @member {http.ReqEntry.EnumPlatform} Platform
             * @memberof http.ReqEntry
             * @instance
             */

            ReqEntry.prototype.Platform = 0;
            /**
             * ReqEntry Env.
             * @member {http.ReqEntry.EnumEnv} Env
             * @memberof http.ReqEntry
             * @instance
             */

            ReqEntry.prototype.Env = 0;
            /**
             * ReqEntry ResVersion.
             * @member {string} ResVersion
             * @memberof http.ReqEntry
             * @instance
             */

            ReqEntry.prototype.ResVersion = "";
            /**
             * ReqEntry GameVersion.
             * @member {string} GameVersion
             * @memberof http.ReqEntry
             * @instance
             */

            ReqEntry.prototype.GameVersion = "";
            /**
             * Creates a new ReqEntry instance using the specified properties.
             * @function create
             * @memberof http.ReqEntry
             * @static
             * @param {http.IReqEntry=} [properties] Properties to set
             * @returns {http.ReqEntry} ReqEntry instance
             */

            ReqEntry.create = function create(properties) {
              return new ReqEntry(properties);
            };
            /**
             * Encodes the specified ReqEntry message. Does not implicitly {@link http.ReqEntry.verify|verify} messages.
             * @function encode
             * @memberof http.ReqEntry
             * @static
             * @param {http.IReqEntry} message ReqEntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ReqEntry.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.Secret != null && Object.hasOwnProperty.call(message, "Secret")) writer.uint32(
              /* id 1, wireType 2 =*/
              10).string(message.Secret);
              if (message.UUID != null && Object.hasOwnProperty.call(message, "UUID")) writer.uint32(
              /* id 2, wireType 2 =*/
              18).string(message.UUID);
              if (message.Platform != null && Object.hasOwnProperty.call(message, "Platform")) writer.uint32(
              /* id 3, wireType 0 =*/
              24).int32(message.Platform);
              if (message.Env != null && Object.hasOwnProperty.call(message, "Env")) writer.uint32(
              /* id 4, wireType 0 =*/
              32).int32(message.Env);
              if (message.ResVersion != null && Object.hasOwnProperty.call(message, "ResVersion")) writer.uint32(
              /* id 5, wireType 2 =*/
              42).string(message.ResVersion);
              if (message.GameVersion != null && Object.hasOwnProperty.call(message, "GameVersion")) writer.uint32(
              /* id 6, wireType 2 =*/
              50).string(message.GameVersion);
              return writer;
            };
            /**
             * Encodes the specified ReqEntry message, length delimited. Does not implicitly {@link http.ReqEntry.verify|verify} messages.
             * @function encodeDelimited
             * @memberof http.ReqEntry
             * @static
             * @param {http.IReqEntry} message ReqEntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ReqEntry.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a ReqEntry message from the specified reader or buffer.
             * @function decode
             * @memberof http.ReqEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {http.ReqEntry} ReqEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ReqEntry.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.http.ReqEntry();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.Secret = reader.string();
                    break;

                  case 2:
                    message.UUID = reader.string();
                    break;

                  case 3:
                    message.Platform = reader.int32();
                    break;

                  case 4:
                    message.Env = reader.int32();
                    break;

                  case 5:
                    message.ResVersion = reader.string();
                    break;

                  case 6:
                    message.GameVersion = reader.string();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a ReqEntry message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof http.ReqEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {http.ReqEntry} ReqEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ReqEntry.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a ReqEntry message.
             * @function verify
             * @memberof http.ReqEntry
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            ReqEntry.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.Secret != null && message.hasOwnProperty("Secret")) if (!$util.isString(message.Secret)) return "Secret: string expected";
              if (message.UUID != null && message.hasOwnProperty("UUID")) if (!$util.isString(message.UUID)) return "UUID: string expected";
              if (message.Platform != null && message.hasOwnProperty("Platform")) switch (message.Platform) {
                default:
                  return "Platform: enum value expected";

                case 0:
                case 1:
                case 2:
                case 3:
                  break;
              }
              if (message.Env != null && message.hasOwnProperty("Env")) switch (message.Env) {
                default:
                  return "Env: enum value expected";

                case 0:
                case 2:
                case 1:
                  break;
              }
              if (message.ResVersion != null && message.hasOwnProperty("ResVersion")) if (!$util.isString(message.ResVersion)) return "ResVersion: string expected";
              if (message.GameVersion != null && message.hasOwnProperty("GameVersion")) if (!$util.isString(message.GameVersion)) return "GameVersion: string expected";
              return null;
            };
            /**
             * Creates a ReqEntry message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof http.ReqEntry
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {http.ReqEntry} ReqEntry
             */


            ReqEntry.fromObject = function fromObject(object) {
              if (object instanceof $root.http.ReqEntry) return object;
              var message = new $root.http.ReqEntry();
              if (object.Secret != null) message.Secret = String(object.Secret);
              if (object.UUID != null) message.UUID = String(object.UUID);

              switch (object.Platform) {
                case "None":
                case 0:
                  message.Platform = 0;
                  break;

                case "Android":
                case 1:
                  message.Platform = 1;
                  break;

                case "Ios":
                case 2:
                  message.Platform = 2;
                  break;

                case "WinPC":
                case 3:
                  message.Platform = 3;
                  break;
              }

              switch (object.Env) {
                case "Dev":
                case 0:
                  message.Env = 0;
                  break;

                case "Alpha":
                case 2:
                  message.Env = 2;
                  break;

                case "Office":
                case 1:
                  message.Env = 1;
                  break;
              }

              if (object.ResVersion != null) message.ResVersion = String(object.ResVersion);
              if (object.GameVersion != null) message.GameVersion = String(object.GameVersion);
              return message;
            };
            /**
             * Creates a plain object from a ReqEntry message. Also converts values to other types if specified.
             * @function toObject
             * @memberof http.ReqEntry
             * @static
             * @param {http.ReqEntry} message ReqEntry
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            ReqEntry.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.Secret = "";
                object.UUID = "";
                object.Platform = options.enums === String ? "None" : 0;
                object.Env = options.enums === String ? "Dev" : 0;
                object.ResVersion = "";
                object.GameVersion = "";
              }

              if (message.Secret != null && message.hasOwnProperty("Secret")) object.Secret = message.Secret;
              if (message.UUID != null && message.hasOwnProperty("UUID")) object.UUID = message.UUID;
              if (message.Platform != null && message.hasOwnProperty("Platform")) object.Platform = options.enums === String ? $root.http.ReqEntry.EnumPlatform[message.Platform] : message.Platform;
              if (message.Env != null && message.hasOwnProperty("Env")) object.Env = options.enums === String ? $root.http.ReqEntry.EnumEnv[message.Env] : message.Env;
              if (message.ResVersion != null && message.hasOwnProperty("ResVersion")) object.ResVersion = message.ResVersion;
              if (message.GameVersion != null && message.hasOwnProperty("GameVersion")) object.GameVersion = message.GameVersion;
              return object;
            };
            /**
             * Converts this ReqEntry to JSON.
             * @function toJSON
             * @memberof http.ReqEntry
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            ReqEntry.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * EnumPlatform enum.
             * @name http.ReqEntry.EnumPlatform
             * @enum {number}
             * @property {number} None=0 None value
             * @property {number} Android=1 Android value
             * @property {number} Ios=2 Ios value
             * @property {number} WinPC=3 WinPC value
             */


            ReqEntry.EnumPlatform = function () {
              var valuesById = {},
                  values = Object.create(valuesById);
              values[valuesById[0] = "None"] = 0;
              values[valuesById[1] = "Android"] = 1;
              values[valuesById[2] = "Ios"] = 2;
              values[valuesById[3] = "WinPC"] = 3;
              return values;
            }();
            /**
             * EnumEnv enum.
             * @name http.ReqEntry.EnumEnv
             * @enum {number}
             * @property {number} Dev=0 Dev value
             * @property {number} Alpha=2 Alpha value
             * @property {number} Office=1 Office value
             */


            ReqEntry.EnumEnv = function () {
              var valuesById = {},
                  values = Object.create(valuesById);
              values[valuesById[0] = "Dev"] = 0;
              values[valuesById[2] = "Alpha"] = 2;
              values[valuesById[1] = "Office"] = 1;
              return values;
            }();

            return ReqEntry;
          }();

          http.RespEntry = function () {
            /**
             * Properties of a RespEntry.
             * @memberof http
             * @interface IRespEntry
             * @property {common.ErrorCode|null} [ErrCode] RespEntry ErrCode
             * @property {string|null} [LoginUrl] RespEntry LoginUrl
             * @property {string|null} [RegisterUrl] RespEntry RegisterUrl
             * @property {http.RespEntry.IAddr|null} [TcpUrl] RespEntry TcpUrl
             * @property {http.RespEntry.IAddr|null} [WebSocketUrl] RespEntry WebSocketUrl
             */

            /**
             * Constructs a new RespEntry.
             * @memberof http
             * @classdesc Represents a RespEntry.
             * @implements IRespEntry
             * @constructor
             * @param {http.IRespEntry=} [properties] Properties to set
             */
            function RespEntry(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * RespEntry ErrCode.
             * @member {common.ErrorCode} ErrCode
             * @memberof http.RespEntry
             * @instance
             */


            RespEntry.prototype.ErrCode = 0;
            /**
             * RespEntry LoginUrl.
             * @member {string} LoginUrl
             * @memberof http.RespEntry
             * @instance
             */

            RespEntry.prototype.LoginUrl = "";
            /**
             * RespEntry RegisterUrl.
             * @member {string} RegisterUrl
             * @memberof http.RespEntry
             * @instance
             */

            RespEntry.prototype.RegisterUrl = "";
            /**
             * RespEntry TcpUrl.
             * @member {http.RespEntry.IAddr|null|undefined} TcpUrl
             * @memberof http.RespEntry
             * @instance
             */

            RespEntry.prototype.TcpUrl = null;
            /**
             * RespEntry WebSocketUrl.
             * @member {http.RespEntry.IAddr|null|undefined} WebSocketUrl
             * @memberof http.RespEntry
             * @instance
             */

            RespEntry.prototype.WebSocketUrl = null;
            /**
             * Creates a new RespEntry instance using the specified properties.
             * @function create
             * @memberof http.RespEntry
             * @static
             * @param {http.IRespEntry=} [properties] Properties to set
             * @returns {http.RespEntry} RespEntry instance
             */

            RespEntry.create = function create(properties) {
              return new RespEntry(properties);
            };
            /**
             * Encodes the specified RespEntry message. Does not implicitly {@link http.RespEntry.verify|verify} messages.
             * @function encode
             * @memberof http.RespEntry
             * @static
             * @param {http.IRespEntry} message RespEntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RespEntry.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.ErrCode != null && Object.hasOwnProperty.call(message, "ErrCode")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.ErrCode);
              if (message.LoginUrl != null && Object.hasOwnProperty.call(message, "LoginUrl")) writer.uint32(
              /* id 2, wireType 2 =*/
              18).string(message.LoginUrl);
              if (message.RegisterUrl != null && Object.hasOwnProperty.call(message, "RegisterUrl")) writer.uint32(
              /* id 3, wireType 2 =*/
              26).string(message.RegisterUrl);
              if (message.TcpUrl != null && Object.hasOwnProperty.call(message, "TcpUrl")) $root.http.RespEntry.Addr.encode(message.TcpUrl, writer.uint32(
              /* id 4, wireType 2 =*/
              34).fork()).ldelim();
              if (message.WebSocketUrl != null && Object.hasOwnProperty.call(message, "WebSocketUrl")) $root.http.RespEntry.Addr.encode(message.WebSocketUrl, writer.uint32(
              /* id 5, wireType 2 =*/
              42).fork()).ldelim();
              return writer;
            };
            /**
             * Encodes the specified RespEntry message, length delimited. Does not implicitly {@link http.RespEntry.verify|verify} messages.
             * @function encodeDelimited
             * @memberof http.RespEntry
             * @static
             * @param {http.IRespEntry} message RespEntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RespEntry.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a RespEntry message from the specified reader or buffer.
             * @function decode
             * @memberof http.RespEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {http.RespEntry} RespEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RespEntry.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.http.RespEntry();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.ErrCode = reader.int32();
                    break;

                  case 2:
                    message.LoginUrl = reader.string();
                    break;

                  case 3:
                    message.RegisterUrl = reader.string();
                    break;

                  case 4:
                    message.TcpUrl = $root.http.RespEntry.Addr.decode(reader, reader.uint32());
                    break;

                  case 5:
                    message.WebSocketUrl = $root.http.RespEntry.Addr.decode(reader, reader.uint32());
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a RespEntry message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof http.RespEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {http.RespEntry} RespEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RespEntry.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a RespEntry message.
             * @function verify
             * @memberof http.RespEntry
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            RespEntry.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.ErrCode != null && message.hasOwnProperty("ErrCode")) switch (message.ErrCode) {
                default:
                  return "ErrCode: enum value expected";

                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  break;
              }
              if (message.LoginUrl != null && message.hasOwnProperty("LoginUrl")) if (!$util.isString(message.LoginUrl)) return "LoginUrl: string expected";
              if (message.RegisterUrl != null && message.hasOwnProperty("RegisterUrl")) if (!$util.isString(message.RegisterUrl)) return "RegisterUrl: string expected";

              if (message.TcpUrl != null && message.hasOwnProperty("TcpUrl")) {
                var error = $root.http.RespEntry.Addr.verify(message.TcpUrl);
                if (error) return "TcpUrl." + error;
              }

              if (message.WebSocketUrl != null && message.hasOwnProperty("WebSocketUrl")) {
                var error = $root.http.RespEntry.Addr.verify(message.WebSocketUrl);
                if (error) return "WebSocketUrl." + error;
              }

              return null;
            };
            /**
             * Creates a RespEntry message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof http.RespEntry
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {http.RespEntry} RespEntry
             */


            RespEntry.fromObject = function fromObject(object) {
              if (object instanceof $root.http.RespEntry) return object;
              var message = new $root.http.RespEntry();

              switch (object.ErrCode) {
                case "Default":
                case 0:
                  message.ErrCode = 0;
                  break;

                case "OK":
                case 1:
                  message.ErrCode = 1;
                  break;

                case "EntryError":
                case 2:
                  message.ErrCode = 2;
                  break;

                case "LoginAccountUnExistent":
                case 3:
                  message.ErrCode = 3;
                  break;

                case "LoginPasswordError":
                case 4:
                  message.ErrCode = 4;
                  break;

                case "RegisterAccountExit":
                case 5:
                  message.ErrCode = 5;
                  break;

                case "AuthFailed":
                case 6:
                  message.ErrCode = 6;
                  break;

                case "ChangePlayerInfoFailed":
                case 7:
                  message.ErrCode = 7;
                  break;
              }

              if (object.LoginUrl != null) message.LoginUrl = String(object.LoginUrl);
              if (object.RegisterUrl != null) message.RegisterUrl = String(object.RegisterUrl);

              if (object.TcpUrl != null) {
                if (typeof object.TcpUrl !== "object") throw TypeError(".http.RespEntry.TcpUrl: object expected");
                message.TcpUrl = $root.http.RespEntry.Addr.fromObject(object.TcpUrl);
              }

              if (object.WebSocketUrl != null) {
                if (typeof object.WebSocketUrl !== "object") throw TypeError(".http.RespEntry.WebSocketUrl: object expected");
                message.WebSocketUrl = $root.http.RespEntry.Addr.fromObject(object.WebSocketUrl);
              }

              return message;
            };
            /**
             * Creates a plain object from a RespEntry message. Also converts values to other types if specified.
             * @function toObject
             * @memberof http.RespEntry
             * @static
             * @param {http.RespEntry} message RespEntry
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            RespEntry.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.ErrCode = options.enums === String ? "Default" : 0;
                object.LoginUrl = "";
                object.RegisterUrl = "";
                object.TcpUrl = null;
                object.WebSocketUrl = null;
              }

              if (message.ErrCode != null && message.hasOwnProperty("ErrCode")) object.ErrCode = options.enums === String ? $root.common.ErrorCode[message.ErrCode] : message.ErrCode;
              if (message.LoginUrl != null && message.hasOwnProperty("LoginUrl")) object.LoginUrl = message.LoginUrl;
              if (message.RegisterUrl != null && message.hasOwnProperty("RegisterUrl")) object.RegisterUrl = message.RegisterUrl;
              if (message.TcpUrl != null && message.hasOwnProperty("TcpUrl")) object.TcpUrl = $root.http.RespEntry.Addr.toObject(message.TcpUrl, options);
              if (message.WebSocketUrl != null && message.hasOwnProperty("WebSocketUrl")) object.WebSocketUrl = $root.http.RespEntry.Addr.toObject(message.WebSocketUrl, options);
              return object;
            };
            /**
             * Converts this RespEntry to JSON.
             * @function toJSON
             * @memberof http.RespEntry
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            RespEntry.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            RespEntry.Addr = function () {
              /**
               * Properties of an Addr.
               * @memberof http.RespEntry
               * @interface IAddr
               * @property {string|null} [Host] Addr Host
               * @property {number|null} [Port] Addr Port
               */

              /**
               * Constructs a new Addr.
               * @memberof http.RespEntry
               * @classdesc Represents an Addr.
               * @implements IAddr
               * @constructor
               * @param {http.RespEntry.IAddr=} [properties] Properties to set
               */
              function Addr(properties) {
                if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
              }
              /**
               * Addr Host.
               * @member {string} Host
               * @memberof http.RespEntry.Addr
               * @instance
               */


              Addr.prototype.Host = "";
              /**
               * Addr Port.
               * @member {number} Port
               * @memberof http.RespEntry.Addr
               * @instance
               */

              Addr.prototype.Port = 0;
              /**
               * Creates a new Addr instance using the specified properties.
               * @function create
               * @memberof http.RespEntry.Addr
               * @static
               * @param {http.RespEntry.IAddr=} [properties] Properties to set
               * @returns {http.RespEntry.Addr} Addr instance
               */

              Addr.create = function create(properties) {
                return new Addr(properties);
              };
              /**
               * Encodes the specified Addr message. Does not implicitly {@link http.RespEntry.Addr.verify|verify} messages.
               * @function encode
               * @memberof http.RespEntry.Addr
               * @static
               * @param {http.RespEntry.IAddr} message Addr message or plain object to encode
               * @param {$protobuf.Writer} [writer] Writer to encode to
               * @returns {$protobuf.Writer} Writer
               */


              Addr.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.Host != null && Object.hasOwnProperty.call(message, "Host")) writer.uint32(
                /* id 1, wireType 2 =*/
                10).string(message.Host);
                if (message.Port != null && Object.hasOwnProperty.call(message, "Port")) writer.uint32(
                /* id 2, wireType 0 =*/
                16).int32(message.Port);
                return writer;
              };
              /**
               * Encodes the specified Addr message, length delimited. Does not implicitly {@link http.RespEntry.Addr.verify|verify} messages.
               * @function encodeDelimited
               * @memberof http.RespEntry.Addr
               * @static
               * @param {http.RespEntry.IAddr} message Addr message or plain object to encode
               * @param {$protobuf.Writer} [writer] Writer to encode to
               * @returns {$protobuf.Writer} Writer
               */


              Addr.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              /**
               * Decodes an Addr message from the specified reader or buffer.
               * @function decode
               * @memberof http.RespEntry.Addr
               * @static
               * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
               * @param {number} [length] Message length if known beforehand
               * @returns {http.RespEntry.Addr} Addr
               * @throws {Error} If the payload is not a reader or valid buffer
               * @throws {$protobuf.util.ProtocolError} If required fields are missing
               */


              Addr.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.http.RespEntry.Addr();

                while (reader.pos < end) {
                  var tag = reader.uint32();

                  switch (tag >>> 3) {
                    case 1:
                      message.Host = reader.string();
                      break;

                    case 2:
                      message.Port = reader.int32();
                      break;

                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }

                return message;
              };
              /**
               * Decodes an Addr message from the specified reader or buffer, length delimited.
               * @function decodeDelimited
               * @memberof http.RespEntry.Addr
               * @static
               * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
               * @returns {http.RespEntry.Addr} Addr
               * @throws {Error} If the payload is not a reader or valid buffer
               * @throws {$protobuf.util.ProtocolError} If required fields are missing
               */


              Addr.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              /**
               * Verifies an Addr message.
               * @function verify
               * @memberof http.RespEntry.Addr
               * @static
               * @param {Object.<string,*>} message Plain object to verify
               * @returns {string|null} `null` if valid, otherwise the reason why it is not
               */


              Addr.verify = function verify(message) {
                if (typeof message !== "object" || message === null) return "object expected";
                if (message.Host != null && message.hasOwnProperty("Host")) if (!$util.isString(message.Host)) return "Host: string expected";
                if (message.Port != null && message.hasOwnProperty("Port")) if (!$util.isInteger(message.Port)) return "Port: integer expected";
                return null;
              };
              /**
               * Creates an Addr message from a plain object. Also converts values to their respective internal types.
               * @function fromObject
               * @memberof http.RespEntry.Addr
               * @static
               * @param {Object.<string,*>} object Plain object
               * @returns {http.RespEntry.Addr} Addr
               */


              Addr.fromObject = function fromObject(object) {
                if (object instanceof $root.http.RespEntry.Addr) return object;
                var message = new $root.http.RespEntry.Addr();
                if (object.Host != null) message.Host = String(object.Host);
                if (object.Port != null) message.Port = object.Port | 0;
                return message;
              };
              /**
               * Creates a plain object from an Addr message. Also converts values to other types if specified.
               * @function toObject
               * @memberof http.RespEntry.Addr
               * @static
               * @param {http.RespEntry.Addr} message Addr
               * @param {$protobuf.IConversionOptions} [options] Conversion options
               * @returns {Object.<string,*>} Plain object
               */


              Addr.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};

                if (options.defaults) {
                  object.Host = "";
                  object.Port = 0;
                }

                if (message.Host != null && message.hasOwnProperty("Host")) object.Host = message.Host;
                if (message.Port != null && message.hasOwnProperty("Port")) object.Port = message.Port;
                return object;
              };
              /**
               * Converts this Addr to JSON.
               * @function toJSON
               * @memberof http.RespEntry.Addr
               * @instance
               * @returns {Object.<string,*>} JSON object
               */


              Addr.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };

              return Addr;
            }();

            return RespEntry;
          }();

          http.ReqRegister = function () {
            /**
             * Properties of a ReqRegister.
             * @memberof http
             * @interface IReqRegister
             * @property {string|null} [Account] ReqRegister Account
             * @property {string|null} [Password] ReqRegister Password
             * @property {string|null} [AppId] ReqRegister AppId
             * @property {string|null} [ChannelId] ReqRegister ChannelId
             * @property {string|null} [MacId] ReqRegister MacId
             */

            /**
             * Constructs a new ReqRegister.
             * @memberof http
             * @classdesc Represents a ReqRegister.
             * @implements IReqRegister
             * @constructor
             * @param {http.IReqRegister=} [properties] Properties to set
             */
            function ReqRegister(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * ReqRegister Account.
             * @member {string} Account
             * @memberof http.ReqRegister
             * @instance
             */


            ReqRegister.prototype.Account = "";
            /**
             * ReqRegister Password.
             * @member {string} Password
             * @memberof http.ReqRegister
             * @instance
             */

            ReqRegister.prototype.Password = "";
            /**
             * ReqRegister AppId.
             * @member {string} AppId
             * @memberof http.ReqRegister
             * @instance
             */

            ReqRegister.prototype.AppId = "";
            /**
             * ReqRegister ChannelId.
             * @member {string} ChannelId
             * @memberof http.ReqRegister
             * @instance
             */

            ReqRegister.prototype.ChannelId = "";
            /**
             * ReqRegister MacId.
             * @member {string} MacId
             * @memberof http.ReqRegister
             * @instance
             */

            ReqRegister.prototype.MacId = "";
            /**
             * Creates a new ReqRegister instance using the specified properties.
             * @function create
             * @memberof http.ReqRegister
             * @static
             * @param {http.IReqRegister=} [properties] Properties to set
             * @returns {http.ReqRegister} ReqRegister instance
             */

            ReqRegister.create = function create(properties) {
              return new ReqRegister(properties);
            };
            /**
             * Encodes the specified ReqRegister message. Does not implicitly {@link http.ReqRegister.verify|verify} messages.
             * @function encode
             * @memberof http.ReqRegister
             * @static
             * @param {http.IReqRegister} message ReqRegister message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ReqRegister.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.Account != null && Object.hasOwnProperty.call(message, "Account")) writer.uint32(
              /* id 1, wireType 2 =*/
              10).string(message.Account);
              if (message.Password != null && Object.hasOwnProperty.call(message, "Password")) writer.uint32(
              /* id 2, wireType 2 =*/
              18).string(message.Password);
              if (message.AppId != null && Object.hasOwnProperty.call(message, "AppId")) writer.uint32(
              /* id 3, wireType 2 =*/
              26).string(message.AppId);
              if (message.ChannelId != null && Object.hasOwnProperty.call(message, "ChannelId")) writer.uint32(
              /* id 4, wireType 2 =*/
              34).string(message.ChannelId);
              if (message.MacId != null && Object.hasOwnProperty.call(message, "MacId")) writer.uint32(
              /* id 5, wireType 2 =*/
              42).string(message.MacId);
              return writer;
            };
            /**
             * Encodes the specified ReqRegister message, length delimited. Does not implicitly {@link http.ReqRegister.verify|verify} messages.
             * @function encodeDelimited
             * @memberof http.ReqRegister
             * @static
             * @param {http.IReqRegister} message ReqRegister message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ReqRegister.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a ReqRegister message from the specified reader or buffer.
             * @function decode
             * @memberof http.ReqRegister
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {http.ReqRegister} ReqRegister
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ReqRegister.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.http.ReqRegister();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.Account = reader.string();
                    break;

                  case 2:
                    message.Password = reader.string();
                    break;

                  case 3:
                    message.AppId = reader.string();
                    break;

                  case 4:
                    message.ChannelId = reader.string();
                    break;

                  case 5:
                    message.MacId = reader.string();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a ReqRegister message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof http.ReqRegister
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {http.ReqRegister} ReqRegister
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ReqRegister.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a ReqRegister message.
             * @function verify
             * @memberof http.ReqRegister
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            ReqRegister.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.Account != null && message.hasOwnProperty("Account")) if (!$util.isString(message.Account)) return "Account: string expected";
              if (message.Password != null && message.hasOwnProperty("Password")) if (!$util.isString(message.Password)) return "Password: string expected";
              if (message.AppId != null && message.hasOwnProperty("AppId")) if (!$util.isString(message.AppId)) return "AppId: string expected";
              if (message.ChannelId != null && message.hasOwnProperty("ChannelId")) if (!$util.isString(message.ChannelId)) return "ChannelId: string expected";
              if (message.MacId != null && message.hasOwnProperty("MacId")) if (!$util.isString(message.MacId)) return "MacId: string expected";
              return null;
            };
            /**
             * Creates a ReqRegister message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof http.ReqRegister
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {http.ReqRegister} ReqRegister
             */


            ReqRegister.fromObject = function fromObject(object) {
              if (object instanceof $root.http.ReqRegister) return object;
              var message = new $root.http.ReqRegister();
              if (object.Account != null) message.Account = String(object.Account);
              if (object.Password != null) message.Password = String(object.Password);
              if (object.AppId != null) message.AppId = String(object.AppId);
              if (object.ChannelId != null) message.ChannelId = String(object.ChannelId);
              if (object.MacId != null) message.MacId = String(object.MacId);
              return message;
            };
            /**
             * Creates a plain object from a ReqRegister message. Also converts values to other types if specified.
             * @function toObject
             * @memberof http.ReqRegister
             * @static
             * @param {http.ReqRegister} message ReqRegister
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            ReqRegister.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.Account = "";
                object.Password = "";
                object.AppId = "";
                object.ChannelId = "";
                object.MacId = "";
              }

              if (message.Account != null && message.hasOwnProperty("Account")) object.Account = message.Account;
              if (message.Password != null && message.hasOwnProperty("Password")) object.Password = message.Password;
              if (message.AppId != null && message.hasOwnProperty("AppId")) object.AppId = message.AppId;
              if (message.ChannelId != null && message.hasOwnProperty("ChannelId")) object.ChannelId = message.ChannelId;
              if (message.MacId != null && message.hasOwnProperty("MacId")) object.MacId = message.MacId;
              return object;
            };
            /**
             * Converts this ReqRegister to JSON.
             * @function toJSON
             * @memberof http.ReqRegister
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            ReqRegister.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReqRegister;
          }();

          http.RespRegister = function () {
            /**
             * Properties of a RespRegister.
             * @memberof http
             * @interface IRespRegister
             * @property {common.ErrorCode|null} [ErrCode] RespRegister ErrCode
             */

            /**
             * Constructs a new RespRegister.
             * @memberof http
             * @classdesc Represents a RespRegister.
             * @implements IRespRegister
             * @constructor
             * @param {http.IRespRegister=} [properties] Properties to set
             */
            function RespRegister(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * RespRegister ErrCode.
             * @member {common.ErrorCode} ErrCode
             * @memberof http.RespRegister
             * @instance
             */


            RespRegister.prototype.ErrCode = 0;
            /**
             * Creates a new RespRegister instance using the specified properties.
             * @function create
             * @memberof http.RespRegister
             * @static
             * @param {http.IRespRegister=} [properties] Properties to set
             * @returns {http.RespRegister} RespRegister instance
             */

            RespRegister.create = function create(properties) {
              return new RespRegister(properties);
            };
            /**
             * Encodes the specified RespRegister message. Does not implicitly {@link http.RespRegister.verify|verify} messages.
             * @function encode
             * @memberof http.RespRegister
             * @static
             * @param {http.IRespRegister} message RespRegister message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RespRegister.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.ErrCode != null && Object.hasOwnProperty.call(message, "ErrCode")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.ErrCode);
              return writer;
            };
            /**
             * Encodes the specified RespRegister message, length delimited. Does not implicitly {@link http.RespRegister.verify|verify} messages.
             * @function encodeDelimited
             * @memberof http.RespRegister
             * @static
             * @param {http.IRespRegister} message RespRegister message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RespRegister.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a RespRegister message from the specified reader or buffer.
             * @function decode
             * @memberof http.RespRegister
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {http.RespRegister} RespRegister
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RespRegister.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.http.RespRegister();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.ErrCode = reader.int32();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a RespRegister message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof http.RespRegister
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {http.RespRegister} RespRegister
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RespRegister.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a RespRegister message.
             * @function verify
             * @memberof http.RespRegister
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            RespRegister.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.ErrCode != null && message.hasOwnProperty("ErrCode")) switch (message.ErrCode) {
                default:
                  return "ErrCode: enum value expected";

                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  break;
              }
              return null;
            };
            /**
             * Creates a RespRegister message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof http.RespRegister
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {http.RespRegister} RespRegister
             */


            RespRegister.fromObject = function fromObject(object) {
              if (object instanceof $root.http.RespRegister) return object;
              var message = new $root.http.RespRegister();

              switch (object.ErrCode) {
                case "Default":
                case 0:
                  message.ErrCode = 0;
                  break;

                case "OK":
                case 1:
                  message.ErrCode = 1;
                  break;

                case "EntryError":
                case 2:
                  message.ErrCode = 2;
                  break;

                case "LoginAccountUnExistent":
                case 3:
                  message.ErrCode = 3;
                  break;

                case "LoginPasswordError":
                case 4:
                  message.ErrCode = 4;
                  break;

                case "RegisterAccountExit":
                case 5:
                  message.ErrCode = 5;
                  break;

                case "AuthFailed":
                case 6:
                  message.ErrCode = 6;
                  break;

                case "ChangePlayerInfoFailed":
                case 7:
                  message.ErrCode = 7;
                  break;
              }

              return message;
            };
            /**
             * Creates a plain object from a RespRegister message. Also converts values to other types if specified.
             * @function toObject
             * @memberof http.RespRegister
             * @static
             * @param {http.RespRegister} message RespRegister
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            RespRegister.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};
              if (options.defaults) object.ErrCode = options.enums === String ? "Default" : 0;
              if (message.ErrCode != null && message.hasOwnProperty("ErrCode")) object.ErrCode = options.enums === String ? $root.common.ErrorCode[message.ErrCode] : message.ErrCode;
              return object;
            };
            /**
             * Converts this RespRegister to JSON.
             * @function toJSON
             * @memberof http.RespRegister
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            RespRegister.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RespRegister;
          }();

          http.ReqLogin = function () {
            /**
             * Properties of a ReqLogin.
             * @memberof http
             * @interface IReqLogin
             * @property {string|null} [Account] ReqLogin Account
             * @property {string|null} [Password] ReqLogin Password
             * @property {string|null} [AppId] ReqLogin AppId
             */

            /**
             * Constructs a new ReqLogin.
             * @memberof http
             * @classdesc Represents a ReqLogin.
             * @implements IReqLogin
             * @constructor
             * @param {http.IReqLogin=} [properties] Properties to set
             */
            function ReqLogin(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * ReqLogin Account.
             * @member {string} Account
             * @memberof http.ReqLogin
             * @instance
             */


            ReqLogin.prototype.Account = "";
            /**
             * ReqLogin Password.
             * @member {string} Password
             * @memberof http.ReqLogin
             * @instance
             */

            ReqLogin.prototype.Password = "";
            /**
             * ReqLogin AppId.
             * @member {string} AppId
             * @memberof http.ReqLogin
             * @instance
             */

            ReqLogin.prototype.AppId = "";
            /**
             * Creates a new ReqLogin instance using the specified properties.
             * @function create
             * @memberof http.ReqLogin
             * @static
             * @param {http.IReqLogin=} [properties] Properties to set
             * @returns {http.ReqLogin} ReqLogin instance
             */

            ReqLogin.create = function create(properties) {
              return new ReqLogin(properties);
            };
            /**
             * Encodes the specified ReqLogin message. Does not implicitly {@link http.ReqLogin.verify|verify} messages.
             * @function encode
             * @memberof http.ReqLogin
             * @static
             * @param {http.IReqLogin} message ReqLogin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ReqLogin.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.Account != null && Object.hasOwnProperty.call(message, "Account")) writer.uint32(
              /* id 1, wireType 2 =*/
              10).string(message.Account);
              if (message.Password != null && Object.hasOwnProperty.call(message, "Password")) writer.uint32(
              /* id 2, wireType 2 =*/
              18).string(message.Password);
              if (message.AppId != null && Object.hasOwnProperty.call(message, "AppId")) writer.uint32(
              /* id 3, wireType 2 =*/
              26).string(message.AppId);
              return writer;
            };
            /**
             * Encodes the specified ReqLogin message, length delimited. Does not implicitly {@link http.ReqLogin.verify|verify} messages.
             * @function encodeDelimited
             * @memberof http.ReqLogin
             * @static
             * @param {http.IReqLogin} message ReqLogin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ReqLogin.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a ReqLogin message from the specified reader or buffer.
             * @function decode
             * @memberof http.ReqLogin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {http.ReqLogin} ReqLogin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ReqLogin.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.http.ReqLogin();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.Account = reader.string();
                    break;

                  case 2:
                    message.Password = reader.string();
                    break;

                  case 3:
                    message.AppId = reader.string();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a ReqLogin message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof http.ReqLogin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {http.ReqLogin} ReqLogin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ReqLogin.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a ReqLogin message.
             * @function verify
             * @memberof http.ReqLogin
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            ReqLogin.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.Account != null && message.hasOwnProperty("Account")) if (!$util.isString(message.Account)) return "Account: string expected";
              if (message.Password != null && message.hasOwnProperty("Password")) if (!$util.isString(message.Password)) return "Password: string expected";
              if (message.AppId != null && message.hasOwnProperty("AppId")) if (!$util.isString(message.AppId)) return "AppId: string expected";
              return null;
            };
            /**
             * Creates a ReqLogin message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof http.ReqLogin
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {http.ReqLogin} ReqLogin
             */


            ReqLogin.fromObject = function fromObject(object) {
              if (object instanceof $root.http.ReqLogin) return object;
              var message = new $root.http.ReqLogin();
              if (object.Account != null) message.Account = String(object.Account);
              if (object.Password != null) message.Password = String(object.Password);
              if (object.AppId != null) message.AppId = String(object.AppId);
              return message;
            };
            /**
             * Creates a plain object from a ReqLogin message. Also converts values to other types if specified.
             * @function toObject
             * @memberof http.ReqLogin
             * @static
             * @param {http.ReqLogin} message ReqLogin
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            ReqLogin.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.Account = "";
                object.Password = "";
                object.AppId = "";
              }

              if (message.Account != null && message.hasOwnProperty("Account")) object.Account = message.Account;
              if (message.Password != null && message.hasOwnProperty("Password")) object.Password = message.Password;
              if (message.AppId != null && message.hasOwnProperty("AppId")) object.AppId = message.AppId;
              return object;
            };
            /**
             * Converts this ReqLogin to JSON.
             * @function toJSON
             * @memberof http.ReqLogin
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            ReqLogin.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReqLogin;
          }();

          http.RespLogin = function () {
            /**
             * Properties of a RespLogin.
             * @memberof http
             * @interface IRespLogin
             * @property {common.ErrorCode|null} [ErrCode] RespLogin ErrCode
             * @property {string|null} [Token] RespLogin Token
             */

            /**
             * Constructs a new RespLogin.
             * @memberof http
             * @classdesc Represents a RespLogin.
             * @implements IRespLogin
             * @constructor
             * @param {http.IRespLogin=} [properties] Properties to set
             */
            function RespLogin(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * RespLogin ErrCode.
             * @member {common.ErrorCode} ErrCode
             * @memberof http.RespLogin
             * @instance
             */


            RespLogin.prototype.ErrCode = 0;
            /**
             * RespLogin Token.
             * @member {string} Token
             * @memberof http.RespLogin
             * @instance
             */

            RespLogin.prototype.Token = "";
            /**
             * Creates a new RespLogin instance using the specified properties.
             * @function create
             * @memberof http.RespLogin
             * @static
             * @param {http.IRespLogin=} [properties] Properties to set
             * @returns {http.RespLogin} RespLogin instance
             */

            RespLogin.create = function create(properties) {
              return new RespLogin(properties);
            };
            /**
             * Encodes the specified RespLogin message. Does not implicitly {@link http.RespLogin.verify|verify} messages.
             * @function encode
             * @memberof http.RespLogin
             * @static
             * @param {http.IRespLogin} message RespLogin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RespLogin.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.ErrCode != null && Object.hasOwnProperty.call(message, "ErrCode")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.ErrCode);
              if (message.Token != null && Object.hasOwnProperty.call(message, "Token")) writer.uint32(
              /* id 2, wireType 2 =*/
              18).string(message.Token);
              return writer;
            };
            /**
             * Encodes the specified RespLogin message, length delimited. Does not implicitly {@link http.RespLogin.verify|verify} messages.
             * @function encodeDelimited
             * @memberof http.RespLogin
             * @static
             * @param {http.IRespLogin} message RespLogin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RespLogin.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a RespLogin message from the specified reader or buffer.
             * @function decode
             * @memberof http.RespLogin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {http.RespLogin} RespLogin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RespLogin.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.http.RespLogin();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.ErrCode = reader.int32();
                    break;

                  case 2:
                    message.Token = reader.string();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a RespLogin message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof http.RespLogin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {http.RespLogin} RespLogin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RespLogin.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a RespLogin message.
             * @function verify
             * @memberof http.RespLogin
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            RespLogin.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.ErrCode != null && message.hasOwnProperty("ErrCode")) switch (message.ErrCode) {
                default:
                  return "ErrCode: enum value expected";

                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  break;
              }
              if (message.Token != null && message.hasOwnProperty("Token")) if (!$util.isString(message.Token)) return "Token: string expected";
              return null;
            };
            /**
             * Creates a RespLogin message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof http.RespLogin
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {http.RespLogin} RespLogin
             */


            RespLogin.fromObject = function fromObject(object) {
              if (object instanceof $root.http.RespLogin) return object;
              var message = new $root.http.RespLogin();

              switch (object.ErrCode) {
                case "Default":
                case 0:
                  message.ErrCode = 0;
                  break;

                case "OK":
                case 1:
                  message.ErrCode = 1;
                  break;

                case "EntryError":
                case 2:
                  message.ErrCode = 2;
                  break;

                case "LoginAccountUnExistent":
                case 3:
                  message.ErrCode = 3;
                  break;

                case "LoginPasswordError":
                case 4:
                  message.ErrCode = 4;
                  break;

                case "RegisterAccountExit":
                case 5:
                  message.ErrCode = 5;
                  break;

                case "AuthFailed":
                case 6:
                  message.ErrCode = 6;
                  break;

                case "ChangePlayerInfoFailed":
                case 7:
                  message.ErrCode = 7;
                  break;
              }

              if (object.Token != null) message.Token = String(object.Token);
              return message;
            };
            /**
             * Creates a plain object from a RespLogin message. Also converts values to other types if specified.
             * @function toObject
             * @memberof http.RespLogin
             * @static
             * @param {http.RespLogin} message RespLogin
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            RespLogin.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.ErrCode = options.enums === String ? "Default" : 0;
                object.Token = "";
              }

              if (message.ErrCode != null && message.hasOwnProperty("ErrCode")) object.ErrCode = options.enums === String ? $root.common.ErrorCode[message.ErrCode] : message.ErrCode;
              if (message.Token != null && message.hasOwnProperty("Token")) object.Token = message.Token;
              return object;
            };
            /**
             * Converts this RespLogin to JSON.
             * @function toJSON
             * @memberof http.RespLogin
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            RespLogin.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RespLogin;
          }();

          return http;
        }();

        $root.lobby = function () {
          /**
           * Namespace lobby.
           * @exports lobby
           * @namespace
           */
          var lobby = {};

          lobby.ReqAuth = function () {
            /**
             * Properties of a ReqAuth.
             * @memberof lobby
             * @interface IReqAuth
             * @property {string|null} [Token] ReqAuth Token
             */

            /**
             * Constructs a new ReqAuth.
             * @memberof lobby
             * @classdesc Represents a ReqAuth.
             * @implements IReqAuth
             * @constructor
             * @param {lobby.IReqAuth=} [properties] Properties to set
             */
            function ReqAuth(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * ReqAuth Token.
             * @member {string} Token
             * @memberof lobby.ReqAuth
             * @instance
             */


            ReqAuth.prototype.Token = "";
            /**
             * Creates a new ReqAuth instance using the specified properties.
             * @function create
             * @memberof lobby.ReqAuth
             * @static
             * @param {lobby.IReqAuth=} [properties] Properties to set
             * @returns {lobby.ReqAuth} ReqAuth instance
             */

            ReqAuth.create = function create(properties) {
              return new ReqAuth(properties);
            };
            /**
             * Encodes the specified ReqAuth message. Does not implicitly {@link lobby.ReqAuth.verify|verify} messages.
             * @function encode
             * @memberof lobby.ReqAuth
             * @static
             * @param {lobby.IReqAuth} message ReqAuth message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ReqAuth.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.Token != null && Object.hasOwnProperty.call(message, "Token")) writer.uint32(
              /* id 1, wireType 2 =*/
              10).string(message.Token);
              return writer;
            };
            /**
             * Encodes the specified ReqAuth message, length delimited. Does not implicitly {@link lobby.ReqAuth.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lobby.ReqAuth
             * @static
             * @param {lobby.IReqAuth} message ReqAuth message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ReqAuth.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a ReqAuth message from the specified reader or buffer.
             * @function decode
             * @memberof lobby.ReqAuth
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lobby.ReqAuth} ReqAuth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ReqAuth.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.lobby.ReqAuth();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.Token = reader.string();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a ReqAuth message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lobby.ReqAuth
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lobby.ReqAuth} ReqAuth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ReqAuth.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a ReqAuth message.
             * @function verify
             * @memberof lobby.ReqAuth
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            ReqAuth.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.Token != null && message.hasOwnProperty("Token")) if (!$util.isString(message.Token)) return "Token: string expected";
              return null;
            };
            /**
             * Creates a ReqAuth message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lobby.ReqAuth
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lobby.ReqAuth} ReqAuth
             */


            ReqAuth.fromObject = function fromObject(object) {
              if (object instanceof $root.lobby.ReqAuth) return object;
              var message = new $root.lobby.ReqAuth();
              if (object.Token != null) message.Token = String(object.Token);
              return message;
            };
            /**
             * Creates a plain object from a ReqAuth message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lobby.ReqAuth
             * @static
             * @param {lobby.ReqAuth} message ReqAuth
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            ReqAuth.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};
              if (options.defaults) object.Token = "";
              if (message.Token != null && message.hasOwnProperty("Token")) object.Token = message.Token;
              return object;
            };
            /**
             * Converts this ReqAuth to JSON.
             * @function toJSON
             * @memberof lobby.ReqAuth
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            ReqAuth.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReqAuth;
          }();

          lobby.RespAuth = function () {
            /**
             * Properties of a RespAuth.
             * @memberof lobby
             * @interface IRespAuth
             * @property {common.ErrorCode|null} [ErrCode] RespAuth ErrCode
             * @property {common.IPlayerBaseInfo|null} [BaseInfo] RespAuth BaseInfo
             */

            /**
             * Constructs a new RespAuth.
             * @memberof lobby
             * @classdesc Represents a RespAuth.
             * @implements IRespAuth
             * @constructor
             * @param {lobby.IRespAuth=} [properties] Properties to set
             */
            function RespAuth(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * RespAuth ErrCode.
             * @member {common.ErrorCode} ErrCode
             * @memberof lobby.RespAuth
             * @instance
             */


            RespAuth.prototype.ErrCode = 0;
            /**
             * RespAuth BaseInfo.
             * @member {common.IPlayerBaseInfo|null|undefined} BaseInfo
             * @memberof lobby.RespAuth
             * @instance
             */

            RespAuth.prototype.BaseInfo = null;
            /**
             * Creates a new RespAuth instance using the specified properties.
             * @function create
             * @memberof lobby.RespAuth
             * @static
             * @param {lobby.IRespAuth=} [properties] Properties to set
             * @returns {lobby.RespAuth} RespAuth instance
             */

            RespAuth.create = function create(properties) {
              return new RespAuth(properties);
            };
            /**
             * Encodes the specified RespAuth message. Does not implicitly {@link lobby.RespAuth.verify|verify} messages.
             * @function encode
             * @memberof lobby.RespAuth
             * @static
             * @param {lobby.IRespAuth} message RespAuth message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RespAuth.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.ErrCode != null && Object.hasOwnProperty.call(message, "ErrCode")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.ErrCode);
              if (message.BaseInfo != null && Object.hasOwnProperty.call(message, "BaseInfo")) $root.common.PlayerBaseInfo.encode(message.BaseInfo, writer.uint32(
              /* id 2, wireType 2 =*/
              18).fork()).ldelim();
              return writer;
            };
            /**
             * Encodes the specified RespAuth message, length delimited. Does not implicitly {@link lobby.RespAuth.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lobby.RespAuth
             * @static
             * @param {lobby.IRespAuth} message RespAuth message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RespAuth.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a RespAuth message from the specified reader or buffer.
             * @function decode
             * @memberof lobby.RespAuth
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lobby.RespAuth} RespAuth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RespAuth.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.lobby.RespAuth();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.ErrCode = reader.int32();
                    break;

                  case 2:
                    message.BaseInfo = $root.common.PlayerBaseInfo.decode(reader, reader.uint32());
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a RespAuth message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lobby.RespAuth
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lobby.RespAuth} RespAuth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RespAuth.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a RespAuth message.
             * @function verify
             * @memberof lobby.RespAuth
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            RespAuth.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.ErrCode != null && message.hasOwnProperty("ErrCode")) switch (message.ErrCode) {
                default:
                  return "ErrCode: enum value expected";

                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  break;
              }

              if (message.BaseInfo != null && message.hasOwnProperty("BaseInfo")) {
                var error = $root.common.PlayerBaseInfo.verify(message.BaseInfo);
                if (error) return "BaseInfo." + error;
              }

              return null;
            };
            /**
             * Creates a RespAuth message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lobby.RespAuth
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lobby.RespAuth} RespAuth
             */


            RespAuth.fromObject = function fromObject(object) {
              if (object instanceof $root.lobby.RespAuth) return object;
              var message = new $root.lobby.RespAuth();

              switch (object.ErrCode) {
                case "Default":
                case 0:
                  message.ErrCode = 0;
                  break;

                case "OK":
                case 1:
                  message.ErrCode = 1;
                  break;

                case "EntryError":
                case 2:
                  message.ErrCode = 2;
                  break;

                case "LoginAccountUnExistent":
                case 3:
                  message.ErrCode = 3;
                  break;

                case "LoginPasswordError":
                case 4:
                  message.ErrCode = 4;
                  break;

                case "RegisterAccountExit":
                case 5:
                  message.ErrCode = 5;
                  break;

                case "AuthFailed":
                case 6:
                  message.ErrCode = 6;
                  break;

                case "ChangePlayerInfoFailed":
                case 7:
                  message.ErrCode = 7;
                  break;
              }

              if (object.BaseInfo != null) {
                if (typeof object.BaseInfo !== "object") throw TypeError(".lobby.RespAuth.BaseInfo: object expected");
                message.BaseInfo = $root.common.PlayerBaseInfo.fromObject(object.BaseInfo);
              }

              return message;
            };
            /**
             * Creates a plain object from a RespAuth message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lobby.RespAuth
             * @static
             * @param {lobby.RespAuth} message RespAuth
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            RespAuth.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.ErrCode = options.enums === String ? "Default" : 0;
                object.BaseInfo = null;
              }

              if (message.ErrCode != null && message.hasOwnProperty("ErrCode")) object.ErrCode = options.enums === String ? $root.common.ErrorCode[message.ErrCode] : message.ErrCode;
              if (message.BaseInfo != null && message.hasOwnProperty("BaseInfo")) object.BaseInfo = $root.common.PlayerBaseInfo.toObject(message.BaseInfo, options);
              return object;
            };
            /**
             * Converts this RespAuth to JSON.
             * @function toJSON
             * @memberof lobby.RespAuth
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            RespAuth.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RespAuth;
          }();

          lobby.ReqLobbyInfo = function () {
            /**
             * Properties of a ReqLobbyInfo.
             * @memberof lobby
             * @interface IReqLobbyInfo
             */

            /**
             * Constructs a new ReqLobbyInfo.
             * @memberof lobby
             * @classdesc Represents a ReqLobbyInfo.
             * @implements IReqLobbyInfo
             * @constructor
             * @param {lobby.IReqLobbyInfo=} [properties] Properties to set
             */
            function ReqLobbyInfo(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * Creates a new ReqLobbyInfo instance using the specified properties.
             * @function create
             * @memberof lobby.ReqLobbyInfo
             * @static
             * @param {lobby.IReqLobbyInfo=} [properties] Properties to set
             * @returns {lobby.ReqLobbyInfo} ReqLobbyInfo instance
             */


            ReqLobbyInfo.create = function create(properties) {
              return new ReqLobbyInfo(properties);
            };
            /**
             * Encodes the specified ReqLobbyInfo message. Does not implicitly {@link lobby.ReqLobbyInfo.verify|verify} messages.
             * @function encode
             * @memberof lobby.ReqLobbyInfo
             * @static
             * @param {lobby.IReqLobbyInfo} message ReqLobbyInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ReqLobbyInfo.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              return writer;
            };
            /**
             * Encodes the specified ReqLobbyInfo message, length delimited. Does not implicitly {@link lobby.ReqLobbyInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lobby.ReqLobbyInfo
             * @static
             * @param {lobby.IReqLobbyInfo} message ReqLobbyInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ReqLobbyInfo.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a ReqLobbyInfo message from the specified reader or buffer.
             * @function decode
             * @memberof lobby.ReqLobbyInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lobby.ReqLobbyInfo} ReqLobbyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ReqLobbyInfo.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.lobby.ReqLobbyInfo();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a ReqLobbyInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lobby.ReqLobbyInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lobby.ReqLobbyInfo} ReqLobbyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ReqLobbyInfo.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a ReqLobbyInfo message.
             * @function verify
             * @memberof lobby.ReqLobbyInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            ReqLobbyInfo.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              return null;
            };
            /**
             * Creates a ReqLobbyInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lobby.ReqLobbyInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lobby.ReqLobbyInfo} ReqLobbyInfo
             */


            ReqLobbyInfo.fromObject = function fromObject(object) {
              if (object instanceof $root.lobby.ReqLobbyInfo) return object;
              return new $root.lobby.ReqLobbyInfo();
            };
            /**
             * Creates a plain object from a ReqLobbyInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lobby.ReqLobbyInfo
             * @static
             * @param {lobby.ReqLobbyInfo} message ReqLobbyInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            ReqLobbyInfo.toObject = function toObject() {
              return {};
            };
            /**
             * Converts this ReqLobbyInfo to JSON.
             * @function toJSON
             * @memberof lobby.ReqLobbyInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            ReqLobbyInfo.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReqLobbyInfo;
          }();

          lobby.RespLobbyInfo = function () {
            /**
             * Properties of a RespLobbyInfo.
             * @memberof lobby
             * @interface IRespLobbyInfo
             * @property {Array.<lobby.RespLobbyInfo.ILobbyInfo>|null} [Infos] RespLobbyInfo Infos
             */

            /**
             * Constructs a new RespLobbyInfo.
             * @memberof lobby
             * @classdesc Represents a RespLobbyInfo.
             * @implements IRespLobbyInfo
             * @constructor
             * @param {lobby.IRespLobbyInfo=} [properties] Properties to set
             */
            function RespLobbyInfo(properties) {
              this.Infos = [];
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * RespLobbyInfo Infos.
             * @member {Array.<lobby.RespLobbyInfo.ILobbyInfo>} Infos
             * @memberof lobby.RespLobbyInfo
             * @instance
             */


            RespLobbyInfo.prototype.Infos = $util.emptyArray;
            /**
             * Creates a new RespLobbyInfo instance using the specified properties.
             * @function create
             * @memberof lobby.RespLobbyInfo
             * @static
             * @param {lobby.IRespLobbyInfo=} [properties] Properties to set
             * @returns {lobby.RespLobbyInfo} RespLobbyInfo instance
             */

            RespLobbyInfo.create = function create(properties) {
              return new RespLobbyInfo(properties);
            };
            /**
             * Encodes the specified RespLobbyInfo message. Does not implicitly {@link lobby.RespLobbyInfo.verify|verify} messages.
             * @function encode
             * @memberof lobby.RespLobbyInfo
             * @static
             * @param {lobby.IRespLobbyInfo} message RespLobbyInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RespLobbyInfo.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.Infos != null && message.Infos.length) for (var i = 0; i < message.Infos.length; ++i) $root.lobby.RespLobbyInfo.LobbyInfo.encode(message.Infos[i], writer.uint32(
              /* id 1, wireType 2 =*/
              10).fork()).ldelim();
              return writer;
            };
            /**
             * Encodes the specified RespLobbyInfo message, length delimited. Does not implicitly {@link lobby.RespLobbyInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lobby.RespLobbyInfo
             * @static
             * @param {lobby.IRespLobbyInfo} message RespLobbyInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RespLobbyInfo.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a RespLobbyInfo message from the specified reader or buffer.
             * @function decode
             * @memberof lobby.RespLobbyInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lobby.RespLobbyInfo} RespLobbyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RespLobbyInfo.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.lobby.RespLobbyInfo();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    if (!(message.Infos && message.Infos.length)) message.Infos = [];
                    message.Infos.push($root.lobby.RespLobbyInfo.LobbyInfo.decode(reader, reader.uint32()));
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a RespLobbyInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lobby.RespLobbyInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lobby.RespLobbyInfo} RespLobbyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RespLobbyInfo.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a RespLobbyInfo message.
             * @function verify
             * @memberof lobby.RespLobbyInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            RespLobbyInfo.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";

              if (message.Infos != null && message.hasOwnProperty("Infos")) {
                if (!Array.isArray(message.Infos)) return "Infos: array expected";

                for (var i = 0; i < message.Infos.length; ++i) {
                  var error = $root.lobby.RespLobbyInfo.LobbyInfo.verify(message.Infos[i]);
                  if (error) return "Infos." + error;
                }
              }

              return null;
            };
            /**
             * Creates a RespLobbyInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lobby.RespLobbyInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lobby.RespLobbyInfo} RespLobbyInfo
             */


            RespLobbyInfo.fromObject = function fromObject(object) {
              if (object instanceof $root.lobby.RespLobbyInfo) return object;
              var message = new $root.lobby.RespLobbyInfo();

              if (object.Infos) {
                if (!Array.isArray(object.Infos)) throw TypeError(".lobby.RespLobbyInfo.Infos: array expected");
                message.Infos = [];

                for (var i = 0; i < object.Infos.length; ++i) {
                  if (typeof object.Infos[i] !== "object") throw TypeError(".lobby.RespLobbyInfo.Infos: object expected");
                  message.Infos[i] = $root.lobby.RespLobbyInfo.LobbyInfo.fromObject(object.Infos[i]);
                }
              }

              return message;
            };
            /**
             * Creates a plain object from a RespLobbyInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lobby.RespLobbyInfo
             * @static
             * @param {lobby.RespLobbyInfo} message RespLobbyInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            RespLobbyInfo.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};
              if (options.arrays || options.defaults) object.Infos = [];

              if (message.Infos && message.Infos.length) {
                object.Infos = [];

                for (var j = 0; j < message.Infos.length; ++j) object.Infos[j] = $root.lobby.RespLobbyInfo.LobbyInfo.toObject(message.Infos[j], options);
              }

              return object;
            };
            /**
             * Converts this RespLobbyInfo to JSON.
             * @function toJSON
             * @memberof lobby.RespLobbyInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            RespLobbyInfo.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            RespLobbyInfo.LobbyInfo = function () {
              /**
               * Properties of a LobbyInfo.
               * @memberof lobby.RespLobbyInfo
               * @interface ILobbyInfo
               * @property {number|null} [GameId] LobbyInfo GameId
               * @property {string|null} [GameName] LobbyInfo GameName
               * @property {boolean|null} [IsOpen] LobbyInfo IsOpen
               */

              /**
               * Constructs a new LobbyInfo.
               * @memberof lobby.RespLobbyInfo
               * @classdesc Represents a LobbyInfo.
               * @implements ILobbyInfo
               * @constructor
               * @param {lobby.RespLobbyInfo.ILobbyInfo=} [properties] Properties to set
               */
              function LobbyInfo(properties) {
                if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
              }
              /**
               * LobbyInfo GameId.
               * @member {number} GameId
               * @memberof lobby.RespLobbyInfo.LobbyInfo
               * @instance
               */


              LobbyInfo.prototype.GameId = 0;
              /**
               * LobbyInfo GameName.
               * @member {string} GameName
               * @memberof lobby.RespLobbyInfo.LobbyInfo
               * @instance
               */

              LobbyInfo.prototype.GameName = "";
              /**
               * LobbyInfo IsOpen.
               * @member {boolean} IsOpen
               * @memberof lobby.RespLobbyInfo.LobbyInfo
               * @instance
               */

              LobbyInfo.prototype.IsOpen = false;
              /**
               * Creates a new LobbyInfo instance using the specified properties.
               * @function create
               * @memberof lobby.RespLobbyInfo.LobbyInfo
               * @static
               * @param {lobby.RespLobbyInfo.ILobbyInfo=} [properties] Properties to set
               * @returns {lobby.RespLobbyInfo.LobbyInfo} LobbyInfo instance
               */

              LobbyInfo.create = function create(properties) {
                return new LobbyInfo(properties);
              };
              /**
               * Encodes the specified LobbyInfo message. Does not implicitly {@link lobby.RespLobbyInfo.LobbyInfo.verify|verify} messages.
               * @function encode
               * @memberof lobby.RespLobbyInfo.LobbyInfo
               * @static
               * @param {lobby.RespLobbyInfo.ILobbyInfo} message LobbyInfo message or plain object to encode
               * @param {$protobuf.Writer} [writer] Writer to encode to
               * @returns {$protobuf.Writer} Writer
               */


              LobbyInfo.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create();
                if (message.GameId != null && Object.hasOwnProperty.call(message, "GameId")) writer.uint32(
                /* id 1, wireType 0 =*/
                8).uint32(message.GameId);
                if (message.GameName != null && Object.hasOwnProperty.call(message, "GameName")) writer.uint32(
                /* id 2, wireType 2 =*/
                18).string(message.GameName);
                if (message.IsOpen != null && Object.hasOwnProperty.call(message, "IsOpen")) writer.uint32(
                /* id 3, wireType 0 =*/
                24).bool(message.IsOpen);
                return writer;
              };
              /**
               * Encodes the specified LobbyInfo message, length delimited. Does not implicitly {@link lobby.RespLobbyInfo.LobbyInfo.verify|verify} messages.
               * @function encodeDelimited
               * @memberof lobby.RespLobbyInfo.LobbyInfo
               * @static
               * @param {lobby.RespLobbyInfo.ILobbyInfo} message LobbyInfo message or plain object to encode
               * @param {$protobuf.Writer} [writer] Writer to encode to
               * @returns {$protobuf.Writer} Writer
               */


              LobbyInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              /**
               * Decodes a LobbyInfo message from the specified reader or buffer.
               * @function decode
               * @memberof lobby.RespLobbyInfo.LobbyInfo
               * @static
               * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
               * @param {number} [length] Message length if known beforehand
               * @returns {lobby.RespLobbyInfo.LobbyInfo} LobbyInfo
               * @throws {Error} If the payload is not a reader or valid buffer
               * @throws {$protobuf.util.ProtocolError} If required fields are missing
               */


              LobbyInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length,
                    message = new $root.lobby.RespLobbyInfo.LobbyInfo();

                while (reader.pos < end) {
                  var tag = reader.uint32();

                  switch (tag >>> 3) {
                    case 1:
                      message.GameId = reader.uint32();
                      break;

                    case 2:
                      message.GameName = reader.string();
                      break;

                    case 3:
                      message.IsOpen = reader.bool();
                      break;

                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }

                return message;
              };
              /**
               * Decodes a LobbyInfo message from the specified reader or buffer, length delimited.
               * @function decodeDelimited
               * @memberof lobby.RespLobbyInfo.LobbyInfo
               * @static
               * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
               * @returns {lobby.RespLobbyInfo.LobbyInfo} LobbyInfo
               * @throws {Error} If the payload is not a reader or valid buffer
               * @throws {$protobuf.util.ProtocolError} If required fields are missing
               */


              LobbyInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader)) reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              /**
               * Verifies a LobbyInfo message.
               * @function verify
               * @memberof lobby.RespLobbyInfo.LobbyInfo
               * @static
               * @param {Object.<string,*>} message Plain object to verify
               * @returns {string|null} `null` if valid, otherwise the reason why it is not
               */


              LobbyInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null) return "object expected";
                if (message.GameId != null && message.hasOwnProperty("GameId")) if (!$util.isInteger(message.GameId)) return "GameId: integer expected";
                if (message.GameName != null && message.hasOwnProperty("GameName")) if (!$util.isString(message.GameName)) return "GameName: string expected";
                if (message.IsOpen != null && message.hasOwnProperty("IsOpen")) if (typeof message.IsOpen !== "boolean") return "IsOpen: boolean expected";
                return null;
              };
              /**
               * Creates a LobbyInfo message from a plain object. Also converts values to their respective internal types.
               * @function fromObject
               * @memberof lobby.RespLobbyInfo.LobbyInfo
               * @static
               * @param {Object.<string,*>} object Plain object
               * @returns {lobby.RespLobbyInfo.LobbyInfo} LobbyInfo
               */


              LobbyInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.lobby.RespLobbyInfo.LobbyInfo) return object;
                var message = new $root.lobby.RespLobbyInfo.LobbyInfo();
                if (object.GameId != null) message.GameId = object.GameId >>> 0;
                if (object.GameName != null) message.GameName = String(object.GameName);
                if (object.IsOpen != null) message.IsOpen = Boolean(object.IsOpen);
                return message;
              };
              /**
               * Creates a plain object from a LobbyInfo message. Also converts values to other types if specified.
               * @function toObject
               * @memberof lobby.RespLobbyInfo.LobbyInfo
               * @static
               * @param {lobby.RespLobbyInfo.LobbyInfo} message LobbyInfo
               * @param {$protobuf.IConversionOptions} [options] Conversion options
               * @returns {Object.<string,*>} Plain object
               */


              LobbyInfo.toObject = function toObject(message, options) {
                if (!options) options = {};
                var object = {};

                if (options.defaults) {
                  object.GameId = 0;
                  object.GameName = "";
                  object.IsOpen = false;
                }

                if (message.GameId != null && message.hasOwnProperty("GameId")) object.GameId = message.GameId;
                if (message.GameName != null && message.hasOwnProperty("GameName")) object.GameName = message.GameName;
                if (message.IsOpen != null && message.hasOwnProperty("IsOpen")) object.IsOpen = message.IsOpen;
                return object;
              };
              /**
               * Converts this LobbyInfo to JSON.
               * @function toJSON
               * @memberof lobby.RespLobbyInfo.LobbyInfo
               * @instance
               * @returns {Object.<string,*>} JSON object
               */


              LobbyInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };

              return LobbyInfo;
            }();

            return RespLobbyInfo;
          }();

          lobby.ReqChangePlayerInfo = function () {
            /**
             * Properties of a ReqChangePlayerInfo.
             * @memberof lobby
             * @interface IReqChangePlayerInfo
             * @property {string|null} [NickName] ReqChangePlayerInfo NickName
             * @property {common.Gender|null} [Gender] ReqChangePlayerInfo Gender
             * @property {string|null} [Avatar] ReqChangePlayerInfo Avatar
             */

            /**
             * Constructs a new ReqChangePlayerInfo.
             * @memberof lobby
             * @classdesc Represents a ReqChangePlayerInfo.
             * @implements IReqChangePlayerInfo
             * @constructor
             * @param {lobby.IReqChangePlayerInfo=} [properties] Properties to set
             */
            function ReqChangePlayerInfo(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * ReqChangePlayerInfo NickName.
             * @member {string} NickName
             * @memberof lobby.ReqChangePlayerInfo
             * @instance
             */


            ReqChangePlayerInfo.prototype.NickName = "";
            /**
             * ReqChangePlayerInfo Gender.
             * @member {common.Gender} Gender
             * @memberof lobby.ReqChangePlayerInfo
             * @instance
             */

            ReqChangePlayerInfo.prototype.Gender = 0;
            /**
             * ReqChangePlayerInfo Avatar.
             * @member {string} Avatar
             * @memberof lobby.ReqChangePlayerInfo
             * @instance
             */

            ReqChangePlayerInfo.prototype.Avatar = "";
            /**
             * Creates a new ReqChangePlayerInfo instance using the specified properties.
             * @function create
             * @memberof lobby.ReqChangePlayerInfo
             * @static
             * @param {lobby.IReqChangePlayerInfo=} [properties] Properties to set
             * @returns {lobby.ReqChangePlayerInfo} ReqChangePlayerInfo instance
             */

            ReqChangePlayerInfo.create = function create(properties) {
              return new ReqChangePlayerInfo(properties);
            };
            /**
             * Encodes the specified ReqChangePlayerInfo message. Does not implicitly {@link lobby.ReqChangePlayerInfo.verify|verify} messages.
             * @function encode
             * @memberof lobby.ReqChangePlayerInfo
             * @static
             * @param {lobby.IReqChangePlayerInfo} message ReqChangePlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ReqChangePlayerInfo.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.NickName != null && Object.hasOwnProperty.call(message, "NickName")) writer.uint32(
              /* id 1, wireType 2 =*/
              10).string(message.NickName);
              if (message.Gender != null && Object.hasOwnProperty.call(message, "Gender")) writer.uint32(
              /* id 2, wireType 0 =*/
              16).int32(message.Gender);
              if (message.Avatar != null && Object.hasOwnProperty.call(message, "Avatar")) writer.uint32(
              /* id 3, wireType 2 =*/
              26).string(message.Avatar);
              return writer;
            };
            /**
             * Encodes the specified ReqChangePlayerInfo message, length delimited. Does not implicitly {@link lobby.ReqChangePlayerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lobby.ReqChangePlayerInfo
             * @static
             * @param {lobby.IReqChangePlayerInfo} message ReqChangePlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ReqChangePlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a ReqChangePlayerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof lobby.ReqChangePlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lobby.ReqChangePlayerInfo} ReqChangePlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ReqChangePlayerInfo.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.lobby.ReqChangePlayerInfo();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.NickName = reader.string();
                    break;

                  case 2:
                    message.Gender = reader.int32();
                    break;

                  case 3:
                    message.Avatar = reader.string();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a ReqChangePlayerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lobby.ReqChangePlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lobby.ReqChangePlayerInfo} ReqChangePlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ReqChangePlayerInfo.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a ReqChangePlayerInfo message.
             * @function verify
             * @memberof lobby.ReqChangePlayerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            ReqChangePlayerInfo.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.NickName != null && message.hasOwnProperty("NickName")) if (!$util.isString(message.NickName)) return "NickName: string expected";
              if (message.Gender != null && message.hasOwnProperty("Gender")) switch (message.Gender) {
                default:
                  return "Gender: enum value expected";

                case 0:
                case 1:
                case 2:
                  break;
              }
              if (message.Avatar != null && message.hasOwnProperty("Avatar")) if (!$util.isString(message.Avatar)) return "Avatar: string expected";
              return null;
            };
            /**
             * Creates a ReqChangePlayerInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lobby.ReqChangePlayerInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lobby.ReqChangePlayerInfo} ReqChangePlayerInfo
             */


            ReqChangePlayerInfo.fromObject = function fromObject(object) {
              if (object instanceof $root.lobby.ReqChangePlayerInfo) return object;
              var message = new $root.lobby.ReqChangePlayerInfo();
              if (object.NickName != null) message.NickName = String(object.NickName);

              switch (object.Gender) {
                case "Unknow":
                case 0:
                  message.Gender = 0;
                  break;

                case "Male":
                case 1:
                  message.Gender = 1;
                  break;

                case "Female":
                case 2:
                  message.Gender = 2;
                  break;
              }

              if (object.Avatar != null) message.Avatar = String(object.Avatar);
              return message;
            };
            /**
             * Creates a plain object from a ReqChangePlayerInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lobby.ReqChangePlayerInfo
             * @static
             * @param {lobby.ReqChangePlayerInfo} message ReqChangePlayerInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            ReqChangePlayerInfo.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.NickName = "";
                object.Gender = options.enums === String ? "Unknow" : 0;
                object.Avatar = "";
              }

              if (message.NickName != null && message.hasOwnProperty("NickName")) object.NickName = message.NickName;
              if (message.Gender != null && message.hasOwnProperty("Gender")) object.Gender = options.enums === String ? $root.common.Gender[message.Gender] : message.Gender;
              if (message.Avatar != null && message.hasOwnProperty("Avatar")) object.Avatar = message.Avatar;
              return object;
            };
            /**
             * Converts this ReqChangePlayerInfo to JSON.
             * @function toJSON
             * @memberof lobby.ReqChangePlayerInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            ReqChangePlayerInfo.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReqChangePlayerInfo;
          }();

          lobby.RespChangePlayerInfo = function () {
            /**
             * Properties of a RespChangePlayerInfo.
             * @memberof lobby
             * @interface IRespChangePlayerInfo
             * @property {common.ErrorCode|null} [ErrCode] RespChangePlayerInfo ErrCode
             */

            /**
             * Constructs a new RespChangePlayerInfo.
             * @memberof lobby
             * @classdesc Represents a RespChangePlayerInfo.
             * @implements IRespChangePlayerInfo
             * @constructor
             * @param {lobby.IRespChangePlayerInfo=} [properties] Properties to set
             */
            function RespChangePlayerInfo(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * RespChangePlayerInfo ErrCode.
             * @member {common.ErrorCode} ErrCode
             * @memberof lobby.RespChangePlayerInfo
             * @instance
             */


            RespChangePlayerInfo.prototype.ErrCode = 0;
            /**
             * Creates a new RespChangePlayerInfo instance using the specified properties.
             * @function create
             * @memberof lobby.RespChangePlayerInfo
             * @static
             * @param {lobby.IRespChangePlayerInfo=} [properties] Properties to set
             * @returns {lobby.RespChangePlayerInfo} RespChangePlayerInfo instance
             */

            RespChangePlayerInfo.create = function create(properties) {
              return new RespChangePlayerInfo(properties);
            };
            /**
             * Encodes the specified RespChangePlayerInfo message. Does not implicitly {@link lobby.RespChangePlayerInfo.verify|verify} messages.
             * @function encode
             * @memberof lobby.RespChangePlayerInfo
             * @static
             * @param {lobby.IRespChangePlayerInfo} message RespChangePlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RespChangePlayerInfo.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.ErrCode != null && Object.hasOwnProperty.call(message, "ErrCode")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.ErrCode);
              return writer;
            };
            /**
             * Encodes the specified RespChangePlayerInfo message, length delimited. Does not implicitly {@link lobby.RespChangePlayerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lobby.RespChangePlayerInfo
             * @static
             * @param {lobby.IRespChangePlayerInfo} message RespChangePlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RespChangePlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a RespChangePlayerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof lobby.RespChangePlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lobby.RespChangePlayerInfo} RespChangePlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RespChangePlayerInfo.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.lobby.RespChangePlayerInfo();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.ErrCode = reader.int32();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a RespChangePlayerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lobby.RespChangePlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lobby.RespChangePlayerInfo} RespChangePlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RespChangePlayerInfo.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a RespChangePlayerInfo message.
             * @function verify
             * @memberof lobby.RespChangePlayerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            RespChangePlayerInfo.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.ErrCode != null && message.hasOwnProperty("ErrCode")) switch (message.ErrCode) {
                default:
                  return "ErrCode: enum value expected";

                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  break;
              }
              return null;
            };
            /**
             * Creates a RespChangePlayerInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lobby.RespChangePlayerInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lobby.RespChangePlayerInfo} RespChangePlayerInfo
             */


            RespChangePlayerInfo.fromObject = function fromObject(object) {
              if (object instanceof $root.lobby.RespChangePlayerInfo) return object;
              var message = new $root.lobby.RespChangePlayerInfo();

              switch (object.ErrCode) {
                case "Default":
                case 0:
                  message.ErrCode = 0;
                  break;

                case "OK":
                case 1:
                  message.ErrCode = 1;
                  break;

                case "EntryError":
                case 2:
                  message.ErrCode = 2;
                  break;

                case "LoginAccountUnExistent":
                case 3:
                  message.ErrCode = 3;
                  break;

                case "LoginPasswordError":
                case 4:
                  message.ErrCode = 4;
                  break;

                case "RegisterAccountExit":
                case 5:
                  message.ErrCode = 5;
                  break;

                case "AuthFailed":
                case 6:
                  message.ErrCode = 6;
                  break;

                case "ChangePlayerInfoFailed":
                case 7:
                  message.ErrCode = 7;
                  break;
              }

              return message;
            };
            /**
             * Creates a plain object from a RespChangePlayerInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lobby.RespChangePlayerInfo
             * @static
             * @param {lobby.RespChangePlayerInfo} message RespChangePlayerInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            RespChangePlayerInfo.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};
              if (options.defaults) object.ErrCode = options.enums === String ? "Default" : 0;
              if (message.ErrCode != null && message.hasOwnProperty("ErrCode")) object.ErrCode = options.enums === String ? $root.common.ErrorCode[message.ErrCode] : message.ErrCode;
              return object;
            };
            /**
             * Converts this RespChangePlayerInfo to JSON.
             * @function toJSON
             * @memberof lobby.RespChangePlayerInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            RespChangePlayerInfo.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RespChangePlayerInfo;
          }();

          return lobby;
        }();

        $root.rpc = function () {
          /**
           * Namespace rpc.
           * @exports rpc
           * @namespace
           */
          var rpc = {};

          rpc.ReqJoinChatGroup = function () {
            /**
             * Properties of a ReqJoinChatGroup.
             * @memberof rpc
             * @interface IReqJoinChatGroup
             * @property {chat.ChatGroup|null} [Group] ReqJoinChatGroup Group
             * @property {string|null} [Tag] ReqJoinChatGroup Tag
             * @property {common.IPlayerBaseInfo|null} [Player] ReqJoinChatGroup Player
             */

            /**
             * Constructs a new ReqJoinChatGroup.
             * @memberof rpc
             * @classdesc Represents a ReqJoinChatGroup.
             * @implements IReqJoinChatGroup
             * @constructor
             * @param {rpc.IReqJoinChatGroup=} [properties] Properties to set
             */
            function ReqJoinChatGroup(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * ReqJoinChatGroup Group.
             * @member {chat.ChatGroup} Group
             * @memberof rpc.ReqJoinChatGroup
             * @instance
             */


            ReqJoinChatGroup.prototype.Group = 0;
            /**
             * ReqJoinChatGroup Tag.
             * @member {string} Tag
             * @memberof rpc.ReqJoinChatGroup
             * @instance
             */

            ReqJoinChatGroup.prototype.Tag = "";
            /**
             * ReqJoinChatGroup Player.
             * @member {common.IPlayerBaseInfo|null|undefined} Player
             * @memberof rpc.ReqJoinChatGroup
             * @instance
             */

            ReqJoinChatGroup.prototype.Player = null;
            /**
             * Creates a new ReqJoinChatGroup instance using the specified properties.
             * @function create
             * @memberof rpc.ReqJoinChatGroup
             * @static
             * @param {rpc.IReqJoinChatGroup=} [properties] Properties to set
             * @returns {rpc.ReqJoinChatGroup} ReqJoinChatGroup instance
             */

            ReqJoinChatGroup.create = function create(properties) {
              return new ReqJoinChatGroup(properties);
            };
            /**
             * Encodes the specified ReqJoinChatGroup message. Does not implicitly {@link rpc.ReqJoinChatGroup.verify|verify} messages.
             * @function encode
             * @memberof rpc.ReqJoinChatGroup
             * @static
             * @param {rpc.IReqJoinChatGroup} message ReqJoinChatGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ReqJoinChatGroup.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.Group != null && Object.hasOwnProperty.call(message, "Group")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.Group);
              if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag")) writer.uint32(
              /* id 2, wireType 2 =*/
              18).string(message.Tag);
              if (message.Player != null && Object.hasOwnProperty.call(message, "Player")) $root.common.PlayerBaseInfo.encode(message.Player, writer.uint32(
              /* id 3, wireType 2 =*/
              26).fork()).ldelim();
              return writer;
            };
            /**
             * Encodes the specified ReqJoinChatGroup message, length delimited. Does not implicitly {@link rpc.ReqJoinChatGroup.verify|verify} messages.
             * @function encodeDelimited
             * @memberof rpc.ReqJoinChatGroup
             * @static
             * @param {rpc.IReqJoinChatGroup} message ReqJoinChatGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ReqJoinChatGroup.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a ReqJoinChatGroup message from the specified reader or buffer.
             * @function decode
             * @memberof rpc.ReqJoinChatGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {rpc.ReqJoinChatGroup} ReqJoinChatGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ReqJoinChatGroup.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.rpc.ReqJoinChatGroup();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.Group = reader.int32();
                    break;

                  case 2:
                    message.Tag = reader.string();
                    break;

                  case 3:
                    message.Player = $root.common.PlayerBaseInfo.decode(reader, reader.uint32());
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a ReqJoinChatGroup message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof rpc.ReqJoinChatGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {rpc.ReqJoinChatGroup} ReqJoinChatGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ReqJoinChatGroup.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a ReqJoinChatGroup message.
             * @function verify
             * @memberof rpc.ReqJoinChatGroup
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            ReqJoinChatGroup.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.Group != null && message.hasOwnProperty("Group")) switch (message.Group) {
                default:
                  return "Group: enum value expected";

                case 0:
                case 1:
                  break;
              }
              if (message.Tag != null && message.hasOwnProperty("Tag")) if (!$util.isString(message.Tag)) return "Tag: string expected";

              if (message.Player != null && message.hasOwnProperty("Player")) {
                var error = $root.common.PlayerBaseInfo.verify(message.Player);
                if (error) return "Player." + error;
              }

              return null;
            };
            /**
             * Creates a ReqJoinChatGroup message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof rpc.ReqJoinChatGroup
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {rpc.ReqJoinChatGroup} ReqJoinChatGroup
             */


            ReqJoinChatGroup.fromObject = function fromObject(object) {
              if (object instanceof $root.rpc.ReqJoinChatGroup) return object;
              var message = new $root.rpc.ReqJoinChatGroup();

              switch (object.Group) {
                case "World":
                case 0:
                  message.Group = 0;
                  break;

                case "Club":
                case 1:
                  message.Group = 1;
                  break;
              }

              if (object.Tag != null) message.Tag = String(object.Tag);

              if (object.Player != null) {
                if (typeof object.Player !== "object") throw TypeError(".rpc.ReqJoinChatGroup.Player: object expected");
                message.Player = $root.common.PlayerBaseInfo.fromObject(object.Player);
              }

              return message;
            };
            /**
             * Creates a plain object from a ReqJoinChatGroup message. Also converts values to other types if specified.
             * @function toObject
             * @memberof rpc.ReqJoinChatGroup
             * @static
             * @param {rpc.ReqJoinChatGroup} message ReqJoinChatGroup
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            ReqJoinChatGroup.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.Group = options.enums === String ? "World" : 0;
                object.Tag = "";
                object.Player = null;
              }

              if (message.Group != null && message.hasOwnProperty("Group")) object.Group = options.enums === String ? $root.chat.ChatGroup[message.Group] : message.Group;
              if (message.Tag != null && message.hasOwnProperty("Tag")) object.Tag = message.Tag;
              if (message.Player != null && message.hasOwnProperty("Player")) object.Player = $root.common.PlayerBaseInfo.toObject(message.Player, options);
              return object;
            };
            /**
             * Converts this ReqJoinChatGroup to JSON.
             * @function toJSON
             * @memberof rpc.ReqJoinChatGroup
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            ReqJoinChatGroup.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReqJoinChatGroup;
          }();

          rpc.RespJoinChatGroup = function () {
            /**
             * Properties of a RespJoinChatGroup.
             * @memberof rpc
             * @interface IRespJoinChatGroup
             * @property {common.ErrorCode|null} [ErrCode] RespJoinChatGroup ErrCode
             */

            /**
             * Constructs a new RespJoinChatGroup.
             * @memberof rpc
             * @classdesc Represents a RespJoinChatGroup.
             * @implements IRespJoinChatGroup
             * @constructor
             * @param {rpc.IRespJoinChatGroup=} [properties] Properties to set
             */
            function RespJoinChatGroup(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * RespJoinChatGroup ErrCode.
             * @member {common.ErrorCode} ErrCode
             * @memberof rpc.RespJoinChatGroup
             * @instance
             */


            RespJoinChatGroup.prototype.ErrCode = 0;
            /**
             * Creates a new RespJoinChatGroup instance using the specified properties.
             * @function create
             * @memberof rpc.RespJoinChatGroup
             * @static
             * @param {rpc.IRespJoinChatGroup=} [properties] Properties to set
             * @returns {rpc.RespJoinChatGroup} RespJoinChatGroup instance
             */

            RespJoinChatGroup.create = function create(properties) {
              return new RespJoinChatGroup(properties);
            };
            /**
             * Encodes the specified RespJoinChatGroup message. Does not implicitly {@link rpc.RespJoinChatGroup.verify|verify} messages.
             * @function encode
             * @memberof rpc.RespJoinChatGroup
             * @static
             * @param {rpc.IRespJoinChatGroup} message RespJoinChatGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RespJoinChatGroup.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.ErrCode != null && Object.hasOwnProperty.call(message, "ErrCode")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.ErrCode);
              return writer;
            };
            /**
             * Encodes the specified RespJoinChatGroup message, length delimited. Does not implicitly {@link rpc.RespJoinChatGroup.verify|verify} messages.
             * @function encodeDelimited
             * @memberof rpc.RespJoinChatGroup
             * @static
             * @param {rpc.IRespJoinChatGroup} message RespJoinChatGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RespJoinChatGroup.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a RespJoinChatGroup message from the specified reader or buffer.
             * @function decode
             * @memberof rpc.RespJoinChatGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {rpc.RespJoinChatGroup} RespJoinChatGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RespJoinChatGroup.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.rpc.RespJoinChatGroup();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.ErrCode = reader.int32();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a RespJoinChatGroup message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof rpc.RespJoinChatGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {rpc.RespJoinChatGroup} RespJoinChatGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RespJoinChatGroup.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a RespJoinChatGroup message.
             * @function verify
             * @memberof rpc.RespJoinChatGroup
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            RespJoinChatGroup.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.ErrCode != null && message.hasOwnProperty("ErrCode")) switch (message.ErrCode) {
                default:
                  return "ErrCode: enum value expected";

                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  break;
              }
              return null;
            };
            /**
             * Creates a RespJoinChatGroup message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof rpc.RespJoinChatGroup
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {rpc.RespJoinChatGroup} RespJoinChatGroup
             */


            RespJoinChatGroup.fromObject = function fromObject(object) {
              if (object instanceof $root.rpc.RespJoinChatGroup) return object;
              var message = new $root.rpc.RespJoinChatGroup();

              switch (object.ErrCode) {
                case "Default":
                case 0:
                  message.ErrCode = 0;
                  break;

                case "OK":
                case 1:
                  message.ErrCode = 1;
                  break;

                case "EntryError":
                case 2:
                  message.ErrCode = 2;
                  break;

                case "LoginAccountUnExistent":
                case 3:
                  message.ErrCode = 3;
                  break;

                case "LoginPasswordError":
                case 4:
                  message.ErrCode = 4;
                  break;

                case "RegisterAccountExit":
                case 5:
                  message.ErrCode = 5;
                  break;

                case "AuthFailed":
                case 6:
                  message.ErrCode = 6;
                  break;

                case "ChangePlayerInfoFailed":
                case 7:
                  message.ErrCode = 7;
                  break;
              }

              return message;
            };
            /**
             * Creates a plain object from a RespJoinChatGroup message. Also converts values to other types if specified.
             * @function toObject
             * @memberof rpc.RespJoinChatGroup
             * @static
             * @param {rpc.RespJoinChatGroup} message RespJoinChatGroup
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            RespJoinChatGroup.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};
              if (options.defaults) object.ErrCode = options.enums === String ? "Default" : 0;
              if (message.ErrCode != null && message.hasOwnProperty("ErrCode")) object.ErrCode = options.enums === String ? $root.common.ErrorCode[message.ErrCode] : message.ErrCode;
              return object;
            };
            /**
             * Converts this RespJoinChatGroup to JSON.
             * @function toJSON
             * @memberof rpc.RespJoinChatGroup
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            RespJoinChatGroup.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RespJoinChatGroup;
          }();

          rpc.ReqLeaveChatGroup = function () {
            /**
             * Properties of a ReqLeaveChatGroup.
             * @memberof rpc
             * @interface IReqLeaveChatGroup
             * @property {chat.ChatGroup|null} [Group] ReqLeaveChatGroup Group
             * @property {string|null} [Tag] ReqLeaveChatGroup Tag
             * @property {string|null} [PlayerGuid] ReqLeaveChatGroup PlayerGuid
             */

            /**
             * Constructs a new ReqLeaveChatGroup.
             * @memberof rpc
             * @classdesc Represents a ReqLeaveChatGroup.
             * @implements IReqLeaveChatGroup
             * @constructor
             * @param {rpc.IReqLeaveChatGroup=} [properties] Properties to set
             */
            function ReqLeaveChatGroup(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * ReqLeaveChatGroup Group.
             * @member {chat.ChatGroup} Group
             * @memberof rpc.ReqLeaveChatGroup
             * @instance
             */


            ReqLeaveChatGroup.prototype.Group = 0;
            /**
             * ReqLeaveChatGroup Tag.
             * @member {string} Tag
             * @memberof rpc.ReqLeaveChatGroup
             * @instance
             */

            ReqLeaveChatGroup.prototype.Tag = "";
            /**
             * ReqLeaveChatGroup PlayerGuid.
             * @member {string} PlayerGuid
             * @memberof rpc.ReqLeaveChatGroup
             * @instance
             */

            ReqLeaveChatGroup.prototype.PlayerGuid = "";
            /**
             * Creates a new ReqLeaveChatGroup instance using the specified properties.
             * @function create
             * @memberof rpc.ReqLeaveChatGroup
             * @static
             * @param {rpc.IReqLeaveChatGroup=} [properties] Properties to set
             * @returns {rpc.ReqLeaveChatGroup} ReqLeaveChatGroup instance
             */

            ReqLeaveChatGroup.create = function create(properties) {
              return new ReqLeaveChatGroup(properties);
            };
            /**
             * Encodes the specified ReqLeaveChatGroup message. Does not implicitly {@link rpc.ReqLeaveChatGroup.verify|verify} messages.
             * @function encode
             * @memberof rpc.ReqLeaveChatGroup
             * @static
             * @param {rpc.IReqLeaveChatGroup} message ReqLeaveChatGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ReqLeaveChatGroup.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.Group != null && Object.hasOwnProperty.call(message, "Group")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.Group);
              if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag")) writer.uint32(
              /* id 2, wireType 2 =*/
              18).string(message.Tag);
              if (message.PlayerGuid != null && Object.hasOwnProperty.call(message, "PlayerGuid")) writer.uint32(
              /* id 3, wireType 2 =*/
              26).string(message.PlayerGuid);
              return writer;
            };
            /**
             * Encodes the specified ReqLeaveChatGroup message, length delimited. Does not implicitly {@link rpc.ReqLeaveChatGroup.verify|verify} messages.
             * @function encodeDelimited
             * @memberof rpc.ReqLeaveChatGroup
             * @static
             * @param {rpc.IReqLeaveChatGroup} message ReqLeaveChatGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            ReqLeaveChatGroup.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a ReqLeaveChatGroup message from the specified reader or buffer.
             * @function decode
             * @memberof rpc.ReqLeaveChatGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {rpc.ReqLeaveChatGroup} ReqLeaveChatGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ReqLeaveChatGroup.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.rpc.ReqLeaveChatGroup();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.Group = reader.int32();
                    break;

                  case 2:
                    message.Tag = reader.string();
                    break;

                  case 3:
                    message.PlayerGuid = reader.string();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a ReqLeaveChatGroup message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof rpc.ReqLeaveChatGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {rpc.ReqLeaveChatGroup} ReqLeaveChatGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            ReqLeaveChatGroup.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a ReqLeaveChatGroup message.
             * @function verify
             * @memberof rpc.ReqLeaveChatGroup
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            ReqLeaveChatGroup.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.Group != null && message.hasOwnProperty("Group")) switch (message.Group) {
                default:
                  return "Group: enum value expected";

                case 0:
                case 1:
                  break;
              }
              if (message.Tag != null && message.hasOwnProperty("Tag")) if (!$util.isString(message.Tag)) return "Tag: string expected";
              if (message.PlayerGuid != null && message.hasOwnProperty("PlayerGuid")) if (!$util.isString(message.PlayerGuid)) return "PlayerGuid: string expected";
              return null;
            };
            /**
             * Creates a ReqLeaveChatGroup message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof rpc.ReqLeaveChatGroup
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {rpc.ReqLeaveChatGroup} ReqLeaveChatGroup
             */


            ReqLeaveChatGroup.fromObject = function fromObject(object) {
              if (object instanceof $root.rpc.ReqLeaveChatGroup) return object;
              var message = new $root.rpc.ReqLeaveChatGroup();

              switch (object.Group) {
                case "World":
                case 0:
                  message.Group = 0;
                  break;

                case "Club":
                case 1:
                  message.Group = 1;
                  break;
              }

              if (object.Tag != null) message.Tag = String(object.Tag);
              if (object.PlayerGuid != null) message.PlayerGuid = String(object.PlayerGuid);
              return message;
            };
            /**
             * Creates a plain object from a ReqLeaveChatGroup message. Also converts values to other types if specified.
             * @function toObject
             * @memberof rpc.ReqLeaveChatGroup
             * @static
             * @param {rpc.ReqLeaveChatGroup} message ReqLeaveChatGroup
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            ReqLeaveChatGroup.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.Group = options.enums === String ? "World" : 0;
                object.Tag = "";
                object.PlayerGuid = "";
              }

              if (message.Group != null && message.hasOwnProperty("Group")) object.Group = options.enums === String ? $root.chat.ChatGroup[message.Group] : message.Group;
              if (message.Tag != null && message.hasOwnProperty("Tag")) object.Tag = message.Tag;
              if (message.PlayerGuid != null && message.hasOwnProperty("PlayerGuid")) object.PlayerGuid = message.PlayerGuid;
              return object;
            };
            /**
             * Converts this ReqLeaveChatGroup to JSON.
             * @function toJSON
             * @memberof rpc.ReqLeaveChatGroup
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            ReqLeaveChatGroup.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReqLeaveChatGroup;
          }();

          rpc.RespLeaveChatGroup = function () {
            /**
             * Properties of a RespLeaveChatGroup.
             * @memberof rpc
             * @interface IRespLeaveChatGroup
             * @property {common.ErrorCode|null} [ErrCode] RespLeaveChatGroup ErrCode
             */

            /**
             * Constructs a new RespLeaveChatGroup.
             * @memberof rpc
             * @classdesc Represents a RespLeaveChatGroup.
             * @implements IRespLeaveChatGroup
             * @constructor
             * @param {rpc.IRespLeaveChatGroup=} [properties] Properties to set
             */
            function RespLeaveChatGroup(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
            }
            /**
             * RespLeaveChatGroup ErrCode.
             * @member {common.ErrorCode} ErrCode
             * @memberof rpc.RespLeaveChatGroup
             * @instance
             */


            RespLeaveChatGroup.prototype.ErrCode = 0;
            /**
             * Creates a new RespLeaveChatGroup instance using the specified properties.
             * @function create
             * @memberof rpc.RespLeaveChatGroup
             * @static
             * @param {rpc.IRespLeaveChatGroup=} [properties] Properties to set
             * @returns {rpc.RespLeaveChatGroup} RespLeaveChatGroup instance
             */

            RespLeaveChatGroup.create = function create(properties) {
              return new RespLeaveChatGroup(properties);
            };
            /**
             * Encodes the specified RespLeaveChatGroup message. Does not implicitly {@link rpc.RespLeaveChatGroup.verify|verify} messages.
             * @function encode
             * @memberof rpc.RespLeaveChatGroup
             * @static
             * @param {rpc.IRespLeaveChatGroup} message RespLeaveChatGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RespLeaveChatGroup.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.ErrCode != null && Object.hasOwnProperty.call(message, "ErrCode")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.ErrCode);
              return writer;
            };
            /**
             * Encodes the specified RespLeaveChatGroup message, length delimited. Does not implicitly {@link rpc.RespLeaveChatGroup.verify|verify} messages.
             * @function encodeDelimited
             * @memberof rpc.RespLeaveChatGroup
             * @static
             * @param {rpc.IRespLeaveChatGroup} message RespLeaveChatGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RespLeaveChatGroup.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a RespLeaveChatGroup message from the specified reader or buffer.
             * @function decode
             * @memberof rpc.RespLeaveChatGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {rpc.RespLeaveChatGroup} RespLeaveChatGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RespLeaveChatGroup.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.rpc.RespLeaveChatGroup();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.ErrCode = reader.int32();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a RespLeaveChatGroup message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof rpc.RespLeaveChatGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {rpc.RespLeaveChatGroup} RespLeaveChatGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RespLeaveChatGroup.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a RespLeaveChatGroup message.
             * @function verify
             * @memberof rpc.RespLeaveChatGroup
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            RespLeaveChatGroup.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.ErrCode != null && message.hasOwnProperty("ErrCode")) switch (message.ErrCode) {
                default:
                  return "ErrCode: enum value expected";

                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  break;
              }
              return null;
            };
            /**
             * Creates a RespLeaveChatGroup message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof rpc.RespLeaveChatGroup
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {rpc.RespLeaveChatGroup} RespLeaveChatGroup
             */


            RespLeaveChatGroup.fromObject = function fromObject(object) {
              if (object instanceof $root.rpc.RespLeaveChatGroup) return object;
              var message = new $root.rpc.RespLeaveChatGroup();

              switch (object.ErrCode) {
                case "Default":
                case 0:
                  message.ErrCode = 0;
                  break;

                case "OK":
                case 1:
                  message.ErrCode = 1;
                  break;

                case "EntryError":
                case 2:
                  message.ErrCode = 2;
                  break;

                case "LoginAccountUnExistent":
                case 3:
                  message.ErrCode = 3;
                  break;

                case "LoginPasswordError":
                case 4:
                  message.ErrCode = 4;
                  break;

                case "RegisterAccountExit":
                case 5:
                  message.ErrCode = 5;
                  break;

                case "AuthFailed":
                case 6:
                  message.ErrCode = 6;
                  break;

                case "ChangePlayerInfoFailed":
                case 7:
                  message.ErrCode = 7;
                  break;
              }

              return message;
            };
            /**
             * Creates a plain object from a RespLeaveChatGroup message. Also converts values to other types if specified.
             * @function toObject
             * @memberof rpc.RespLeaveChatGroup
             * @static
             * @param {rpc.RespLeaveChatGroup} message RespLeaveChatGroup
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            RespLeaveChatGroup.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};
              if (options.defaults) object.ErrCode = options.enums === String ? "Default" : 0;
              if (message.ErrCode != null && message.hasOwnProperty("ErrCode")) object.ErrCode = options.enums === String ? $root.common.ErrorCode[message.ErrCode] : message.ErrCode;
              return object;
            };
            /**
             * Converts this RespLeaveChatGroup to JSON.
             * @function toJSON
             * @memberof rpc.RespLeaveChatGroup
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            RespLeaveChatGroup.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RespLeaveChatGroup;
          }();

          return rpc;
        }();

        module.exports = $root; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        'protobufjs/minimal.js': _req
      }));
    }
  };
});
//# sourceMappingURL=942d35e098e9909855e7bbb91b5c103d42f99ee9.js.map
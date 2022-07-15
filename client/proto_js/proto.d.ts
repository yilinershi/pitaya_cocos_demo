
namespace proto {
    // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace chat. */
export namespace chat {

    /** ChatGroup enum. */
    enum ChatGroup {
        World = 0,
        Club = 1
    }

    /** Properties of an InputChatInfo. */
    interface IInputChatInfo {

        /** InputChatInfo Channel */
        Channel?: (chat.ChatGroup|null);

        /** InputChatInfo Content */
        Content?: (string|null);
    }

    /** Represents an InputChatInfo. */
    class InputChatInfo implements IInputChatInfo {

        /**
         * Constructs a new InputChatInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IInputChatInfo);

        /** InputChatInfo Channel. */
        public Channel: chat.ChatGroup;

        /** InputChatInfo Content. */
        public Content: string;

        /**
         * Creates a new InputChatInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InputChatInfo instance
         */
        public static create(properties?: chat.IInputChatInfo): chat.InputChatInfo;

        /**
         * Encodes the specified InputChatInfo message. Does not implicitly {@link chat.InputChatInfo.verify|verify} messages.
         * @param message InputChatInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IInputChatInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InputChatInfo message, length delimited. Does not implicitly {@link chat.InputChatInfo.verify|verify} messages.
         * @param message InputChatInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IInputChatInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InputChatInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InputChatInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.InputChatInfo;

        /**
         * Decodes an InputChatInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InputChatInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.InputChatInfo;

        /**
         * Verifies an InputChatInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InputChatInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InputChatInfo
         */
        public static fromObject(object: { [k: string]: any }): chat.InputChatInfo;

        /**
         * Creates a plain object from an InputChatInfo message. Also converts values to other types if specified.
         * @param message InputChatInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.InputChatInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InputChatInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChatInfo. */
    interface IChatInfo {

        /** ChatInfo From */
        From?: (common.IPlayerBaseInfo|null);

        /** ChatInfo Content */
        Content?: (string|null);
    }

    /** Represents a ChatInfo. */
    class ChatInfo implements IChatInfo {

        /**
         * Constructs a new ChatInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IChatInfo);

        /** ChatInfo From. */
        public From?: (common.IPlayerBaseInfo|null);

        /** ChatInfo Content. */
        public Content: string;

        /**
         * Creates a new ChatInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatInfo instance
         */
        public static create(properties?: chat.IChatInfo): chat.ChatInfo;

        /**
         * Encodes the specified ChatInfo message. Does not implicitly {@link chat.ChatInfo.verify|verify} messages.
         * @param message ChatInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IChatInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatInfo message, length delimited. Does not implicitly {@link chat.ChatInfo.verify|verify} messages.
         * @param message ChatInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IChatInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.ChatInfo;

        /**
         * Decodes a ChatInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.ChatInfo;

        /**
         * Verifies a ChatInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatInfo
         */
        public static fromObject(object: { [k: string]: any }): chat.ChatInfo;

        /**
         * Creates a plain object from a ChatInfo message. Also converts values to other types if specified.
         * @param message ChatInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.ChatInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncChatInfo. */
    interface ISyncChatInfo {

        /** SyncChatInfo Group */
        Group?: (chat.ChatGroup|null);

        /** SyncChatInfo ChatInfo */
        ChatInfo?: (chat.IChatInfo|null);
    }

    /** Represents a SyncChatInfo. */
    class SyncChatInfo implements ISyncChatInfo {

        /**
         * Constructs a new SyncChatInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.ISyncChatInfo);

        /** SyncChatInfo Group. */
        public Group: chat.ChatGroup;

        /** SyncChatInfo ChatInfo. */
        public ChatInfo?: (chat.IChatInfo|null);

        /**
         * Creates a new SyncChatInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncChatInfo instance
         */
        public static create(properties?: chat.ISyncChatInfo): chat.SyncChatInfo;

        /**
         * Encodes the specified SyncChatInfo message. Does not implicitly {@link chat.SyncChatInfo.verify|verify} messages.
         * @param message SyncChatInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.ISyncChatInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncChatInfo message, length delimited. Does not implicitly {@link chat.SyncChatInfo.verify|verify} messages.
         * @param message SyncChatInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.ISyncChatInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncChatInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncChatInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.SyncChatInfo;

        /**
         * Decodes a SyncChatInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncChatInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.SyncChatInfo;

        /**
         * Verifies a SyncChatInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncChatInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncChatInfo
         */
        public static fromObject(object: { [k: string]: any }): chat.SyncChatInfo;

        /**
         * Creates a plain object from a SyncChatInfo message. Also converts values to other types if specified.
         * @param message SyncChatInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.SyncChatInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncChatInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace common. */
export namespace common {

    /** ErrorCode enum. */
    enum ErrorCode {
        Default = 0,
        OK = 1,
        EntryError = 2,
        LoginAccountUnExistent = 3,
        LoginPasswordError = 4,
        RegisterAccountExit = 5,
        AuthFailed = 6,
        ChangePlayerInfoFailed = 7
    }

    /** Gender enum. */
    enum Gender {
        Unknow = 0,
        Male = 1,
        Female = 2
    }

    /** PackSystem enum. */
    enum PackSystem {
        Web = 0,
        Android = 1,
        IOS = 2,
        Win = 3,
        HongMeng = 4
    }

    /** Properties of a PlayerBaseInfo. */
    interface IPlayerBaseInfo {

        /** PlayerBaseInfo Guid */
        Guid?: (string|null);

        /** PlayerBaseInfo NickName */
        NickName?: (string|null);

        /** PlayerBaseInfo Gender */
        Gender?: (common.Gender|null);

        /** PlayerBaseInfo Avatar */
        Avatar?: (string|null);
    }

    /** Represents a PlayerBaseInfo. */
    class PlayerBaseInfo implements IPlayerBaseInfo {

        /**
         * Constructs a new PlayerBaseInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IPlayerBaseInfo);

        /** PlayerBaseInfo Guid. */
        public Guid: string;

        /** PlayerBaseInfo NickName. */
        public NickName: string;

        /** PlayerBaseInfo Gender. */
        public Gender: common.Gender;

        /** PlayerBaseInfo Avatar. */
        public Avatar: string;

        /**
         * Creates a new PlayerBaseInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerBaseInfo instance
         */
        public static create(properties?: common.IPlayerBaseInfo): common.PlayerBaseInfo;

        /**
         * Encodes the specified PlayerBaseInfo message. Does not implicitly {@link common.PlayerBaseInfo.verify|verify} messages.
         * @param message PlayerBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IPlayerBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerBaseInfo message, length delimited. Does not implicitly {@link common.PlayerBaseInfo.verify|verify} messages.
         * @param message PlayerBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IPlayerBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerBaseInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.PlayerBaseInfo;

        /**
         * Decodes a PlayerBaseInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.PlayerBaseInfo;

        /**
         * Verifies a PlayerBaseInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerBaseInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerBaseInfo
         */
        public static fromObject(object: { [k: string]: any }): common.PlayerBaseInfo;

        /**
         * Creates a plain object from a PlayerBaseInfo message. Also converts values to other types if specified.
         * @param message PlayerBaseInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.PlayerBaseInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerBaseInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace http. */
export namespace http {

    /** Properties of a ReqEntry. */
    interface IReqEntry {

        /** ReqEntry Secret */
        Secret?: (string|null);

        /** ReqEntry UUID */
        UUID?: (string|null);

        /** ReqEntry Platform */
        Platform?: (http.ReqEntry.EnumPlatform|null);

        /** ReqEntry Env */
        Env?: (http.ReqEntry.EnumEnv|null);

        /** ReqEntry ResVersion */
        ResVersion?: (string|null);

        /** ReqEntry GameVersion */
        GameVersion?: (string|null);
    }

    /** Represents a ReqEntry. */
    class ReqEntry implements IReqEntry {

        /**
         * Constructs a new ReqEntry.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.IReqEntry);

        /** ReqEntry Secret. */
        public Secret: string;

        /** ReqEntry UUID. */
        public UUID: string;

        /** ReqEntry Platform. */
        public Platform: http.ReqEntry.EnumPlatform;

        /** ReqEntry Env. */
        public Env: http.ReqEntry.EnumEnv;

        /** ReqEntry ResVersion. */
        public ResVersion: string;

        /** ReqEntry GameVersion. */
        public GameVersion: string;

        /**
         * Creates a new ReqEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqEntry instance
         */
        public static create(properties?: http.IReqEntry): http.ReqEntry;

        /**
         * Encodes the specified ReqEntry message. Does not implicitly {@link http.ReqEntry.verify|verify} messages.
         * @param message ReqEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: http.IReqEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqEntry message, length delimited. Does not implicitly {@link http.ReqEntry.verify|verify} messages.
         * @param message ReqEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: http.IReqEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqEntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.ReqEntry;

        /**
         * Decodes a ReqEntry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.ReqEntry;

        /**
         * Verifies a ReqEntry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqEntry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqEntry
         */
        public static fromObject(object: { [k: string]: any }): http.ReqEntry;

        /**
         * Creates a plain object from a ReqEntry message. Also converts values to other types if specified.
         * @param message ReqEntry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: http.ReqEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqEntry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ReqEntry {

        /** EnumPlatform enum. */
        enum EnumPlatform {
            None = 0,
            Android = 1,
            Ios = 2,
            WinPC = 3
        }

        /** EnumEnv enum. */
        enum EnumEnv {
            Dev = 0,
            Alpha = 2,
            Office = 1
        }
    }

    /** Properties of a RespEntry. */
    interface IRespEntry {

        /** RespEntry ErrCode */
        ErrCode?: (common.ErrorCode|null);

        /** RespEntry LoginUrl */
        LoginUrl?: (string|null);

        /** RespEntry RegisterUrl */
        RegisterUrl?: (string|null);

        /** RespEntry TcpUrl */
        TcpUrl?: (http.RespEntry.IAddr|null);

        /** RespEntry WebSocketUrl */
        WebSocketUrl?: (http.RespEntry.IAddr|null);
    }

    /** Represents a RespEntry. */
    class RespEntry implements IRespEntry {

        /**
         * Constructs a new RespEntry.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.IRespEntry);

        /** RespEntry ErrCode. */
        public ErrCode: common.ErrorCode;

        /** RespEntry LoginUrl. */
        public LoginUrl: string;

        /** RespEntry RegisterUrl. */
        public RegisterUrl: string;

        /** RespEntry TcpUrl. */
        public TcpUrl?: (http.RespEntry.IAddr|null);

        /** RespEntry WebSocketUrl. */
        public WebSocketUrl?: (http.RespEntry.IAddr|null);

        /**
         * Creates a new RespEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespEntry instance
         */
        public static create(properties?: http.IRespEntry): http.RespEntry;

        /**
         * Encodes the specified RespEntry message. Does not implicitly {@link http.RespEntry.verify|verify} messages.
         * @param message RespEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: http.IRespEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespEntry message, length delimited. Does not implicitly {@link http.RespEntry.verify|verify} messages.
         * @param message RespEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: http.IRespEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespEntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.RespEntry;

        /**
         * Decodes a RespEntry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.RespEntry;

        /**
         * Verifies a RespEntry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespEntry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespEntry
         */
        public static fromObject(object: { [k: string]: any }): http.RespEntry;

        /**
         * Creates a plain object from a RespEntry message. Also converts values to other types if specified.
         * @param message RespEntry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: http.RespEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespEntry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace RespEntry {

        /** Properties of an Addr. */
        interface IAddr {

            /** Addr Host */
            Host?: (string|null);

            /** Addr Port */
            Port?: (number|null);
        }

        /** Represents an Addr. */
        class Addr implements IAddr {

            /**
             * Constructs a new Addr.
             * @param [properties] Properties to set
             */
            constructor(properties?: http.RespEntry.IAddr);

            /** Addr Host. */
            public Host: string;

            /** Addr Port. */
            public Port: number;

            /**
             * Creates a new Addr instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Addr instance
             */
            public static create(properties?: http.RespEntry.IAddr): http.RespEntry.Addr;

            /**
             * Encodes the specified Addr message. Does not implicitly {@link http.RespEntry.Addr.verify|verify} messages.
             * @param message Addr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: http.RespEntry.IAddr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Addr message, length delimited. Does not implicitly {@link http.RespEntry.Addr.verify|verify} messages.
             * @param message Addr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: http.RespEntry.IAddr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Addr message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Addr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.RespEntry.Addr;

            /**
             * Decodes an Addr message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Addr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.RespEntry.Addr;

            /**
             * Verifies an Addr message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Addr message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Addr
             */
            public static fromObject(object: { [k: string]: any }): http.RespEntry.Addr;

            /**
             * Creates a plain object from an Addr message. Also converts values to other types if specified.
             * @param message Addr
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: http.RespEntry.Addr, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Addr to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a ReqRegister. */
    interface IReqRegister {

        /** ReqRegister Account */
        Account?: (string|null);

        /** ReqRegister Password */
        Password?: (string|null);

        /** ReqRegister AppId */
        AppId?: (string|null);

        /** ReqRegister ChannelId */
        ChannelId?: (string|null);

        /** ReqRegister MacId */
        MacId?: (string|null);
    }

    /** Represents a ReqRegister. */
    class ReqRegister implements IReqRegister {

        /**
         * Constructs a new ReqRegister.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.IReqRegister);

        /** ReqRegister Account. */
        public Account: string;

        /** ReqRegister Password. */
        public Password: string;

        /** ReqRegister AppId. */
        public AppId: string;

        /** ReqRegister ChannelId. */
        public ChannelId: string;

        /** ReqRegister MacId. */
        public MacId: string;

        /**
         * Creates a new ReqRegister instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqRegister instance
         */
        public static create(properties?: http.IReqRegister): http.ReqRegister;

        /**
         * Encodes the specified ReqRegister message. Does not implicitly {@link http.ReqRegister.verify|verify} messages.
         * @param message ReqRegister message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: http.IReqRegister, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqRegister message, length delimited. Does not implicitly {@link http.ReqRegister.verify|verify} messages.
         * @param message ReqRegister message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: http.IReqRegister, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqRegister message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.ReqRegister;

        /**
         * Decodes a ReqRegister message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.ReqRegister;

        /**
         * Verifies a ReqRegister message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqRegister message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqRegister
         */
        public static fromObject(object: { [k: string]: any }): http.ReqRegister;

        /**
         * Creates a plain object from a ReqRegister message. Also converts values to other types if specified.
         * @param message ReqRegister
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: http.ReqRegister, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqRegister to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespRegister. */
    interface IRespRegister {

        /** RespRegister ErrCode */
        ErrCode?: (common.ErrorCode|null);
    }

    /** Represents a RespRegister. */
    class RespRegister implements IRespRegister {

        /**
         * Constructs a new RespRegister.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.IRespRegister);

        /** RespRegister ErrCode. */
        public ErrCode: common.ErrorCode;

        /**
         * Creates a new RespRegister instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespRegister instance
         */
        public static create(properties?: http.IRespRegister): http.RespRegister;

        /**
         * Encodes the specified RespRegister message. Does not implicitly {@link http.RespRegister.verify|verify} messages.
         * @param message RespRegister message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: http.IRespRegister, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespRegister message, length delimited. Does not implicitly {@link http.RespRegister.verify|verify} messages.
         * @param message RespRegister message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: http.IRespRegister, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespRegister message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.RespRegister;

        /**
         * Decodes a RespRegister message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.RespRegister;

        /**
         * Verifies a RespRegister message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespRegister message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespRegister
         */
        public static fromObject(object: { [k: string]: any }): http.RespRegister;

        /**
         * Creates a plain object from a RespRegister message. Also converts values to other types if specified.
         * @param message RespRegister
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: http.RespRegister, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespRegister to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqLogin. */
    interface IReqLogin {

        /** ReqLogin Account */
        Account?: (string|null);

        /** ReqLogin Password */
        Password?: (string|null);

        /** ReqLogin AppId */
        AppId?: (string|null);
    }

    /** Represents a ReqLogin. */
    class ReqLogin implements IReqLogin {

        /**
         * Constructs a new ReqLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.IReqLogin);

        /** ReqLogin Account. */
        public Account: string;

        /** ReqLogin Password. */
        public Password: string;

        /** ReqLogin AppId. */
        public AppId: string;

        /**
         * Creates a new ReqLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqLogin instance
         */
        public static create(properties?: http.IReqLogin): http.ReqLogin;

        /**
         * Encodes the specified ReqLogin message. Does not implicitly {@link http.ReqLogin.verify|verify} messages.
         * @param message ReqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: http.IReqLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqLogin message, length delimited. Does not implicitly {@link http.ReqLogin.verify|verify} messages.
         * @param message ReqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: http.IReqLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.ReqLogin;

        /**
         * Decodes a ReqLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.ReqLogin;

        /**
         * Verifies a ReqLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqLogin
         */
        public static fromObject(object: { [k: string]: any }): http.ReqLogin;

        /**
         * Creates a plain object from a ReqLogin message. Also converts values to other types if specified.
         * @param message ReqLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: http.ReqLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespLogin. */
    interface IRespLogin {

        /** RespLogin ErrCode */
        ErrCode?: (common.ErrorCode|null);

        /** RespLogin Token */
        Token?: (string|null);
    }

    /** Represents a RespLogin. */
    class RespLogin implements IRespLogin {

        /**
         * Constructs a new RespLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: http.IRespLogin);

        /** RespLogin ErrCode. */
        public ErrCode: common.ErrorCode;

        /** RespLogin Token. */
        public Token: string;

        /**
         * Creates a new RespLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespLogin instance
         */
        public static create(properties?: http.IRespLogin): http.RespLogin;

        /**
         * Encodes the specified RespLogin message. Does not implicitly {@link http.RespLogin.verify|verify} messages.
         * @param message RespLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: http.IRespLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespLogin message, length delimited. Does not implicitly {@link http.RespLogin.verify|verify} messages.
         * @param message RespLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: http.IRespLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): http.RespLogin;

        /**
         * Decodes a RespLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): http.RespLogin;

        /**
         * Verifies a RespLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespLogin
         */
        public static fromObject(object: { [k: string]: any }): http.RespLogin;

        /**
         * Creates a plain object from a RespLogin message. Also converts values to other types if specified.
         * @param message RespLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: http.RespLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace lobby. */
export namespace lobby {

    /** Properties of a ReqAuth. */
    interface IReqAuth {

        /** ReqAuth Token */
        Token?: (string|null);
    }

    /** Represents a ReqAuth. */
    class ReqAuth implements IReqAuth {

        /**
         * Constructs a new ReqAuth.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IReqAuth);

        /** ReqAuth Token. */
        public Token: string;

        /**
         * Creates a new ReqAuth instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAuth instance
         */
        public static create(properties?: lobby.IReqAuth): lobby.ReqAuth;

        /**
         * Encodes the specified ReqAuth message. Does not implicitly {@link lobby.ReqAuth.verify|verify} messages.
         * @param message ReqAuth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IReqAuth, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqAuth message, length delimited. Does not implicitly {@link lobby.ReqAuth.verify|verify} messages.
         * @param message ReqAuth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IReqAuth, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqAuth message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAuth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby.ReqAuth;

        /**
         * Decodes a ReqAuth message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAuth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby.ReqAuth;

        /**
         * Verifies a ReqAuth message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqAuth message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqAuth
         */
        public static fromObject(object: { [k: string]: any }): lobby.ReqAuth;

        /**
         * Creates a plain object from a ReqAuth message. Also converts values to other types if specified.
         * @param message ReqAuth
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby.ReqAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqAuth to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespAuth. */
    interface IRespAuth {

        /** RespAuth ErrCode */
        ErrCode?: (common.ErrorCode|null);

        /** RespAuth BaseInfo */
        BaseInfo?: (common.IPlayerBaseInfo|null);
    }

    /** Represents a RespAuth. */
    class RespAuth implements IRespAuth {

        /**
         * Constructs a new RespAuth.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IRespAuth);

        /** RespAuth ErrCode. */
        public ErrCode: common.ErrorCode;

        /** RespAuth BaseInfo. */
        public BaseInfo?: (common.IPlayerBaseInfo|null);

        /**
         * Creates a new RespAuth instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespAuth instance
         */
        public static create(properties?: lobby.IRespAuth): lobby.RespAuth;

        /**
         * Encodes the specified RespAuth message. Does not implicitly {@link lobby.RespAuth.verify|verify} messages.
         * @param message RespAuth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IRespAuth, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespAuth message, length delimited. Does not implicitly {@link lobby.RespAuth.verify|verify} messages.
         * @param message RespAuth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IRespAuth, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespAuth message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespAuth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby.RespAuth;

        /**
         * Decodes a RespAuth message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespAuth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby.RespAuth;

        /**
         * Verifies a RespAuth message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespAuth message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespAuth
         */
        public static fromObject(object: { [k: string]: any }): lobby.RespAuth;

        /**
         * Creates a plain object from a RespAuth message. Also converts values to other types if specified.
         * @param message RespAuth
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby.RespAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespAuth to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqLobbyInfo. */
    interface IReqLobbyInfo {
    }

    /** Represents a ReqLobbyInfo. */
    class ReqLobbyInfo implements IReqLobbyInfo {

        /**
         * Constructs a new ReqLobbyInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IReqLobbyInfo);

        /**
         * Creates a new ReqLobbyInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqLobbyInfo instance
         */
        public static create(properties?: lobby.IReqLobbyInfo): lobby.ReqLobbyInfo;

        /**
         * Encodes the specified ReqLobbyInfo message. Does not implicitly {@link lobby.ReqLobbyInfo.verify|verify} messages.
         * @param message ReqLobbyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IReqLobbyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqLobbyInfo message, length delimited. Does not implicitly {@link lobby.ReqLobbyInfo.verify|verify} messages.
         * @param message ReqLobbyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IReqLobbyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqLobbyInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqLobbyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby.ReqLobbyInfo;

        /**
         * Decodes a ReqLobbyInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqLobbyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby.ReqLobbyInfo;

        /**
         * Verifies a ReqLobbyInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqLobbyInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqLobbyInfo
         */
        public static fromObject(object: { [k: string]: any }): lobby.ReqLobbyInfo;

        /**
         * Creates a plain object from a ReqLobbyInfo message. Also converts values to other types if specified.
         * @param message ReqLobbyInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby.ReqLobbyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqLobbyInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespLobbyInfo. */
    interface IRespLobbyInfo {

        /** RespLobbyInfo Infos */
        Infos?: (lobby.RespLobbyInfo.ILobbyInfo[]|null);
    }

    /** Represents a RespLobbyInfo. */
    class RespLobbyInfo implements IRespLobbyInfo {

        /**
         * Constructs a new RespLobbyInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IRespLobbyInfo);

        /** RespLobbyInfo Infos. */
        public Infos: lobby.RespLobbyInfo.ILobbyInfo[];

        /**
         * Creates a new RespLobbyInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespLobbyInfo instance
         */
        public static create(properties?: lobby.IRespLobbyInfo): lobby.RespLobbyInfo;

        /**
         * Encodes the specified RespLobbyInfo message. Does not implicitly {@link lobby.RespLobbyInfo.verify|verify} messages.
         * @param message RespLobbyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IRespLobbyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespLobbyInfo message, length delimited. Does not implicitly {@link lobby.RespLobbyInfo.verify|verify} messages.
         * @param message RespLobbyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IRespLobbyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespLobbyInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespLobbyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby.RespLobbyInfo;

        /**
         * Decodes a RespLobbyInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespLobbyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby.RespLobbyInfo;

        /**
         * Verifies a RespLobbyInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespLobbyInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespLobbyInfo
         */
        public static fromObject(object: { [k: string]: any }): lobby.RespLobbyInfo;

        /**
         * Creates a plain object from a RespLobbyInfo message. Also converts values to other types if specified.
         * @param message RespLobbyInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby.RespLobbyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespLobbyInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace RespLobbyInfo {

        /** Properties of a LobbyInfo. */
        interface ILobbyInfo {

            /** LobbyInfo GameId */
            GameId?: (number|null);

            /** LobbyInfo GameName */
            GameName?: (string|null);

            /** LobbyInfo IsOpen */
            IsOpen?: (boolean|null);
        }

        /** Represents a LobbyInfo. */
        class LobbyInfo implements ILobbyInfo {

            /**
             * Constructs a new LobbyInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: lobby.RespLobbyInfo.ILobbyInfo);

            /** LobbyInfo GameId. */
            public GameId: number;

            /** LobbyInfo GameName. */
            public GameName: string;

            /** LobbyInfo IsOpen. */
            public IsOpen: boolean;

            /**
             * Creates a new LobbyInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LobbyInfo instance
             */
            public static create(properties?: lobby.RespLobbyInfo.ILobbyInfo): lobby.RespLobbyInfo.LobbyInfo;

            /**
             * Encodes the specified LobbyInfo message. Does not implicitly {@link lobby.RespLobbyInfo.LobbyInfo.verify|verify} messages.
             * @param message LobbyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lobby.RespLobbyInfo.ILobbyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LobbyInfo message, length delimited. Does not implicitly {@link lobby.RespLobbyInfo.LobbyInfo.verify|verify} messages.
             * @param message LobbyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lobby.RespLobbyInfo.ILobbyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LobbyInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LobbyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby.RespLobbyInfo.LobbyInfo;

            /**
             * Decodes a LobbyInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LobbyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby.RespLobbyInfo.LobbyInfo;

            /**
             * Verifies a LobbyInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LobbyInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LobbyInfo
             */
            public static fromObject(object: { [k: string]: any }): lobby.RespLobbyInfo.LobbyInfo;

            /**
             * Creates a plain object from a LobbyInfo message. Also converts values to other types if specified.
             * @param message LobbyInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lobby.RespLobbyInfo.LobbyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LobbyInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a ReqChangePlayerInfo. */
    interface IReqChangePlayerInfo {

        /** ReqChangePlayerInfo NickName */
        NickName?: (string|null);

        /** ReqChangePlayerInfo Gender */
        Gender?: (common.Gender|null);

        /** ReqChangePlayerInfo Avatar */
        Avatar?: (string|null);
    }

    /** Represents a ReqChangePlayerInfo. */
    class ReqChangePlayerInfo implements IReqChangePlayerInfo {

        /**
         * Constructs a new ReqChangePlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IReqChangePlayerInfo);

        /** ReqChangePlayerInfo NickName. */
        public NickName: string;

        /** ReqChangePlayerInfo Gender. */
        public Gender: common.Gender;

        /** ReqChangePlayerInfo Avatar. */
        public Avatar: string;

        /**
         * Creates a new ReqChangePlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqChangePlayerInfo instance
         */
        public static create(properties?: lobby.IReqChangePlayerInfo): lobby.ReqChangePlayerInfo;

        /**
         * Encodes the specified ReqChangePlayerInfo message. Does not implicitly {@link lobby.ReqChangePlayerInfo.verify|verify} messages.
         * @param message ReqChangePlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IReqChangePlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqChangePlayerInfo message, length delimited. Does not implicitly {@link lobby.ReqChangePlayerInfo.verify|verify} messages.
         * @param message ReqChangePlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IReqChangePlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqChangePlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqChangePlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby.ReqChangePlayerInfo;

        /**
         * Decodes a ReqChangePlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqChangePlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby.ReqChangePlayerInfo;

        /**
         * Verifies a ReqChangePlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqChangePlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqChangePlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): lobby.ReqChangePlayerInfo;

        /**
         * Creates a plain object from a ReqChangePlayerInfo message. Also converts values to other types if specified.
         * @param message ReqChangePlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby.ReqChangePlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqChangePlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespChangePlayerInfo. */
    interface IRespChangePlayerInfo {

        /** RespChangePlayerInfo ErrCode */
        ErrCode?: (common.ErrorCode|null);
    }

    /** Represents a RespChangePlayerInfo. */
    class RespChangePlayerInfo implements IRespChangePlayerInfo {

        /**
         * Constructs a new RespChangePlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IRespChangePlayerInfo);

        /** RespChangePlayerInfo ErrCode. */
        public ErrCode: common.ErrorCode;

        /**
         * Creates a new RespChangePlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespChangePlayerInfo instance
         */
        public static create(properties?: lobby.IRespChangePlayerInfo): lobby.RespChangePlayerInfo;

        /**
         * Encodes the specified RespChangePlayerInfo message. Does not implicitly {@link lobby.RespChangePlayerInfo.verify|verify} messages.
         * @param message RespChangePlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IRespChangePlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespChangePlayerInfo message, length delimited. Does not implicitly {@link lobby.RespChangePlayerInfo.verify|verify} messages.
         * @param message RespChangePlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IRespChangePlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespChangePlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespChangePlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby.RespChangePlayerInfo;

        /**
         * Decodes a RespChangePlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespChangePlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby.RespChangePlayerInfo;

        /**
         * Verifies a RespChangePlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespChangePlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespChangePlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): lobby.RespChangePlayerInfo;

        /**
         * Creates a plain object from a RespChangePlayerInfo message. Also converts values to other types if specified.
         * @param message RespChangePlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby.RespChangePlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespChangePlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace rpc. */
export namespace rpc {

    /** Properties of a ReqJoinChatGroup. */
    interface IReqJoinChatGroup {

        /** ReqJoinChatGroup Group */
        Group?: (chat.ChatGroup|null);

        /** ReqJoinChatGroup Tag */
        Tag?: (string|null);

        /** ReqJoinChatGroup Player */
        Player?: (common.IPlayerBaseInfo|null);
    }

    /** Represents a ReqJoinChatGroup. */
    class ReqJoinChatGroup implements IReqJoinChatGroup {

        /**
         * Constructs a new ReqJoinChatGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IReqJoinChatGroup);

        /** ReqJoinChatGroup Group. */
        public Group: chat.ChatGroup;

        /** ReqJoinChatGroup Tag. */
        public Tag: string;

        /** ReqJoinChatGroup Player. */
        public Player?: (common.IPlayerBaseInfo|null);

        /**
         * Creates a new ReqJoinChatGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqJoinChatGroup instance
         */
        public static create(properties?: rpc.IReqJoinChatGroup): rpc.ReqJoinChatGroup;

        /**
         * Encodes the specified ReqJoinChatGroup message. Does not implicitly {@link rpc.ReqJoinChatGroup.verify|verify} messages.
         * @param message ReqJoinChatGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IReqJoinChatGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqJoinChatGroup message, length delimited. Does not implicitly {@link rpc.ReqJoinChatGroup.verify|verify} messages.
         * @param message ReqJoinChatGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IReqJoinChatGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqJoinChatGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqJoinChatGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.ReqJoinChatGroup;

        /**
         * Decodes a ReqJoinChatGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqJoinChatGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.ReqJoinChatGroup;

        /**
         * Verifies a ReqJoinChatGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqJoinChatGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqJoinChatGroup
         */
        public static fromObject(object: { [k: string]: any }): rpc.ReqJoinChatGroup;

        /**
         * Creates a plain object from a ReqJoinChatGroup message. Also converts values to other types if specified.
         * @param message ReqJoinChatGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.ReqJoinChatGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqJoinChatGroup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespJoinChatGroup. */
    interface IRespJoinChatGroup {

        /** RespJoinChatGroup ErrCode */
        ErrCode?: (common.ErrorCode|null);
    }

    /** Represents a RespJoinChatGroup. */
    class RespJoinChatGroup implements IRespJoinChatGroup {

        /**
         * Constructs a new RespJoinChatGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IRespJoinChatGroup);

        /** RespJoinChatGroup ErrCode. */
        public ErrCode: common.ErrorCode;

        /**
         * Creates a new RespJoinChatGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespJoinChatGroup instance
         */
        public static create(properties?: rpc.IRespJoinChatGroup): rpc.RespJoinChatGroup;

        /**
         * Encodes the specified RespJoinChatGroup message. Does not implicitly {@link rpc.RespJoinChatGroup.verify|verify} messages.
         * @param message RespJoinChatGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IRespJoinChatGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespJoinChatGroup message, length delimited. Does not implicitly {@link rpc.RespJoinChatGroup.verify|verify} messages.
         * @param message RespJoinChatGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IRespJoinChatGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespJoinChatGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespJoinChatGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.RespJoinChatGroup;

        /**
         * Decodes a RespJoinChatGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespJoinChatGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.RespJoinChatGroup;

        /**
         * Verifies a RespJoinChatGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespJoinChatGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespJoinChatGroup
         */
        public static fromObject(object: { [k: string]: any }): rpc.RespJoinChatGroup;

        /**
         * Creates a plain object from a RespJoinChatGroup message. Also converts values to other types if specified.
         * @param message RespJoinChatGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.RespJoinChatGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespJoinChatGroup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqLeaveChatGroup. */
    interface IReqLeaveChatGroup {

        /** ReqLeaveChatGroup Group */
        Group?: (chat.ChatGroup|null);

        /** ReqLeaveChatGroup Tag */
        Tag?: (string|null);

        /** ReqLeaveChatGroup PlayerGuid */
        PlayerGuid?: (string|null);
    }

    /** Represents a ReqLeaveChatGroup. */
    class ReqLeaveChatGroup implements IReqLeaveChatGroup {

        /**
         * Constructs a new ReqLeaveChatGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IReqLeaveChatGroup);

        /** ReqLeaveChatGroup Group. */
        public Group: chat.ChatGroup;

        /** ReqLeaveChatGroup Tag. */
        public Tag: string;

        /** ReqLeaveChatGroup PlayerGuid. */
        public PlayerGuid: string;

        /**
         * Creates a new ReqLeaveChatGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqLeaveChatGroup instance
         */
        public static create(properties?: rpc.IReqLeaveChatGroup): rpc.ReqLeaveChatGroup;

        /**
         * Encodes the specified ReqLeaveChatGroup message. Does not implicitly {@link rpc.ReqLeaveChatGroup.verify|verify} messages.
         * @param message ReqLeaveChatGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IReqLeaveChatGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqLeaveChatGroup message, length delimited. Does not implicitly {@link rpc.ReqLeaveChatGroup.verify|verify} messages.
         * @param message ReqLeaveChatGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IReqLeaveChatGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqLeaveChatGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqLeaveChatGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.ReqLeaveChatGroup;

        /**
         * Decodes a ReqLeaveChatGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqLeaveChatGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.ReqLeaveChatGroup;

        /**
         * Verifies a ReqLeaveChatGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqLeaveChatGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqLeaveChatGroup
         */
        public static fromObject(object: { [k: string]: any }): rpc.ReqLeaveChatGroup;

        /**
         * Creates a plain object from a ReqLeaveChatGroup message. Also converts values to other types if specified.
         * @param message ReqLeaveChatGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.ReqLeaveChatGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqLeaveChatGroup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespLeaveChatGroup. */
    interface IRespLeaveChatGroup {

        /** RespLeaveChatGroup ErrCode */
        ErrCode?: (common.ErrorCode|null);
    }

    /** Represents a RespLeaveChatGroup. */
    class RespLeaveChatGroup implements IRespLeaveChatGroup {

        /**
         * Constructs a new RespLeaveChatGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IRespLeaveChatGroup);

        /** RespLeaveChatGroup ErrCode. */
        public ErrCode: common.ErrorCode;

        /**
         * Creates a new RespLeaveChatGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespLeaveChatGroup instance
         */
        public static create(properties?: rpc.IRespLeaveChatGroup): rpc.RespLeaveChatGroup;

        /**
         * Encodes the specified RespLeaveChatGroup message. Does not implicitly {@link rpc.RespLeaveChatGroup.verify|verify} messages.
         * @param message RespLeaveChatGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IRespLeaveChatGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespLeaveChatGroup message, length delimited. Does not implicitly {@link rpc.RespLeaveChatGroup.verify|verify} messages.
         * @param message RespLeaveChatGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IRespLeaveChatGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespLeaveChatGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespLeaveChatGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.RespLeaveChatGroup;

        /**
         * Decodes a RespLeaveChatGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespLeaveChatGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.RespLeaveChatGroup;

        /**
         * Verifies a RespLeaveChatGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespLeaveChatGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespLeaveChatGroup
         */
        public static fromObject(object: { [k: string]: any }): rpc.RespLeaveChatGroup;

        /**
         * Creates a plain object from a RespLeaveChatGroup message. Also converts values to other types if specified.
         * @param message RespLeaveChatGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.RespLeaveChatGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespLeaveChatGroup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

}
export default proto;


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
        From?: (common.IUserBaseInfo|null);

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
        public From?: (common.IUserBaseInfo|null);

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

    /** Properties of a UserBaseInfo. */
    interface IUserBaseInfo {

        /** UserBaseInfo Uid */
        Uid?: (string|null);

        /** UserBaseInfo NickName */
        NickName?: (string|null);

        /** UserBaseInfo Gender */
        Gender?: (common.Gender|null);

        /** UserBaseInfo Avatar */
        Avatar?: (string|null);
    }

    /** Represents a UserBaseInfo. */
    class UserBaseInfo implements IUserBaseInfo {

        /**
         * Constructs a new UserBaseInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IUserBaseInfo);

        /** UserBaseInfo Uid. */
        public Uid: string;

        /** UserBaseInfo NickName. */
        public NickName: string;

        /** UserBaseInfo Gender. */
        public Gender: common.Gender;

        /** UserBaseInfo Avatar. */
        public Avatar: string;

        /**
         * Creates a new UserBaseInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserBaseInfo instance
         */
        public static create(properties?: common.IUserBaseInfo): common.UserBaseInfo;

        /**
         * Encodes the specified UserBaseInfo message. Does not implicitly {@link common.UserBaseInfo.verify|verify} messages.
         * @param message UserBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IUserBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserBaseInfo message, length delimited. Does not implicitly {@link common.UserBaseInfo.verify|verify} messages.
         * @param message UserBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IUserBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserBaseInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.UserBaseInfo;

        /**
         * Decodes a UserBaseInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.UserBaseInfo;

        /**
         * Verifies a UserBaseInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserBaseInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserBaseInfo
         */
        public static fromObject(object: { [k: string]: any }): common.UserBaseInfo;

        /**
         * Creates a plain object from a UserBaseInfo message. Also converts values to other types if specified.
         * @param message UserBaseInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.UserBaseInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserBaseInfo to JSON.
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

    /** Properties of a ReqBind. */
    interface IReqBind {

        /** ReqBind Token */
        Token?: (string|null);
    }

    /** Represents a ReqBind. */
    class ReqBind implements IReqBind {

        /**
         * Constructs a new ReqBind.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IReqBind);

        /** ReqBind Token. */
        public Token: string;

        /**
         * Creates a new ReqBind instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqBind instance
         */
        public static create(properties?: lobby.IReqBind): lobby.ReqBind;

        /**
         * Encodes the specified ReqBind message. Does not implicitly {@link lobby.ReqBind.verify|verify} messages.
         * @param message ReqBind message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IReqBind, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqBind message, length delimited. Does not implicitly {@link lobby.ReqBind.verify|verify} messages.
         * @param message ReqBind message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IReqBind, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqBind message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqBind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby.ReqBind;

        /**
         * Decodes a ReqBind message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqBind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby.ReqBind;

        /**
         * Verifies a ReqBind message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqBind message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqBind
         */
        public static fromObject(object: { [k: string]: any }): lobby.ReqBind;

        /**
         * Creates a plain object from a ReqBind message. Also converts values to other types if specified.
         * @param message ReqBind
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby.ReqBind, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqBind to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespBind. */
    interface IRespBind {

        /** RespBind ErrCode */
        ErrCode?: (common.ErrorCode|null);
    }

    /** Represents a RespBind. */
    class RespBind implements IRespBind {

        /**
         * Constructs a new RespBind.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IRespBind);

        /** RespBind ErrCode. */
        public ErrCode: common.ErrorCode;

        /**
         * Creates a new RespBind instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespBind instance
         */
        public static create(properties?: lobby.IRespBind): lobby.RespBind;

        /**
         * Encodes the specified RespBind message. Does not implicitly {@link lobby.RespBind.verify|verify} messages.
         * @param message RespBind message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IRespBind, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespBind message, length delimited. Does not implicitly {@link lobby.RespBind.verify|verify} messages.
         * @param message RespBind message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IRespBind, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespBind message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespBind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby.RespBind;

        /**
         * Decodes a RespBind message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespBind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby.RespBind;

        /**
         * Verifies a RespBind message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespBind message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespBind
         */
        public static fromObject(object: { [k: string]: any }): lobby.RespBind;

        /**
         * Creates a plain object from a RespBind message. Also converts values to other types if specified.
         * @param message RespBind
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby.RespBind, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespBind to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqUserInfo. */
    interface IReqUserInfo {
    }

    /** Represents a ReqUserInfo. */
    class ReqUserInfo implements IReqUserInfo {

        /**
         * Constructs a new ReqUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IReqUserInfo);

        /**
         * Creates a new ReqUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqUserInfo instance
         */
        public static create(properties?: lobby.IReqUserInfo): lobby.ReqUserInfo;

        /**
         * Encodes the specified ReqUserInfo message. Does not implicitly {@link lobby.ReqUserInfo.verify|verify} messages.
         * @param message ReqUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IReqUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqUserInfo message, length delimited. Does not implicitly {@link lobby.ReqUserInfo.verify|verify} messages.
         * @param message ReqUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IReqUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby.ReqUserInfo;

        /**
         * Decodes a ReqUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby.ReqUserInfo;

        /**
         * Verifies a ReqUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqUserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqUserInfo
         */
        public static fromObject(object: { [k: string]: any }): lobby.ReqUserInfo;

        /**
         * Creates a plain object from a ReqUserInfo message. Also converts values to other types if specified.
         * @param message ReqUserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby.ReqUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqUserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespUserInfo. */
    interface IRespUserInfo {

        /** RespUserInfo BaseInfo */
        BaseInfo?: (common.IUserBaseInfo|null);
    }

    /** Represents a RespUserInfo. */
    class RespUserInfo implements IRespUserInfo {

        /**
         * Constructs a new RespUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IRespUserInfo);

        /** RespUserInfo BaseInfo. */
        public BaseInfo?: (common.IUserBaseInfo|null);

        /**
         * Creates a new RespUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespUserInfo instance
         */
        public static create(properties?: lobby.IRespUserInfo): lobby.RespUserInfo;

        /**
         * Encodes the specified RespUserInfo message. Does not implicitly {@link lobby.RespUserInfo.verify|verify} messages.
         * @param message RespUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IRespUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespUserInfo message, length delimited. Does not implicitly {@link lobby.RespUserInfo.verify|verify} messages.
         * @param message RespUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IRespUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby.RespUserInfo;

        /**
         * Decodes a RespUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby.RespUserInfo;

        /**
         * Verifies a RespUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RespUserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespUserInfo
         */
        public static fromObject(object: { [k: string]: any }): lobby.RespUserInfo;

        /**
         * Creates a plain object from a RespUserInfo message. Also converts values to other types if specified.
         * @param message RespUserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby.RespUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespUserInfo to JSON.
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

}
export default proto;

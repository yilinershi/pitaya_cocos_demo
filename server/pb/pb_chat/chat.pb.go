// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.4
// source: chat.proto

package pb_chat

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	pb_common "server/pb/pb_common"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

//聊天的频道
type ChatGroup int32

const (
	ChatGroup_World ChatGroup = 0 //世界频道
	ChatGroup_Club  ChatGroup = 1 //工会频道
)

// Enum value maps for ChatGroup.
var (
	ChatGroup_name = map[int32]string{
		0: "World",
		1: "Club",
	}
	ChatGroup_value = map[string]int32{
		"World": 0,
		"Club":  1,
	}
)

func (x ChatGroup) Enum() *ChatGroup {
	p := new(ChatGroup)
	*p = x
	return p
}

func (x ChatGroup) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ChatGroup) Descriptor() protoreflect.EnumDescriptor {
	return file_chat_proto_enumTypes[0].Descriptor()
}

func (ChatGroup) Type() protoreflect.EnumType {
	return &file_chat_proto_enumTypes[0]
}

func (x ChatGroup) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ChatGroup.Descriptor instead.
func (ChatGroup) EnumDescriptor() ([]byte, []int) {
	return file_chat_proto_rawDescGZIP(), []int{0}
}

//发送聊天信息
type InputChatInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Channel ChatGroup `protobuf:"varint,1,opt,name=Channel,proto3,enum=chat.ChatGroup" json:"Channel,omitempty"`
	Content string    `protobuf:"bytes,2,opt,name=Content,proto3" json:"Content,omitempty"`
}

func (x *InputChatInfo) Reset() {
	*x = InputChatInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chat_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *InputChatInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*InputChatInfo) ProtoMessage() {}

func (x *InputChatInfo) ProtoReflect() protoreflect.Message {
	mi := &file_chat_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use InputChatInfo.ProtoReflect.Descriptor instead.
func (*InputChatInfo) Descriptor() ([]byte, []int) {
	return file_chat_proto_rawDescGZIP(), []int{0}
}

func (x *InputChatInfo) GetChannel() ChatGroup {
	if x != nil {
		return x.Channel
	}
	return ChatGroup_World
}

func (x *InputChatInfo) GetContent() string {
	if x != nil {
		return x.Content
	}
	return ""
}

type ChatInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	From    *pb_common.PlayerBaseInfo `protobuf:"bytes,1,opt,name=From,proto3" json:"From,omitempty"` //来自玩家的发言
	Content string                    `protobuf:"bytes,3,opt,name=Content,proto3" json:"Content,omitempty"`
}

func (x *ChatInfo) Reset() {
	*x = ChatInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chat_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatInfo) ProtoMessage() {}

func (x *ChatInfo) ProtoReflect() protoreflect.Message {
	mi := &file_chat_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatInfo.ProtoReflect.Descriptor instead.
func (*ChatInfo) Descriptor() ([]byte, []int) {
	return file_chat_proto_rawDescGZIP(), []int{1}
}

func (x *ChatInfo) GetFrom() *pb_common.PlayerBaseInfo {
	if x != nil {
		return x.From
	}
	return nil
}

func (x *ChatInfo) GetContent() string {
	if x != nil {
		return x.Content
	}
	return ""
}

//同步聊天信息
type SyncChatInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Group    ChatGroup `protobuf:"varint,1,opt,name=Group,proto3,enum=chat.ChatGroup" json:"Group,omitempty"` //聊天组
	ChatInfo *ChatInfo `protobuf:"bytes,2,opt,name=ChatInfo,proto3" json:"ChatInfo,omitempty"`                //聊天内容
}

func (x *SyncChatInfo) Reset() {
	*x = SyncChatInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chat_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SyncChatInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SyncChatInfo) ProtoMessage() {}

func (x *SyncChatInfo) ProtoReflect() protoreflect.Message {
	mi := &file_chat_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SyncChatInfo.ProtoReflect.Descriptor instead.
func (*SyncChatInfo) Descriptor() ([]byte, []int) {
	return file_chat_proto_rawDescGZIP(), []int{2}
}

func (x *SyncChatInfo) GetGroup() ChatGroup {
	if x != nil {
		return x.Group
	}
	return ChatGroup_World
}

func (x *SyncChatInfo) GetChatInfo() *ChatInfo {
	if x != nil {
		return x.ChatInfo
	}
	return nil
}

var File_chat_proto protoreflect.FileDescriptor

var file_chat_proto_rawDesc = []byte{
	0x0a, 0x0a, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x04, 0x63, 0x68,
	0x61, 0x74, 0x1a, 0x0c, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0x54, 0x0a, 0x0d, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x43, 0x68, 0x61, 0x74, 0x49, 0x6e, 0x66,
	0x6f, 0x12, 0x29, 0x0a, 0x07, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x0f, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x47, 0x72,
	0x6f, 0x75, 0x70, 0x52, 0x07, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x12, 0x18, 0x0a, 0x07,
	0x43, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x43,
	0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x22, 0x50, 0x0a, 0x08, 0x43, 0x68, 0x61, 0x74, 0x49, 0x6e,
	0x66, 0x6f, 0x12, 0x2a, 0x0a, 0x04, 0x46, 0x72, 0x6f, 0x6d, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x16, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72,
	0x42, 0x61, 0x73, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x04, 0x46, 0x72, 0x6f, 0x6d, 0x12, 0x18,
	0x0a, 0x07, 0x43, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x07, 0x43, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x22, 0x61, 0x0a, 0x0c, 0x53, 0x79, 0x6e, 0x63,
	0x43, 0x68, 0x61, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x25, 0x0a, 0x05, 0x47, 0x72, 0x6f, 0x75,
	0x70, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x0f, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43,
	0x68, 0x61, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x52, 0x05, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x12,
	0x2a, 0x0a, 0x08, 0x43, 0x68, 0x61, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x0e, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x49, 0x6e, 0x66,
	0x6f, 0x52, 0x08, 0x43, 0x68, 0x61, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x2a, 0x20, 0x0a, 0x09, 0x43,
	0x68, 0x61, 0x74, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x12, 0x09, 0x0a, 0x05, 0x57, 0x6f, 0x72, 0x6c,
	0x64, 0x10, 0x00, 0x12, 0x08, 0x0a, 0x04, 0x43, 0x6c, 0x75, 0x62, 0x10, 0x01, 0x42, 0x13, 0x5a,
	0x11, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x2f, 0x70, 0x62, 0x2f, 0x70, 0x62, 0x5f, 0x63, 0x68,
	0x61, 0x74, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_chat_proto_rawDescOnce sync.Once
	file_chat_proto_rawDescData = file_chat_proto_rawDesc
)

func file_chat_proto_rawDescGZIP() []byte {
	file_chat_proto_rawDescOnce.Do(func() {
		file_chat_proto_rawDescData = protoimpl.X.CompressGZIP(file_chat_proto_rawDescData)
	})
	return file_chat_proto_rawDescData
}

var file_chat_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_chat_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_chat_proto_goTypes = []interface{}{
	(ChatGroup)(0),                   // 0: chat.ChatGroup
	(*InputChatInfo)(nil),            // 1: chat.InputChatInfo
	(*ChatInfo)(nil),                 // 2: chat.ChatInfo
	(*SyncChatInfo)(nil),             // 3: chat.SyncChatInfo
	(*pb_common.PlayerBaseInfo)(nil), // 4: common.PlayerBaseInfo
}
var file_chat_proto_depIdxs = []int32{
	0, // 0: chat.InputChatInfo.Channel:type_name -> chat.ChatGroup
	4, // 1: chat.ChatInfo.From:type_name -> common.PlayerBaseInfo
	0, // 2: chat.SyncChatInfo.Group:type_name -> chat.ChatGroup
	2, // 3: chat.SyncChatInfo.ChatInfo:type_name -> chat.ChatInfo
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_chat_proto_init() }
func file_chat_proto_init() {
	if File_chat_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_chat_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*InputChatInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_chat_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChatInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_chat_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SyncChatInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_chat_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_chat_proto_goTypes,
		DependencyIndexes: file_chat_proto_depIdxs,
		EnumInfos:         file_chat_proto_enumTypes,
		MessageInfos:      file_chat_proto_msgTypes,
	}.Build()
	File_chat_proto = out.File
	file_chat_proto_rawDesc = nil
	file_chat_proto_goTypes = nil
	file_chat_proto_depIdxs = nil
}

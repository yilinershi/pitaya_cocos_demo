## proto说明
* 路由:路由由三级结构组成，第1层为服务器，第2层为处理器，第3层为api
* 如`Chat.Handler.NotifyChat`,说明这个服务由`Chat`这台服务器提供，由`Handler`这个处理器在处理，里面的方法`NotifyChat`来接收这台路由对应的消息
* proto的命名要求：协议以Req、Resp、Input、Sync开头
* 消息分为3种类型，即Call、Notify、Push
> Call类型的：对应的proto数据结构为Req + Resp
> 
> Notify消息，对应的proto数据结构为Input
> 
> Push消息，对应的proto数据结构为Sync

## proto文件说明
```
superhero_go_protobuff           --根目录
  └───chat.proto                 --聊天相关的proto(客户端服务器共用)
  └───common.proto               --通用的proto(客户端服务器共用)
  └───http                       --http相关的proto(客户端服务器共用)
  └───lobby                      --大厅相关的proto(客户端服务器共用)
  └───server_rpc.proto           --服务器之间通信的proto(仅服务器使用)
```

## 登录流程
* 协议：http.proto
  
| 步骤 | 网络连接 | 地址                       | 请求        | 响应         | 说明             |
| ---- | -------- | -------------------------- | ----------- | ------------ | ---------------- |
| 1    | Http     | http://{url}:{port}/entry  | ReqEntry    | RespEntry    | 登录前的各种逻辑 |
| 2    | Http     | http://{ReqEntry.Register} | ReqRegister | RespResgiter | 注册             |
| 3    | Http     | http://{ReqEntry.LoginUrl} | ReqLogin    | RespLogin    | 登录             |
| 4    | tcp      | ws://{ReqEntry.Websocket}  |             |              | 创建连接         |
| 5    | tcp      | Connector.Handler.CallAuth | ReqAuth     | RespAuth     | 验证长连接token  |


## 聊天功能
* 整个流程全部使用tcp连接
* 协议：chat.proto
  
| 请求类型 | 路由                    | 请求          | 响应     | 说明                         |
| -------- | ----------------------- | ------------- | -------- | ---------------------------- |
| Notify   | Chat.Handler.NotifyChat | InputChatInfo |          | 客户端发一条消息             |
| Push     | Chat.Handler.PushChat   |               | SyncChat | 服务器同步一条消息给相关user |

## 玩家信息
* 修改玩家信息功能
* 协议：lobby.proto

| 请求类型 | 路由                               | 请求                | 响应                 | 说明         |
| -------- | ---------------------------------- | ------------------- | -------------------- | ------------ |
| Call     | Lobby.Handler.CallChangePlayerInfo | ReqChangePlayerInfo | RespChangePlayerInfo | 修改玩家信息 |


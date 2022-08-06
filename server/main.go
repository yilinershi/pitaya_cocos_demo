package main

import (
	"flag"
	"fmt"
	"github.com/spf13/viper"
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/acceptor"
	"github.com/topfreegames/pitaya/cluster"
	"github.com/topfreegames/pitaya/component"
	"github.com/topfreegames/pitaya/config"
	"github.com/topfreegames/pitaya/groups"
	"github.com/topfreegames/pitaya/modules"
	"github.com/topfreegames/pitaya/serialize/protobuf"
	"log"
	"server/constants"
	"server/modules/account"
	"server/modules/idGenerator"
	"server/modules/redisClient"
	"server/modules/user"
	"server/services/chat"
	"server/services/connector"
	"server/services/lobby"
	"server/services/web"
)

var serverType *string

func main() {
	//这里是启动参数，启动参数写在makefile里了
	serverType = flag.String("type", "", "the server type")
	flag.Parse()
	//启动服务器
	Start()
}

func Start() {
	defer pitaya.Shutdown()
	//这里配置解析器，可以选择json或protobuf
	pitaya.SetSerializer(protobuf.NewSerializer())
	//初始化整个项目的配置
	configs := setConfig()
	meta := map[string]string{}
	//这里是启动选择器，整个项目为一体化的，会根据参数的不同，启动不同的服务器
	switch *serverType {
	case "Connector": //前端服务器，为长连接服务器，用于持有所有连进来用户的长连接
		tcp := acceptor.NewTCPAcceptor(fmt.Sprintf(":%s", configs.GetString("net.tcp.port")))
		pitaya.AddAcceptor(tcp)
		ws := acceptor.NewWSAcceptor(fmt.Sprintf(":%s", configs.GetString("net.ws.port")))
		pitaya.AddAcceptor(ws)
		handler := connector.NewHandler()
		pitaya.Register(handler, component.WithName("Handler"))
		remote := connector.NewRemote()
		pitaya.RegisterRemote(remote, component.WithName("Remote"))
		pitaya.Configure(true, *serverType, pitaya.Cluster, meta, configs)
		break
	case "Lobby": //大厅服务器,为长连接服务器
		handler := lobby.NewHandler()
		pitaya.Register(handler, component.WithName("Handler"))
		pitaya.Configure(false, *serverType, pitaya.Cluster, meta, configs)
		break
	case "Web":
		handler := web.NewHandler()
		pitaya.Register(handler, component.WithName("Handler"))
		pitaya.Configure(false, *serverType, pitaya.Cluster, meta, configs)
		break
	case "Chat":
		handler := chat.NewHandler()
		pitaya.Register(handler, component.WithName("Handler"))
		remote := chat.NewRemote()
		pitaya.RegisterRemote(remote, component.WithName("Remote"))
		pitaya.Configure(false, *serverType, pitaya.Cluster, meta, configs)
		break
	default:
		fmt.Printf("error serverType = %s\n", serverType)
		return
	}
	//挂载一下组信息 这里是使用Etcd来存放组信息 可以使用进程内存
	groupInstance, _ := groups.NewEtcdGroupService(config.NewConfig(configs), nil)
	// 调用一次 注册到pitaya上
	pitaya.InitGroups(groupInstance)
	//各服务器的公共模块
	registerPublicModule()
	registerPrivateModule()
	//使用nats作为消息队列，目前已知宇宙最强消息队列，
	natsRPCClient, err := cluster.NewNatsRPCClient(
		pitaya.GetConfig(),
		pitaya.GetServer(),
		pitaya.GetMetricsReporters(),
		pitaya.GetDieChan(),
	)
	if err != nil {
		panic(err)
	}

	//nats的server服务
	natsRPCServer, err := cluster.NewNatsRPCServer(pitaya.GetConfig(), pitaya.GetServer(), pitaya.GetMetricsReporters(), pitaya.GetDieChan())
	if err != nil {
		panic(err)
	}

	//rpc server服务
	pitaya.SetRPCServer(natsRPCServer)
	//rpc client服务
	pitaya.SetRPCClient(natsRPCClient)
	//启动服务器
	pitaya.Start()
}

//配置分为两种，一种是viper对应的本地配置，一种是pitaya的系统配置
func setConfig() *viper.Viper {
	//1.从conifg文件中读取本地配置
	configs := readConfig()

	//2.通过pitya设置pitaya的系统配置，pitaya的系统配置的key是已存在的，且有默认值,key可以查官网
	configs.Set("pitaya.handler.messages.compression", false)
	return configs
}

func readConfig() *viper.Viper {
	target := viper.New()
	target.SetConfigType("json")        //配置文件格式
	target.SetConfigName("development") //这里改配置名,development.json是开发模式的配置，production.json是生产模式的配置
	target.AddConfigPath("./config")    //配置文件所在的目录
	if err := target.ReadInConfig(); err != nil {
		if _, ok := err.(viper.ConfigFileNotFoundError); ok {
			log.Println("no such config file")
		} else {
			log.Println("read config error")
		}
		log.Fatal(err) // 读取配置文件失败致命错误
	}

	return target
}

func registerPublicModule() {
	//绑定etcd的模块
	pitaya.RegisterModule(modules.NewETCDBindingStorage(pitaya.GetServer(), pitaya.GetConfig()), "bindingsStorage")
	//注册redis
	pitaya.RegisterModule(redisClient.NewManager(), constants.ModuleReids)
}

//各服务器，按需要，加载相应模块
func registerPrivateModule() {
	switch *serverType {
	case "Web":
		pitaya.RegisterModule(idGenerator.NewManager(), constants.ModuleIdGenerator)
		pitaya.RegisterModule(account.NewManager(), constants.ModuleAccount)
		pitaya.RegisterModule(user.NewManager(), constants.ModuleUser)
	case "Lobby":
		pitaya.RegisterModule(idGenerator.NewManager(), constants.ModuleIdGenerator)
		pitaya.RegisterModule(account.NewManager(), constants.ModuleAccount)
		pitaya.RegisterModule(user.NewManager(), constants.ModuleUser)
	default:
		return
	}
}

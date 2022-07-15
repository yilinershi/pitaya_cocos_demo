package main

import (
	"flag"
	"server/services"
)

func main() {
	//这里是启动参数，启动参数写在makefile里了
	serverType := flag.String("type", "", "the server type")
	flag.Parse()
	//启动服务器
	services.Start(*serverType)
}

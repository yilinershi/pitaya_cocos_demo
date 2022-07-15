## 启动前端服务器(这个是长连接服务器)
run_server_connector:
	@go run main.go --type=Connector

## 启动长连接服务器之大厅服务器
run_server_lobby:
	@go run main.go --type=Lobby

run_server_http_gate:
	@go run main.go  --type=HttpGate

run_server_chat:
	@go run main.go  --type=Chat

## 编译protobuf,需要安装protoc，请参考protobuf官网
build_proto_go:
	@echo "step1:先清掉pb文件夹"
	@rm -rf pb
	@mkdir pb
	@echo "step2:再生成pb文件"
	@protoc --go_out=../ -I=../proto  ../proto/*.proto
	@echo "生成pb文件成功"
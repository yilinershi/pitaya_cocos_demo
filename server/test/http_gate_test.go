package test

import (
	"bytes"
	"fmt"
	"github.com/stretchr/testify/assert"
	"github.com/topfreegames/pitaya/logger"
	"google.golang.org/protobuf/proto"
	"io/ioutil"
	"net/http"
	"server/pb/pb_common"
	"server/pb/pb_http"
	"testing"
)

var entryUrl = "http://127.0.0.1:8088/entry"
var loginUrl string
var registerUrl string
var testUser = "b"

//开启http gate服务器后，再调用该接口，如果本机测试，记得
func TestHttpGate(t *testing.T) {
	testEntry(t)
	testRegister(t)
	testLogin(t)
}

func testEntry(t *testing.T) {
	testReq := &pb_http.ReqEntry{
		Secret: "床前明月光",
	}
	data, err := proto.Marshal(testReq)
	body := bytes.NewReader(data)

	request, err := http.NewRequest("POST", entryUrl, body)
	if err != nil {
		logger.Log.Infof("http.NewRequest,[err=%s][url=%s]\n", err, entryUrl)
		return
	}
	request.Header.Set("Connection", "Keep-Alive")
	var response *http.Response
	response, err = http.DefaultClient.Do(request)
	if err != nil {
		logger.Log.Infof("http.Do failed,[err=%s][url=%s]\n", err, entryUrl)
		return
	}
	defer response.Body.Close()
	b, err2 := ioutil.ReadAll(response.Body)
	if err2 != nil {
		logger.Log.Infof("http.Do failed,[err=%s][url=%s]\n", err2, entryUrl)
	}
	resp := new(pb_http.RespEntry)
	if err3 := proto.Unmarshal(b, resp); err3 != nil {
		return
	}
	logger.Log.Infoln("[test entry], req=%", resp)
	assert.EqualValues(t, pb_common.ErrorCode_OK, resp.ErrCode)

	loginUrl = resp.LoginUrl
	registerUrl = resp.RegisterUrl
}

func testRegister(t *testing.T) {
	testReq := &pb_http.ReqRegister{
		Account:  fmt.Sprintf("account_%s", testUser),
		Password: fmt.Sprintf("password_%s", testUser),
	}
	data, err := proto.Marshal(testReq)
	body := bytes.NewReader(data)

	request, err := http.NewRequest("POST", registerUrl, body)
	if err != nil {
		logger.Log.Infof("http.NewRequest,[err=%s][url=%s]\n", err, registerUrl)
		return
	}
	request.Header.Set("Connection", "Keep-Alive")
	var response *http.Response
	response, err = http.DefaultClient.Do(request)
	if err != nil {
		logger.Log.Infof("http.Do failed,[err=%s][url=%s]\n", err, registerUrl)
		return
	}
	defer response.Body.Close()
	b, err := ioutil.ReadAll(response.Body)
	if err != nil {
		logger.Log.Infof("http.Do failed,[err=%s][url=%s]\n", err, registerUrl)
	}
	resp := new(pb_http.RespRegister)
	if err := proto.Unmarshal(b, resp); err != nil {
		return
	}
	logger.Log.Info("[test register], req=", resp)
	assert.EqualValues(t, pb_common.ErrorCode_OK, resp.ErrCode)
}

func testLogin(t *testing.T) {
	testReq := &pb_http.ReqLogin{
		Account:  fmt.Sprintf("account_%s", testUser),
		Password: fmt.Sprintf("password_%s", testUser),
	}
	data, err := proto.Marshal(testReq)
	body := bytes.NewReader(data)

	request, err := http.NewRequest("POST", loginUrl, body)
	if err != nil {
		logger.Log.Infof("http.NewRequest,[err=%s][url=%s]\n", err, loginUrl)
		return
	}
	request.Header.Set("Connection", "Keep-Alive")
	var response *http.Response
	response, err = http.DefaultClient.Do(request)
	if err != nil {
		logger.Log.Infof("http.Do failed,[err=%s][url=%s]\n", err, loginUrl)
		return
	}
	defer response.Body.Close()
	b, err := ioutil.ReadAll(response.Body)
	if err != nil {
		logger.Log.Infof("http.Do failed,[err=%s][url=%s]\n", err, loginUrl)
	}
	resp := new(pb_http.RespLogin)
	if err := proto.Unmarshal(b, resp); err != nil {
		return
	}
	logger.Log.Info("[test login], req=", resp)
	assert.EqualValues(t, pb_common.ErrorCode_OK, resp.ErrCode)
}

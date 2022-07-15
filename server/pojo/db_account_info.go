package pojo

import (
	"time"
)

/*
xorm中对数据类型有自己的定义，具体的Tag规则如下，另Tag中的关键字均不区分大小写：

| name  | 当前field对应的字段的名称  |
| ---   | --- | --- |
| pk |  是否是Primary Key |
| name  | 当前field对应的字段的名称 |
| autoincr | 是否是自增 |
| [not ]null 或 notnull | 是否可以为空 |
| unique | 是否是唯一 |
| index | 是否是索引 |
| extends | 应用于一个匿名成员结构体或者非匿名成员结构体之上
| - | 这个Field将不进行字段映射 |
| -> | Field将只写入到数据库而不从数据库读取 |
| <- | Field将只从数据库读取，而不写入到数据库 |
| created | Field将在Insert时自动赋值为当前时间 |
| updated | Field将在Insert或Update时自动赋值为当前时间 |
|deleted | Field将在Delete时设置为当前时间，并且当前记录不删除 |
| version | Field将会在insert时默认为1，每次更新自动加1 |
| default 0或default(0) | 设置默认值，紧跟的内容如果是Varchar等需要加上单引号 |
| json | 表示内容将先转成Json格式 |

*/

type DbAccountInfo struct {
	DbBase     `xorm:"-"`
	AccountId  string    `xorm:"'accountId' default('0') notnull"` //该条account的db的id
	Account    string    `xorm:"pk 'account' default('') notnull"` //用户名
	Password   string    `xorm:"'password' default('') notnull"`   //密码
	ChannelId  string    `xorm:"'channelId' default('') notnull"`  //渠道id
	AppId      string    `xorm:"'appId' default('') notnull"`      //appid
	MacId      string    `xorm:"'macId' default('') notnull"`      //客户端的设备id
	RegisterAt time.Time `xorm:"'registerAt' "`                    //该账号创建时间
	LoginAt    time.Time `xorm:"'loginAt' "`                       //该账号登录时间
	Token      string    `xorm:"'token' default('') notnull"`      //登录成功后生成的token
	PlayerGuid string    `xorm:"'playerGuid' default('') notnull"` //账号对应的player的guid
}

func (this *DbAccountInfo) TableName() string {
	return "account_info"
}

func (this *DbAccountInfo) GetGuid() string {
	return this.AccountId
}

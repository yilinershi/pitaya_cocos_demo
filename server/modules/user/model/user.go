package model

type User struct {
	UserId   string
	BaseInfo *BaseInfo
	Money    *MoneyInfo
}

type BaseInfo struct {
	NickName string
	Avatar   string
	Gender   int
}

type MoneyInfo struct {
	Gold    int
	Diamond int
}

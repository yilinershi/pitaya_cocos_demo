package model

import (
	"time"
)

type Account struct {
	Account    string
	Password   string
	UserId     string
	RegisterAt time.Time
	LoginAt    time.Time
	Token      string
}

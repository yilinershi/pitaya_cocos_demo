package model

import "time"

type Token struct {
	ExTime time.Time
	UserId string
	Token  string
}

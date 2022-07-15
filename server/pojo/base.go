package pojo

type (
	I_DbBase interface {
		TableName() string
		GetGuid() string
		GetDataKey() string
		SetStatus(OptStatus)
		GetStatus() OptStatus
	}

	DbDaseList []I_DbBase

	DbBase struct {
		Status OptStatus
	}

	OptStatus int
)

const (
	OptNone OptStatus = iota
	OptInsert
	OptUpdate
	OptDelete
)

func (this *DbBase) TableName() string {
	return ""
}

func (this *DbBase) GetGuid() int64 {
	return 0
}

func (this *DbBase) GetDataKey() string {
	return ""
}

func (this *DbBase) SetStatus(status OptStatus) {
	this.Status = status
}

func (this *DbBase) GetStatus() OptStatus {
	return this.Status
}

package pojo

type DbGuidGenerator struct {
	DbBase   `xorm:"-"`
	Id       int    `xorm:"pk autoincr 'id' notnull"`       //表的id
	GuidType string `xorm:"'guidType' default('') notnull"` //guid的类型
	High     int    `xorm:"'high' default('0') notnull"`    //guid的生成器高位数
	Low      int    `xorm:"'low' default('0') notnull"`     //guid的生成器低位数
	Des      string `xorm:"'des' default('') notnull"`      //描述
}

func (this *DbGuidGenerator) TableName() string {
	return "guid_generator"
}

//GetGuid guid的生成器是没有guid的
func (this *DbGuidGenerator) GetGuid() string {
	return ""
}

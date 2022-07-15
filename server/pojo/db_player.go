package pojo

type DbPlayer struct {
	DbBase   `xorm:"-"`
	Guid     string `xorm:"pk 'guid' default(0) notnull"`   //player的guid
	NickName string `xorm:"'nickName' default('') notnull"` //呢称
	Avatar   string `xorm:"'avatar' default('') notnull"`   //头像
	Gender   int    `xorm:"'gender' default(0) notnull"`    //性别
	//BagItems []int  `xorm:"'bagItems' default('') notnull"`    //背包物品 todo
}

func (this *DbPlayer) TableName() string {
	return "player"
}

func (this *DbPlayer) GetGuid() string {
	return this.Guid
}

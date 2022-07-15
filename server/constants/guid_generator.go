package constants

//GuidGeneratorType guid生成器的类型,不同字母代表不同前缀，随便定义
type GuidGeneratorType string

const (
	GuidTypePlayer  = "p" //用户的guid
	GuidTypeAccount = "a" //账户的guid
	GuidTypeToken   = "t" //Token的guid
)

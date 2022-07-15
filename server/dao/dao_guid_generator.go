package dao

import (
	"errors"
	"fmt"
	"github.com/topfreegames/pitaya/logger"
	"math"
	"server/constants"
	"server/mods/module_redis"
	"server/pojo"
	"sync"
	"time"
)

var (
	GuidGenerator        *daoGuidGenerator
	daoGuidGeneratorOnce sync.Once
)

type daoGuidGenerator struct {
	BaseDao
	redisLocks map[constants.GuidGeneratorType]*module_redis.RedisLock
}

func NewGuidGenertorDao() *daoGuidGenerator {
	daoGuidGeneratorOnce.Do(func() {
		GuidGenerator = &daoGuidGenerator{
			redisLocks: make(map[constants.GuidGeneratorType]*module_redis.RedisLock),
		}
	})
	return GuidGenerator
}

func (this *daoGuidGenerator) Init() {
	logger.Log.Infoln("daoGuidGenerator  init")
	this.BaseDao.Init()
}

func (this *daoGuidGenerator) AfterInit() {

	//每多一个token，表里加一组数
	this.redisLocks[constants.GuidTypeToken] = module_redis.NewRedisLock(constants.GuidTypeToken)
	this.redisLocks[constants.GuidTypePlayer] = module_redis.NewRedisLock(constants.GuidTypeToken)
	this.redisLocks[constants.GuidTypeAccount] = module_redis.NewRedisLock(constants.GuidTypeToken)

	isExist, _ := this.enginer.IsTableExist(pojo.DbGuidGenerator{})
	logger.Log.Infoln(" >>>>>>> [table guid_generator]  isExist =", isExist)

	//数据库里没有数据时，第一次创建默认表
	if isExist == false {
		genTableErr := this.enginer.Sync2(&pojo.DbGuidGenerator{})
		if genTableErr == nil {
			this.Add(&pojo.DbGuidGenerator{
				Id:       1,
				GuidType: constants.GuidTypePlayer,
				High:     0,
				Low:      1,
				Des:      "player的guid生成器",
			})
			this.Add(&pojo.DbGuidGenerator{
				Id:       2,
				GuidType: constants.GuidTypeAccount,
				High:     0,
				Low:      1,
				Des:      "account的guid生成器",
			})
			this.Add(&pojo.DbGuidGenerator{
				Id:       3,
				GuidType: constants.GuidTypeToken,
				High:     0,
				Low:      1,
				Des:      "token的guid生成器",
			})
		} else {
			logger.Log.Errorln("gen [table guid_generator] error, err=", genTableErr)
		}
	}
}

func (this *daoGuidGenerator) GenGuid(_type constants.GuidGeneratorType) (string, error) {
	redisLock, ok := this.redisLocks[_type]
	if !ok {
		return "", errors.New("_type is not existed")
	}

	result, err := redisLock.TryLock(func(args ...interface{}) (i interface{}, err error) {
		guiData, err := this.Get(&pojo.DbGuidGenerator{GuidType: string(_type)})
		if err != nil {
			logger.Log.Errorf("GenGuid failed [get guid data],error:%s", err.Error())
			return 0, err
		}

		if guiData == nil {
			return 0, errors.New("type not existed")
		}

		guid, err := this.nextGuid(guiData.(*pojo.DbGuidGenerator))
		if err != nil {
			logger.Log.Errorf("GenGuid failed [next guid ],error:%s", err.Error())
			return 0, err
		}
		return guid, nil
	}, 3*time.Second)
	defer redisLock.UnLock()

	if err != nil {
		logger.Log.Errorf("GenGuid failed [lock],error:%s", err.Error())
		return "", err
	}

	guid := result.(int64)
	strGuid := fmt.Sprintf("%s_%d", _type, guid)
	return strGuid, nil
}

//nextGuid 生成下一个guid的方法
func (this *daoGuidGenerator) nextGuid(guidData *pojo.DbGuidGenerator) (int64, error) {
	impactFactor := 999
	high := guidData.High
	low := guidData.Low + 1
	if low < 0 || low > math.MaxInt32 {
		low = 0
		high += 1
		guidData.High = high
	}

	a := (int64(impactFactor)) << 48
	b := (int64(guidData.Id)) << 40
	c := (int64(high)) << 32
	d := int64(low)
	guid := a | b | c | d
	guidData.Low = low
	err := this.Update(guidData, "guidType=?", guidData.GuidType)
	if err != nil {
		logger.Log.Errorf("nextGuid failed,error:%s", err.Error())
		return 0, err
	}
	return guid, nil
}

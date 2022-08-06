package idGenerator

import (
	"encoding/json"
	"github.com/go-redis/redis"
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/logger"
	"github.com/topfreegames/pitaya/modules"
	"server/constants"
	"server/modules/idGenerator/model"
	"server/modules/redisClient"
	"server/utils/redisLock"
	"strconv"
	"sync"
	"time"
)

var (
	manager *Manager
	once    sync.Once
)

type Manager struct {
	modules.Base
	tableName string //table name
	userKey   string //key name ->user
}

func NewManager() *Manager {
	once.Do(func() {
		manager = &Manager{
			tableName: "id_generator",
			userKey:   "user",
		}
	})
	return manager
}

func GetManager() *Manager {
	if m, err := pitaya.GetModule(constants.ModuleIdGenerator); err == nil {
		return m.(*Manager)
	}
	return nil
}

func (this *Manager) AfterInit() {
	logger.Log.Info("after init")
	this.defaultUserIdGenerator()
}

//为userId的生成器创建默认表
func (this *Manager) defaultUserIdGenerator() {
	defalultUserIdDb := &model.IdGenerator{
		Start: 10000, //所有userId从10000开始
		Index: 1,     //当前的id的index
	}
	bytes, err := json.Marshal(defalultUserIdDb)
	if err != nil {
		return
	}
	cmd := redisClient.GetManager().GetClient().HSetNX(this.tableName, this.userKey, bytes)
	if cmd.Err() != nil {
		logger.Log.Errorln(cmd.Err())
	}
}

//GenUserId 生成一个新的userId
func (this *Manager) GenUserId() (string, error) {
	intId, err := this.gen(this.userKey)
	if err != nil {
		return "", err
	}
	uid := strconv.Itoa(intId)
	return uid, nil
}

func (this *Manager) gen(idType string) (int, error) {
	//创建redis锁
	lock := redisLock.NewRedisLock(redisClient.GetManager().GetClient(), idType)
	//加锁执行方法
	result, err := lock.TryLock(func(args ...interface{}) (i interface{}, err error) {
		cmd1, err1 := redisClient.GetManager().GetClient().HGet(this.tableName, idType).Result()
		if err1 != nil && err1 != redis.Nil {
			return nil, err1
		}
		db := new(model.IdGenerator)
		err2 := json.Unmarshal([]byte(cmd1), db)
		if err2 != nil {
			return nil, err2
		}
		id := db.Start + db.Index
		db.Index++
		bytes, err3 := json.Marshal(db)
		if err3 != nil {
			return nil, err3
		}
		err4 := redisClient.GetManager().GetClient().HSet(this.tableName, idType, bytes).Err()
		if err4 != nil {
			logger.Log.Errorf("[BaseDao] AddCache failed,error:%s", err.Error())
			return nil, err4
		}
		return id, nil
	}, 3*time.Second) //3秒后，如果锁还没释放，自动释放
	//关闭锁
	defer lock.UnLock()
	if err != nil {
		logger.Log.Errorf("gen failed,error:%s", err.Error())
		return 0, err
	}

	return result.(int), nil
}

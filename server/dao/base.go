package dao

import (
	gojson "encoding/json"
	"github.com/go-redis/redis"
	"github.com/topfreegames/pitaya/component"
	"github.com/topfreegames/pitaya/logger"
	"github.com/xormplus/xorm"
	"reflect"
	"server/mods/module_database"
	"server/mods/module_redis"
	"server/pojo"
	"time"
)

var (
	expirationTime     time.Duration
	DeleteRoleKeppTime time.Duration
)

type BaseDao struct {
	component.Base
	enginer     *xorm.Engine
	redisClient *redis.Client
}

func (this *BaseDao) Init() {
	enginer, err := module_database.GetDbEnginer()
	if err != nil {
		logger.Log.Errorf("BaseDao Init failed,error:%s", err.Error())
		return
	}
	if enginer == nil {
		logger.Log.Errorf("BaseDao Init failed,enginer is nil")
		return
	}
	this.enginer = enginer
	rdClient, err := module_redis.GetRedisClient()
	if err != nil {
		logger.Log.Errorf("BaseDao Init failed,error:%s", err.Error())
		return
	}
	if rdClient == nil {
		logger.Log.Errorf("BaseDao Init failed,rdClient is nil")
		return
	}
	this.redisClient = rdClient

	logger.Log.Infoln("BaseDao Init success!!!!!!!!!!!!!!")
}

func (this *BaseDao) Add(data pojo.I_DbBase) error {
	err := this.AddDb(data)
	if err != nil {
		logger.Log.Errorf("[BaseDao] Add failed,error:%s", err.Error())
		return err
	}

	if this.UseCache(data) {
		err = this.AddCache(data)
		if err != nil {
			logger.Log.Errorf("[BaseDao] Add failed,error:%s", err.Error())
			return err
		}
	}

	return nil
}

func (this *BaseDao) AddDb(data pojo.I_DbBase) error {
	_, err := this.enginer.Insert(data)
	if err != nil {
		logger.Log.Errorf("AddDb failed,error:%s", err.Error())
		return err
	}
	return nil
}

func (this *BaseDao) AddCache(data pojo.I_DbBase) error {
	data.SetStatus(pojo.OptInsert)
	bytes, err := gojson.Marshal(data)
	if err != nil {
		logger.Log.Errorf("[BaseDao] AddCache failed,error:%s", err.Error())
		return err
	}

	err = this.redisClient.HSet(data.TableName(), data.GetDataKey(), bytes).Err()
	if err != nil {
		logger.Log.Errorf("[BaseDao] AddCache failed,error:%s", err.Error())
		return err
	}

	return nil
}

func (this *BaseDao) Update(data pojo.I_DbBase, query string, args ...interface{}) error {
	_, err := this.UpdateDb(data, query, args...)
	if err != nil {
		logger.Log.Errorf("[BaseDao] Update failed,error:%s", err.Error())
		return err
	}

	if this.UseCache(data) {
		err = this.UpdateCache(data)
		if err != nil {
			logger.Log.Errorf("[BaseDao] Update failed,error:%s", err.Error())
			return err
		}
	}

	return nil
}

func (this *BaseDao) UpdateDb(data pojo.I_DbBase, query string, args ...interface{}) (int64, error) {
	r, err := this.enginer.Where(query, args...).Update(data)
	if err != nil {
		logger.Log.Errorf("Update failed,error:%s", err.Error())
		return 0, err
	}

	return r, nil
}

func (this *BaseDao) UpdateCache(data pojo.I_DbBase) error {
	data.SetStatus(pojo.OptUpdate)
	bytes, err := gojson.Marshal(data)
	if err != nil {
		logger.Log.Errorf("[BaseDao] UpdateCache failed,error:%s", err.Error())
		return err
	}

	err = this.redisClient.HSet(data.TableName(), data.GetDataKey(), bytes).Err()
	if err != nil {
		logger.Log.Errorf("[BaseDao] UpdateCache failed,error:%s", err.Error())
		return err
	}

	return nil
}

func (this *BaseDao) Delete(data pojo.I_DbBase) error {
	err := this.DeleteDb(data)
	if err != nil {
		logger.Log.Errorf("[BaseDao] Delete failed,error:%s", err.Error())
		return err
	}

	if this.UseCache(data) {
		err = this.DeleteCache(data)
		if err != nil {
			logger.Log.Errorf("[BaseDao] Delete failed,error:%s", err.Error())
			return err
		}
	}

	return nil
}

func (this *BaseDao) DeleteDb(data pojo.I_DbBase) error {
	_, err := this.enginer.Delete(data)
	if err != nil {
		logger.Log.Errorf("[BaseDao] DeleteDb failed,error:%s", err.Error())
		return err
	}
	return nil
}

func (this *BaseDao) DeleteCache(data pojo.I_DbBase) error {
	if data != nil && len(data.GetDataKey()) > 0 {
		_, err := this.redisClient.HDel(data.TableName(), data.GetDataKey()).Result()
		if err != nil {
			logger.Log.Errorf("DeleteCache failed,error:%s", err.Error())
			return err
		}

	}

	return nil
}

func (this *BaseDao) Get(data pojo.I_DbBase) (pojo.I_DbBase, error) {
	var err error
	var rs pojo.I_DbBase
	if this.UseCache(data) {
		rs, err = this.GetByCache(data)
		if err != nil {
			logger.Log.Errorf("[BaseDao] Get failed,error:%s", err.Error())
			return nil, err
		}

		if rs != nil {
			return rs, nil
		}
	}

	rs, err = this.GetByDb(data)
	if err != nil {
		logger.Log.Errorf("[BaseDao] Get failed,error:%s", err.Error())
		return nil, err
	}

	if this.UseCache(data) {
		err = this.AddCache(data)
		if err != nil {
			logger.Log.Errorf("[BaseDao] Get failed,error:%s", err.Error())
			return nil, err
		}
	}

	return rs, nil
}

func (this *BaseDao) GetByDb(data pojo.I_DbBase) (pojo.I_DbBase, error) {
	b, err := this.enginer.Get(data)
	if err != nil {
		logger.Log.Errorf("[BaseDao] GetByDb failed,error:%s", err.Error())
		return nil, err
	}

	if !b {
		return nil, nil
	}

	return data, nil
}

func (this *BaseDao) GetByCache(data pojo.I_DbBase) (pojo.I_DbBase, error) {
	str, err := this.redisClient.HGet(data.TableName(), data.GetDataKey()).Result()
	if err != nil && err != redis.Nil {
		logger.Log.Errorf("[BaseDao] GetByCache failed,error:%s", err.Error())
		return nil, err
	}

	if str == "" {
		return nil, nil
	}

	err = gojson.Unmarshal([]byte(str), &data)
	if err != nil {
		logger.Log.Errorf("[BaseDao] GetByCache failed,error:%s", err.Error())
		return nil, err
	}

	if data.GetStatus() == pojo.OptDelete {
		return nil, nil
	}

	return data, nil
}

func (this *BaseDao) GetListByDb(data pojo.I_DbBase, rs interface{}) error {
	err := this.enginer.Find(rs, data)
	if err != nil {
		logger.Log.Errorf("[BaseDao] GetListByDb failed,error:%s", err.Error())
		return err
	}

	if this.UseCache(data) && rs != nil {
		length := reflect.ValueOf(rs).Elem().Len()
		if length > 0 {
			var bytes []byte
			for i := 0; i < length; i++ {
				v := reflect.ValueOf(rs).Elem().Index(i).Interface()

				bytes, err = gojson.Marshal(v)
				if err != nil {
					logger.Log.Errorf("[BaseDao] GetListByDb failed,error:%s", err.Error())
					return err
				}

				s := v.(pojo.I_DbBase)
				err = this.redisClient.HSet(s.TableName(), s.GetDataKey(), bytes).Err()
				if err != nil && err != redis.Nil {
					logger.Log.Errorf("[BaseDao] GetListByDb failed,error:%s", err.Error())
					return err
				}
			}
		}
	}

	return nil
}

func (this *BaseDao) UseCache(data pojo.I_DbBase) bool {
	return data.TableName() != "" && data.GetDataKey() != ""
}

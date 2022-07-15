package module_database

import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/topfreegames/pitaya"
	"github.com/topfreegames/pitaya/modules"
	"github.com/xormplus/xorm"
	"time"
)

type DatabaseStorage struct {
	modules.Base
	Enginer *xorm.Engine
}

func NewDatabaseStorage() (*DatabaseStorage, error) {
	d := &DatabaseStorage{}
	err := d.configure()
	if err != nil {
		return nil, err
	}
	return d, nil
}

func (this *DatabaseStorage) configure() error {
	var err error
	this.Enginer, err = xorm.NewEngine("mysql", pitaya.GetConfig().GetString(`module.mysql.url`))
	if err != nil {
		return err
	}
	//this.Enginer.SetLogger(logger.Log)
	this.Enginer.ShowSQL(true)
	this.Enginer.SetMaxIdleConns(pitaya.GetConfig().GetInt("module.mysql.max_idle_conn"))
	this.Enginer.SetMaxOpenConns(pitaya.GetConfig().GetInt("module.mysql.max_open_conn"))
	this.Enginer.SetConnMaxLifetime(pitaya.GetConfig().GetDuration("module.mysql.conn_max_life_time") * time.Second)
	return err
}

func (this *DatabaseStorage) Init() error {
	var err error
	err = this.Enginer.Ping()
	if err != nil {
		return err
	}

	return err
}

func (this *DatabaseStorage) Shutdown() error {
	return this.Enginer.Close()
}

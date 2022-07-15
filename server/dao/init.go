package dao

import "github.com/topfreegames/pitaya/component"

var daoComps = make([]daoComp, 0)

type daoComp struct {
	comp component.Component
	opts []component.Option
}

func RegisterDao(c component.Component, options ...component.Option) {
	daoComps = append(daoComps, daoComp{c, options})
}

func StartupDaoes() {
	// component initialize hooks
	for _, c := range daoComps {
		c.comp.Init()
	}

	// component after initialize hooks
	for _, c := range daoComps {
		c.comp.AfterInit()
	}
}

func ShutdownDaoes() {
	// reverse call `BeforeShutdown` hooks
	length := len(daoComps)
	for i := length - 1; i >= 0; i-- {
		daoComps[i].comp.BeforeShutdown()
	}

	// reverse call `Shutdown` hooks
	for i := length - 1; i >= 0; i-- {
		daoComps[i].comp.Shutdown()
	}
}

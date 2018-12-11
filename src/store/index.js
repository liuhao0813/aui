import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app
  }
})

if (module.hot) {
  module.hot.accept(['./modules/app'], () => {
    store.hotUpdate({
      modules: {
        app: require('./modules/app')
      }
    })
  })
}

export default store

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import i18n from './i18n'
import App from './App'

import './assets/element-theme/blue/index.css'
import './assets/scss/skins/blue.scss'

require('@/assets/icons/iconfont')

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'medium',
  zIndex: 3000,
  i18n: (key, value) => i18n.t(key, value)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})

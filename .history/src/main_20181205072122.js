// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'

import './assets/element-theme/blue/index.css'
import './assets/scss/skins/blue.scss'

require('@/assets/icons/iconfont')

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'medium', zIndex: 3000 })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

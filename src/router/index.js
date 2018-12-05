import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'

import Main from '@/views/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/admin',
          component: Main
        }
      ]
    }
  ]
})

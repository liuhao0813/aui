import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'

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
          component: () => import('@/views/Main')
        },
        {
          path: '/icon',
          component: () => import('@/views/Icon')
        },
        {
          path: '/echarts',
          component: () => import('@/views/Echarts')
        }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/template/Layout'

import store from '@/store'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
    alwaysShow: true,
    meta: { title: 'Login', icon: 'icon-gift', noCache: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/admin',
    meta: { title: 'Home', icon: 'icon-gift', noCache: true },
    children: [
      {
        path: '/admin',
        component: () => import('@/views/Main')
      }
    ]
  },
  {
    path: '/icon',
    component: Layout,
    redirect: '/icons',
    meta: { title: 'icons', icon: 'icon-gift', noCache: true },
    children: [
      {
        path: '/icons',
        name: 'Icons',
        component: () => import('@/views/Icon')
      }
    ]
  },
  {
    path: '/echart',
    name: 'echarts',
    component: Layout,
    alwaysShow: true,
    redirect: '/echarts',
    meta: { title: 'Echart', icon: 'icon-gift', noCache: true },
    children: [
      {
        path: '/echarts',
        component: () => import('@/views/Echarts'),
        meta: { title: 'Echarts', icon: 'icon-barchart', noCache: true }
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  routes: constantRouterMap
})

router.beforeEach((to, from, next) => {
  store.dispatch('app/GenerateRoutes').then(() => { // 根据roles权限生成可访问的路由表
    // router.addRoutes(store.state.app.addRouters) // 动态添加可访问路由表
    next({ to, replace: true })
    // next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
  })
})

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'directivePermission'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'example',
      icon: 'example'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'CreateArticle',
        meta: { title: 'createArticle', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditArticle',
        meta: { title: 'editArticle', noCache: true },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: 'ArticleList',
        meta: { title: 'articleList', icon: 'list' }
      }
    ]
  },

  {
    path: '/tab',
    component: Layout,
    children: [
      {
        path: 'tabs',
        component: () => import('@/views/tab/index'),
        name: 'Tab',
        meta: { title: 'tab', icon: 'tab' }
      }
    ]
  },

  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'ErrorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/errorPage/401'),
        name: 'Page401',
        meta: { title: 'page401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/errorPage/404'),
        name: 'Page404',
        meta: { title: 'page404', noCache: true }
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: 'log',
        component: () => import('@/views/errorLog/index'),
        name: 'ErrorLog',
        meta: { title: 'errorLog', icon: 'bug' }
      }
    ]
  },

  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: () => import('@/views/excel/exportExcel'),
        name: 'ExportExcel',
        meta: { title: 'exportExcel' }
      },
      {
        path: 'export-selected-excel',
        component: () => import('@/views/excel/selectExcel'),
        name: 'SelectExcel',
        meta: { title: 'selectExcel' }
      },
      {
        path: 'upload-excel',
        component: () => import('@/views/excel/uploadExcel'),
        name: 'UploadExcel',
        meta: { title: 'uploadExcel' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default router

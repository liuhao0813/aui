import { constantRouterMap, asyncRouterMap } from '@/router'
import Cookies from 'js-cookie'

function filterAsyncRouter (routes) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (tmp.children) {
      tmp.children = filterAsyncRouter(tmp.children)
    }
    res.push(tmp)
  })

  return res
}

const app = {
  namespaced: true,
  state: {
    // 设置默认语言
    language: 'zh',
    // 滚动条, 滚动高度
    scrollbarHeight: 0,
    // 容器, 居中
    wrapperCenter: false,
    // 头部, 皮肤 (white 白色 / colorful 鲜艳)
    headerSkin: 'colorful',
    // 头部, 固定状态
    headerFixed: true,
    // 侧边, 皮肤 (white 白色 / dark 黑色)
    asideSkin: 'dark',
    // 侧边, 固定状态
    asideFixed: true,
    // 侧边, 折叠状态
    asideFold: false,
    // 侧边, 至头部状态
    asideTop: false,
    // 侧边, 菜单显示状态 (控制台“至头部”操作时, el-menu组件需根据mode属性重新渲染)
    asideMenuVisible: true,
    // 侧边, 菜单选中
    asideMenuActive: 'home',
    // 控制台, 固定状态
    controlFixed: false,
    // 控制台, 打开状态
    controlOpen: false,
    // 控制台, 标签页选中
    controlTabsActive: 'layout',
    // 主内容, 展示类型 (standard 标准 / tabs 标签页)
    mainType: 'standard',
    // 主标签页, 列表
    mainTabs: [],
    // 主标签页, 选中
    mainTabsActive: 'home',
    // 主标签页, 头部固定状态
    mainTabsHeaderFixed: false,
    // 解析路由配置文件，动态设置到对应的SidebarItem中
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    asideFoldHandler (state) {
      state.asideFold = !state.asideFold
    },
    controlOpenHandler (state) {
      state.controlOpen = !state.controlOpen
    },
    wrapperCenterHandler (state, payload) {
      state.wrapperCenter = payload
    },
    headerFixedHandler (state, payload) {
      state.headerFixed = payload
    },
    headerSkinHandler (state, payload) {
      state.headerSkin = payload
    },
    asideFixedHandler (state, payload) {
      state.asideFixed = payload
    },
    asideSkinHandler (state, payload) {
      state.asideSkin = payload
    },
    asideTopHandler (state, payload) {
      state.asideTop = payload
    },
    controlFixedHandler (state, payload) {
      state.controlFixed = payload
    },
    mainTypeHandler (state, payload) {
      state.mainType = payload
    },
    mainTabsHeaderFixedHandler (state, payload) {
      state.mainTabsHeaderFixed = payload
    },
    setLanguage (state, language) {
      state.language = language
      Cookies.set('language', language)
    }
  },
  actions: {
    setLanguage ({commit}, language) {
      commit('setLanguage', language)
    },
    GenerateRoutes ({ commit }) {
      return new Promise(resolve => {
        let accessedRouters = filterAsyncRouter(asyncRouterMap)

        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default app

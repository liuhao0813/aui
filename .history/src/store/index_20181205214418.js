import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 滚动条, 滚动高度
    scrollbarHeight: 0,
    // DOM Element对象
    DOM: {},
    // 加载中
    loading: true,
    // 容器, 居中
    wrapperCenter: false,
    // 头部, 皮肤 (white 白色 / colorful 鲜艳)
    headerSkin: 'colorful',
    // 头部, 固定状态
    headerFixed: false,
    // 侧边, 皮肤 (white 白色 / dark 黑色)
    asideSkin: 'dark',
    // 侧边, 固定状态
    asideFixed: false,
    // 侧边, 折叠状态
    asideFold: false,
    // 侧边, 至头部状态
    asideTop: false,
    // 侧边, 菜单显示状态 (控制台“至头部”操作时, el-menu组件需根据mode属性重新渲染)
    asideMenuVisible: true,
    // 侧边, 菜单选中
    asideMenuActive: 'home',
    // 搜索, 显示状态
    searchVisible: false,
    // 搜索, 值
    search: '',
    // 控制台, 固定状态
    controlFixed: false,
    // 控制台, 打开状态
    controlOpen: true,
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
    // 皮肤, 默认值
    skin: 'orange',
    // 皮肤, 列表
    skinList: [
      { name: 'blue', color: '#3E8EF7', remark: '蓝色' },
      { name: 'brown', color: '#997B71', remark: '棕色' },
      { name: 'cyan', color: '#0BB2D4', remark: '青色' },
      { name: 'gray', color: '#757575', remark: '灰色' },
      { name: 'green', color: '#11C26D', remark: '绿色' },
      { name: 'indigo', color: '#667AFA', remark: '靛青色' },
      { name: 'orange', color: '#EB6709', remark: '橙色' },
      { name: 'pink', color: '#F74584', remark: '粉红色' },
      { name: 'purple', color: '#9463F7', remark: '紫色' },
      { name: 'red', color: '#FF4C52', remark: '红色' },
      { name: 'turquoise', color: '#17B3A3', remark: '蓝绿色' },
      { name: 'yellow', color: '#FCB900', remark: '黄色' }
    ]
  },
  getters: {

  },
  mutations: {
    asideFoldMutation (state) {
      state.asideFold = !state.asideFold
    },
    controlOpenMutation (state) {
      state.controlOpen = !state.controlOpen
    },
    wrapperCenterMutation (state, payload) {
      state.wrapperCenter = payload
    },
    headerFixedMutation (state, payload) {
      state.headerFixed = payload
    },
    headerSkinMutation (state, payload) {
      state.headerSkin = payload
    },
    asideFixedMutation (state, payload) {
      state.asideFixed = payload
    },
    asideSkinMutation (state, payload) {
      state.asideSkin = payload
    },
    asideTopMutation (state, payload) {
      state.asideTop = payload
    },
    controlFixedMutation (state, payload) {
      state.controlFixed = payload
    },
    mainTypeMutation (state, payload) {
      state.mainType = payload
    },
    mainTabsHeaderFixedMutation (state, payload) {
      state.mainTabsHeaderFixed = payload
    }
  },
  actions: {

  }
})

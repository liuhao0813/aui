<template>
  <div
    v-cloak
    ref="auiWrapper"
    class="aui-wrapper"
    :class="[
      'aui-header--' + headerSkin,
      'aui-aside--' + asideSkin,
      {
        'aui-wrapper--center': wrapperCenter,
        'aui-header--fixed': headerFixed,
        'aui-aside--fixed': asideFixed,
        'aui-aside--fold': asideFold,
        'aui-aside--top': asideTop,
        'aui-control--fixed': controlFixed,
        'aui-control--open': controlOpen,
        'aui-main-tabs__header--fixed': mainTabsHeaderFixed
      }
    ]"
    v-loading.fullscreen.lock="loading"
    element-loading-text="拼命加载中">
    <layout-header/>
    <layout-aside/>
    <layout-control/>
    <main class="aui-main">
        <!-- standard 标准 -->
        <div v-show="mainType === 'standard'" class="aui-main__hd">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>renren-aui</el-breadcrumb-item>
            <el-breadcrumb-item>首页</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div v-show="mainType === 'standard'" class="aui-main__bd">
          <include src="./templates/pages/index.html"></include>
          <router-view/>
        </div>
        <!-- tabs 标签页 -->
        <el-dropdown v-show="mainType === 'tabs'" class="aui-main-tabs__tool">
          <i class="el-icon-arrow-down"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>关闭当前标签页</el-dropdown-item>
            <el-dropdown-item>关闭其它标签页</el-dropdown-item>
            <el-dropdown-item>关闭全部标签页</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-tabs v-show="mainType === 'tabs'" class="aui-main-tabs aui-tabs" v-model="mainTabsActive">
          <el-tab-pane label="home" name="home" :closable="false" class="aui-main-tabs__pane--full">
            <svg slot="label" class="aui-content--tabs-icon-nav icon-svg" aria-hidden="true"><use xlink:href="#icon-home"></use></svg>
            <include src="./templates/pages/index.html" path="."></include>
          </el-tab-pane>
          <el-tab-pane label="标签页2" name="2" closable>标签页2</el-tab-pane>
          <el-tab-pane label="标签页3" name="3" closable>标签页3</el-tab-pane>
          <el-tab-pane label="标签页5" name="5" closable>
            <span slot="label"><i class="el-icon-date"></i> 标签页5</span>
          </el-tab-pane>
          <el-tab-pane label="标签页6" name="6" closable>标签页6</el-tab-pane>
          <el-tab-pane label="标签页7" name="7" closable>标签页7</el-tab-pane>
          <el-tab-pane label="标签页8" name="8" closable>标签页8</el-tab-pane>
          <el-tab-pane label="标签页9" name="9" closable>标签页9</el-tab-pane>
          <el-tab-pane label="标签页10" name="10" closable>标签页10</el-tab-pane>
        </el-tabs>
      </main>
        <layout-footer/>
  </div>
</template>

<script>

import LayoutHeader from '@/components/LayoutHeader'
import LayoutAside from '@/components/LayoutAside'
import LayoutControl from '@/components/LayoutControl'
import LayoutFooter from '@/components/LayoutFooter'

export default {
  data () {
    return {
      // 头部, 皮肤 (white 白色 / colorful 鲜艳)
      headerSkin: 'colorful',
      // 侧边, 皮肤 (white 白色 / dark 黑色)
      asideSkin: 'dark',
      // 容器, 居中
      wrapperCenter: false,
      // 头部, 固定状态
      headerFixed: false,
      // 侧边, 折叠状态
      asideFold: false,
      // 侧边, 至头部状态
      asideTop: false,
      // 控制台, 固定状态
      controlFixed: false,
      // 控制台, 打开状态
      controlOpen: true,
      // 主标签页, 头部固定状态
      mainTabsHeaderFixed: false,
      // 加载中
      loading: true,
      // 主内容, 展示类型 (standard 标准 / tabs 标签页)
      mainType: 'standard',
      // 主标签页, 列表
      mainTabs: [],
      // 主标签页, 选中
      mainTabsActive: 'home'
    }
  },
  components: {
    LayoutHeader: LayoutHeader,
    LayoutAside: LayoutAside,
    LayoutControl: LayoutControl,
    LayoutFooter: LayoutFooter
  },
  watch: {
    scrollbarHeight: function (val) {
      this.yLayoutFixedHandle()
    },
    wrapperCenter: function (val) {
      this.headerFixed = false
      this.asideFixed = false
      this.controlFixed = false
      this.mainTabsHeaderFixed = false
    },
    headerFixed: function (val) {
      this.yLayoutFixedHandle()
    },
    asideFixed: function (val) {
      this.yLayoutFixedHandle()
    },
    asideTop: function (val) {
      this.yLayoutFixedHandle()
      this.asideMenuVisible = false
      this.$nextTick(function () {
        this.asideMenuVisible = true
      })
    },
    controlFixed: function (val) {
      this.yLayoutFixedHandle()
    },
    mainTabsHeaderFixed: function (val) {
      this.yLayoutFixedHandle()
    }
  },
  created () {
    this.loading = false
    this.$nextTick(function () {
      this.scrollbarHandle(true)
      this.getDOM()
      this.searchHandle()
    })
  },
  methods: {
    // 滚动条, 滚动距离
    scrollbarHandle: function (isInit) {
      if (isInit && typeof (isInit) === 'boolean') {
        window.addEventListener('scroll', this.scrollbarHandle)
      }
      this.scrollbarHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    },
    // 获取DOM Element对象
    getDOM: function () {
      this.DOM.header = this.$refs.auiWrapper.querySelector('.aui-header')
      this.DOM.aside = this.$refs.auiWrapper.querySelector('.aui-aside')
      this.DOM.control = this.$refs.auiWrapper.querySelector('.aui-control')
      this.DOM.main = this.$refs.auiWrapper.querySelector('.aui-main')
      this.DOM.mainTabsTool = this.DOM.main.querySelector('.aui-main-tabs__tool')
      this.DOM.mainTabsHeader = this.DOM.main.querySelector('.aui-main-tabs > .el-tabs__header')
    },
    // Y轴布局固定
    yLayoutFixedHandle: function () {
      var _offsetHeight = this.scrollbarHeight >= this.DOM.header.offsetHeight ? 0 : this.DOM.header.offsetHeight - this.scrollbarHeight
      // 侧边
      if (!this.headerFixed && this.asideTop && this.asideFixed) {
        this.DOM.aside.style.top = _offsetHeight + 'px'
      } else {
        this.DOM.aside.style.removeProperty('top')
      }
      // 控制台
      if (!this.headerFixed && this.controlFixed) {
        this.DOM.control.style.top = _offsetHeight + 'px'
      } else {
        this.DOM.control.style.removeProperty('top')
      }
      // 主标签页, 头部
      if (!this.headerFixed && this.mainTabsHeaderFixed) {
        if (this.asideTop && this.asideFixed) {
          _offsetHeight += this.DOM.aside.offsetHeight
        }
        if (this.asideTop && !this.asideFixed) {
          _offsetHeight = this.scrollbarHeight >= this.DOM.header.offsetHeight + this.DOM.aside.offsetHeight ? 0 : this.DOM.header.offsetHeight + this.DOM.aside.offsetHeight - this.scrollbarHeight
        }
        this.DOM.mainTabsTool.style.top = _offsetHeight + 'px'
        this.DOM.mainTabsHeader.style.top = _offsetHeight + 'px'
      } else {
        this.DOM.mainTabsTool.style.removeProperty('top')
        this.DOM.mainTabsHeader.style.removeProperty('top')
      }
    },
    // 搜索, 显示／隐藏
    searchHandle: function () {
      this.$refs.auiWrapper.querySelector('.aui-search__toggle').addEventListener('click', function (e) {
        e.cancelBubble = true
      })
      this.$refs.auiWrapper.querySelector('.aui-search').addEventListener('click', function (e) {
        e.cancelBubble = true
      })
      window.addEventListener('click', function (e) {
        if (this.searchVisible) {
          this.searchVisible = false
        }
      })
    },
    // 跳转页面
    gotoPageHandle: function (url) {
      if (!/\S/.test(url) || location.href.indexOf(url.replace(/^(\.*\/)*/, '')) !== -1) {
        return false
      }
      window.location.href = url
    },
    // 皮肤切换
    skinChangeHandle: function (val) {
      var styleList = [
        {
          id: 'J_elementTheme',
          url: './element-theme/' + val + '/index.css?t=' + new Date().getTime()
        },
        {
          id: 'J_auiSKin',
          url: './css/aui-' + val + '.min.css?t=' + new Date().getTime()
        }
      ]
      for (var i = 0; i < styleList.length; i++) {
        var el = document.querySelector('#' + styleList[i].id)
        if (el) {
          el.href = styleList[i].url
          continue
        }
        el = document.createElement('link')
        el.id = styleList[i].id
        el.href = styleList[i].url
        el.rel = 'stylesheet'
        document.querySelector('head').appendChild(el)
      }
    }
  }

}
</script>

<style scoped>

</style>

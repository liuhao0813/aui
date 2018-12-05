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
          <transition mode="out-in">
            <router-view/>
          </transition>
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
            <transition mode="out-in">
              <router-view/>
            </transition>
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

import { mapState, mapMutations } from 'vuex'

import LayoutHeader from '@/components/LayoutHeader'
import LayoutAside from '@/components/LayoutAside'
import LayoutControl from '@/components/LayoutControl'
import LayoutFooter from '@/components/LayoutFooter'

export default {
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState(['headerSkin','asideSkin', 'wrapperCenter', 'headerFixed', 
    'asideFixed', 'asideFold', 'asideTop', 'controlFixed', 'controlOpen', 
    'mainTabsHeaderFixed', 'mainType', 'mainTabsActive'])
  },
  components: {
    LayoutHeader,
    LayoutAside,
    LayoutControl,
    LayoutFooter
  },
  created () {
    this.loading = false
  },
  methods: {
  }

}
</script>

<style scoped>

</style>

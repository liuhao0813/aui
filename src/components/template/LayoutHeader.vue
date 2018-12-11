<template>
    <header class="aui-header">
  <div class="aui-header__hd">
    <a class="aui-brand aui-brand--lg" href="javascript:;">renren-aui</a>
    <a class="aui-brand aui-brand--sm" href="javascript:;">aui</a>
  </div>
  <div class="aui-header__bd">
    <!-- aui-header__menu left -->
    <el-menu class="aui-header__menu aui-header__menu--left" mode="horizontal">
      <el-menu-item v-if="!asideTop" index="1" @click="asideFoldHandler">
        <svg class="icon-svg aui-header__icon-menu aui-header__icon-menu--rz180" aria-hidden="true"><use xlink:href="#icon-outdent"></use></svg>
      </el-menu-item>
    </el-menu>
    <!-- aui-header__menu right -->
    <el-menu class="aui-header__menu aui-header__menu--right" mode="horizontal">
      <el-menu-item index="2">
          <a href="https://www.renren.io/community" target="_blank">
            <svg class="icon-svg aui-header__icon-menu" aria-hidden="true"><use xlink:href="#icon-earth"></use></svg>
          </a>
        </el-menu-item>
      <el-menu-item index="3">
        <svg class="icon-svg aui-header__icon-menu" aria-hidden="true"><use xlink:href="#icon-sync"></use></svg>
      </el-menu-item>
      <el-menu-item index="4" @click="toggleFullScreen">
        <svg class="icon-svg aui-header__icon-menu" aria-hidden="true"><use xlink:href="#icon-fullscreen"></use></svg>
      </el-menu-item>
      <el-menu-item index="1" @click="searchVisible = !searchVisible" class="aui-search__toggle">
        <svg class="icon-svg aui-header__icon-menu" aria-hidden="true"><use xlink:href="#icon-search"></use></svg>
      </el-menu-item>
      <el-submenu index="2" :popper-append-to-body="false" class="not-arrow t-center">
        <template slot="title">
          <el-button size="mini">简体中文</el-button>
        </template>
        <el-menu-item index="2-1" :disabled="language==='zh'" @click="handleSetLanguage('zh')">简体中文</el-menu-item>
        <el-menu-item index="2-2" :disabled="language==='tw'" @click="handleSetLanguage('tw')">繁體中文</el-menu-item>
        <el-menu-item index="2-3" :disabled="language==='en'" @click="handleSetLanguage('en')">English</el-menu-item>
      </el-submenu>
      <el-submenu index="3" :popper-append-to-body="false">
        <template slot="title">
          <img class="aui-avatar" src="@/assets/scss/img/avatar.png">
          <span>admin</span>
        </template>
        <el-menu-item index="3-1">修改密码</el-menu-item>
        <el-menu-item index="3-2">退出</el-menu-item>
      </el-submenu>
      <el-menu-item index="1" @click="controlOpenHandler">
        <svg class="icon-svg aui-header__icon-menu" aria-hidden="true"><use xlink:href="#icon-setting"></use></svg>
      </el-menu-item>
    </el-menu>
    <!-- aui-search -->
    <div class="aui-search" :class="{ 'aui-search--show': searchVisible }">
      <div class="aui-search__inner">
        <el-input class="aui-search__input" v-model="search" placeholder="搜索关键字" clearable>
          <svg slot="prepend" class="icon-svg" aria-hidden="true"><use xlink:href="#icon-search"></use></svg>
        </el-input>
      </div>
    </div>
  </div>
</header>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      search: '',
      searchVisible: false
    }
  },
  computed: {
    ...mapState('app', ['language', 'asideTop', 'asideFold', 'controlOpen'])
  },
  methods: {
    asideFoldHandler () {

    },
    controlOpenHandler () {

    },
    ...mapMutations('app', ['asideFoldHandler', 'controlOpenHandler']),

    handleSetLanguage (lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('app/setLanguage', lang)
      this.$message({
        message: 'Switch Language Success',
        type: 'success'
      })
    },
    toggleFullScreen () {
      let doc = window.document
      let docEl = doc.documentElement

      let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen
      let cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen

      if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl)
      } else {
        cancelFullScreen.call(doc)
      }
    }
  }
}
</script>

<style scoped>

</style>

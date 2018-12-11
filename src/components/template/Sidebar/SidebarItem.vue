<template>
  <div v-if="!item.hidden&&item.children">

    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <router-link :to="onlyOneChild.path">
        <el-menu-item :index="onlyOneChild.path" :class="{'submenu-title-noDropdown':!isNest}">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-home"></use></svg>
          <span slot="title">{{ item.meta.title }}</span>
          <!-- <item v-if="onlyOneChild.meta" :icon="onlyOneChild.meta.icon||item.meta.icon" :title="onlyOneChild.meta.title" /> -->
        </el-menu-item>
      </router-link>
    </template>

    <el-submenu v-else ref="submenu" :index="item.path">
      <template slot="title">
        <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-home"></use></svg>
        <span slot="title">{{ item.meta.title }}</span>
      </template>

      <template v-for="child in item.children" v-if="!child.hidden">
        <sidebar-item
          v-if="child.children&&child.children.length>0"
          :is-nest="true"
          :item="child"
          :key="child.path"
          :base-path="child.path"
          class="nest-menu" />

        <router-link v-else :to="child.path" :key="child.name">
          <el-menu-item :index="child.path">
            <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-home"></use></svg>
            <span slot="title">{{ child.meta.title }}</span>
          </el-menu-item>
        </router-link>
      </template>
    </el-submenu>

    <!-- <router-link to="/admin">
        <el-menu-item index="home">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-home"></use></svg>
          <span slot="title">{{ $t('aside.home') }}</span>
        </el-menu-item>
      </router-link>
      <router-link to="/icon">
        <el-menu-item index="icon">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-gift"></use></svg>
          <span slot="title">{{ $t('aside.icon') }}</span>
        </el-menu-item>
      </router-link>

      <el-submenu index="basic" :popper-append-to-body="false">
        <template slot="title">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-crown"></use></svg>
          <span>基础页面</span>
        </template>
        <el-menu-item index="basic-login">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>登录</span>
        </el-menu-item>
        <el-menu-item index="basic-login-v2">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>登录 - v2</span>
        </el-menu-item>
        <el-menu-item index="basic-register">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>注册</span>
        </el-menu-item>
        <el-menu-item index="basic-register-v2">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>注册 - v2</span>
        </el-menu-item>
        <el-menu-item index="basic-forget">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>找回密码</span>
        </el-menu-item>
        <el-menu-item index="basic-forget-v2">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>找回密码 - v2</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="chart" :popper-append-to-body="false">
        <template slot="title">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-barchart"></use></svg>
          <span>{{ $t('aside.charts') }}</span>
        </template>
        <router-link to="/echarts">
          <el-menu-item index="chart-echarts">
            <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
            <span>Echarts</span>
          </el-menu-item>
        </router-link>
      </el-submenu> -->
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  data () {
    return {
      onlyOneChild: null
    }
  },
  props: {
    item: {type: Object, required: true},
    isNest: {type: Boolean, default: false},
    basePath: {type: String, default: ''}
  },
  methods: {
    hasOneShowingChild (children, parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })

      if (showingChildren.length === 1) {
        return true
      }

      if (showingChildren.length === 0) {
        this.onlyOneChild = {
          ...parent, path: '', noShowingChildren: true
        }
        return true
      }

      return false
    }
  }
}
</script>

<style scoped>

</style>

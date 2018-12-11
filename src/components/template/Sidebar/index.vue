<template>
    <aside class="aui-aside">
  <div class="aui-aside__inner">
    <el-menu
      v-if="asideMenuVisible"
      class="aui-aside__menu"
      :default-active="asideMenuActive"
      :collapse="asideFold"
      :unique-opened="true"
      :collapse-transition="false"
      :mode="asideTop ? 'horizontal' : 'vertical'">
      <sidebar-item v-for="route in routers" :key="route.path" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
  </div>
</aside>
</template>

<script>

import { mapState } from 'vuex'

import SidebarItem from './SidebarItem'

export default {
  data () {
    return {
      // 侧边, 菜单选中
      asideMenuActive: 'home'
    }
  },
  components: {
    SidebarItem
  },
  computed: {
    ...mapState('app', ['asideMenuVisible', 'asideFold', 'asideTop', 'routers'])
  },
  methods: {
    gotoPageHandle (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>

</style>

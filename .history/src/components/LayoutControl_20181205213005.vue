<template>
    <aside class="aui-control">
  <div v-if="!headerFixed && controlFixed" class="aui-control__toggle" @click="controlOpen = !controlOpen">
    <svg class="icon-svg" aria-hidden="true"><use xlink:href="#icon-setting"></use></svg>
  </div>
  <div class="aui-control__inner">
    <div class="aui-control__bd">
      <el-tabs class="aui-tabs aui-tabs--flex" v-model="controlTabsActive">
        <el-tab-pane label="Layout" name="layout">
          <dl class="aui-control__setting">
            <dt>Wrapper</dt>
            <dd><el-checkbox v-model="wrapperCenter">Center 居中</el-checkbox></dd>
          </dl>
          <dl class="aui-control__setting">
            <dt>Header</dt>
            <dd><el-checkbox v-model="headerFixed" :disabled="wrapperCenter">Fixed 固定</el-checkbox></dd>
            <dd><el-checkbox v-model="headerSkin" true-label="colorful" false-label="white">Colorful 鲜艳</el-checkbox></dd>
          </dl>
          <dl class="aui-control__setting">
            <dt>Aside</dt>
            <dd><el-checkbox v-model="asideFixed" :disabled="wrapperCenter">Fixed 固定</el-checkbox></dd>
            <dd><el-checkbox v-model="asideSkin" true-label="dark" false-label="white">Dark 鲜艳</el-checkbox></dd>
            <dd><el-checkbox v-model="asideTop">Top 至头部</el-checkbox></dd>
          </dl>
          <dl class="aui-control__setting">
            <dt>Control</dt>
            <dd><el-checkbox v-model="controlFixed" :disabled="wrapperCenter">Fixed 固定</el-checkbox></dd>
          </dl>
          <dl class="aui-control__setting">
            <dt>Main</dt>
            <dd><el-checkbox v-model="mainType" true-label="tabs" false-label="standard">Tabs 标签页</el-checkbox></dd>
          </dl>
          <dl class="aui-control__setting">
            <dt>Main-tabs</dt>
            <dd><el-checkbox v-model="mainTabsHeaderFixed" :disabled="wrapperCenter || mainType !== 'tabs'">Header Fixed 固定</el-checkbox></dd>
          </dl>
        </el-tab-pane>
        <el-tab-pane label="Skins" name="skins">
          <dl class="aui-control__setting">
            <dt>Skins</dt>
            <dd v-for="item in skinList" :key="item.name">
              <el-radio v-model="skin" :label="item.name" @change="skinChangeHandle">
                <span class="t-capitalize">{{ item.name }}</span> {{ item.remark }}
              </el-radio>
            </dd>
          </dl>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</aside>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      // 皮肤, 默认值
      skin: 'blue',
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
    }
  },
  computed: {
    ...mapState(['headerFixed', 'controlFixed', 'controlTabsActive', 'wrapperCenter' ,
    'headerSkin', 'asideFixed', 'asideSkin', 'asideTop', 
    'mainType', 'mainTabsHeaderFixed'])
  }
}
</script>

<style scoped>

</style>

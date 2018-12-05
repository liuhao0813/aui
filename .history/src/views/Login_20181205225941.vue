<template>
<div v-cloak class="aui-page page-login">
    <div class="login-wrapper">
      <!-- page-header -->
      <header class="aui-page-header">
        <h2 class="aui-brand">renren-aui</h2>
        <ul class="aui-intro">
            <li>Out-of-the-box Admin Template.</li>
        </ul>
      </header>
      <!-- page-main -->
      <main class="aui-page-main">
        <h3 class="page-title">登录</h3>
        <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmitHandle()">
        <el-form-item prop="language">
            <el-select v-model="dataForm.language" placeholder="语言选择" class="w-100">
            <el-option label="简体中文" value="zh-CN"></el-option>
            <el-option label="繁體中文" value="zh-TW"></el-option>
            <el-option label="English" value="en-US"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item prop="username">
            <el-input v-model="dataForm.username" placeholder="用户名／手机号码">
            <span slot="prefix" class="el-input__icon">
                <svg class="icon-svg" aria-hidden="true"><use xlink:href="#icon-user"></use></svg>
            </span>
            </el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="dataForm.password" type="password" placeholder="密码">
            <span slot="prefix" class="el-input__icon">
                <svg class="icon-svg" aria-hidden="true"><use xlink:href="#icon-lock"></use></svg>
            </span>
            </el-input>
        </el-form-item>
        <el-form-item prop="captcha">
            <el-row :gutter="20">
            <el-col :span="14">
                <el-input v-model="dataForm.captcha" placeholder="验证码">
                <span slot="prefix" class="el-input__icon">
                    <svg class="icon-svg" aria-hidden="true"><use xlink:href="#icon-safetycertificate"></use></svg>
                </span>
                </el-input>
            </el-col>
            <el-col :span="10" class="login-captcha">
                <img src="../assets/scss/img/captcha.png" alt="">
            </el-col>
            </el-row>
        </el-form-item>
        <el-form-item size="mini">
            <div class="base-line-height clearfix">
            <el-checkbox v-model="dataForm.rememb" class="f-left">记住密码</el-checkbox>
            <a href="./forget@@v2.html" class="f-right">忘记密码？</a>
            </div>
        </el-form-item>
        <el-form-item>
            <el-button class="w-100" type="primary" @click="dataFormSubmitHandle()">登录</el-button>
        </el-form-item>
        </el-form>
        <div class="aui-shortcut">
        <h4 class="aui-shortcut__title"><span>使用社交账号直接登录</span></h4>
        <ul class="aui-shortcut__list">
            <li>
            <a href="#" style="color: #191717;">
                <svg class="icon-svg" aria-hidden="true"><use xlink:href="#icon-github-fill"></use></svg>
            </a>
            </li>
            <li>
            <a href="#" style="color: #4bb772;">
                <svg class="icon-svg" aria-hidden="true"><use xlink:href="#icon-wechat-fill"></use></svg>
            </a>
            </li>
            <li>
            <a href="#" style="color: #26a4de;">
                <svg class="icon-svg" aria-hidden="true"><use xlink:href="#icon-QQ-circle-fill"></use></svg>
            </a>
            </li>
            <li>
            <a href="#" style="color: #ec5c58;">
                <svg class="icon-svg" aria-hidden="true"><use xlink:href="#icon-weibo-circle-fill"></use></svg>
            </a>
            </li>
        </ul>
        </div>
        <p class="login-guide">还没有账号？<a href="./register@@v2.html">立即注册</a></p>
      </main>
      <!-- page-footer -->
      <footer class="aui-page-footer">
        <p>
            <a href="http://aui.demo.renren.io/" target="_blank">在线演示</a>
        </p>
        <p><a href="https://www.renren.io/" target="_blank">人人开源</a>2018 © renren.io</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataForm: {
        language: 'zh-CN',
        username: '',
        password: '',
        captcha: '',
        rememb: false
      },
      dataRule: {
        username: [
          { required: true, message: '必填项不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '必填项不能为空', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '必填项不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    dataFormSubmitHandle () {
      let _router = this.$router
      this.$refs['dataForm'].validate(function (valid) {
        if (valid) {
          _router.push('/admin')
          // this.$router.replace('/admin')   大神，这个地方为什么不能用this.$router
        }
      })
    }
  }
}
</script>

<style scoped>

</style>

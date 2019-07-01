<template>
<div>
  <div class="center" style="text-align: center;" >
    <img style="    width: 135px;margin: 100px auto 30px;" src="../assets/login/enter_logo.png" alt="">
    <div class="login" style="    padding-bottom: 322px;">
      <el-form :model="loginForm" status-icon ref="loginForm" style="width: 310px!important;margin: 0 auto;" class="demo-ruleForm" :rules="loginFormValid">
        <el-form-item prop="name">
          <el-input v-model="loginForm.name" placeholder="请输入用户名" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" @keyup.enter.native="handleLogin" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <div style="float: left;width: 250px">
          <el-form-item prop="captcha" style="width: 226px;">
            <el-input v-model="loginForm.captcha" placeholder="请输入验证码" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div style="float: right;height: 32px;width: 170px;padding-top: 5px">
          <img style="width: 100%;height: 100%" :src="'data:image/jpeg;base64,' + captchaRes.image" @click="captcha"/>
        </div> -->
        <el-button style="width: 310px;height: 35px;line-height: 13px;" type="primary" @click="handleLogin">登  录</el-button>
      </el-form>
    </div>
  </div>
</div>

</template>
<script>
import staffApi from "@/api/staffApi.js"
import store from "@/store"
import systemApi from "@/api/system/systemApi"

export default {
  data() {
    var captchaValid = (rule, value, callback) => {
      if (value.toLowerCase() !== this.captchaRes.string.toLowerCase()) {
        callback(new Error("验证码错误！"))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        password: '',
        name: '',
        captcha: ''
      },
      loginFormValid: {
        name: [
          {required: true, message: '用户名不能为空'},
          {pattern: /^[a-zA-Z0-9@.]{4,40}$/, message: '请输入正确的用户名'}
        ],
        password: [
          {required: true, message: '密码不能为空'},
          {pattern: /^[a-zA-Z0-9~!@#$%^&*()_<>,.?\\{}]{6,16}$/, message: '请输入正确的格式密码'}
        ],
        captcha: [
          {required: true, message: '验证码不能为空'},
          { validator: captchaValid, trigger: 'change' }
        ]
      },
      captchaRes: {
        image: '',
        string: ''
      }
    }
  },
  methods: {
    handleLogin(data) {
      this.$refs['loginForm'].validate((v, o) => {
        if (v) {
          var that = this
          staffApi.loginApi(this.loginForm.name, this.loginForm.password, this.loginForm.captcha).then(data => {
            if (data && data.success) {
              window.sessionStorage.clear()
              store.commit("setUser", {
                user: data.data
              })
              if (that.$route.params.redirect) {
                console.log("redirect")
                that.$router.replace({
                  name: that.$route.params.redirect.name,
                  params: that.$route.params.redirect.params,
                  query: that.$route.params.redirect.query
                })
              } else {
                that.$router.replace({
                  name: "homeList"
                })
              }
            } else {
              this.$notify({
                duration: 1500,
                title: "登录失败",
                offset: 100,
                type: "error",
                message: data.errorMsg
              })
            }
          })
          //  const loading = this.$loading({
          //    lock: true,
          //    text: '正在登陆',
          //    spinner: 'el-icon-loading',
          //    background: 'rgba(255, 255, 255, 0.7)'
          // })
        }
      })
    },
    captcha() {
      systemApi.getCaptcha().then((data) => {
        if (data.success) {
          console.log(data.data)
          this.captchaRes = data.data
        }
      })
    }
  },
  mounted() {
    this.captcha()
  }
}
</script>
<style scoped>
.center{
  background-image: url(../assets/login/232.jpg);
  background-repeat:no-repeat;
  background-size: 100% 100%;
}
</style>

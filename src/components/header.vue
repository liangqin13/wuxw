<template lang='html'>
<div class='header'>
  <div style="padding-left: 42%;">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-submenu index="1">
        <template slot="title">万博家博园（城西区）</template>
        <el-menu-item index="1-1">万博家博园（城西区）</el-menu-item>
      </el-submenu>
      <el-menu-item>欢迎访问HC小区管理系统，wuxw！</el-menu-item>
      <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message-solid"></i>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">小区楼</el-menu-item>
            <el-menu-item index="2-2">小区楼单元</el-menu-item>
            <el-menu-item index="2-3">房屋管理</el-menu-item>
            <el-menu-item index="2-4">房屋售卖</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3-1"><i class="el-icon-right"></i>退出</el-menu-item>
    </el-menu>
  </div>
</div>
</template>
<script>
import staffApi from "@/api/staffApi.js"
export default {
  data() {
    const confirmCheckPwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入新密码'))
      } else if (value !== this.formCustom.newPwd) {
        callback(new Error('两次输入的新密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      activeIndex: '1',
      userInfo: null,
      loading: false,
      isCollapse: true,
      updateDialogVisible: false,
      visible: false,
      showBadget: true,
      modifyPwdModal: false,
      formCustom: {
        oldPwd: '',
        newPwd: '',
        confirmPwd: ''
      },
      ruleValidate: {
        oldPwd: [
          { required: true, message: '请输入旧密码', trigger: 'blur' },
          {
            type: 'string',
            min: 6,
            message: '密码长度不能小于6位',
            trigger: 'blur'
          }
        ],
        newPwd: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          {
            type: 'string',
            min: 6,
            message: '密码长度不能小于6位',
            trigger: 'blur'
          }
        ],
        confirmPwd: [
          { required: true, validator: confirmCheckPwd, trigger: 'blur' },
          {
            type: 'string',
            min: 6,
            message: '密码长度不能小于6位',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted () {
    this.userInfo = this.$store.state.user
  },
  computed: {
    // ...mapGetters({
    //   user: 'getUser'
    // })
  },
  methods: {
    centerPassword (formCustom) {},
    updatePassword () {},
    onLogout() {
      this.loading = true
      staffApi.logoutApi().then((data) => {
        this.loading = false
        this.dialogOutLoginVisible = false
        window.localStorage.clear()
        window.sessionStorage.clear()
        this.$router.replace({
          name: 'login'
        })
      })
    },
    modifyPassword() {},
    goLogin() {},
    onUnreadMsgClicked() {},
    dropClick(type) {},
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    // 'i-button': iButton
    // 'el-button': Button
  }
}
</script>
<style lang='scss' scoped>
@import '../theme/basic.scss';
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1111;
  min-width: 100%;
  padding-left: 200px;
  height: 60px;
  background: #fff;
  // text-align: left;
  // display: flex;
  // flex-direction: row;
  // align-items: flex-start;
  // justify-content: center;
  border-bottom: 1px solid #e7eaec !important;
  .user-name {
    font-size: 16px;
    cursor: pointer;
  }
  .name {
    flex: 4;
    margin-left: 10px;
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
    line-height: 60px;
  }
  .logo {
    height: 32px;
    // float: left;
    margin: 15px 20px;
  }
  .function-container {
    // float: right;
    // margin-right: 20px;
    height: 100%;
    flex: 1;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: row;
    font-size: 18px;
    color: #FFF;
    .msg-container{
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      flex-direction: row;
      padding: 20px;
      position: relative;
      &:hover{
        text-decoration: underline;
      }
      .msg-icon{
        width: 22px;
      }
      .badget{
        position: absolute;
        width: 8px;
        height: 8px;
        top: 15px;
        right: 42%;
        border-radius: 50%;
        background-color: red;
      }
      .unread-count{
        font-size: 16px;
        padding: 0 0 0 5px;
      }
    }
    .user-avatar{
      width: 35px;
      height: 35px;
      border: 1px solid rgba(255, 255, 255, 0.8);
      border-radius: 50%;
    }
    .user-name{
      padding: 0 40px 0 10px;
    }
    .logout{
      color: #FFF;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>

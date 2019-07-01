// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import E from '@/utils'
// eslint-disable-next-line no-unused-vars
import $ from "jquery"
// import 'element-ui/lib/theme-chalk/index.css'
// import '../theme/index.css'
import ElementUI from 'element-ui'
import './theme/theme-variables.scss'
import './assets/icon/iconfont.css'
import VCharts from 'v-charts'

Vue.use(VCharts)

Vue.config.productionTip = false

Vue.use(ElementUI)
E.initEnv()

// const downloadUrl = url => {
//   let iframe = document.createElement('iframe')
//   iframe.style.display = 'none'
//   iframe.src = url
//   iframe.onload = function () {
//     document.body.removeChild(iframe)
//   }
//   document.body.appendChild(iframe)
// }

// 允许跨域保存Cookie，生产上要去掉
// if (process.env.DEPLOY_ENV === 'beta' || process.env.DEPLOY_ENV === 'dev') {
// axios.defaults.withCredentials = true
// }
axios.interceptors.request.use((config) => {
  console.log('API request[ok]:')
  try {
    config.headers['X-DEVICE-TOKEN'] = E.getValueByKeyL("DEVICE_TOKEN")
    if (store.state.user.token) {
      config.headers['Authorization'] = store.state.user.token
    }
  } catch (err) {}
  return config
}, (error) => {
  console.log('API request[error]:', error)
  // 请求异常处理
  return Promise.reject(error)
})
axios.interceptors.response.use((response) => {
  console.log('API response[ok]:', response)
  if (response.data.code === 4001 || (response.data.data && response.data.data.status && response.data.data.status === 401)) {
    ElementUI.Notification({
      title: '提示',
      offset: 100,
      type: 'error',
      message: response.data.msg
    })
    console.log('>> login')
    router.replace({
      name: 'login',
      params: {
        redirect: router.currentRoute
      }
    })
    return false
  }
  // 处理Excel下载
  if (response.headers && (response.headers['content-type'] === 'application/x-msdownload' ||
    response.headers['content-type'] === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
    response.headers['content-type'] === 'application/vnd.ms-excel')) {
    console.log('开始下载...')
    // downloadUrl(response.request.responseURL)
    // response.data = ''
    // response.headers['content-type'] = 'text/json'
    // return response
    var content = response.headers['content-disposition']
    var fileName = '导出报表数据.xlsx'
    if (content) {
      var start = content.indexOf('filename=')
      fileName = content.substring(start + 9)
    }
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.innerHTML = fileName
    link.download = fileName
    link.href = url
    // if (!fileName) {
    //   fileName = '下载数据.xlsx'
    // }
    // link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    return response
  }
  // 不显示错误提示的，把url加到这里
  var exceptRequestList = [
    'api/house/query',
    'api/address/root/childrenTree'
  ]
  var skip = false
  if (response.data.code !== 200) {
    exceptRequestList.forEach(element => {
      if (response.request.responseURL.indexOf(element) >= 0) {
        skip = true
        return false
      }
    })
  }
  console.log(skip)
  console.log(response.request.responseURL)
  // 是否跳转显示错误
  if (skip) {
    return false
  }
  // 6000以上需要业务处理
  if (response.data.code !== 200 && response.data.code < 6000 && response.data.msg) {
    ElementUI.Notification({
      title: '提示',
      offset: 100,
      type: 'error',
      message: response.data.msg
    })
    return false
  }
  return response.data
}, (error) => {
  console.log('API response[error]:', error.response)
  if (error.response && error.response.status && error.response.status === 401) {
    router.replace({
      name: 'login',
      params: {
        redirect: router.currentRoute
      }
    })
    return false
  }
  // 不显示的异常错误提示的，把url加到这里
  var exceptRequestList = [
    'api/gis'
  ]
  var skip = false
  exceptRequestList.forEach(element => {
    if (error.response.request.responseURL.indexOf(element) >= 0) {
      skip = true
      return false
    }
  })
  // 是否跳转显示错误
  if (skip) {
    return false
  }
  if (error.response.data.code === 4003 ||
    (error.response.data.data && error.response.data.data.status && error.response.data.data.status === 403)) {
    ElementUI.Notification({
      title: '请求失败',
      offset: 100,
      type: 'error',
      message: error.response.data.msg
    })
    return true
  }
  // Do something with response error
  return Promise.reject(error.response.data)
})

/* eslint-disable no-new */
/* eslint space-before-function-paren: ["off", "never"] */
new Vue({
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')

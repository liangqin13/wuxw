import commonApi from '@/api'
import utils from '@/utils'

// 登录
const loginApi = (loginName, password, captcha) => {
  const server = utils.getServerAddr()
  const api = `/login.json`
  const params = []
  if (loginName) {
    params.push(`loginName=${loginName}`)
  }
  if (password) {
    params.push(`password=${password}`)
  }
  if (captcha) {
    params.push(`captcha=${captcha}`)
  }
  return commonApi.getApi(server, api, params.join("&")).then((data) => {
    console.log('login: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

const logoutApi = () => {
  const server = utils.getServerAddr()
  const api = `/logOut.json`
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('logout: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}
export default {
  loginApi,
  logoutApi
}

import commonApi from '@/api'
import utils from '@/utils'

// 查询线下转账录入列表
const queryEnums = (className) => {
  const server = utils.getServerAddr()
  const api = `/system/queryEnums.json?className=${className}`
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('queryEnums: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 查询线下转账录入列表
const companyList = () => {
  const server = utils.getServerAddr()
  const api = `/company/queryAll.json`
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('companyList: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 查询省
const queryProvince = (code) => {
  const server = utils.getServerAddr()
  const api = `/system/provinceList.json?code=` + code
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 查询市
const queryCity = (provinceId) => {
  const server = utils.getServerAddr()
  const api = `/system/cityList.json?provinceId=` + provinceId
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 查询区
const queryDistrict = (cityId) => {
  const server = utils.getServerAddr()
  const api = `/system/districtList.json?cityId=` + cityId
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 获取验证码
const getCaptcha = () => {
  const server = utils.getServerAddr()
  const api = `/captcha.json`
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 发布系统公告
const sendMessage = (message) => {
  const server = utils.getServerAddr()
  const api = `/system/message/send.json`
  return commonApi.postJSONApi(server, api, JSON.stringify(message)).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 系统公告列表
const messageList = (params) => {
  const server = utils.getServerAddr()
  const api = `/system/message/list.json`
  return commonApi.postJSONApi(server, api, JSON.stringify(params)).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 删除系统公告
const removeMessage = (id) => {
  const server = utils.getServerAddr()
  const api = `/system/message/remove.json?id=${id}`
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

export default {
  queryEnums,
  companyList,
  queryProvince,
  queryCity,
  queryDistrict,
  getCaptcha,
  sendMessage,
  messageList,
  removeMessage
}

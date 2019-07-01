import commonApi from '@/api'
import utils from '@/utils'

// 注册申请列表
const registrationList = (params) => {
  const server = utils.getServerAddr()
  const api = `company/regist/query.json`
  return commonApi.postJSONApi(server, api, params).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 注册申请单条
const registrationSingle = (id) => {
  const server = utils.getServerAddr()
  const api = `company/regist/single.json?id=${id}`
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 注册申请审批
const registrationCheck = (id, result) => {
  const server = utils.getServerAddr()
  const api = `company/regist/check.json?id=${id}&result=${result}`
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 注册申请备注
const registrationRemark = (id, content) => {
  const server = utils.getServerAddr()
  const api = `company/regist/remark.json?id=${id}&content=${content}`
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

export default {
  registrationList,
  registrationSingle,
  registrationCheck,
  registrationRemark
}

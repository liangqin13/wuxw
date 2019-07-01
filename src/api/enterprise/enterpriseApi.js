import commonApi from '@/api'
import utils from '@/utils'

// 充值套餐列表
const enterpriseList = (params) => {
  const server = utils.getServerAddr()
  const api = `company/query.json`
  return commonApi.postJSONApi(server, api, JSON.stringify(params)).then((data) => {
    console.log('enterpriseList: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 新增企业
const addCompany = (params) => {
  const server = utils.getServerAddr()
  const api = `company/save.json`
  return commonApi.postJSONApi(server, api, JSON.stringify(params)).then((data) => {
    console.log('addCompany: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 编辑企业
const editCompany = (entityUpdate) => {
  const server = utils.getServerAddr()
  const api = `company/modify.json`
  return commonApi.postJSONApi(server, api, JSON.stringify(entityUpdate)).then((data) => {
    console.log('editCompany: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 查询企业管理员用户
const queryCompanyAdmin = (id) => {
  const server = utils.getServerAddr()
  const api = `company/queryCompanyAdmin.json?id=${id}`
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('queryCompanyAdmin: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 单条查询
const singleCompany = (id) => {
  const server = utils.getServerAddr()
  const api = `company/single.json?id=${id}`
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('singleCompany: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 启用企业
const enableCompany = (id) => {
  const server = utils.getServerAddr()
  const api = `company/enable.json?id=${id}`
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('enableCompany: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 禁用企业
const disableCompany = (id) => {
  const server = utils.getServerAddr()
  const api = `company/disable.json?id=${id}`
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('disableCompany: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}
export default {
  enterpriseList,
  addCompany,
  editCompany,
  enableCompany,
  disableCompany,
  singleCompany,
  queryCompanyAdmin
}

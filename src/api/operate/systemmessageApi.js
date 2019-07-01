import commonApi from '@/api'
import utils from '@/utils'

// 系统列表
const systemmessageList = (params) => {
  const server = utils.getServerAddr()
  const api = `system/message/list.json`
  return commonApi.postJSONApi(server, api, params).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 领区列表
const districtList = (params) => {
  const server = utils.getServerAddr()
  const api = `consular/country/list.json`
  return commonApi.postJSONApi(server, api, params).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 查询国家列表
const country = () => {
  const server = utils.getServerAddr()
  const api = `system/countryList.json`
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}
export default {
  systemmessageList,
  districtList,
  country
}

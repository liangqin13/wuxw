import commonApi from '@/api'
import utils from '@/utils'

// 国家管理列表
const countryList = (params) => {
  const server = utils.getServerAddr()
  const api = `system/allCountryList.json`
  return commonApi.postJSONApi(server, api, params).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 国家状态
const state = (id, passage) => {
  const server = utils.getServerAddr()
  const api = `system/passageState.json?id=${id}&passage=${passage}`
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}
export default {
  countryList,
  state
}

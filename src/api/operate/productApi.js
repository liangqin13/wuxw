import commonApi from '@/api'
import utils from '@/utils'

// 产品列表
const productList = (params) => {
  const server = utils.getServerAddr()
  const api = `product/productList.json`
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

// 添加国家
const addcountry = (coun) => {
  const server = utils.getServerAddr()
  const api = `consular/country/save.json`
  return commonApi.postJSONApi(server, api, JSON.stringify(coun)).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 删除国家领区
const delet = (id) => {
  const server = utils.getServerAddr()
  const api = `consular/del.json?id=${id}`
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('returnData: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}
export default {
  productList,
  districtList,
  country,
  addcountry,
  delet
}

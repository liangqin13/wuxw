import commonApi from '@/api'
import utils from '@/utils'

// 查询线下转账录入列表
const incomeList = (params) => {
  const server = utils.getServerAddr()
  const api = `/finance/queryAllTurnover.json`
  return commonApi.postJSONApi(server, api, JSON.stringify(params)).then((data) => {
    console.log('queryAllTurnover: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 查看详情
const Viewdetails = (id) => {
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
  incomeList,
  Viewdetails
}

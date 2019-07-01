import commonApi from '@/api'
import utils from '@/utils'

// 查询线下转账录入列表
const turnoverList = (params) => {
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

// 查询线下转账录入列表
const manualRecharge = (turnover) => {
  const server = utils.getServerAddr()
  const api = `/finance/manualRecharge.json`
  return commonApi.postJSONApi(server, api, JSON.stringify(turnover)).then((data) => {
    console.log('manualRecharge: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 充值及消费金额统计
const statistics = (params) => {
  const server = utils.getServerAddr()
  const api = `/finance/statistics.json`
  return commonApi.postJSONApi(server, api, JSON.stringify(params)).then((data) => {
    console.log('statistics: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

export default {
  turnoverList,
  manualRecharge,
  statistics
}

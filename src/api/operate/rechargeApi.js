import commonApi from '@/api'
import utils from '@/utils'

// 充值套餐列表
const rechargeList = (page, row, name) => {
  const server = utils.getServerAddr()
  const api = `finance/query/gifts.json`
  const params = []
  if (page) {
    params.push(`page=${page}`)
  }
  if (row) {
    params.push(`row=${row}`)
  }
  if (name) {
    params.push(`name=${name}`)
  }
  return commonApi.getApi(server, api, params.join('&')).then((data) => {
    console.log('rechargeList: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 状态
const stateList = (id) => {
  const server = utils.getServerAddr()
  const api = `finance/down/gifts.json?id=${id}`
  return commonApi.getApi(server, api, null).then((data) => {
    console.log('rechargeList: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

// 新建套餐
const newpackage = (recharge) => {
  const server = utils.getServerAddr()
  const api = `finance/add/gift.json`
  return commonApi.postJSONApi(server, api, JSON.stringify(recharge)).then((data) => {
    console.log('newpackage: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

export default {
  rechargeList,
  stateList,
  newpackage
}

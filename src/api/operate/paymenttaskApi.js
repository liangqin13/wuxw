import commonApi from '@/api'
import utils from '@/utils'

// 充值套餐列表
const paymenttaskList = (page, row) => {
  const server = utils.getServerAddr()
  const api = `finance/paymentTask/query.json`
  const params = []
  if (page) {
    params.push(`page=${page}`)
  }
  if (row) {
    params.push(`row=${row}`)
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

export default {
  paymenttaskList,
  stateList
}

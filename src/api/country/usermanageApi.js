import commonApi from '@/api'
import utils from '@/utils'

// 充值套餐列表
const usermanageList = (page, row, name) => {
  const server = utils.getServerAddr()
  const api = `staff/query.json`
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
    console.log('enterpriselistList: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

export default {
  usermanageList
}

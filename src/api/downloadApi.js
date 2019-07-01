import commonApi from '@/api'
import utils from '@/utils'
import ElementUI from 'element-ui'

// 下载Excel
const downloadExcel = (api, params) => {
  const server = utils.getServerAddr()
  return commonApi.downloadApi(server, api, params).then((data) => {
    console.log('downloadExcel: ', data)
    if (data.code === 200 || data.data === "") {
      ElementUI.Notification({
        title: '文件开始下载',
        offset: 100,
        message: '请注意查收下载文件!',
        type: 'success'
      })
    }
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}
export default {
  downloadExcel
}

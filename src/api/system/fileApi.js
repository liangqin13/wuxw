import commonApi from '@/api'
import utils from '@/utils'

// 图片上传
const fileUpload = (params) => {
  const server = utils.getServerAddr()
  const api = `/file//picture/upload.json`
  return commonApi.uploadApi(server, api, params).then((data) => {
    console.log('fileUpload: ', data)
    return data
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

export default {
  fileUpload
}

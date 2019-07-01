import axios from 'axios'
import utils from '@/utils'

/**
 * _download请求
 * @param  {String} options.server 服务器域名
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const _download = (server, api, query) => {
  if (utils.getRunEnv() === 'dev') {
    server = '/api/'
  } else {
    server = ''
  }
  let _url
  if (query) {
    _url = `${server}${api}?${query}`
  } else {
    _url = `${server}${api}`
  }
  console.log('>> '.concat(_url))
  return axios({
    method: 'get',
    url: _url,
    responseType: 'blob'
  }).then((res) => {
    console.log('axios.download[then]: ', res)
    return res
  }, (errorRes) => {
    console.log('axios.download[error]: ', errorRes)
    return Promise.reject(errorRes)
  }).catch((error) => {
    console.log('axios.download[catch]: ', error)
    return Promise.reject(error)
  })
}

/**
 * get请求
 * @param  {String} options.server 服务器域名
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const _get = (server, api, query) => {
  let _url
  if (utils.getRunEnv() === 'dev') {
    server = '/api/'
  } else {
    server = ''
  }
  if (query) {
    _url = `${server}${api}?${query}`
  } else {
    _url = `${server}${api}`
  }
  console.log('>> '.concat(_url))
  return axios.get(_url).then((res) => {
    console.log('axios.get[then]: ', res)
    return res
  }, (errorRes) => {
    console.log('axios.get[error]: ', errorRes)
    return Promise.reject(errorRes)
  }).catch((error) => {
    console.log('axios.get[catch]: ', error)
    return Promise.reject(error)
  })
}

/**
 * post请求
 * @param  {String} options.server 服务器域名
 * @param  {String} url    api地址
 * @param  {Object} params 包含post内容的object
 * @return {Promise}        Promise
 */
const _post = (server, api, params) => {
  if (utils.getRunEnv() === 'dev') {
    server = '/api/'
  } else {
    server = ''
  }
  const _url = `${server}${api}`
  console.log(_url)
  console.log('params: ', params)
  return axios.post(_url, params).then((res) => {
    console.log('axios.post[then]: ', res)
    return res
  }, (errorRes) => {
    console.log('axios.post[error]: ', errorRes)
    return Promise.reject(errorRes)
  }).catch((error) => {
    console.log('axios.post[catch]: ', error)
    return Promise.reject(error)
  })
}

/**
 * post请求
 * @param  {String} options.server 服务器域名
 * @param  {String} url    api地址
 * @param  {Object} params 包含post内容的object
 * @return {Promise}        Promise
 */
const _postJson = (server, api, params) => {
  if (utils.getRunEnv() === 'dev') {
    server = '/api/'
  } else {
    server = ''
  }
  const _url = `${server}${api}`
  console.log(_url)
  console.log('params: ', params)
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return axios.post(_url, params, config).then((res) => {
    console.log('axios.post[then]: ', res)
    return res
  }, (errorRes) => {
    console.log('axios.post[error]: ', errorRes)
    return Promise.reject(errorRes)
  }).catch((error) => {
    console.log('axios.post[catch]: ', error)
    return Promise.reject(error)
  })
}

/**
 * post请求上传文件
 * @param  {String} options.server 服务器域名
 * @param  {String} url    api地址
 * @param  {Object} params 包含post内容的object
 * @return {Promise}        Promise
 */
const _upload = (server, api, params) => {
  if (utils.getRunEnv() === 'dev') {
    server = '/api/'
  } else {
    server = ''
  }
  const _url = `${server}${api}`
  console.log(_url)
  console.log('params: ', params)
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return axios.post(_url, params, config).then((res) => {
    console.log('axios.post[then]: ', res)
    return res
  }, (errorRes) => {
    console.log('axios.post[error]: ', errorRes)
    return Promise.reject(errorRes)
  }).catch((error) => {
    console.log('axios.post[catch]: ', error)
    return Promise.reject(error)
  })
}

/**
 * put请求
 * @param  {String} options.server 服务器域名
 * @param  {String} url    api地址
 * @param  {Object} params 包含post内容的object
 * @return {Promise}        Promise
 */
const _put = (server, api, params) => {
  if (utils.getRunEnv() === 'dev') {
    server = '/api/'
  } else {
    server = ''
  }
  const _url = `${server}${api}`
  console.log(_url)
  return axios.put(_url, params).then((res) => {
    console.log('axios.put[then]: ', res)
    return res
  }, (errorRes) => {
    console.log('axios.put[error]: ', errorRes)
    return Promise.reject(errorRes)
  }).catch((error) => {
    console.log('axios.put[catch]: ', error)
    return Promise.reject(error)
  })
}

/**
 * delete请求
 * @param  {String} options.server 服务器域名
 * @param  {String} url    api地址
 * @param  {Object} params 包含post内容的object
 * @return {Promise}        Promise
 */
const _delete = (server, api, query) => {
  console.log('run env')
  console.log(utils.getRunEnv())
  if (utils.getRunEnv() === 'dev') {
    server = '/api/'
  } else {
    server = ''
  }
  const _url = `${server}${api}`
  console.log(_url)
  return axios.delete(_url, {
    data: query
  }).then((res) => {
    console.log('axios.delete[then]: ', res)
    return res
  }, (errorRes) => {
    console.log('axios.delete[error]: ', errorRes)
    return Promise.reject(errorRes)
  }).catch((error) => {
    console.log('axios.delete[catch]: ', error)
    return Promise.reject(error)
  })
}
export default {
  downloadApi: _download,
  postApi: _post,
  postJSONApi: _postJson,
  putApi: _put,
  deleteApi: _delete,
  getApi: _get,
  uploadApi: _upload
}

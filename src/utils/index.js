// import areas from './telPhoneVerify'
// 初始化执行环境
// 用于将console.log在生产环境下隐藏掉

const initEnv = function () {
  console.log(
    '-------------------------------------\n' +
    ' Project environment init: ' + process.env.DEPLOY_ENV + '\n' +
    ' MichaelTang <michaeltang@openmore.org>\n' +
    '-------------------------------------\n'
  )

  if (process.env.DEPLOY_ENV === 'prod') {
    // console.log = function () {}
  }
  // var docEl = document.documentElement
  // var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  // var recalc = function () {
  //   var clientWidth = docEl.clientWidth
  //   if (!clientWidth) {
  //     return
  //   }
  //   docEl.style.fontSize = 100 * (clientWidth / 640) + 'px'
  //   console.log(clientWidth)
  //   console.log('fontSize >>', docEl.style.fontSize)
  // }
  // if (!document.addEventListener) {
  //   return
  // }
  // window.addEventListener(resizeEvt, recalc, false)
  // document.addEventListener('DOMContentLoaded', recalc, false)
}

const getServerAddr = function () {
  // 远程或本地部署的开发环境
  if (process.env.DEPLOY_ENV === 'dev') {
    // return 'http://localhost:8080/'
    return 'http://192.168.1.181:8089'
  // 预发布环境
  } else if (process.env.DEPLOY_ENV === 'beta' || process.env.DEPLOY_ENV === 'pre') {
  // 生产环境
  } else if (process.env.DEPLOY_ENV === 'prod') {
  }
}

const getRunEnv = function () {
  return process.env.DEPLOY_ENV
}

const getValueByKey = function (key) {
  const value = window.sessionStorage.getItem(key)
  return value
}

const saveValue = function (key, value) {
  window.sessionStorage.setItem(key, value)
}
const getValueByKeyL = function (key) {
  const value = window.localStorage.getItem(key)
  return value
}

const saveValueL = function (key, value) {
  window.localStorage.setItem(key, value)
}

const getUUID = function (len, rad) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const uuid = []
  let i
  const radix = rad || chars.length
  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
  } else {
    // rfc4122, version 4 form
    let r
    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'
    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16
        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  var uuidStr = uuid.join('')
  uuidStr = uuidStr.replace(/-/g, '')
  return uuidStr
}

const ASCIISortToString = (obj) => {
  let tmp = ''
  let i = 0
  const keys = Object.keys(obj).sort()
  for (; i < keys.length - 1; i++) {
    tmp += keys[i] + '=' + obj[keys[i]] + '&'
  }
  tmp += keys[i] + '=' + obj[keys[i]]
  return tmp
}

const validate = {
  // 检查输入的身份证号是否正确
  checkCard(str) {
    // 15位数身份证正则表达式
    var arg1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/
    // 18位数身份证正则表达式
    var arg2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/
    if (str.match(arg1) == null && str.match(arg2) == null) {
      return false
    } else {
      return true
    }
  },
  phone (phone) {
    let regx = /^[1][3,4,5,7,8][0-9]{9}$/
    if (!regx.test(phone)) {
      return false
    }
    return true
  },
  emailbox (emailbox) {
    const regx = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
    if (!regx.test(emailbox)) {
      return false
    }
    return true
  },
  cardNumber (number) {
    const regx = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
    if (!regx.test(number)) {
      return false
    }
    return true
  },
  userPassword (userPassword) {
    const regex = /[a-zA-Z\d+]{6,16}/
    if (!regex.test(userPassword)) {
      return false
    }
    return true
  }
}
// 根据身份证号获取出生日期
const getBirthdayFromIdCard = (idCard) => {
  let birthday = ""
  if (idCard !== null && idCard !== "") {
    if (idCard.length === 15) {
      birthday = "19" + idCard.substr(6, 6)
    } else if (idCard.length === 18) {
      birthday = idCard.substr(6, 8)
    }
    birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-")
  }
  return birthday
  // this.birthday = birthday
}
// 根据身份证号获取出生日期
const getNation = (arr) => {
  // console.log('arr==>', arr)
  let nation = ["汉族", "蒙古族", "回族", "藏族", "维吾尔族", "苗族", "彝族", "壮族", "布依族", "朝鲜族", "满族", "侗族", "瑶族", "白族", "土家族",
    "哈尼族", "哈萨克族", "傣族", "黎族", "傈僳族", "佤族", "畲族", "高山族", "拉祜族", "水族", "东乡族", "纳西族", "景颇族", "柯尔克孜族",
    "土族", "达斡尔族", "仫佬族", "羌族", "布朗族", "撒拉族", "毛南族", "仡佬族", "锡伯族", "阿昌族", "普米族", "塔吉克族", "怒族", "乌孜别克族",
    "俄罗斯族", "鄂温克族", "德昂族", "保安族", "裕固族", "京族", "塔塔尔族", "独龙族", "鄂伦春族", "赫哲族", "门巴族", "珞巴族", "基诺族"]
  if (arr.length === 0) {
    arr = nation
  }
  return arr
}
const Base64ToImageFile = (base64) => {
  const bytes = window.atob(base64.split(',')[1])
  const ab = new ArrayBuffer(bytes.length)
  let ia = new Uint8Array(ab)
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i)
  }
  const blob = new window.Blob([ab], {type: 'image/jpeg'})
  blob.name = 'base64.jpg'
  blob.lastModifiedDate = new Date()
  return blob
}
// 获取当前时间 yyyy-mm-dd hh:mm:ss
const getNowFormatDate = () => {
  let date = new Date()
  let seperator1 = "-"
  let seperator2 = ":"
  let month = date.getMonth() + 1
  let strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = "0" + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds()
  return currentdate
}
// 获取当前时间 yyyy-MM-dd
const getNowFormatDay1 = () => {
  let date = new Date()
  let seperator1 = "-"
  // let seperator2 = ":"
  let month = date.getMonth() + 1
  let strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = "0" + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
  return currentdate
}
// 获取当前时间 yyyy/MM/dd
const getNowFormatDay = () => {
  let date = new Date()
  let seperator1 = "/"
  // let seperator2 = ":"
  let month = date.getMonth() + 1
  let strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = "0" + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
  return currentdate
}
// 获取当前时间 yyyy-MM
const getNowFormatMonth = () => {
  let date = new Date()
  let seperator1 = "-"
  // let seperator2 = ":"
  let month = date.getMonth() + 1
  // let strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = "0" + month
  }
  // if (strDate >= 0 && strDate <= 9) {
  //   strDate = "0" + strDate
  // }
  var currentdate = date.getFullYear() + seperator1 + month
  return currentdate
}
// 返回yyyy/mm/dd
const formatDate2 = function (Date) {
  const y = Date.getFullYear()
  let m = Date.getMonth() + 1
  m = m < 10 ? ('0'.concat(m)) : m
  let d = Date.getDate()
  d = d < 10 ? ('0'.concat(d)) : d
  // console.log((typeof y.toString()))
  return (y.toString()).concat('/').concat(m.toString()).concat('/').concat(d.toString())
}
// 返回yyyy/mm/dd hh:MM:ss
const formatDate = function (Date) {
  const y = Date.getFullYear()
  let m = Date.getMonth() + 1
  m = m < 10 ? ('0'.concat(m)) : m
  let d = Date.getDate()
  d = d < 10 ? ('0'.concat(d)) : d
  let h = Date.getHours()
  h = h < 10 ? ('0'.concat(h)) : h
  let min = Date.getMinutes()
  min = min < 10 ? ('0'.concat(min)) : min
  let sec = Date.getSeconds()
  sec = sec < 10 ? ('0'.concat(sec)) : sec
  // console.log((typeof y.toString()))
  return (y.toString()).concat('/').concat(m.toString()).concat('/').concat(d.toString())
    .concat(' ').concat(h.toString()).concat(':')
    .concat(min.toString()).concat(':').concat(sec.toString())
}
// 返回mm/dd hh:MM
const formatDate3 = function (Date) {
  let m = Date.getMonth() + 1
  m = m < 10 ? ('0'.concat(m)) : m
  let d = Date.getDate()
  d = d < 10 ? ('0'.concat(d)) : d
  let h = Date.getHours()
  h = h < 10 ? ('0'.concat(h)) : h
  let min = Date.getMinutes()
  min = min < 10 ? ('0'.concat(min)) : min
  // console.log((typeof y.toString()))
  return m.toString().concat('-').concat(d.toString())
    .concat(' ').concat(h.toString()).concat(':')
    .concat(min.toString())
}
// 格式化指定的日期 yyyy-MM-dd hh:mm:ss
const formatDate4 = function (Date) {
  const y = Date.getFullYear()
  let m = Date.getMonth() + 1
  m = m < 10 ? ('0'.concat(m)) : m
  let d = Date.getDate()
  d = d < 10 ? ('0'.concat(d)) : d
  let h = Date.getHours()
  h = h < 10 ? ('0'.concat(h)) : h
  let min = Date.getMinutes()
  min = min < 10 ? ('0'.concat(min)) : min
  let sec = Date.getSeconds()
  sec = sec < 10 ? ('0'.concat(sec)) : sec
  // console.log((typeof y.toString()))
  return (y.toString()).concat('-').concat(m.toString()).concat('-').concat(d.toString())
    .concat(' ').concat(h.toString()).concat(':')
    .concat(min.toString()).concat(':').concat(sec.toString())
}
// 将yyyy-MM-dd hh:mm:ss转化为日期对象，兼容ios
const strToDate = (dateString) => {
  if (dateString) {
    var formatDateString = dateString.replace(/-/g, '/')
    return new Date(formatDateString)
  }
  return null
}
// 判断参数是否是其中之一
const oneOf = (value, validList) => {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}
// 返回地图样式
const mapStyle = function() {
  return [
    {
      "featureType": "all",
      "elementType": "labels",
      "stylers": {
        "visibility": "off"
      }
    }
  ]
}

const typeOf = function (obj) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}

const deepCopy = function (data) {
  const t = typeOf(data)
  let o

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}

const detectBrower = function () {
  const u = navigator.userAgent
  const isWechat = /micromessenger/i.test(u)
  const isQQ = /\s+QQ/i.test(u)
  const isWeibo = /\s+Weibo/i.test(u)
  const UA = require('ua-device')
  const output = new UA(navigator.userAgent)
  const mobile = (output.device.type === 'mobile')
  const android = (output.os.name === 'Android')
  const ios = (output.os.name === 'iOS')
  if (mobile) {
    if (isWechat) {
      return 'wechat'
    } else if (isQQ) {
      return 'qq'
    } else if (isWeibo) {
      return 'weibo'
    } else if (android) {
      return 'android'
    } else if (ios) {
      return 'ios'
    }
    return 'mobile'
  }
  return 'unknown'
}

function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return decodeURIComponent(r[2])
  }
  return null
}

const dateAddYear = (date, num) => {
  date.setFullYear(date.getYear() + num)
  return date
}
const dateAddMonth = (date, num) => {
  date.setMonth(date.getMonth() + num)
  return date
}
const dateAddDay = (date, num) => {
  date.setDate(date.getDate() + num)
  return date
}
export default {
  initEnv,
  getUUID,
  getValueByKey,
  getValueByKeyL,
  saveValue,
  getNowFormatDay1,
  getNowFormatMonth,
  formatDate4,
  getNowFormatDay,
  getNowFormatDate,
  strToDate,
  saveValueL,
  getRunEnv,
  getServerAddr,
  mapStyle,
  validate,
  Base64ToImageFile,
  ASCIISortToString,
  formatDate,
  formatDate2,
  formatDate3,
  oneOf,
  deepCopy,
  detectBrower,
  getQueryString,
  getBirthdayFromIdCard,
  getNation,
  dateAddYear,
  dateAddMonth,
  dateAddDay
}

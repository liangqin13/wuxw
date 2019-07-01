function copy(souce, target) {
  if (souce === null || souce === undefined) {
    return target
  }
  Object.keys(souce).forEach((k) => {
    if (souce[k] !== null && souce[k] !== undefined) {
      if (souce[k] instanceof Object) {
        if (target[k] === null || target[k] === undefined) {
          target[k] = copy(souce[k], target[k] = {})
        } else {
          target[k] = copy(souce[k], target[k])
        }
      } else if (souce[k] instanceof Array) {
        souce[k].forEach((item) => {
          target[k].push(copy(item, {}))
        })
      } else {
        target[k] = souce[k]
      }
    }
  })
  return target
}
function isNotBlank(source) {
  if (source !== null && source !== "null" && source !== undefined && source !== "undefined" && source !== "") {
    return true
  }
  return false
}
function checkValue(target, source) {
  if (target === null || target === undefined) {
    return true
  }
  let checked = false
  let keys = Object.keys(target)
  for (var i = 0; i < keys.length; i++) {
    if (target[keys[i]] !== null && target[keys[i]] !== undefined) {
      if (source[keys[i]] instanceof Object) {
        checked = checkValue(target[keys[i]], source[keys[i]])
      } else if (target[keys[i]] instanceof Array) {
        if (source[keys[i]] instanceof Array) {
          if (target[keys[i]].length !== source[keys[i]].length) {
            checked = true
            return checked
          }
          for (var index = 0; index < target[keys[i]].length; index++) {
            checked = checkValue(target[keys[i]][index], source[keys[i]][index])
            if (checked) {
              return checked
            }
          }
        }
      } else {
        if (target[keys[i]] !== source[keys[i]]) {
          console.log(keys[i])
          console.log(target[keys[i]])
          console.log(source[keys[i]])
          checked = true
        }
      }
    }
    if (checked) {
      return checked
    }
  }
  return checked
}

function matchElemById(id, data) {
  for (let i = 0; i < data.length; i++) {
    if (id === data[i].id) {
      return copy(data[i], {})
    }
  }
}

function matchElemByCode(code, data) {
  for (let i = 0; i < data.length; i++) {
    if (code === data[i].code) {
      return copy(data[i], {})
    }
  }
}

function matchElemByName(name, data) {
  for (let i = 0; i < data.length; i++) {
    if (name === data[i].name) {
      return copy(data[i], {})
    }
  }
}

function filterNull(source) {
  let data = {}
  if (source === null || source === undefined) {
    return null
  }
  Object.keys(source).forEach((k) => {
    if (source[k] !== null && source[k] !== '' && source[k] !== undefined) {
      data[k] = source[k]
    }
  })
  return data
}

const randomPhoneNumber = () => {
  var startNum = "158"
  for (let i = 0; i < 8; i++) {
    startNum = startNum + Math.floor(Math.random() * 10)
  }
  return startNum
}

const getObjByPath = (obj, path, strict) => {
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  let keyArr = path.split('.')
  let i = 0
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break
    let key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      if (strict) {
        throw new Error('please transfer a valid path to obj item!')
      }
      break
    }
  }
  return {
    parent: tempObj,
    key: keyArr[i],
    value: tempObj ? tempObj[keyArr[i]] : null
  }
}

export default {
  copy,
  matchElemById,
  matchElemByCode,
  matchElemByName,
  filterNull,
  randomPhoneNumber,
  checkValue,
  getObjByPath,
  isNotBlank
}

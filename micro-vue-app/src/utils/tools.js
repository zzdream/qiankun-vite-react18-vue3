import dayjs from 'dayjs'
import { getType } from './validate'
/**
 * 获取 url 中的参数
 * @param { String } name url参数name
 * @param { String } href 链接
 **/
export function getQueryParmas(name = '', href = '') {
  const url = href || window.location.search
  if (name) {
    const reg = new RegExp('(^|\\?|&)' + name + '=([^&]*)(\\s|&|$)', 'i')
    if (reg.test(url)) return RegExp.$2.replace(/\+/g, ' ')
  } else {
    const _params = url.substring(url.indexOf('?') + 1)
    const _arrs = _params.split('&')
    const _result = {}
    for (let i = 0; i < _arrs.length; i++) {
      const pos = _arrs[i].indexOf('=')
      if (pos === -1) {
        continue
      }
      const name = _arrs[i].substring(0, pos)
      const value = decodeURIComponent(_arrs[i].substring(pos + 1))
      _result[name] = value
    }
    return _result
  }
}

/**
 * 判断数据是否为空
 * @param { any } val 需要判断的数据
 * @returns { Boolean } 是否为空
 */
export function isEmpty(val) {
  const valType = getType(val)
  if (['null', 'undefined'].includes(valType)) {
    return true
  }
  if (['number', 'boolean'].includes(valType)) {
    return false
  }
  if (valType === 'string') {
    return val.trim() === ''
  }
  if (valType === 'array') {
    return !val.join('').length
  }
  if (valType === 'object') {
    return !Object.keys(val).length
  }
  if (['map', 'set'].includes(valType)) {
    return !val.size
  }
  return false
}

// 是否为日期类属性
export function isDateProp(prop) {
  if (!prop) return false
  const propLowercase = prop.toLocaleLowerCase()
  return propLowercase.indexOf('date') > -1 || propLowercase.indexOf('time') > -1
}

// 防抖(立即执行)
export function debounce(fn, wait = 500) {
  let timerId = null
  let flag = true
  return function () {
    const args = arguments
    clearTimeout(timerId)
    if (flag) {
      fn.apply(this, args)
      flag = false
    }
    timerId = setTimeout(() => {
      flag = true
    }, wait)
  }
}

export function deepClone(source) {
  if (typeof source !== 'object') return source

  const result = Array.isArray(source) ? [] : []
  for (let prop in source) {
    result[prop] = deepClone(source[prop])
  }
  return result
}

export function formatDate(date, formatter) {
  if (!date) return ''
  return dayjs(date).format(formatter || 'YYYY-MM-DD HH:mm:ss')
}

// 判断字符串中中文个数
export function getWordLength(str) {
  if (!str) return 0
  let total = 0
  if (str.length > 0) {
    for (let i = 0; i < str.length; i++) {
      let c = str.charAt(i)
      if (c.match(/[\u4E00-\u9FFF]/)) {
        total++
      }
    }
  }

  return total * 2 + (str.length - total)
}

// 判断字符串中中文个数
export function getCnWordTotal(str) {
  let total = 0
  if (str.length > 0) {
    for (let i = 0; i < str.length; i++) {
      let c = str.charAt(i)
      if (c.match(/[\u4E00-\u9FFF]/)) {
        total++
      }
    }
  }
  return total
}

// 自定义节流操作
export const preventReClick = {
  mounted(el, binding) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 2000)
      }
    })
  }
}

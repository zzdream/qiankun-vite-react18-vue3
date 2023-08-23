/**
 *   create by zhanghang
 */
import CryptoJS from 'crypto-js'
import { secretIv, secretKey } from '@/utils/global-const'
declare function escape(s: string): string
declare function unescape(s: string): string
declare const window: any

const CommonFunc = {
  storage: {
    set: (key: string, value: any, name = 'localStorage') => {
      window[name].setItem(key, JSON.stringify(value))
    },
    get: (key: string, name = 'localStorage') => {
      return JSON.parse(window[name].getItem(key))
    },
    remove: (key: string, name = 'localStorage') => {
      window[name].removeItem(key)
    }
    // clear: (key: string, name = "localStorage") => {
    //   window[name].setItem(key)
    // }
  },
  // tslint:disable-next-line:no-magic-numbers
  setCookie(key: string, value: any, expireTime = 24 * 60 * 60 * 1000): void {
    const expire = new Date()
    expire.setTime(expire.getTime() + expireTime)
    document.cookie = `${key}=${escape(value)};expires=${expire.toUTCString()};path=/;`
  },

  getCookie(key: string): string | undefined {
    const reg = new RegExp(`(^|)*${key}=([^;]*)(;|$)`)
    const result = document.cookie.match(reg)
    return result ? unescape(result[2]) : undefined
  },

  removeCookie(key: string): void {
    const expire = new Date()
    // tslint:disable-next-line:no-magic-numbers
    expire.setTime(expire.getTime() - 24 * 60 * 60 * 1000)
    const result = this.getCookie(key)
    if (result) {
      document.cookie = `${key}=${escape(result)};expires=${expire.toUTCString()};path=/`
    }
  },
  // 不传name返回所有值(object)，否则返回对应值
  getUrlParams(paramName = '', paramUrl = '') {
    const url: any = paramUrl ? '?' + paramUrl : window.location.search
    const searchStr = url.indexOf(paramName) > -1 ? url.substr(paramName.length + 1) : ''
    const params = searchStr
      .substr(0)
      .split('&')
      .reduce((obj: any, item: any) => {
        const param = item.split('=')
        obj[param[0]] = param[1]
        return obj
      }, {})
    // 返回结果
    return params
  },
  transcript(s: string) {
    const pattern = new RegExp("[%--`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]") //格式 RegExp("[在中间定义特殊过滤字符]")
    let rs = ''
    for (let i = 0; i < s.length; i++) {
      rs = rs + s.substr(i, 1).replace(pattern, '')
    }
    return rs
  },
  isPoneAvailable(poneInput: any) {
    const re = /^1[3,4,5,6,7,8,9][0-9]{9}$/
    const result = re.test(poneInput)
    if (!result) {
      return false //若手机号码格式不正确则返回false
    }
    return true
  },
  mobileType(mobileModel: any) {
    if (mobileModel.indexOf('iPhone') >= 0) {
      sessionStorage.setItem('mobileType', 'ios')
    } else {
      sessionStorage.setItem('mobileType', 'android')
    }
  },
  mobileText(mobile: any) {
    const tel = '' + mobile
    const reg = /(\d{3})\d{4}(\d{4})/
    const newTel = tel.replace(reg, '$1****$2')
    return newTel
  },
  // 防抖(立即执行)
  debounce(fn: any, wait = 500) {
    let timerId: any = null
    let flag = true
    return () => {
      // eslint-disable-next-line prefer-rest-params
      clearTimeout(timerId)
      if (flag) {
        fn.apply(this)
        flag = false
      }
      timerId = setTimeout(() => {
        flag = true
      }, wait)
    }
  },
  timestampToTime(timestamp: any, type = true) {
    const date = new Date(type ? timestamp : timestamp * 1000) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    const Y = date.getFullYear() + '-'
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
    const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
    const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return Y + M + D + h + m + s
  },
  isMobile() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    return isMobile
  },
  isWeixinBrowser() {
    const ua = navigator.userAgent.toLowerCase()
    const isWeixin = ua.indexOf('micromessenger') != -1
    if (isWeixin) {
      return true
    } else {
      return false
    }
  },
  isAnDroid() {
    return navigator.userAgent.match(/Android/i) || navigator.platform.match(/Android/i)
  },
  isiPhone() {
    return (
      navigator.userAgent.match(/iPhone/i) ||
      navigator.platform.match(/iPhone/i) ||
      navigator.userAgent.match(/Android/i) ||
      navigator.platform.match(/Android/i)
    )
  },
  isiPad() {
    return navigator.userAgent.match(/iPad/i) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  },
  isPC() {
    // 判断是否为电脑端浏览器
    const isDesktopBrowser = /Windows|Macintosh|Linux/.test(navigator.userAgent)
    if (isDesktopBrowser) {
      console.log('页面在电脑端的浏览器中打开')
    } else {
      console.log('页面不在电脑端的浏览器中打开')
    } // 判断是否为Safari浏览器
  },
  isSafariBrowser() {
    // userAgent字符串包含了浏览器信息
    const userAgent = navigator.userAgent
    // Safari浏览器的userAgent字符串中包含"Safari"，且不包含"Chrome"，"Firefox"等关键词
    return /Safari/.test(userAgent) && !/Chrome|Firefox|Edge|OPR|Sleipnir|CriOS|FxiOS/.test(userAgent)
  },
  jumpUrl(url: string) {
    const u = '?u=' + CommonFunc.encrypt(CommonFunc.storage.get('unionid'))
    if (url) {
      window.open(url + u)
    }
  },
  // 采取AES加密
  encrypt(word: string) {
    // 密钥
    const key = CryptoJS.enc.Utf8.parse(secretKey)
    // 密钥偏移量
    const iv = CryptoJS.enc.Utf8.parse(secretIv)
    const srcs = CryptoJS.enc.Utf8.parse(word)
    // 加密模式为CBC，补码方式为PKCS5Padding（也就是PKCS7）;
    const encrypted = CryptoJS.AES.encrypt(srcs, key, { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
    return encrypted.toString()
  },
  // 解密方法(base64Text:加过密的Base64字符串)
  decrypt(base64EncStr: string) {
    const iv = CryptoJS.enc.Utf8.parse(secretIv) // 加密字符串偏移量
    const key = CryptoJS.enc.Utf8.parse(secretKey) // 加密密钥
    // 开始解密(解密和加密用的模式和补码相同)
    const decrypt = CryptoJS.AES.decrypt(base64EncStr, key, { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
    // 得到解密字符串
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr
  }

  // // 使用示例
  // if (isSafariBrowser()) {
  //   console.log("这是Safari浏览器");
  // } else {
  //   console.log("这不是Safari浏览器");
  // }

  // return isDesktopBrowser
}

export default CommonFunc

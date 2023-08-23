/**
 * 网络请求配置
 */
import axios from 'axios'
// import qs from 'qs'
axios.defaults.timeout = 100000
axios.defaults.baseURL = '/'
// declare const window: any

/**
 * http request 拦截器
 */
axios.interceptors.request.use(
  (config: any) => {
    config.headers = {
      'Content-Type': 'application/json'
      // token: 'c91b9690efab89da5e89f041ff18b76c'
      // 'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
  response => {
    if (response.data.errCode === 2) {
      console.log('过期')
    }
    return response
  },
  error => {
    console.log('请求出错：', error)
  }
)

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function get(url: string, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        // landing(url, params, response.data)
        resolve(response.data)
      })
      .catch(error => {
        msag(error)
        reject(error)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url: string, data: any) {
  // let uri = url
  // let flag = false
  // let u = ''
  // if (url.startsWith('http://') || url.startsWith('https://')) {
  //   flag = true
  //   const path = url.split('vip/')
  //   uri = path[1]
  //   u = path[0] + 'vip/'
  // }
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        resolve(response?.data || '手动取消请求')
      },
      err => {
        msag(err)
        reject(err)
      }
    )
  })
}

// /**
//  * 封装patch请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */
// export function patch(url: string, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.patch(url, data).then(
//       response => {
//         resolve(response.data)
//       },
//       err => {
//         msag(err)
//         reject(err)
//       }
//     )
//   })
// }

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

// export function put(url: string, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.put(url, data).then(
//       response => {
//         resolve(response.data)
//       },
//       err => {
//         msag(err)
//         reject(err)
//       }
//     )
//   })
// }

//统一接口处理，返回数据
export const http = <T>(type: string, url: string, param: any = {}): Promise<T> => {
  // export const http = (type: string, url: string, param: any = {}) => {
  return new Promise((resolve, reject) => {
    switch (type) {
      case 'get':
        console.log('begin a get request,and url:', url)
        get(url, param)
          .then(function (response: any) {
            resolve(response)
          })
          .catch(function (error) {
            console.log('get request GET failed.', error)
            reject(error)
          })
        break
      case 'post':
        post(url, param)
          .then(function (response: any) {
            resolve(response)
          })
          .catch(function (error) {
            console.log('get request POST failed.', error)
            reject(error)
          })
        break
      default:
        break
    }
  })
}

//失败提示
function msag(err: any) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log(err.response.data.error.details)
        break
      case 401:
        console.log('未授权，请登录')
        break

      case 403:
        console.log('拒绝访问')
        break

      case 404:
        console.log('请求地址出错')
        break

      case 408:
        console.log('请求超时')
        break

      case 500:
        console.log('服务器内部错误')
        break

      case 501:
        console.log('服务未实现')
        break

      case 502:
        console.log('网关错误')
        break

      case 503:
        console.log('服务不可用')
        break

      case 504:
        console.log('网关超时')
        break

      case 505:
        console.log('HTTP版本不受支持')
        break
      default:
    }
  }
}

/**
 * 查看返回的数据
 * @param url
 * @param params
 * @param data
 */
// function landing(url: string, params: any, data: any) {
//   if (data.code === -1) {
//     console.log(1111)
//   }
// }

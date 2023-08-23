import * as ReactDOM from 'react-dom'
import App from './App'
import '@/assets/styles/index.less'
import { initTheme } from '@/assets/theme/theme'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
initTheme('lightTheme')

const initQianKun = () => {
  renderWithQiankun({
    // 当前应用在主应用中的生命周期
    // 文档 https://qiankun.umijs.org/zh/guide/getting-started#

    mount(props: any) {
      render(props.container)
      //  可以通过props读取主应用的参数：msg
      // 监听主应用传值
      props.onGlobalStateChange((res: any) => {
        console.log(res, 12)
      })
    },
    bootstrap() {
      console.log('bootstrap')
     },
     update() {
      console.log('update')
     },
    unmount(props: any) {
      console.log(props)
      console.log('unmount:应用每次 切出/卸载 会调用的方法',  props.container)
      // // props.container.unmount()
      // if (props.container) {
      //   props.container._container.innerHTML = ''
      // }
      props.container = null
   }
  })
}

const render = (container = '') => {
  // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
  const appDom = container ? container : document.getElementById('root')
  ReactDOM.render(
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>, appDom as HTMLElement
  )
}

// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()

import App from './App.vue'
import router from './router'
import { preventReClick } from '@/utils/tools'
import pinia from './store/pinia'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import './assets/styles/index.less'
import 'ant-design-vue/dist/antd.less'

const initQianKun = () => {
  renderWithQiankun({
      // 当前应用在主应用中的生命周期
      // 文档 https://qiankun.umijs.org/zh/guide/getting-started#
      mount(props: any) {
          render(props.container)
          //  可以通过props读取主应用的参数：msg
          // 监听主应用传值
          props.onGlobalStateChange((res: any) => {
              // store.count = res.count
              console.log(res, 123)
          })
      },
      bootstrap() {
        console.log('bootstrap')
       },
       update() {
        console.log('update')
       },
      unmount(props: any) {
        console.log('unmount', props)
      //   if (props.container) {
      //     props.container.innerHTML = ''
      //   }
      //   props.container = null
       }
  })
}

const render = (container = '') => {
    // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
    const appDom = container ? container : "#app"
    const app = createApp(App)
    app.directive('preventReClick', preventReClick)
    app.use(router).use(pinia).mount(appDom)

}

// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()

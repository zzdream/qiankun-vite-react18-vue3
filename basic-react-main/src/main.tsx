import * as ReactDOM from 'react-dom'
import App from './App'
import '@/assets/styles/index.less'
import { initTheme } from '@/assets/theme/theme'
import { ConfigProvider } from 'antd'
import "./qiankun"
import zhCN from 'antd/lib/locale/zh_CN'
initTheme('lightTheme')

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root') as HTMLElement
)

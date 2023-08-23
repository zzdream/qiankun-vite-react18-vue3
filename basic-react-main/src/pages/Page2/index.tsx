import { memo, useEffect, useRef } from 'react'
import { loadMicroApp } from 'qiankun';
import './index.less'
const Page2 = () => {
  let { current: microApp } = useRef<any>({ current: null })
  useEffect(() => {
    microApp = loadMicroApp({
      name: 'vue-app',
      entry: 'http://127.0.0.1:3002',
      container: '#vue-app-container',
      props: { brand: 'qiankun' },
    });
    return () => {
      microApp.unmount()
    }
  }, [])
  return (
    <div className='page2-container'>
      <p>micro-vue</p>
      <div id="vue-app-container"></div>
    </div>
  )
}

export default memo(Page2)

import { memo, useEffect, useRef } from 'react'
import { loadMicroApp } from 'qiankun';
import './index.less'
const Page1 = () => {
  let { current: microApp } = useRef<any>({ current: null })
  useEffect(() => {
    microApp = loadMicroApp({
      name: 'react-app',
      entry: 'http://127.0.0.1:3001',
      container: '#react-app-container',
      props: { brand: 'qiankun' },
    });
    return () => {
      microApp.unmount()
    }
  }, [])
  return (
    <div className='page1-container'>
      <p>micro-react</p>
      <div id="react-app-container"></div>
      <div id="vue-app-container"></div>
    </div>
  )
}

export default memo(Page1)

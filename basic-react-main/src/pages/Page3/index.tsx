import { memo } from 'react'
import './index.less'
const Page3 = () => {
  return (
    <div className='page3-container'>
      <p>micro-vue-react</p>
      <div id="react-container"></div>
      <div id="vue-container"></div>
    </div>
  )
}

export default memo(Page3)

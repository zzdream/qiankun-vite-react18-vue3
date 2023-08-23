import { memo } from 'react'
import './index.less'
const unityUrl = '/' + process.env.VITE_NAME
const Index = (props: { history: any[] }) => {
  const jump = () => {
    props.history.push(`${unityUrl}/next`)
  }
  return (
    <div className='index-container'>
      micro-react我是首页
      <div onClick={jump}>jump</div>
    </div>
  )
}

export default memo(Index)

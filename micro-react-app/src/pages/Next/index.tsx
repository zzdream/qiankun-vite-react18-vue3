import { memo } from 'react'
import './index.less'
const unityUrl = '/' + process.env.VITE_NAME
const Next = (props: { history: string[] }) => {
  const handleChange = () => {
    props.history.push(`${unityUrl}/index`)
  }

  return (
    <div className='next-container'>
      <div onClick={handleChange}>micro-next</div>
    </div>
  )
}

export default memo(Next)

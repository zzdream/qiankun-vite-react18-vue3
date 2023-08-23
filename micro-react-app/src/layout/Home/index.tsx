import { memo } from 'react'
import { withRouter } from 'react-router-dom'
import './index.less'

const Home = (props: any) => {

  return (
    <main className='home-container animated fadeIn'>
      <header>micro-react-app</header>
      <section id='section'>
        <div className={`home-content`}>{props.children}</div>
      </section>
    </main>
  )
}

export default memo(withRouter(Home))

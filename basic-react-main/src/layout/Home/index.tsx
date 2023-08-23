import { memo, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { ThemeContext, CHAT_DEFAULT } from '@/store/store'
import CommonFunc from '@/utils/common-func'
import { initTheme } from '@/assets/theme/theme'
// import { initGlobalState } from 'qiankun';
import './index.less'
const unityUrl = '/' + process.env.VITE_NAME
const Home = (props: any) => {
  // const actions = initGlobalState({
  //   // 定义全局状态
  // });

  // actions.onGlobalStateChange((newState) => {
  //   // 全局状态变化时的回调
  //   console.log(newState)
  // });
  const { dispatch, theme } = useContext<any>(ThemeContext)
  const setThemelick = () => {
    initTheme(theme === 'darkTheme' ? 'lightTheme' : 'darkTheme') // 全局css使用
    CommonFunc.storage.set('theme', theme === 'darkTheme' ? 'lightTheme' : 'darkTheme', 'sessionStorage')
    dispatch({
      type: CHAT_DEFAULT,
      payload: {
        theme: theme === 'darkTheme' ? 'lightTheme' : 'darkTheme'
      }
    })
  }
  return (
    <main className='home-container animated fadeIn'>
      <header>
      <div onClick={setThemelick}>点击换肤</div>
      <ul>
        {
          [{title: 'page1', url: `${unityUrl}/page1`}, {title: 'page2', url: `${unityUrl}/page2`}, {title: 'page3', url: `${unityUrl}/page3`}].map((item, index) => {
            return <li key={index} onClick={() => {
              // actions.setGlobalState({ history: item.url });
              window.history.pushState(null, '', item.url)
            }}>{item.title}</li>
          })
        }
      </ul>
      </header>
      <section id='section'>
        <div className={`home-content`}>{props.children}</div>
      </section>
    </main>
  )
}

export default memo(withRouter(Home))

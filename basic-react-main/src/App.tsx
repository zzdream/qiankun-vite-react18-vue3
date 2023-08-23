// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, useEffect, useReducer, memo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import SubRoute from './router/SubRoute'
import { ThemeContext, appReducer, initData, CHAT_DEFAULT } from '@/store/store'
import './assets/iconfont/iconfont.js'
import eruda from 'eruda'
if (process.env.VITE_NAME === 'chatdev') {
  eruda.init()
}
const pxWidth = 1440
const rootFontSizeRate = 100
const App = () => {
  const [loading, setLoading] = useState(true)
  const [state, dispatch] = useReducer(appReducer, initData)
  useEffect(() => {
    setHtmlFontSize()
    window.onresize = setHtmlFontSize
  }, [])
  const setHtmlFontSize = () => {
    const html = document.documentElement
    const clientWidth = html.clientWidth
    const fontSize = rootFontSizeRate * (clientWidth / pxWidth)
    html.style.fontSize = `${fontSize}px`
    dispatch({ type: CHAT_DEFAULT, payload: { clientWidth: html.clientWidth } })
    setLoading(false)
  }
  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      <BrowserRouter>{!loading && <SubRoute />}</BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default memo(App)

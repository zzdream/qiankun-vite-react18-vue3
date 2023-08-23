import lightTheme from './light'
import darkTheme from './dark'
import cssVars from 'css-vars-ponyfill'

const initTheme = (theme: string) => {
  document.documentElement.setAttribute('data-theme', theme)
  cssVars({
    watch: true, // 当添加，删除或修改其<link>或<style>元素的禁用或href属性时，ponyfill将自行调用
    variables: theme === 'darkTheme' ? darkTheme : lightTheme, // variables 自定义属性名/值对的集合
    onlyLegacy: false // false  默认将css变量编译为浏览器识别的css样式  true 当浏览器不支持css变量的时候将css变量编译为识别的css
  })
}

export { initTheme }

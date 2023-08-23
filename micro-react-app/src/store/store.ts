import { createContext } from 'react'
export const ThemeContext = createContext({})

export const CHAT_DEFAULT = 'CHAT_DEFAULT'

export const initData = {
  theme: 'lightTheme'
}

export const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case CHAT_DEFAULT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

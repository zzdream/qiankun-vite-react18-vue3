/**
 * 已通过vite的auto import自动导入，使用时通过变量‘store’就可以直接访问
 * demo：store.user
 */

import pinia from './pinia'
import { useUserStore } from './user'

export const user = useUserStore(pinia)

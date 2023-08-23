// import { useLocalStorage } from '@vueuse/core'
// import { LStorage } from '@/utils/storage'

export const useUserStore = defineStore('use', () => {
  const user = ref()
  /**
   * 退出当前登录
   */
  const logout = () => {
    user.value = null
    localStorage.removeItem('scene_compare_token')
    location.href = '/'
  }
  /**
   * 获取当前登录用户信息及权限
   */
  const getUserInfo = async () => {
    if (user.value) return
    const userApi = api.user
    user.value = await userApi.getLoginUser()
  }

  return { user, logout, getUserInfo }
})

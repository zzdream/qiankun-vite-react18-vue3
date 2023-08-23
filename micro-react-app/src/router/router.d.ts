/**
 *   create by zhanghang
 */
export interface InterRouteConfig {
  path: string
  name: string
  exact: boolean
  components: any
  children: InterRouteConfig[]
  redirect?: string
  meta?: InterMetaConfig
  class?: string
  isUseCache?: boolean
  code: string
  isHeaderUse?: boolean
}

interface InterMetaConfig {
  [extra: string]: string
}

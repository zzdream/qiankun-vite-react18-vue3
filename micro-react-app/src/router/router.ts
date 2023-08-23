/**
 *   create by zhanghang
 */
import { lazy } from 'react'
import withLazyLoad from '@/components/withLazyLoad/withLazyLoad'
import { InterRouteConfig } from './router.d'
const Index = withLazyLoad(lazy(() => import('@/pages/Index').then((module: any) => ({ default: module.default }))))
const Next = withLazyLoad(lazy(() => import('@/pages/Next').then((module: any) => ({ default: module.default }))))

const unityUrl = '/' + process.env.VITE_NAME

const asyncRouter: InterRouteConfig[] = [
  {
    path: unityUrl + '/page1',
    name: '首页',
    exact: true,
    children: [],
    components: Index,
    class: 'cach-container cach-container-index',
    code: 'HOME',
    isUseCache: false,
    isHeaderUse: true
  },
  {
    path: unityUrl + '/next',
    name: 'next',
    exact: true,
    children: [],
    components: Next,
    class: 'cach-container cach-container-ai-talk',
    code: 'next',
    isUseCache: false,
    isHeaderUse: true
  },
]
export default asyncRouter

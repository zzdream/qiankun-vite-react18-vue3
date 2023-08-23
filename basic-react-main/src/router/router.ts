/**
 *   create by zhanghang
 */
import { lazy } from 'react'
import withLazyLoad from '@/components/withLazyLoad/withLazyLoad'
import { InterRouteConfig } from './router.d'
const Page1 = withLazyLoad(lazy(() => import('@/pages/Page1').then((module: any) => ({ default: module.default }))))
const Page2 = withLazyLoad(lazy(() => import('@/pages/Page2').then((module: any) => ({ default: module.default }))))
const Page3 = withLazyLoad(lazy(() => import('@/pages/Page3').then((module: any) => ({ default: module.default }))))

const unityUrl = '/' + process.env.VITE_NAME

const asyncRouter: InterRouteConfig[] = [
  {
    path: unityUrl + '/page1',
    name: 'Page1',
    exact: true,
    children: [],
    components: Page1,
    class: 'cach-container cach-container-Page1',
    code: 'Page1',
    isUseCache: false,
    isHeaderUse: true
  },
  {
    path: unityUrl + '/page2',
    name: 'Page2',
    exact: true,
    children: [],
    components: Page2,
    class: 'cach-container cach-container-Page2',
    code: 'Page2',
    isUseCache: false,
    isHeaderUse: true
  },
  {
    path: unityUrl + '/page3',
    name: 'Page3',
    exact: true,
    children: [],
    components: Page3,
    class: 'cach-container cach-container-Page3',
    code: 'Page3',
    isUseCache: false,
    isHeaderUse: true
  },
]
export default asyncRouter

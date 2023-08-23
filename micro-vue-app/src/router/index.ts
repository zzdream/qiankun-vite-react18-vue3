// import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import { generateRouteFromViews } from './route'
// import Layout from '@/layout/index.vue'
// const routeFromViews = generateRouteFromViews()
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/page2/',
    component: null,
    children: [
      {
        path: '/page2',
        name: 'list',
        component: async () => await import(/* webpackChunkName: "demo" */ '@/views/list/index.vue')
      },
      {
        path: '/setting',
        name: 'setting',
        component: async () => await import(/* webpackChunkName: "demo" */ '@/views/setting/index.vue')
      }
    ]
  }
]

const router = createRouter({
  // history: createWebHashHistory(process.env.VITE_BASE_STATIC_URL), // 使用 hash 模式
  history: createWebHistory(process.env.VITE_BASE_STATIC_URL), // 使用 history 模式
  routes
})

// 路由权限过滤
router.beforeEach(async (to, from, next) => {
  if (to.path === '/') {
      next('/list')
      return
  }
  next()
})

export default router

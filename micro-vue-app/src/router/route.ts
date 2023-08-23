// export const generateRouteFromViews = () => {
//   const routes = []
//   // views子目录下的.vue文件自动生成路由。index.vue为列表页，其他页路径上包含参数id
//   const modules = import.meta.glob('../views/*/*.vue')
//   for (const filePath in modules) {
//     if (filePath.indexOf('login') == -1) {
//       let path = filePath.replace('../views', '').replace('.vue', '')
//       path = path.indexOf('/list/index') > -1 ? path.replace('index', '') : path.replace('index', '') + ':id'
//       routes.push({
//         path: path,
//         name: path.replaceAll('/', ''),
//         component: modules[filePath],
//         meta: {
//           name: 'list',
//           keepAlive: true // 设置需要缓存的页面
//         }
//       })
//     }
//   }
//   console.log(routes)
//   return routes
// }

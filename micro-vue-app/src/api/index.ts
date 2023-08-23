export const user = defineApi({
  login: { url: '/auth/login/', method: 'post' },
  getLoginUser: { url: '/auth/user_info/', method: 'get' }
})()

export const scence = defineApi({
  update: { url: '/projects/', method: 'post' },
  upload: { url: '/projects/', method: 'post', headers: { 'content-type': 'multipart/form-data' } },
  getList: { url: '/projects/', method: 'get' },
  dict: { url: '/projects/dict/scenes/', method: 'get' },
  detail: { url: '/projects/{sid}', method: 'get' },
  del: { url: '/projects/{sid}', method: 'delete' },
  result: { url: '/projects/results/', method: 'get' },
  customScene: { url: '/projects/custom/scene/', method: 'post' },
  customSceneParam: { url: '/projects/custom/scene_param/', method: 'post' }
})()

//对外暴露配置路由
export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue'),
    name: 'login', //命名路由
  },
  {
    path: '/',
    component: () => import('@/views/Home/index.vue'),
    name: 'layout',
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]

## 路由配置

1.安装路由依赖 vue-router 2.创建路由文件
在项目的src根路径下创建views文件夹 放置路由文件3.创建路由管理
在src根路径下创建router文件夹
router/index.ts、 router/routes.ts 4.在入口文件main.ts中注册路由插件
//引入路由
import router from './router'

    //注册模板路由
    app.use(router)

5.在App跟组件中测试路由

 <!--路由测试-->

    <router-view></router-view>

相关代码如下：

//router/index.ts

```
//通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routes'

//创建路由器
const router = createRouter({
  //路由模式：hash
  history: createWebHashHistory(),
  routes: constantRoute,
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})
export default router

```

//router/routes.ts

```
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

```

在组件中使用路由时：
import { useRouter, useRoute } from 'vue-router'

1. useRouter(): Router
   返回路由器实例。相当于在模板中使用 $router

2. useRoute(): RouteLocationNormalizedLoaded
   返回当前的路由地址。相当于在模板中使用 $route。

## login 登录静态页面

使用element-plus插件(搭建项目模板时已经集成了)
//使用icon图标
import { User, Lock } from '@element-plus/icons-vue';
//使用ElNotification通知组件
import { ElNotification } from 'element-plus'

## 状态管理使用pinia

1.安装pinia依赖 pnpm i pinia 2.创建store文件夹管理仓库
分别创建store/index.ts ---大仓库
store/modules/user.ts ----用户模块相关的小仓库3.在入口文件中注册仓库
//引入仓库
import pinia from './store'

//注册仓库
app.use(pinia)

相关代码：
store/index.ts

```
//仓库大仓库
import { createPinia } from 'pinia'
//创建大仓库
const pinia = createPinia()
//对外暴露：入口文件需要安装仓库
export default pinia

```

store/modules/user.ts

```
/**
 * 用户模块相关的小仓库
 */
import { defineStore } from 'pinia'

//创建用户小仓库
const useUserStore = defineStore('User', {
  //小仓库存储数据的地方
  state: () => {
    return {}
  },

  //异步，逻辑
  actions: {
    userLogin() {
      console.log('登录的方法')
    },
  },

  //计算属性
  getters: {},
})

export default useUserStore

```

## pinia管理登录状态(token)

1.在用户状态管理中处理登录状态
用户状态管理中维护一个token状态在本地存储，token值是：localStorage.getItem('TOKEN'),
store/modules/user.ts的action中调用用户登录接口
登录成功后，localStorage.setItem('TOKEN', result.data.token)，本地存储维护token

2.创建一个工具类管理本地存储
utils/token.ts

## 登录校验

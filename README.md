# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

window环境下升级node版本
https://juejin.cn/post/6844904168096808968
主要步骤：1.查看当前node及npm的版本
node -v和npm -v 2.如果已经安装过node，需要升级版本

#升级npm的版本
npm install -g npm 或者 npm install npm -g /_升级到最新版本_/
npm install npm@latest -g /_升级到最新版本_/
npm install npm@4.1.2 -g /_升级到指定版本_/

#升级node版本1.使用命令where node 查看node的安装路径

2.在node官网下载新版本node的 msi 安装包，然后覆盖安装之前的版本来完成更新操作

node官网：https://nodejs.org/en/download

初始化项目
本项目使用vite进行构建，vite官方中文文档参考：https://cn.vitejs.dev/guide/#community

pnpm:performant npm,意味着“高性能的npm”,pnpm由npm/yarn衍生而来，极大的优化了性能，扩展了使用场景

pnpm安装指令： npm i -g pnpm

项目初始化命令：pnpm create vite

进入到项目根目录 pnpm install 安装全部依赖

运行程序：pnpm run dev

## 项目配置

eslint配置
Eslint 目标是提供一个插件化的js代码检测工具1.安装eslint
pnpm i eslint -D

生成配置文件：eslintrc.cjs
npx eslint --init

.eslint.cjs配置文件

```

```

vue3环境代码校验插件

    "eslint": "^8.38.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-vue": "^9.10.0",

安装指令

```
pnpm install -D eslint-plugin-import  eslint-plugin-vue  eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser
```

修改.eslintrc.cjs配置文件

```

```

eslintignore忽略文件

```
dist
node_modules
```

运行脚本
package.json新增两个运行脚本

```
"scripts": {
  "lint": "eslint src",
  "fix": "eslint src --fix",
}
```

## 配置**prettier**

1安装依赖包

```
pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
```

prettierrc.json添加规则

```
{
  "singleQuote": true,
  "semi": false,
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "ignore",
  "endOfLine": "auto",
  "trailingComma": "all",
  "tabWidth": 2
}
```

prettierignore忽略文件

```
/dist/*
/html/*
.local
/node_modules/**
**/*.svg
**/*.sh
/public/*
```

配置stylelint

我们的项目中使用scss作为预处理器，安装以下依赖：

```
pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D
```

#查看本地分支：
git branch

#查看远程分支：
git branch -r

#创建并切换分支dev-v2
git checkout -b 'dev-v2' 

#创建远程分支
git push origin 'dev-v2' 


# 1.路由配置

1.安装路由依赖 vue-router
pnpm install vue-router

路由分析：目前项目中必须要的路由有：login登录，home首页，404页面

2.在项目的src根路径下创建views文件夹 放置路由文件
views/Login/index.vue
views/Home/index.vue
views/404/index.vue

3.创建路由管理
在src根路径下创建router文件夹
分别创建 router/index.ts、 router/routes.ts


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

4.在入口文件中注册路由插件
main.ts中：
```
//引入路由
import router from './router'

//注册模板路由
app.use(router)
```

5.在App跟组件中测试路由
 <!--路由测试-->
    <router-view></router-view>


## login登录页面实现

## 状态管理使用pinia
pnpm i pinia

1.在src根目录下创建store文件夹
分别创建store/index.ts  ---大仓库
store/modules/user.ts   ----用户模块相关的小仓库


store/index.ts
```
//仓库大仓库
import { createPinia } from 'pinia'
//创建大仓库
const pinia = createPinia()
//对外暴露：入口文件需要安装仓库
export default pinia

```


## login登录接口




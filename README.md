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
主要步骤：
1.查看当前node及npm的版本
    node -v和npm -v
2.如果已经安装过node，需要升级版本

#升级npm的版本
  npm install -g npm  或者 npm install npm -g    /*升级到最新版本*/
  npm install npm@latest -g    /*升级到最新版本*/
  npm install npm@4.1.2 -g    /*升级到指定版本*/

#升级node版本
1.使用命令where node 查看node的安装路径


2.在node官网下载新版本node的 msi 安装包，然后覆盖安装之前的版本来完成更新操作

node官网：https://nodejs.org/en/download

初始化项目
本项目使用vite进行构建，vite官方中文文档参考：https://cn.vitejs.dev/guide/#community

pnpm:performant npm,意味着“高性能的npm”,pnpm由npm/yarn衍生而来，极大的优化了性能，扩展了使用场景

pnpm安装指令： npm i -g pnpm

项目初始化命令：pnpm create vite

进入到项目根目录 pnpm install 安装全部依赖

运行程序：pnpm run dev



import { createApp } from 'vue'
//引入模板的全局的样式
import '@/styles/index.scss'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
//引入自定义插件对象:注册整个项目全局组件
import gloalComponent from '@/components'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//获取应用实例对象
const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

//安装自定义插件
app.use(gloalComponent)

//将应用挂载到挂载点上
app.mount('#app')

/**
 * 用户模块相关的小仓库
 */
import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user/index'
import { loginFormData } from '@/api/user/type'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'

//创建用户小仓库
const useUserStore = defineStore('User', {
  //小仓库存储数据的地方
  state: () => {
    return {
      token: GET_TOKEN(),
    }
  },

  //异步，逻辑
  actions: {
    async userLogin(data: loginFormData) {
      const result = await reqLogin(data)
      console.log(result)
      if (result.code == 200) {
        this.token = result.data.token
        //登录成功
        SET_TOKEN(result.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },

  //计算属性
  getters: {},
})

export default useUserStore

<template>
  <div class="login">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甑选</h2>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              show-password
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              :loading="loading"
              class="login_btn"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
//引入获取当前时间的函数
import { getTime } from '@/utils/time'
//vue3中的响应式对象
import { reactive, ref } from 'vue'

import { reqLogin } from '@/api/user'
//引入用户相关的小仓库
import useUserStore from '@/store/modules/user'

let userStore = useUserStore()

//获取路由器
let $router = useRouter()

//收集账号与密码的数据
let loginForm = reactive({
  username: 'admin',
  password: '111111',
})

let loading = ref(false)

const login = async () => {
  loading.value = true
  try {
    await userStore.userLogin(loginForm)
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI,${getTime()}好`,
    })
    loading.value = false
    $router.push('/')
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    color: white;
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 20px;
      margin: 20px 0;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>

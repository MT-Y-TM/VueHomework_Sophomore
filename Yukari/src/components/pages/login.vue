<template>
    <div class="login">
        <el-form
        ref="form" 
        :model="user" 
        label-width="80px"
        @keyup.enter.="login">
            <el-form-item label="手机号">
                <el-input v-model="user.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPwd">
                <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';

// 用户参数
const phone = ref('')
const password = ref('')

const user = reactive({
    phone: '',
    password: ''
})

// 获取路由实例
const router = useRouter()

const matchPhone = /^1[3-9]\d{9}$/; // 匹配中国大陆手机号的正则表达式

const login = () => {
  console.log(user)
  if (!user.phone) {
    ElMessage.error('请输入手机号')
  }else if(!matchPhone.test(user.phone)){
    ElMessage.error('请输入有效的手机号！')
  }
  if (!user.password) {
    ElMessage.error('请输入密码')
  }else if(matchPhone.test(user.phone)&&user.password.length>=6){
    ElMessage.success('登录成功')
    setTimeout(() => {
      ElMessage.info('即将跳转到首页')
    }, 1000)
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }
  
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
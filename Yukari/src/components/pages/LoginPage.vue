<template>
   <div class="LoginBox">
      <div class="Box">
         <el-tabs tab-position="left" style="height: 200px" class="demo-tabs">
            <el-tab-pane label="登录">
               <Login></Login>
            </el-tab-pane>
            <el-tab-pane label="没有账号？注册">
               <Signup></Signup>
            </el-tab-pane>
          </el-tabs>
      </div>
   </div>
</template>

<script setup>
import Login from './Login.vue';
import Signup from './Signup.vue';

</script>


<style scoped>
.LoginBox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
}

.Box {
  width: 1100px;
  height: 800px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
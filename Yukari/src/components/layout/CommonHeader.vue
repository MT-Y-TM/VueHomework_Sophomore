<template>
    <a-layout-header class="header">
        <div class="logo">
            <img src="../../../public/icon.png" alt="logo" width="auto" height="100%" />
        </div>
        <a-menu 
        theme="dark" 
        mode="horizontal" 
        :default-selected-keys="['1']">
            <a-menu-item key="1">首页</a-menu-item>

            <a-menu-item key="2">新闻</a-menu-item>

            <a-menu-item key="3">社区</a-menu-item>

            <a-menu-item key="4">关于</a-menu-item>

            <a-menu-item key="6">文化康养</a-menu-item>
            
            <a-menu-item key="5"><router-link to="/login">登录</router-link></a-menu-item>
            <router-view></router-view>
        </a-menu>
        <a-button class="logout" type="dashed" ghost>退出</a-button>
    </a-layout-header>
</template>

<script setup>
import { ref } from 'vue'
const selecetedKeys1 = ref('1')
</script>

<style>
.ant-layout-header .logo{
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 103, 230,0);
    line-height: 31px;
    font-weight: bold;
    color: #fff;
}

.ant-layout-header{
    color: #fff !important;
}
.logout{
    float: right;
    margin-top: -49px;
}
</style>
<template>
    <a-layout-header class="header">
        <div class="logo">
            <a href="./Home.vue"><img src="../../../public/icon.png" alt="logo" width="auto" height="100%" /></a>
        </div>
        <a-menu 
        theme="dark" 
        mode="horizontal" 
        :default-selected-keys="['1']">
            <a-menu-item key="1">
                    <HomeTwoTone />
                <router-link to="/Home">
                    首页
                </router-link>
            </a-menu-item>

            <a-menu-item key="2">
                <BellTwoTone />
                新闻
            </a-menu-item>

            <a-menu-item key="3">
                <EnvironmentTwoTone />
                社区
            </a-menu-item>

            <a-menu-item key="4">
                <InfoCircleTwoTone />
                关于
            </a-menu-item>

            <a-menu-item key="6">
                <StarTwoTone />
                文化康养
            </a-menu-item>
            
            <a-menu-item key="5">
                <IdcardTwoTone />
                <router-link to="/Login">
                    登录
                </router-link>
            </a-menu-item>
        </a-menu>
        <a-button class="logout" type="dashed" ghost>退出</a-button>
    </a-layout-header>
</template>

<script setup>
import { ref } from 'vue'
const selecetedKeys1 = ref('1')

import { HomeTwoTone,InfoCircleTwoTone,BellTwoTone,
    EnvironmentTwoTone,StarTwoTone,IdcardTwoTone } from  '@ant-design/icons-vue';

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
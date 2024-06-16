<template>
    <a-layout-sider 
    width="200" 
    style="overflow: auto"
    >
    <a-menu 
    v-model:selectedKeys="selectedKey2"
    v-model="openKeys"
    mode="inline" 
    :default-selected-keys="['1']"
    >
    <a-sub-menu key="1">
        <template #title>
            <span><user-outlined />用户管理</span>
        </template>
        <a-menu-item key="1-1">用户信息</a-menu-item>
        <a-menu-item key="1-2">修改头像</a-menu-item>
        <a-menu-item key="1-3">修改密码</a-menu-item>
        <a-menu-item key="1-4">修改头像</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="2">
        <template #title>
            <span><user-outlined />系统管理</span>
        </template>
        <a-menu-item key="2-1">用户管理</a-menu-item>
        <a-menu-item key="2-2">权限管理</a-menu-item>
        <a-menu-item key="2-3">菜单管理</a-menu-item>
        <a-menu-item key="2-4">操作日志</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="3">
        <template #title>
            <span><user-outlined />商品管理</span>
        </template>
        <a-menu-item key="3-1">分类管理</a-menu-item>
        <a-menu-item key="3-2">订单管理</a-menu-item>
        <a-menu-item key="3-3">回收站</a-menu-item>
    </a-sub-menu>
    </a-menu>
    </a-layout-sider>
</template>

<script setup>
import {UserOutlined,LaptopOutlined,NotificationOutlined} from '@ant-design/icons-vue'
import { ref } from 'vue'
const selectedKey2 = ref(['1-1'])
const openKeys = ref(['sub1'])
</script>
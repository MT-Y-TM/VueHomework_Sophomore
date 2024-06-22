<template>
    <el-header style="text-align: center;  ; width: 100%; margin: 0; padding: 0;">
        <el-menu 
            mode="horizontal" 
            class="el-menu"
            background-color="#0E51A5" 
            text-color="#f780fd"
            active-text-color="#67fc1d">
            <router-link to="/">
                <el-menu-item index="1">
                首页
                </el-menu-item>
            </router-link>
            <router-link to="/News">
                <el-menu-item index="2">
                    新闻
                </el-menu-item>
            </router-link>
            <router-link to="/Community">
                <el-menu-item index="3">
                    社区
                </el-menu-item>
            </router-link>
            <router-link to="/Culture">
                <el-menu-item index="4">
                    文化康养
                </el-menu-item>
            </router-link>
            <router-link to="/Login">
                <el-menu-item index="5">
                登录/注册
                </el-menu-item>
            </router-link>
        </el-menu>
    </el-header>
</template>

<script setup>

</script>

<style scoped>
.el-menu{
    width: 100%;
}
</style>
// 创建路由实例
import login from './components/pages/login.vue'
import {createRouter, useRouter,createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/login', component: () => import('./components/pages/login.vue') },
    ]
})
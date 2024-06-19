// 创建路由实例
import { createMemoryHistory, createRouter } from 'vue-router'


const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/Login', component:() => import('./components/Pages/Login.vue')},
    {path: '/', component:() => import('./components/Pages/FirstPage.vue')},
    {path: '/Home', component:() => import('./components/Pages/FirstPage.vue')},
  ]
})

export default router

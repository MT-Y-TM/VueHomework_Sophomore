// 创建路由实例
import { createMemoryHistory, createRouter } from 'vue-router'


const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/Login', component:() => import('./components/Pages/Login.vue')},
    {path: '/', component:() => import('./components/Pages/FirstPage.vue')},
    {path: '/Home', component:() => import('./components/Pages/FirstPage.vue')},
    {path: '/News' , component:() => import('./components/Pages/News.vue')},
    {path: '/Community' , component:() => import('./components/Pages/Community.vue')},
    {path: '/Culture', component:() => import('./components/Pages/Culture.vue')}
  ]
})

export default router

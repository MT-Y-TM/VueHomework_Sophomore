// 创建路由实例
import { createMemoryHistory, createRouter } from 'vue-router'

import login from './components/pages/login.vue'

const routes = [
  { path: '/login', component: login },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
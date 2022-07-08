import { createRouter, createWebHistory } from 'vue-router'

//componentes
import Dashboard from '../views/Dashboard.vue'
import UserManagement from '../views/UserManagement.vue'
const routes = [
  { path: '/', component: Dashboard },
  { path: '/dashboard', component: Dashboard },
  { path: '/user-management', component: UserManagement },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
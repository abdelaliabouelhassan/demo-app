import { createRouter, createWebHistory } from 'vue-router'

//componentes
import Dashboard from '../views/Dashboard.vue'

const routes = [
    { path: '/', component: Dashboard },
    { path: '/dashboard', component: Dashboard },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router;
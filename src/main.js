import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import router from './router/routers'

createApp(App).use(router).mount('#app')

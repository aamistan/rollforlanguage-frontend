import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { setupAuthListeners } from '@/features/auth/utils/setupAuthListeners'
import App from './App.vue'
import router from './router'

import './assets/styles/global.css'
import './assets/styles/tailwind.css'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(router)

setupAuthListeners() // 🚀 Sets up multi-tab logout after Pinia is ready

app.mount('#app')

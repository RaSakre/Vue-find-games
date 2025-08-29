import { createApp } from 'vue'

import { createPinia } from 'pinia'
import './reset.css'
import './style.css'
import App from './App.vue'
import router from './router/router'


const app = createApp(App).use(router)
const pinia = createPinia()


app.use(pinia)


app.mount('#app')

import { createApp } from 'vue'
import './style.css'
import router from '@/router'
import pinia from '@/store'
import App from '@/layout/Index.vue'
createApp(App).use(router).use(pinia).mount('#app')

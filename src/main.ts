import { createApp } from 'vue'
import './style.css'
import router from '@/router'
import pinia from '@/store'
import App from '@/layout/Index.vue'
import * as Icons from "@/assets/antd/icons";
const app = createApp(App)
app.use(router).use(pinia).mount('#app')
const icons: any = Icons
for (const i in icons) {
  app.component(i, icons[i])
}
console.log( import.meta.env.VITE_APP_BASE_URL )

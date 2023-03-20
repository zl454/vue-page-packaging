import { createApp } from 'vue'
import './style.css'
import router from '@/router'
import pinia from '@/store'
import App from '@/layout/Index.vue'
import * as Icons from "@/assets/antd/icons";
import 'ant-design-vue/es/message/style/css'
import 'ant-design-vue/es/modal/style/index.css'
const app = createApp(App)
app.use(router).use(pinia).mount('#app')
const icons: any = Icons
for (const i in icons) {
  app.component(i, icons[i])
}

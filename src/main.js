import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styleVariable.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import router from './router'
// import store from './store/index'
import App from './App.vue'

let app = createApp(App)

// Install element-plus-icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// app.use(store).use(ElementPlus).use(router).mount('#app')
app.use(ElementPlus).use(router).mount('#app')

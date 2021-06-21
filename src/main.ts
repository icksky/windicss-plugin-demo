import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import './styles/index.scss'
import ElementPlus from 'element-plus'

const app = createApp(App)

app.use(ElementPlus).mount('#app', true)

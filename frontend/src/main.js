import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/utils/rules.js'

const app = createApp(App)

app.use(router)
app.mount('#app')

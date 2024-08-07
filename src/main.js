import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
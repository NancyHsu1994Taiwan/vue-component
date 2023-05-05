import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './index.css'

// import './assets/all.scss'
// import 'bootstrap'
// import * as bootstrap from 'bootstrap'
const app = createApp(App)

app.use(router)

app.mount('#app')

import 'bootstrap/dist/css/bootstrap.css'
import router from "./router"
import Toaster from '@meforma/vue-toaster';

import { createApp  } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(Toaster).provide('toast', app.config.globalProperties.$toast);
app.provide('axios', true);
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'

// Cai bootstrap 5 
// npm i bootstrap
// npm i @popperjs/core
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
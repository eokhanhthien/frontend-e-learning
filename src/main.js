import 'bootstrap/dist/css/bootstrap.css'
import router from "./router"
import Toaster from '@meforma/vue-toaster';

import { createApp  } from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue';
import  "../src/assets/fontawesome/fontawesome-free-6.3.0-web/css/all.min.css";
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import { createPinia } from 'pinia'


const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPluginPersistedState)
app.use(router)
app.use(CKEditor)
app.use(Toaster).provide('toast', app.config.globalProperties.$toast);
app.provide('Global_data', {
    is_Login: false,

  });
app.use(pinia)
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'

// Cai bootstrap 5 
// npm i bootstrap
// npm i @popperjs/core
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
import { createApp } from 'vue'
import { createPinia } from "pinia";
import router from "./router/router.js";

import PrimeVue from 'primevue/config';

import './style.scss'

import App from './App.vue'

createApp(App)
    .use(createPinia())
    .use(router)
    .use(PrimeVue)
    .mount('#app')
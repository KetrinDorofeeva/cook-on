import { createApp } from 'vue'
import { createPinia } from "pinia";

import './style.scss'

import App from './App.vue'

createApp(App)
    .use(createPinia())
    .mount('#app')
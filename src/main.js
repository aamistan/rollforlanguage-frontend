// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { i18n } from '@/plugins/i18n';

import './assets/styles/global.css';
import './assets/styles/tailwind.css';


const app = createApp(App);

app.use(i18n);
app.use(router);
app.mount('#app');

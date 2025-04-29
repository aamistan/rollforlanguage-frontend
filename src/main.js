// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { i18n } from './i18n';

import './assets/styles/global.css';
import './assets/styles/tailwind.css';

const app = createApp(App);

app.use(router);
app.use(i18n); // Uncomment when i18n is fully wired

app.mount('#app');
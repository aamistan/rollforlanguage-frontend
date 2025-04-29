// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createI18nInstance } from './plugins/i18n';

import './assets/styles/global.css';
import './assets/styles/tailwind.css';

const bootstrap = async () => {
    const app = createApp(App);
  
    const i18n = await createI18nInstance();
    app.use(i18n);
    app.use(router);
    app.mount('#app');
};

bootstrap();
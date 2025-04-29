// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage,
  },
  // Future routes can be added here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

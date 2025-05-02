import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import { authGuard } from './guards/authGuard';
import LandingPage from '@/views/LandingPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage,
    beforeEnter: authGuard, // Apply the auth guard to this route
  },
  // Future routes can be added here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

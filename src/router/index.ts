import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { authGuard } from './guards/authGuard'
import { AppRouteNames, AppRoutePaths } from './routes'

import LandingPage from '@/views/LandingPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: AppRoutePaths.Landing, // centralized path
    name: AppRouteNames.Landing, // centralized name
    component: LandingPage,
    beforeEnter: authGuard, // Apply the auth guard to this route
  },
  // Future routes can be added here
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

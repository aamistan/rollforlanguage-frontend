import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { authGuard } from './guards/authGuard'
import { AppRouteNames, AppRoutePaths } from './routes'
import { useAuthStore } from '@/features/auth/stores/authStore'


import LandingPage from '@/views/LandingPage.vue'
import AuthView from '@/features/auth/views/AuthView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: AppRoutePaths.Landing,
    name: AppRouteNames.Landing,
    component: LandingPage,
    meta: { requiresAuth: false },
  },
  {
    path: AppRoutePaths.Login,
    name: AppRouteNames.Login,
    component: AuthView,
    meta: { requiresAuth: false },
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore()
      if (authStore.isAuthenticated) {
        next(AppRoutePaths.Dashboard)
      } else {
        next()
      }
    },
  },
  // {
  //   path: AppRoutePaths.Dashboard,
  //   name: AppRouteNames.Dashboard,
  //   component: () => import('@/features/dashboard/views/DashboardView.vue'),
  //   meta: { requiresAuth: true },
  //   beforeEnter: authGuard,
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

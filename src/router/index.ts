import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
// import { authGuard } from './guards/authGuard'
import LandingPage from '@/views/LandingPage.vue'
import { useAuthStore } from '@/features/auth/stores/authStore'
import ForgotPasswordView from '@/features/auth/views/ForgotPasswordView.vue'
import LoginView from '@/features/auth/views/LoginView.vue'
import RegisterView from '@/features/auth/views/RegisterView.vue'
import { AppRouteNames, AppRoutePaths } from './routes'

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
    component: LoginView,
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

  {
    path: AppRoutePaths.ForgotPassword,
    name: AppRouteNames.ForgotPassword,
    component: ForgotPasswordView,
    meta: { requiresAuth: false },
  },
  
  {
    path: AppRoutePaths.Register,
    name: AppRouteNames.Register,
    component: RegisterView,
    meta: { requiresAuth: false },
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore()
      if (authStore.isAuthenticated) {
        next(AppRoutePaths.Dashboard)
      } else {
        next()
      }
    },
  },  // Future protected routes (dashboard, etc.)
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

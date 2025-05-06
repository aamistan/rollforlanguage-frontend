import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import AdminBars from '@/features/admin/components/AdminBars.vue'
import AdminDashboardView from '@/features/admin/views/AdminDashboardView.vue'
import CampaignManagementView from '@/features/admin/views/CampaignManagementView.vue'
import ContentManagementView from '@/features/admin/views/ContentManagementView.vue'
import SystemMonitorView from '@/features/admin/views/SystemMonitorView.vue'
import UserManagementView from '@/features/admin/views/UserManagementView.vue'
import { useAuthStore } from '@/features/auth/stores/authStore'
import ForgotPasswordView from '@/features/auth/views/ForgotPasswordView.vue'
import LoginView from '@/features/auth/views/LoginView.vue'
import RegisterView from '@/features/auth/views/RegisterView.vue'
import { adminGuard } from './guards/adminGuard'
import { AppRouteNames, AppRoutePaths } from './routes'

const routes: Array<RouteRecordRaw> = [
  // Public routes
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
  },
  {
    path: AppRoutePaths.ForgotPassword,
    name: AppRouteNames.ForgotPassword,
    component: ForgotPasswordView,
    meta: { requiresAuth: false },
  },

  // Admin routes (wrapped in AdminBars)
  {
    path: '/admin',
    name: AppRouteNames.Admin,
    component: AdminBars,
    meta: { requiresAuth: true },
    beforeEnter: adminGuard,
    children: [
      {
        path: '',
        name: AppRouteNames.AdminDashboard,
        component: AdminDashboardView,
      },
      {
        path: 'users',
        name: AppRouteNames.AdminUsers,
        component: UserManagementView,
      },
      {
        path: 'campaigns',
        name: AppRouteNames.AdminCampaigns,
        component: CampaignManagementView,
      },
      {
        path: 'content',
        name: AppRouteNames.AdminContent,
        component: ContentManagementView,
      },
      {
        path: 'system',
        name: AppRouteNames.AdminSystem,
        component: SystemMonitorView,
      },
    ],
  },

  // Future protected routes (main user dashboard, etc.)
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

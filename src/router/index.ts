import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// Public views
import LandingPage from '@/views/LandingPage.vue'

// Auth views
import LoginView from '@/features/auth/views/LoginView.vue'
import RegisterView from '@/features/auth/views/RegisterView.vue'
import ForgotPasswordView from '@/features/auth/views/ForgotPasswordView.vue'

// Admin layout + views
import AdminLayout from '@/features/admin/components/AdminLayout.vue'
import AdminDashboardView from '@/features/admin/views/AdminDashboardView.vue'
import UserManagementView from '@/features/admin/views/UserManagementView.vue'
import CampaignManagementView from '@/features/admin/views/CampaignManagementView.vue'
import ContentManagementView from '@/features/admin/views/ContentManagementView.vue'
import SystemMonitorView from '@/features/admin/views/SystemMonitorView.vue'

// Guards + enums
import { useAuthStore } from '@/features/auth/stores/authStore'
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

  // Admin routes (wrapped in AdminLayout)
  {
    path: '/admin',
    name: AppRouteNames.Admin,
    component: AdminLayout,
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

  // Future protected routes (main dashboard, etc.)
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

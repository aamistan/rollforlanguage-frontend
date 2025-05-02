import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { AppRouteNames } from '@/router/routes'

export function authGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void {
  const authStore = useAuthStore()
  if (authStore.isAuthenticated) {
    next()
  } else {
    next({ name: AppRouteNames.Login })
  }
}

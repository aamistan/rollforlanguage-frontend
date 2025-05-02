import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '@/features/auth/stores/authStore';

export function authGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const authStore = useAuthStore();
  if (authStore.isAuthenticated) {
    next();
  } else {
    next({ name: 'Login' }); // or use '/login' if you're routing by path
  }
}

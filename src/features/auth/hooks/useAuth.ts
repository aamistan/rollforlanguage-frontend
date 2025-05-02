// src/features/auth/hooks/useAuth.ts
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../stores/authStore'

export function useAuth() {
  const authStore = useAuthStore()
  const { user, token, isAuthenticated } = storeToRefs(authStore)

  return {
    user,
    token,
    isAuthenticated,
    login: authStore.setAuth,
    logout: authStore.clearAuth,
  }
}

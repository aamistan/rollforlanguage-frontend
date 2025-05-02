import { storeToRefs } from 'pinia'
import { useAuthStore } from '../stores/authStore'

export function useAuth() {
  const authStore = useAuthStore()
  const { user, token, isAuthenticated } = storeToRefs(authStore)

  return {
    user,
    token,
    isAuthenticated,
    login: authStore.setAuth.bind(authStore),
    logout: authStore.clearAuth.bind(authStore),
  }
}

export type UseAuthReturn = ReturnType<typeof useAuth>

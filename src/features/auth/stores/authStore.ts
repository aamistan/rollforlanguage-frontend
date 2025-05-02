import { defineStore } from 'pinia'
import { authService } from '@/features/auth/services/authService'
import type { User } from '../types/types'

export interface AuthState {
  user: User | null
  token: string | null
  authError: string | null
  isLoading: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    authError: null,
    isLoading: false,
  }),

  getters: {
    isAuthenticated: (state): boolean => !!state.token,
  },

  actions: {
    async login(payload: { email: string; password: string }) {
      return authService.login(this, payload.email, payload.password)
    },

    async register(payload: { username: string; email: string; password: string }) {
      return authService.register(this, payload.username, payload.email, payload.password)
    },

    async logout() {
      return authService.logout(this)
    },

    async refreshToken() {
      return authService.refreshToken(this)
    },

    setAuth(token: string, user: User) {
      this.token = token
      this.user = user
      this.authError = null
      localStorage.setItem('auth_token', token)
      localStorage.setItem('auth_user', JSON.stringify(user))
    },

    clearAuth() {
      this.token = null
      this.user = null
      localStorage.removeItem('auth_token')
      localStorage.removeItem('auth_user')
    },

    setError(message: string) {
      this.authError = message
    },

    clearError() {
      this.authError = null
    },

    setLoading(status: boolean) {
      this.isLoading = status
    },

    initFromStorage() {
      const storedToken = localStorage.getItem('auth_token')
      const storedUser = localStorage.getItem('auth_user')

      if (storedToken && storedUser) {
        this.token = storedToken
        try {
          this.user = JSON.parse(storedUser) as User
        } catch {
          this.user = null
        }
      }
    },
  },
})

// ✅ Export reusable type for services
export type AuthStore = ReturnType<typeof useAuthStore>

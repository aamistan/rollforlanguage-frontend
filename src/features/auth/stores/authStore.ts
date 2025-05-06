import { jwtDecode } from 'jwt-decode'
import { defineStore } from 'pinia'
import { authService } from '@/features/auth/services/authService'
import type { User } from '../types/types'

export interface AuthState {
  user: User | null
  token: string | null
  authError: string | null
  isLoading: boolean
}

interface DecodedToken {
  id: string
  email: string
  username: string
  role: string
  iat: number
  exp: number
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

    async register(payload: { username: string; email: string; password: string; genderIdentity?: string | null; pronouns?: string | null }) {
      return authService.register(this, payload)
    },

    async logout() {
      return authService.logout(this)
    },

    async refreshToken() {
      return authService.refreshToken(this)
    },

    async forgotPassword(email: string) {
      return authService.forgotPassword(this, email)
    },

    setAuth(token: string) {
      this.token = token
      this.authError = null
      localStorage.setItem('auth_token', token)

      try {
        const decoded = jwtDecode<DecodedToken>(token)
        this.user = {
          id: decoded.id,
          email: decoded.email,
          username: decoded.username,
          roles: [decoded.role], // map single role to array
        }
        localStorage.setItem('auth_user', JSON.stringify(this.user))
      } catch (error) {
        console.error('Failed to decode token:', error)
        this.user = null
      }
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

      if (storedToken) {
        this.token = storedToken
        try {
          const decoded = jwtDecode<DecodedToken>(storedToken)
          this.user = {
            id: decoded.id,
            email: decoded.email,
            username: decoded.username,
            roles: [decoded.role], // map here too
          }
        } catch {
          this.user = null
        }
      }
    },
  },
})

// ✅ Export reusable type for services
export type AuthStore = ReturnType<typeof useAuthStore>

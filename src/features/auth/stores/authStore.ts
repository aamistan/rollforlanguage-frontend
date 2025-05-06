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
  genderIdentity?: string | null
  pronouns?: string | null
  iat: number
  exp: number
}

const AUTH_TOKEN_KEY = 'auth_token'
const AUTH_USER_KEY = 'auth_user'

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
      localStorage.setItem(AUTH_TOKEN_KEY, token)

      try {
        const decoded = jwtDecode<DecodedToken>(token)
        this.user = {
          id: decoded.id,
          email: decoded.email,
          username: decoded.username,
          roles: [decoded.role],
          genderIdentity: decoded.genderIdentity || null,
          pronouns: decoded.pronouns || null,
        } as User
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(this.user))
      } catch (error) {
        console.error('Failed to decode token:', error)
        this.user = null
      }
    },

    clearAuth() {
      this.token = null
      this.user = null
      localStorage.removeItem(AUTH_TOKEN_KEY)
      localStorage.removeItem(AUTH_USER_KEY)
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
      const storedToken = localStorage.getItem(AUTH_TOKEN_KEY)

      if (storedToken) {
        this.token = storedToken
        try {
          const decoded = jwtDecode<DecodedToken>(storedToken)
          this.user = {
            id: decoded.id,
            email: decoded.email,
            username: decoded.username,
            roles: [decoded.role],
            genderIdentity: decoded.genderIdentity || null,
            pronouns: decoded.pronouns || null,
          } as User
        } catch {
          this.user = null
        }
      }
    },
  },
})

export type AuthStore = ReturnType<typeof useAuthStore>

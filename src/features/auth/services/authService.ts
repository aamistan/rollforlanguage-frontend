import { axiosInstance } from '../services/axiosInstance'
import type { User, AuthResponse } from '../types/types'
import type { AuthStore } from '../stores/authStore'

export const authService = {
  async login(authStore: AuthStore, email: string, password: string): Promise<User> {
    authStore.setLoading(true)
    try {
      const response = await axiosInstance.post<AuthResponse>('/api/auth/login', { email, password })
      const { token, user } = response.data
      authStore.setAuth(token, user)
      return user
    } catch (error: any) {
      authStore.setError(error.response?.data?.message || 'Login failed')
      throw error
    } finally {
      authStore.setLoading(false)
    }
  },

  async register(authStore: AuthStore, username: string, email: string, password: string): Promise<User> {
    authStore.setLoading(true)
    try {
      const response = await axiosInstance.post<AuthResponse>('/api/auth/register', {
        username,
        email,
        password,
      })
      const { token, user } = response.data
      authStore.setAuth(token, user)
      return user
    } catch (error: any) {
      authStore.setError(error.response?.data?.message || 'Registration failed')
      throw error
    } finally {
      authStore.setLoading(false)
    }
  },

  async logout(authStore: AuthStore): Promise<void> {
    authStore.setLoading(true)
    try {
      await axiosInstance.post('/api/auth/logout')
      authStore.clearAuth()
    } catch (error: any) {
      authStore.setError('Logout failed')
      throw error
    } finally {
      authStore.setLoading(false)
    }
  },
}

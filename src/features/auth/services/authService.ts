import { axiosInstance } from '../services/axiosInstance'
import type { AxiosError } from 'axios'
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
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>
      authStore.setError(axiosError.response?.data?.message || 'Login failed')
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
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>
      authStore.setError(axiosError.response?.data?.message || 'Registration failed')
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
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>
      authStore.setError(axiosError.response?.data?.message || 'Logout failed')
      throw error
    } finally {
      authStore.setLoading(false)
    }
  },

  async refreshToken(authStore: AuthStore): Promise<string> {
    authStore.setLoading(true)
    try {
      const response = await axiosInstance.post<{ token: string }>('/api/auth/refresh')
      const { token } = response.data
      authStore.token = token
      localStorage.setItem('auth_token', token)
      return token
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>
      authStore.setError(axiosError.response?.data?.message || 'Token refresh failed')
      throw error
    } finally {
      authStore.setLoading(false)
    }
  },
  
  async forgotPassword(authStore: AuthStore, email: string): Promise<void> {
    authStore.setLoading(true)
    try {
      await axiosInstance.post('/api/auth/forgot-password', { email })
      authStore.clearError()  // clear any old errors on success
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>
      authStore.setError(axiosError.response?.data?.message || 'Password reset failed')
      throw error
    } finally {
      authStore.setLoading(false)
    }
  },   
}

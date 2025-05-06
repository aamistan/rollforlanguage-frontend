import type { AxiosError } from 'axios'
import router from '@/router'
import { axiosInstance } from '../services/axiosInstance'
import type { AuthStore } from '../stores/authStore'
import type { User, AuthResponse } from '../types/types'


export const authService = {
  async login(authStore: AuthStore, email: string, password: string): Promise<User | undefined> {
    authStore.setLoading(true)
    try {
      const response = await axiosInstance.post<AuthResponse>('/auth/login', { email, password })
      const { token } = response.data
      authStore.setAuth(token)

      const user = authStore.user
      if (user?.roles.includes('superadmin')) {
        router.push('/superadmin-dashboard')
      } else if (user?.roles.includes('admin')) {
        router.push('/admin-dashboard')
      } else if (user?.roles.includes('teacher')) {
        router.push('/teacher-dashboard')
      } else {
        router.push('/dashboard') // fallback for students or general users
      }

      return user
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>
      authStore.setError(axiosError.response?.data?.message || 'Login failed')
      throw error
    } finally {
      authStore.setLoading(false)
    }
  },

  async register(
    authStore: AuthStore,
    payload: {
      username: string
      email: string
      password: string
      genderIdentity?: string | null
      pronouns?: string | null
    }
  ): Promise<User | undefined> {
    authStore.setLoading(true)
    try {
      const response = await axiosInstance.post<AuthResponse>('/auth/register', payload)
      const { token } = response.data
      authStore.setAuth(token)

      const user = authStore.user
      if (user?.roles.includes('superadmin')) {
        router.push('/superadmin-dashboard')
      } else if (user?.roles.includes('admin')) {
        router.push('/admin-dashboard')
      } else if (user?.roles.includes('teacher')) {
        router.push('/teacher-dashboard')
      } else {
        router.push('/dashboard')
      }

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
      await axiosInstance.post('/auth/logout')
      authStore.clearAuth()
      router.push('/login') // redirect to login after logout
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
      const response = await axiosInstance.post<{ token: string }>('/auth/refresh')
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
      await axiosInstance.post('/auth/forgot-password', { email })
      authStore.clearError() // clear any old errors on success
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>
      authStore.setError(axiosError.response?.data?.message || 'Password reset failed')
      throw error
    } finally {
      authStore.setLoading(false)
    }
  },
}

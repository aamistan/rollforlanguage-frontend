// src/features/auth/services/axiosInstance.ts

import type { AxiosInstance, InternalAxiosRequestConfig, AxiosError } from 'axios'
import axios from 'axios'
import router from '@/router'
import { useAuthStore } from '../stores/authStore'

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
  },
})

// Setup interceptors once, reuse authStore
const authStore = useAuthStore()

// Attach token to each request if available
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (authStore.token) {
      config.headers = config.headers || {}
      config.headers.Authorization = `Bearer ${authStore.token}`
    }
    return config
  },
  (error: AxiosError) => Promise.reject(error)
)

// Handle 401 responses globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      authStore.clearAuth()
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

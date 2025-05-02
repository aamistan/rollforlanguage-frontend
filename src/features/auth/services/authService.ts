// src/features/auth/services/authService.ts
import { useAuthStore } from '../stores/authStore'
import { axiosInstance } from '../services/axiosInstance'

export const authService = {
  async login(email: string, password: string) {
    const authStore = useAuthStore()
    const response = await axiosInstance.post('/api/auth/login', { email, password })

    const { token, user } = response.data
    authStore.setAuth(token, user)
    return user
  },

  async register(username: string, email: string, password: string) {
    const authStore = useAuthStore()
    const response = await axiosInstance.post('/api/auth/register', { username, email, password })

    const { token, user } = response.data
    authStore.setAuth(token, user)
    return user
  },

  async logout() {
    const authStore = useAuthStore()
    await axiosInstance.post('/api/auth/logout')
    authStore.clearAuth()
  },
}

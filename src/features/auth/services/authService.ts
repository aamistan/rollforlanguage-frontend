import { useAuthStore } from '../stores/authStore'
import { axiosInstance } from '../services/axiosInstance'
import { User, AuthResponse } from '../types/types'

export const authService = {
  async login(email: string, password: string): Promise<User> {
    const authStore = useAuthStore()
    const response = await axiosInstance.post<AuthResponse>('/api/auth/login', { email, password })

    const { token, user } = response.data
    authStore.setAuth(token, user)
    return user
  },

  async register(username: string, email: string, password: string): Promise<User> {
    const authStore = useAuthStore()
    const response = await axiosInstance.post<AuthResponse>('/api/auth/register', {
      username,
      email,
      password,
    })

    const { token, user } = response.data
    authStore.setAuth(token, user)
    return user
  },

  async logout(): Promise<void> {
    const authStore = useAuthStore()
    await axiosInstance.post('/api/auth/logout')
    authStore.clearAuth()
  },
}

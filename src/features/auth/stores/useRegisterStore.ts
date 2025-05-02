import { defineStore } from 'pinia'
import { registerUser } from '@/features/auth/services/registerService'
import { User, AuthResponse } from '@/features/auth/types/types'

export interface RegisterState {
  user: User | null
}

export const useRegisterStore = defineStore('register', {
  state: (): RegisterState => ({
    user: null,
  }),

  actions: {
    async register(payload: {
      username: string
      email: string
      password: string
    }): Promise<AuthResponse> {
      try {
        const response = await registerUser(payload)

        // Store the user part of the response
        this.user = response.user

        return response
      } catch (error) {
        console.error('RegisterStore error:', error)
        throw error
      }
    },
  },
})

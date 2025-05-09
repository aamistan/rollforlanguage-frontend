import { axiosInstance } from '@/services/axiosInstance'

export interface CreateUserPayload {
  email: string
  username: string
  password: string
  role: string
}

export const userService = {
  async createUser(payload: CreateUserPayload): Promise<void> {
    await axiosInstance.post('/admin/users', payload)
  },
}

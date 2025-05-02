import { axiosInstance } from '@/features/auth/services/axiosInstance'
import { AuthResponse } from '@/features/auth/types/types'

export interface RegisterPayload {
  username: string
  email: string
  password: string
}

export async function registerUser(
  payload: RegisterPayload
): Promise<AuthResponse> {
  try {
    const response = await axiosInstance.post<AuthResponse>('/api/register', payload)
    return response.data
  } catch (error) {
    throw error // Optional: wrap with custom error or logging here
  }
}

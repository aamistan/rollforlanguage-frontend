// /features/admin/services/userService.ts

import { axiosInstance } from '@/services/axiosInstance'

/** 📄 Represents a user returned by the backend */
export interface User {
  id: string
  username: string
  email: string
  role: 'superadmin' | 'admin' | 'teacher' | 'student'
  createdAt: string
}

/** 🔍 Query params for fetching users */
export interface UserQueryParams {
  search?: string
  role?: string
  roles?: string[]
  page?: number
  limit?: number
  sortBy?: 'username' | 'email' | 'createdAt'
  sortOrder?: 'asc' | 'desc'
  createdBefore?: string
  createdAfter?: string
  includeSuspended?: boolean
  includeCountOnly?: boolean
}

/** ✅ Payload structure for creating a new user */
export type CreateUserPayload = {
  email: string
  username: string
  password: string
  role: string
}

/** 📊 Structure of /admin/users/metrics response */
export interface UserMetricsResponse {
  totalUsers: number
  activeUsers: number
  suspendedUsers: number
  roles: {
    student?: number
    teacher?: number
    admin?: number
    superadmin?: number
  }
  newUsersPast7Days: number
}

/** 🧮 Structure of paginated user response */
export interface PaginatedUserResponse {
  data: User[]
  pagination: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

/** 🔗 GET /admin/users — Fetch users with query support */
export async function getUsers(params: UserQueryParams = {}): Promise<PaginatedUserResponse> {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== '' && value !== undefined && value !== null)
  )

  const response = await axiosInstance.get<PaginatedUserResponse>('/admin/users', {
    params: filteredParams,
  })
  return response.data
}

/** 🧙 POST /admin/users — Create a new user */
export async function createUser(payload: CreateUserPayload): Promise<{ message: string }> {
  const response = await axiosInstance.post('/admin/users', payload)
  return response.data
}

/** 📊 GET /admin/users/metrics — Fetch dashboard-level user stats */
export async function getUserMetrics(): Promise<UserMetricsResponse> {
  const response = await axiosInstance.get<UserMetricsResponse>('/admin/users/metrics')
  return response.data
}

/** 🧰 Exported service object for consistency & scalability */
export const userService = {
  getUsers,
  createUser,
  getUserMetrics,
}

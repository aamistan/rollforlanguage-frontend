// src/features/auth/types/types.ts

export interface User {
    id: string
    email: string
    username: string
    // Optional fields (expand as needed)
    roles?: string[]
    avatarUrl?: string
    createdAt?: string
    updatedAt?: string
  }
  
  export interface AuthResponse {
    token: string
    user: User
  }
  
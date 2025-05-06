import { jwtDecode } from 'jwt-decode'
import type { AuthStore } from '../stores/authStore'

export function isTokenExpiringSoon(token: string, bufferSeconds = 60): boolean {
  try {
    const decoded = jwtDecode<{ exp: number }>(token)
    const currentTime = Math.floor(Date.now() / 1000)
    return decoded.exp - currentTime < bufferSeconds
  } catch (error) {
    console.error('Failed to decode token:', error)
    return true // fallback: treat as expiring
  }
}

export async function ensureValidAccessToken(authStore: AuthStore): Promise<string> {
  const token = authStore.token

  if (!token) throw new Error('No access token available')

  if (isTokenExpiringSoon(token)) {
    console.log('Access token expiring soon — refreshing...')
    return await authStore.refreshTokenAction()
  }

  return token
}

// /src/features/admin/services/playableStatService.ts

import { axiosInstance } from '@/services/axiosInstance'

export interface PlayableStat {
  id: string
  name: string            // e.g., "strength" (machine-safe)
  displayName: string     // e.g., "Strength" (human-readable)
  description?: string
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

// 🔍 GET: Fetch all stat definitions
export async function getPlayableStats(includeInactive = false): Promise<PlayableStat[]> {
  const response = await axiosInstance.get('/admin/characters/stats', {
    params: includeInactive ? { includeInactive: true } : {},
  })
  return response.data
}

// ➕ POST: Create a new stat
export async function createPlayableStat(payload: {
  name: string
  displayName: string
  description?: string
}): Promise<PlayableStat> {
  const response = await axiosInstance.post('/admin/characters/stats', payload)
  return response.data
}

// 📝 PATCH: Update stat (partial updates allowed)
export async function updatePlayableStat(id: string, payload: {
  name?: string
  displayName?: string
  description?: string
  sortOrder?: number
}): Promise<PlayableStat> {
  const response = await axiosInstance.patch(`/admin/characters/stats/${id}`, payload)
  return response.data
}

// 🧼 DELETE: Soft-delete stat
export async function deletePlayableStat(id: string): Promise<void> {
  await axiosInstance.delete(`/admin/characters/stats/${id}`)
}

// ♻️ PATCH: Restore stat
export async function restorePlayableStat(id: string): Promise<void> {
  await axiosInstance.patch(`/admin/characters/stats/${id}/active`, {
    isActive: true,
  })
}

// ✅ TOGGLE: Unified toggle for soft-delete / restore
export async function togglePlayableStatActive(id: string, makeActive: boolean): Promise<PlayableStat> {
  const response = await axiosInstance.patch(`/admin/characters/stats/${id}/active`, {
    isActive: makeActive,
  })
  return response.data
}

// /src/features/admin/services/characterStatService.ts

import { axiosInstance } from '@/services/axiosInstance'

export interface CharacterStat {
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
export async function getCharacterStats(includeInactive = false): Promise<CharacterStat[]> {
  const response = await axiosInstance.get('/admin/characters/stats', {
    params: includeInactive ? { includeInactive: true } : {},
  })
  return response.data
}

// ➕ POST: Create a new stat
export async function createCharacterStat(payload: {
  name: string
  displayName: string
  description?: string
}): Promise<CharacterStat> {
  const response = await axiosInstance.post('/admin/characters/stats', payload)
  return response.data
}

// 📝 PATCH: Update stat (partial updates allowed)
export async function updateCharacterStat(id: string, payload: {
  name?: string
  displayName?: string
  description?: string
  sortOrder?: number
}): Promise<CharacterStat> {
  const response = await axiosInstance.patch(`/admin/characters/stats/${id}`, payload)
  return response.data
}

// 🧼 DELETE: Soft-delete stat
export async function deleteCharacterStat(id: string): Promise<void> {
  await axiosInstance.delete(`/admin/characters/stats/${id}`)
}

// ♻️ PATCH: Restore stat
export async function restoreCharacterStat(id: string): Promise<void> {
  await axiosInstance.patch(`/admin/characters/stats/${id}/active`, {
    isActive: true,
  })
}

// ✅ TOGGLE: Unified toggle for soft-delete / restore
export async function toggleCharacterStatActive(id: string, makeActive: boolean): Promise<CharacterStat> {
  const response = await axiosInstance.patch(`/admin/characters/stats/${id}/active`, {
    isActive: makeActive,
  })
  return response.data
}

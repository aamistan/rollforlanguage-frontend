// /src/features/admin/services/playableTagService.ts

import { axiosInstance } from '@/services/axiosInstance'

export interface CharacterTag {
  id: string
  name: string
  description?: string
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

// 🔍 GET all tags (optionally include inactive)
export async function getCharacterTags(includeInactive = false): Promise<CharacterTag[]> {
  const response = await axiosInstance.get('/admin/characters/tags', {
    params: includeInactive ? { includeInactive: true } : {},
  })
  return response.data
}

// ➕ POST: create a new tag
export async function createCharacterTag(payload: {
  name: string
  description?: string
}): Promise<CharacterTag> {
  const response = await axiosInstance.post('/admin/characters/tags', payload)
  return response.data
}

// 📝 PATCH: update tag name/description/sortOrder
export async function updateCharacterTag(id: string, payload: {
  name?: string
  description?: string
  sortOrder?: number
}): Promise<CharacterTag> {
  const response = await axiosInstance.patch(`/admin/characters/tags/${id}`, payload)
  return response.data
}

// 🗑 DELETE: soft-delete a tag (only works if unused)
export async function deleteCharacterTag(id: string): Promise<void> {
  await axiosInstance.delete(`/admin/characters/tags/${id}`)
}

// ♻️ PATCH: restore soft-deleted tag
export async function restoreCharacterTag(id: string): Promise<void> {
  await axiosInstance.patch(`/admin/characters/tags/${id}/active`, {
    isActive: true
  })
}

// 🔁 PATCH: toggle isActive to enable/disable tag
export async function toggleCharacterTagActive(id: string, isActive: boolean): Promise<CharacterTag> {
  const response = await axiosInstance.patch(`/admin/characters/tags/${id}/active`, { isActive })
  return response.data  // ✅ Fix: return the updated tag
}


// /src/features/admin/services/playableTagService.ts

import { axiosInstance } from '@/services/axiosInstance'

export interface PlayableTag {
  id: string
  name: string
  description?: string
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

// 🔍 GET all tags (optionally include inactive)
export async function getPlayableTags(includeInactive = false): Promise<PlayableTag[]> {
  const response = await axiosInstance.get('/admin/playable/tags', {
    params: includeInactive ? { includeInactive: true } : {},
  })
  return response.data
}

// ➕ POST: create a new tag
export async function createPlayableTag(payload: {
  name: string
  description?: string
}): Promise<PlayableTag> {
  const response = await axiosInstance.post('/admin/playable/tags', payload)
  return response.data
}

// 📝 PATCH: update tag name/description/sortOrder
export async function updatePlayableTag(id: string, payload: {
  name?: string
  description?: string
  sortOrder?: number
}): Promise<PlayableTag> {
  const response = await axiosInstance.patch(`/admin/playable/tags/${id}`, payload)
  return response.data
}

// 🗑 DELETE: soft-delete a tag (only works if unused)
export async function deletePlayableTag(id: string): Promise<void> {
  await axiosInstance.delete(`/admin/playable/tags/${id}`)
}

// ♻️ PATCH: restore soft-deleted tag
export async function restorePlayableTag(id: string): Promise<void> {
  await axiosInstance.patch(`/admin/playable/tags/${id}/active`, {
    isActive: true
  })
}

// 🔁 PATCH: toggle isActive to enable/disable tag
export async function togglePlayableTagActive(id: string, isActive: boolean): Promise<PlayableTag> {
  const response = await axiosInstance.patch(`/admin/playable/tags/${id}/active`, { isActive })
  return response.data  // ✅ Fix: return the updated tag
}


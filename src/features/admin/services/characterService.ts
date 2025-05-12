import { axiosInstance } from '@/services/axiosInstance'

export const characterService = {
  // Character Classes
  async getCharacterClasses(query: Record<string, any>) {
    const res = await axiosInstance.get('/admin/characters/classes', { params: query })
    return res.data
  },

  async getCharacterClassById(id: string) {
    const res = await axiosInstance.get(`/admin/characters/classes/${id}`)
    return res.data
  },

  async createCharacterClass(payload: any) {
    const res = await axiosInstance.post('/admin/characters/classes', payload)
    return res.data
  },

  async updateCharacterClass(id: string, payload: any) {
    const res = await axiosInstance.patch(`/admin/characters/classes/${id}`, payload)
    return res.data
  },

  async deleteCharacterClass(id: string) {
    const res = await axiosInstance.delete(`/admin/characters/classes/${id}`)
    return res.data
  },

  // Tags
  async getTags() {
    const res = await axiosInstance.get('/admin/characters/tags')
    return res.data
  },

  async createTag(name: string) {
    const res = await axiosInstance.post('/admin/characters/tags', { name })
    return res.data
  },

  async updateTag(id: string, payload: { name?: string; description?: string }) {
    const res = await axiosInstance.patch(`/admin/characters/tags/${id}`, payload)
    return res.data
  },

  async deleteTag(id: string) {
    const res = await axiosInstance.delete(`/admin/characters/tags/${id}`)
    return res.data
  },

  // Stat Registry
  async getStats() {
    const res = await axiosInstance.get('/admin/characters/stats')
    return res.data
  },

  async createStat(payload: { name: string; displayName: string; description?: string }) {
    const res = await axiosInstance.post('/admin/characters/stats', payload)
    return res.data
  },

  async updateStat(id: string, payload: { name?: string; displayName?: string; description?: string }) {
    const res = await axiosInstance.patch(`/admin/characters/stats/${id}`, payload)
    return res.data
  },

  async deleteStat(id: string) {
    const res = await axiosInstance.delete(`/admin/characters/stats/${id}`)
    return res.data
  },

  // Passive Abilities
  async getPassives() {
    const res = await axiosInstance.get('/admin/characters/passives')
    return res.data
  },

  async createPassive(payload: { name: string; description?: string }) {
    const res = await axiosInstance.post('/admin/characters/passives', payload)
    return res.data
  },

  async updatePassive(id: string, payload: { name?: string; description?: string }) {
    const res = await axiosInstance.patch(`/admin/characters/passives/${id}`, payload)
    return res.data
  },

  async deletePassive(id: string) {
    const res = await axiosInstance.delete(`/admin/characters/passives/${id}`)
    return res.data
  },

  // Media Upload
  async uploadIcon(file: File): Promise<{ url: string }> {
    const formData = new FormData()
    formData.append('file', file)
    const res = await axiosInstance.post('/admin/media/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return res.data
  },
}

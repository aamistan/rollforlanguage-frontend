import { axiosInstance } from '@/services/axiosInstance'

export const playableClassService = {
  // Playable Classes
  async getPlayableClasses(query: Record<string, any>) {
    const res = await axiosInstance.get('/admin/playable/classes', { params: query })
    return res.data
  },

  async getPlayableClassById(id: string) {
    const res = await axiosInstance.get(`/admin/playable/classes/${id}`)
    return res.data
  },

  async createPlayableClass(payload: any) {
    const res = await axiosInstance.post('/admin/playable/classes', payload)
    return res.data
  },

  async updatePlayableClass(id: string, payload: any) {
    const res = await axiosInstance.patch(`/admin/playable/classes/${id}`, payload)
    return res.data
  },

  async deletePlayableClass(id: string) {
    const res = await axiosInstance.delete(`/admin/playable/classes/${id}`)
    return res.data
  },

  // Tags
  async getTags() {
    const res = await axiosInstance.get('/admin/playable/tags')
    return res.data
  },

  async createTag(name: string) {
    const res = await axiosInstance.post('/admin/playable/tags', { name })
    return res.data
  },

  async updateTag(id: string, payload: { name?: string; description?: string }) {
    const res = await axiosInstance.patch(`/admin/playable/tags/${id}`, payload)
    return res.data
  },

  async deleteTag(id: string) {
    const res = await axiosInstance.delete(`/admin/playable/tags/${id}`)
    return res.data
  },

  // Stat Registry
  async getStats() {
    const res = await axiosInstance.get('/admin/playable/stats')
    return res.data
  },

  async createStat(payload: { name: string; displayName: string; description?: string }) {
    const res = await axiosInstance.post('/admin/playable/stats', payload)
    return res.data
  },

  async updateStat(id: string, payload: { name?: string; displayName?: string; description?: string }) {
    const res = await axiosInstance.patch(`/admin/playable/stats/${id}`, payload)
    return res.data
  },

  async deleteStat(id: string) {
    const res = await axiosInstance.delete(`/admin/playable/stats/${id}`)
    return res.data
  },

  // Passive Abilities
  async getPassives() {
    const res = await axiosInstance.get('/admin/playable/passives')
    return res.data
  },

  async createPassive(payload: { name: string; description?: string }) {
    const res = await axiosInstance.post('/admin/playable/passives', payload)
    return res.data
  },

  async updatePassive(id: string, payload: { name?: string; description?: string }) {
    const res = await axiosInstance.patch(`/admin/playable/passives/${id}`, payload)
    return res.data
  },

  async deletePassive(id: string) {
    const res = await axiosInstance.delete(`/admin/playable/passives/${id}`)
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

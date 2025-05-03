import { defineStore } from 'pinia'

export interface AdminState {
  isLoading: boolean
  error: string | null
  successMessage: string | null
  stats: {
    totalUsers: number
    activeCampaigns: number
    pendingContent: number
  }
}

export const useAdminStore = defineStore('admin', {
  state: (): AdminState => ({
    isLoading: false,
    error: null,
    successMessage: null,
    stats: {
      totalUsers: 0,
      activeCampaigns: 0,
      pendingContent: 0,
    },
  }),

  actions: {
    setLoading(status: boolean) {
      this.isLoading = status
    },

    setError(message: string | null) {
      this.error = message
    },

    setSuccess(message: string | null) {
      this.successMessage = message
    },

    updateStats(newStats: Partial<AdminState['stats']>) {
      this.stats = { ...this.stats, ...newStats }
    },

    clearMessages() {
      this.error = null
      this.successMessage = null
    },
  },
})

// /features/admin/stores/userDashboardStore.ts
import type { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import { userService, type CreateUserPayload } from '../services/userService'

export const useUserDashboardStore = defineStore('userDashboard', {
  state: () => ({
    // Existing state
    lastUserListRefresh: Date.now(),
    isBulkActionModalOpen: false,
    isManageRolesModalOpen: false,
    isAuditLogsModalOpen: false,
    isMergeUsersModalOpen: false,
    isGlobalSettingsModalOpen: false,
    selectedUsers: [] as number[],

    // ✅ New state for API interaction
    userCreationError: null as string | null,
  }),

  actions: {
    // ✅ New action
    async createUser(payload: CreateUserPayload): Promise<void> {
      this.userCreationError = null
      try {
        await userService.createUser(payload)
      } catch (error: unknown) {
        const axiosError = error as AxiosError<{ error: string }>
        this.userCreationError = axiosError.response?.data?.error || 'Failed to create user.'
        throw error
      }
    },

    // Existing actions
    refreshUserList() {
      console.log('🔄 Refreshing user list...')
      this.lastUserListRefresh = Date.now()
    },

    openAddUserForm() {
      console.log('➕ Opening add user form...')
    },

    searchUsers() {
      console.log('🔍 Triggering user search input focus...')
    },

    exportUsers() {
      console.log('📥 Exporting users to CSV...')
    },

    openBulkActionsModal() {
      console.log('✅ Opening bulk actions modal...')
      this.isBulkActionModalOpen = true
    },

    openManageRolesModal() {
      console.log('🛡 Opening manage roles modal...')
      this.isManageRolesModalOpen = true
    },

    openAuditLogsModal() {
      console.log('📋 Opening audit logs modal...')
      this.isAuditLogsModalOpen = true
    },

    openMergeUsersModal() {
      console.log('👥 Opening merge users modal...')
      this.isMergeUsersModalOpen = true
    },

    openGlobalUserSettingsModal() {
      console.log('⚙️ Opening global user settings modal...')
      this.isGlobalSettingsModalOpen = true
    },
  },
})

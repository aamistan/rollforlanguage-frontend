// /features/admin/stores/userDashboardStore.ts
import type { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import { userService, type CreateUserPayload } from '@/features/admin/services/userService'

export const useUserDashboardStore = defineStore('userDashboard', {
  state: () => ({
    // 🔄 Trigger for refreshing any user table widgets
    lastUserListRefresh: Date.now(),

    // 🧩 Modal toggles (scoped to sidebar tools)
    isBulkActionModalOpen: false,
    isManageRolesModalOpen: false,
    isAuditLogsModalOpen: false,
    isMergeUsersModalOpen: false,
    isGlobalSettingsModalOpen: false,

    // 🧠 Selection state
    selectedUsers: [] as number[],

    // ⚠️ Error handling
    userCreationError: null as string | null,
  }),

  actions: {
    // ✅ Backend integration: create user
    async createUser(payload: CreateUserPayload): Promise<void> {
      this.userCreationError = null
      try {
        await userService.createUser(payload)
        this.refreshUserList()
      } catch (error: unknown) {
        const axiosError = error as AxiosError<{ error: string }>
        this.userCreationError =
          axiosError.response?.data?.error || 'Failed to create user.'
        throw error
      }
    },

    // ✅ Table refresh trigger
    refreshUserList() {
      this.lastUserListRefresh = Date.now()
    },

    // 🧭 UI action toggles
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
      this.isBulkActionModalOpen = true
    },

    openManageRolesModal() {
      this.isManageRolesModalOpen = true
    },

    openAuditLogsModal() {
      this.isAuditLogsModalOpen = true
    },

    openMergeUsersModal() {
      this.isMergeUsersModalOpen = true
    },

    openGlobalUserSettingsModal() {
      this.isGlobalSettingsModalOpen = true
    },
  },
})

// /features/admin/stores/userDashboardStore.ts

import { defineStore } from 'pinia'

export const useUserDashboardStore = defineStore('userDashboard', {
  state: () => ({
    // Example reactive state (can expand later)
    lastUserListRefresh: Date.now(),
    isBulkActionModalOpen: false,
    isManageRolesModalOpen: false,
    isAuditLogsModalOpen: false,
    isMergeUsersModalOpen: false,
    isGlobalSettingsModalOpen: false,
    selectedUsers: [] as number[], // Example placeholder
  }),

  actions: {
    refreshUserList() {
      console.log('🔄 Refreshing user list...')
      this.lastUserListRefresh = Date.now()
    },

    openAddUserForm() {
      console.log('➕ Opening add user form...')
      // Trigger modal logic (if managed here) → placeholder
    },

    searchUsers() {
      console.log('🔍 Triggering user search input focus...')
      // Could emit event or set flag for focusing search input
    },

    exportUsers() {
      console.log('📥 Exporting users to CSV...')
      // Placeholder export logic
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

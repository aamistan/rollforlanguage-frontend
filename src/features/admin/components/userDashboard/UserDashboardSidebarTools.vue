<!-- /src/features/admin/components/userDashboard/UserDashboardSidebarTools.vue -->
<template>
  <div class="flex flex-col gap-4">
    <button
      v-for="tool in filteredTools"
      :key="tool.name"
      :class="[
        'flex items-center gap-2 px-4 py-2 rounded text-left transition group',
        'bg-white text-black dark:bg-black dark:text-white',
        'border border-transparent hover:ring-4 hover:ring-offset-2 focus:outline-none'
      ]"
      :style="{ '--tw-ring-color': accentValue }"
      @click="handleToolClick(tool.action!)"
    >
      <AppIcon :name="tool.icon" :library="tool.library" />
      <span>{{ tool.name }}</span>
    </button>

    <!-- Add User Modal -->
    <AdminModal
      :visible="isAddUserModalOpen"
      @close="isAddUserModalOpen = false"
      title="Add User"
    >
      <AddUserForm @success="handleAddUserSuccess" />
    </AdminModal>

    <!-- Manage Roles Modal -->
    <AdminModal
      :visible="isManageRolesModalOpen"
      @close="isManageRolesModalOpen = false"
      title="Manage Roles"
    >
      <p>This is placeholder content for manage roles modal.</p>
    </AdminModal>

    <!-- Audit Logs Modal -->
    <AdminModal
      :visible="isAuditLogsModalOpen"
      @close="isAuditLogsModalOpen = false"
      title="Audit Logs"
    >
      <p>This is placeholder content for audit logs modal.</p>
    </AdminModal>

    <!-- Merge Users Modal -->
    <AdminModal
      :visible="isMergeUsersModalOpen"
      @close="isMergeUsersModalOpen = false"
      title="Merge Users"
    >
      <p>This is placeholder content for merge users modal.</p>
    </AdminModal>

    <!-- Global User Settings Modal -->
    <AdminModal
      :visible="isGlobalSettingsModalOpen"
      @close="isGlobalSettingsModalOpen = false"
      title="Global User Settings"
    >
      <p>This is placeholder content for global user settings modal.</p>
    </AdminModal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, inject } from 'vue'
import AppIcon from '@/components/atoms/AppIcon.vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'
import AddUserForm from '@/features/admin/components/userDashboard/AddUserForm.vue'
import { useUserDashboardStore } from '@/features/admin/stores/userDashboardStore'
import { adminUserDashboardTools } from '@/features/admin/utils/adminUserDashboardTools'
import type { DashboardTheme } from '@/features/admin/utils/dashboardThemes'
import { useAuth } from '@/features/auth/hooks/useAuth'


// ✅ Dynamically pull accent color value from injected theme
const dashboardThemeRef = inject<ComputedRef<DashboardTheme | undefined>>('dashboardTheme')
const accentValue = dashboardThemeRef?.value?.accentValue ?? '#3b82f6'

const { user } = useAuth()
const userRole = user.value?.roles?.[0] === 'superadmin' ? 'superadmin' : 'admin'

const filteredTools = computed(() =>
  adminUserDashboardTools.filter(tool =>
    !tool.roles || tool.roles.includes(userRole)
  )
)

const isAddUserModalOpen = ref(false)
const isManageRolesModalOpen = ref(false)
const isAuditLogsModalOpen = ref(false)
const isMergeUsersModalOpen = ref(false)
const isGlobalSettingsModalOpen = ref(false)

const userDashboardStore = useUserDashboardStore()

function handleToolClick(action: string) {
  switch (action) {
    case 'addUser':
      isAddUserModalOpen.value = true
      break
    case 'manageRoles':
      isManageRolesModalOpen.value = true
      break
    case 'viewAuditLogs':
      isAuditLogsModalOpen.value = true
      break
    case 'mergeUsers':
      isMergeUsersModalOpen.value = true
      break
    case 'globalUserSettings':
      isGlobalSettingsModalOpen.value = true
      break
    case 'searchUsers':
      userDashboardStore.searchUsers()
      break
    case 'exportUsers':
      userDashboardStore.exportUsers()
      break
    case 'bulkActions':
      userDashboardStore.openBulkActionsModal()
      break
    default:
      console.log(`Tool clicked: ${action}`)
  }
}

function handleAddUserSuccess() {
  isAddUserModalOpen.value = false
  userDashboardStore.refreshUserList()
}

// 🧪 Debug inline ring color value
console.log('[UserSidebarTools.vue] accentValue for ring:', accentValue)
</script>

<template>
  <div class="flex flex-col gap-4">
    <div v-for="tool in tools" :key="tool.name">
      <!-- Top-level tool button -->
      <button
        class="flex w-full items-center justify-between gap-2 rounded bg-white px-4 py-2 text-left text-black hover:bg-gray-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
        @click="toggleSubmenu(tool)"
      >
        <div class="flex items-center gap-2">
          <AppIcon :name="tool.icon" :library="tool.library" />
          <span>{{ tool.name }}</span>
        </div>
        <span v-if="tool.children">▸</span>
      </button>

      <!-- Submenu if tool has children -->
      <div
        v-if="tool.children && openSubmenu === tool.name"
        class="ml-6 mt-2 flex flex-col gap-2"
      >
        <button
          v-for="child in tool.children"
          :key="child.name"
          class="flex items-center gap-2 rounded bg-gray-100 px-3 py-1 text-sm text-black hover:bg-gray-200 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600"
          @click="handleAction(child.action)"
        >
          <AppIcon :name="child.icon" :library="child.library" />
          <span>{{ child.name }}</span>
        </button>
      </div>
    </div>

    <!-- Character Class Modal -->
    <CharacterClassModal />

    <!-- Placeholder modals -->
    <AdminModal
      title="Browse Classes"
      :visible="isBrowseClassesModalOpen"
      @close="isBrowseClassesModalOpen = false"
      size="5xl"
    >
      <p class="text-gray-700 dark:text-gray-200">Coming soon: fully featured class table.</p>
    </AdminModal>

    <AdminModal
      title="Manage Stat Names"
      :visible="isManageStatsModalOpen"
      @close="isManageStatsModalOpen = false"
    >
      <p class="text-gray-700 dark:text-gray-200">Placeholder for stat registry management.</p>
    </AdminModal>

    <AdminModal
      title="Manage Passives"
      :visible="isManagePassivesModalOpen"
      @close="isManagePassivesModalOpen = false"
    >
      <p class="text-gray-700 dark:text-gray-200">Placeholder for passive ability glossary.</p>
    </AdminModal>

    <AdminModal
      title="Manage Tags"
      :visible="isManageTagsModalOpen"
      @close="isManageTagsModalOpen = false"
    >
      <p class="text-gray-700 dark:text-gray-200">Placeholder for tag management interface.</p>
    </AdminModal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AppIcon from '@/components/atoms/AppIcon.vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'
import CharacterClassModal from '@/features/admin/components/characterDashboard/CharacterClassModal.vue'
import { adminCharacterDashboardTools } from '@/features/admin/utils/adminCharacterDashboardTools'
import type { AdminDashboardTool } from '@/features/admin/utils/adminDashboardTools'
import { useAdminCharacterStore } from '@/features/admin/stores/adminCharacterStore'
import { useAuth } from '@/features/auth/hooks/useAuth'

const store = useAdminCharacterStore()

const { user } = useAuth()
const userRole = user.value?.roles?.[0] === 'superadmin' ? 'superadmin' : 'admin'

const tools = computed(() =>
  adminCharacterDashboardTools.filter(
    tool => !tool.roles || tool.roles.includes(userRole)
  )
)

const openSubmenu = ref<string | null>(null)

function toggleSubmenu(tool: AdminDashboardTool) {
  if (!tool.children) {
    handleAction(tool.action)
    return
  }

  openSubmenu.value = openSubmenu.value === tool.name ? null : tool.name
}

// Modal state
const isBrowseClassesModalOpen = ref(false)
const isManageStatsModalOpen = ref(false)
const isManagePassivesModalOpen = ref(false)
const isManageTagsModalOpen = ref(false)

function handleAction(action?: string) {
  if (!action) return

  switch (action) {
    case 'createClass':
      store.showCreateModal = true
      break
    case 'browseClasses':
      isBrowseClassesModalOpen.value = true
      break
    case 'refreshClasses':
      store.refreshClassList()
      break
    case 'exportClasses':
      store.exportClassList?.() // optional chaining if not yet implemented
      break
    case 'manageStats':
      isManageStatsModalOpen.value = true
      break
    case 'managePassives':
      isManagePassivesModalOpen.value = true
      break
    case 'manageClassTags':
      isManageTagsModalOpen.value = true
      break
    default:
      console.log(`Unhandled action: ${action}`)
  }
}
</script>

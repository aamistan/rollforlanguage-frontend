<template>
  <div class="flex flex-col gap-4">
    <div v-for="tool in tools" :key="tool.name">
      <!-- Parent Button -->
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

      <!-- Submenu (if applicable) -->
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AppIcon from '@/components/atoms/AppIcon.vue'
import { adminCharacterDashboardTools } from '@/features/admin/utils/adminCharacterDashboardTools'
import type { AdminDashboardTool } from '@/features/admin/utils/adminDashboardTools'
import { useAuth } from '@/features/auth/hooks/useAuth'

// Auth-based filtering (optional roles)
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

function handleAction(action?: string) {
  if (!action) return
  // Stub: route to store/actions, modals, etc.
  console.log(`Tool clicked: ${action}`)
}
</script>

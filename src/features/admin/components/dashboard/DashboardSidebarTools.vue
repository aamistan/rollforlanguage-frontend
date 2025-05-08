<template>
  <div class="flex flex-col gap-4">
    <button
      v-for="tool in filteredTools"
      :key="tool.name"
      class="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-gray-400 rounded text-left"
      @click="handleToolClick(tool.action)"
    >
      <AppIcon :name="tool.icon" :library="tool.library" />
      <span>{{ tool.name }}</span>
    </button>

    <!-- Modal for system logs -->
    <AdminModal
      :visible="isLogsModalOpen"
      @close="isLogsModalOpen = false"
      title="System Logs"
    >
      <p>This is placeholder content for system logs modal.</p>
    </AdminModal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { defineProps } from 'vue'
import AppIcon from '@/components/atoms/AppIcon.vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'
import { useDashboardStore } from '@/features/admin/stores/dashboardStore'
import { adminDashboardTools } from '@/features/admin/utils/adminDashboardTools'


const dashboardStore = useDashboardStore()



const props = defineProps<{
  userRole: 'admin' | 'superadmin'
}>()

const filteredTools = computed(() =>
  adminDashboardTools.filter(tool =>
    !tool.roles || tool.roles.includes(props.userRole)
  )
)

const isLogsModalOpen = ref(false)

function handleToolClick(action: string) {
  if (action === 'viewSystemLogs') {
    isLogsModalOpen.value = true
  } else if (action === 'refreshMetrics') {
    dashboardStore.refreshMetrics()
  } else if (action === 'customizeDashboard') {
    dashboardStore.enterCustomize()
  } else if (action === 'expandAlertsPanel') {
    dashboardStore.toggleAlerts()
  } else {
    console.log(`Tool clicked: ${action}`)
  }
}

</script>

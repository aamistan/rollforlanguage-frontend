<template>
  <div class="relative bg-white rounded-lg shadow p-4 group">
    <!-- 🛠 Hover tools overlay -->
    <button
      @click="isModalOpen = true"
      class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-600 hover:bg-gray-900 text-white rounded p-1"
      aria-label="Widget Tools"
    >
      🛠
    </button>

    <!-- 📊 Snapshot Stats -->
    <h2 class="text-lg font-bold mb-2 text-gray-900">User Overview</h2>
    <ul class="space-y-1 text-sm text-gray-800">
      <li><strong>{{ totalUsers }}</strong> total users</li>
      <li><strong>{{ roleCounts.admin }}</strong> Admins</li>
      <li><strong>{{ roleCounts.teacher }}</strong> Teachers</li>
      <li><strong>{{ roleCounts.student }}</strong> Students</li>
    </ul>


    <!-- 🪟 Modal with user table -->
    <AdminModal
      :visible="isModalOpen"
      @close="isModalOpen = false"
      title="User Management"
      size="4x1"
    >
      <UserTable />
    </AdminModal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'
import UserTable from '@/features/admin/components/userDashboard/UserTable.vue'
import { useUserDashboardStore } from '@/features/admin/stores/userDashboardStore'

// Modal open/close state
const isModalOpen = ref(false)

// Simulated data (to be replaced with real API results)
const totalUsers = ref(237)
const roleCounts = ref({
  admin: 12,
  teacher: 50,
  student: 175,
})

// React to refresh triggers
const userDashboardStore = useUserDashboardStore()
watchEffect(() => {
  const refresh = userDashboardStore.lastUserListRefresh
  console.log('🔄 User snapshot widget refreshed at:', refresh)

  // TODO: Replace with actual data fetch when userService.getStats() exists
})
</script>

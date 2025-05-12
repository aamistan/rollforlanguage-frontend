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

    <p v-if="loading" class="text-sm text-gray-600">Loading...</p>

    <ul v-else-if="metrics" class="space-y-1 text-sm text-gray-800">
      <li><strong>{{ metrics.totalUsers }}</strong> total users</li>
      <li><strong>{{ metrics.roles.admin || 0 }}</strong> Admins</li>
      <li><strong>{{ metrics.roles.teacher || 0 }}</strong> Teachers</li>
      <li><strong>{{ metrics.roles.student || 0 }}</strong> Students</li>
    </ul>

    <p v-else class="text-sm text-red-600">Failed to load user metrics.</p>

    <!-- 🪟 Modal with user table -->
    <AdminModal
      :visible="isModalOpen"
      @close="isModalOpen = false"
      title="User Management"
      size="4xl"
    >
      <UserTable />
    </AdminModal>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import AdminModal from '@/features/admin/components/shared/AdminModal.vue'
import UserTable from '@/features/admin/components/userDashboard/UserTable.vue'
import { userService, type UserMetricsResponse } from '@/features/admin/services/userService'
import { useUserDashboardStore } from '@/features/admin/stores/userDashboardStore'


// Modal open/close state
const isModalOpen = ref(false)

// Reactive state for metrics
const loading = ref(true)
const metrics = ref<UserMetricsResponse | null>(null)

// Dashboard store (for refresh events)
const userDashboardStore = useUserDashboardStore()

// Fetch metrics when mounted or dashboard refresh triggered
watchEffect(async () => {
  loading.value = true
  try {
    await userDashboardStore.fetchUserMetrics()
    metrics.value = userDashboardStore.userMetrics
  } catch {
    metrics.value = null
  } finally {
    loading.value = false
  }
})
</script>

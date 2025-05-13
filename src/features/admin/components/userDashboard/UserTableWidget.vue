<!-- /src/features/admin/components/userDashboard/UserTableWidget.vue -->

<template>
  <WidgetWrapper title="User Overview" icon="Users">
    <template #hover-tools>
      <button
        @click="isModalOpen = true"
        class="text-sm text-blue-600 hover:underline"
      >
        🛠 Manage
      </button>
    </template>

    <!-- 📊 Snapshot Stats -->
    <p v-if="loading" class="text-sm">Loading...</p>

    <ul v-else-if="metrics" class="space-y-1 text-sm">
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
  </WidgetWrapper>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import WidgetWrapper from '@/components/molecules/WidgetWrapper.vue'
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

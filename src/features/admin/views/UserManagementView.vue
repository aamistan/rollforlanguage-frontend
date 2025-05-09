<template>
  <section class="p-6 space-y-6">
    <DashboardWidgetGrid>
      <UserTableWidget />

      <UserMetricsWidget />

      <FlaggedUsersWidget />

      <!-- Future: Add superadmin-only widgets here -->
      <!-- Example:
      <RoleManagementWidget v-if="userRole === 'super-admin'" />
      -->
    </DashboardWidgetGrid>
  </section>
</template>

<script setup lang="ts">
import DashboardWidgetGrid from '@/features/admin/components/dashboard/DashboardWidgetGrid.vue'
import FlaggedUsersWidget from '@/features/admin/components/userDashboard/FlaggedUsersWidget.vue'
import UserMetricsWidget from '@/features/admin/components/userDashboard/UserMetricsWidget.vue'
import UserTableWidget from '@/features/admin/components/userDashboard/UserTableWidget.vue'

import { useAuth } from '@/features/auth/hooks/useAuth'

const { user } = useAuth()
const userRole = user.value?.roles?.[0] || 'admin'
</script>

<style scoped>
/* Optional: user dashboard-specific styles */
</style>

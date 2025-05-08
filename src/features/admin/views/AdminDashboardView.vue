<template>
  <section class="p-6 space-y-6">
    <!-- ✅ Welcome Banner -->
    <WelcomeBanner :username="userName" :role="userRole" />

    <!-- ✅ Widget Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UserMetricsWidget />
      <SystemOverviewWidget />
      <ContentSummaryWidget />
    </div>
  </section>
</template>

<script setup lang="ts">
import ContentSummaryWidget from '@/features/admin/components/dashboard/ContentSummaryWidget.vue'
import SystemOverviewWidget from '@/features/admin/components/dashboard/SystemOverviewWidget.vue'
import UserMetricsWidget from '@/features/admin/components/dashboard/UserMetricsWidget.vue'
import WelcomeBanner from '@/features/admin/components/dashboard/WelcomeBanner.vue'
import { useAuth } from '@/features/auth/hooks/useAuth'

const { user } = useAuth()

const userName = user.value?.username || 'Admin'
const userRole = user.value?.roles?.[0] || 'admin'
</script>

<style scoped>
/* Optional: dashboard-specific styles */
</style>

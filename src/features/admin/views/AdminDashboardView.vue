<template>
  <div class="min-h-screen bg-cover bg-center" :style="backgroundStyle">
    <AdminBars>
      <section class="p-6 space-y-6">
        <h2 class="text-2xl font-bold text-white">Welcome, {{ userName }}!</h2>

        <!-- Dashboard Widgets Area -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-black bg-opacity-50 rounded-lg p-4 text-white">
            <h3 class="text-lg font-semibold">System Overview</h3>
            <p class="text-sm">Summary stats, server health, etc.</p>
          </div>

          <div class="bg-black bg-opacity-50 rounded-lg p-4 text-white">
            <h3 class="text-lg font-semibold">User Metrics</h3>
            <p class="text-sm">Active users, signups, roles.</p>
          </div>

          <div class="bg-black bg-opacity-50 rounded-lg p-4 text-white">
            <h3 class="text-lg font-semibold">Content Summary</h3>
            <p class="text-sm">Quests, campaigns, language packs.</p>
          </div>
        </div>
      </section>
    </AdminBars>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AdminBars from '@/features/admin/components/AdminBars.vue'
import { useAuth } from '@/features/auth/hooks/useAuth'

const { user } = useAuth()

const userName = user.value?.username || 'Admin'

const backgroundStyle = computed(() => ({
  backgroundImage: "url('/backgrounds/bg-admin.webp')", // adjust path if needed
}))
</script>

<style scoped>
/* Optional: Add dashboard-specific styles here */
</style>

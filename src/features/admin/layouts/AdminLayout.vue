<!-- /src/features/admin/layouts/AdminLayout.vue -->
<template>
  <div class="min-h-screen bg-cover bg-center" :style="backgroundStyle">
    <!-- Topbar -->
    <Topbar />

    <div class="flex flex-1">
      <!-- Sidebar with injected tools -->
      <Sidebar>
        <template #tools>
          <DashboardSidebarTools
            v-if="currentRouteName === 'AdminDashboard'"
            :user-role="userRole"
          />

          <UserDashboardSidebarTools
            v-else-if="currentRouteName === 'AdminUsers'"
          />

          <CharacterDashboardSidebarTools
            v-else-if="currentRouteName === 'AdminCharacters'"
          />
        </template>
      </Sidebar>

      <!-- Main content -->
      <main class="flex-1 p-6 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { useRoute } from 'vue-router'

import CharacterDashboardSidebarTools from '@/features/admin/components/characterDashboard/CharacterDashboardSidebarTools.vue'
import DashboardSidebarTools from '@/features/admin/components/dashboard/DashboardSidebarTools.vue'
import UserDashboardSidebarTools from '@/features/admin/components/userDashboard/UserDashboardSidebarTools.vue'
import { dashboardThemes } from '@/features/admin/utils/dashboardThemes'
import type { DashboardTheme } from '@/features/admin/utils/dashboardThemes'
import Sidebar from '../components/Sidebar.vue'
import Topbar from '../components/Topbar.vue'

// Get current route name
const route = useRoute()
const currentRouteName = computed(() => route.name)

// Determine theme for current route
const currentTheme = computed<DashboardTheme | undefined>(() =>
  dashboardThemes.find(t => t.routeName === currentRouteName.value)
)

// Make theme available to child components via inject()
provide('dashboardTheme', currentTheme)

// Placeholder user role (in future, pull from auth store)
const userRole = 'superadmin'

// Admin background
const backgroundStyle = {
  backgroundImage: "url('/backgrounds/bg-admin.webp')"
}
</script>

<style scoped>
/* Optional: Add layout-specific styles here */
</style>

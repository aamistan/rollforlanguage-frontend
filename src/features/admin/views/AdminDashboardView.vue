<template>
  <section class="min-h-screen bg-cover bg-center p-6 space-y-6">
    <!-- ✅ Use WelcomeBanner here -->
    <WelcomeBanner :username="userName" :role="userRole" />

    <!-- Widget Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="widget in widgets"
        :key="widget.title"
        class="bg-black bg-opacity-50 rounded-lg p-4 text-white shadow hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4"
      >
        <Icon :name="widget.icon" :library="widget.iconLibrary" class="w-8 h-8 text-indigo-400" />
        <div>
          <h3 class="text-lg font-semibold">{{ widget.title }}</h3>
          <p class="text-sm">{{ widget.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from '@/components/atoms/AppIcon.vue'
import WelcomeBanner from '@/features/admin/components/dashboard/WelcomeBanner.vue'
import { useAuth } from '@/features/auth/hooks/useAuth'



const { user } = useAuth()

const userName = user.value?.username || 'Admin'
const userRole = user.value?.roles?.[0] || 'admin'


const widgets: {
  title: string
  description: string
  icon: string
  iconLibrary: 'lucide' | 'heroicons' | 'iconify'
}[] = [
  { title: 'System Overview', description: 'Summary stats, server health, logs.', icon: 'ServerCog', iconLibrary: 'lucide' },
  { title: 'User Metrics', description: 'Active users, signups, roles.', icon: 'Users', iconLibrary: 'lucide' },
  { title: 'Content Summary', description: 'Quests, campaigns, language packs.', icon: 'BookText', iconLibrary: 'lucide' },
]

</script>

<style scoped>
/* Optional: dashboard-specific styles */
</style>

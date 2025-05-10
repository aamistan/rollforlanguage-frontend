<template>
  <div class="space-y-4">
    <!-- 🔍 Search Bar -->
    <div class="flex items-center justify-between">
      <input
        v-model="search"
        type="text"
        placeholder="Search users..."
        class="input w-full max-w-xs"
      />
    </div>

    <!-- 📋 User Table -->
    <div class="overflow-x-auto">
      <table class="min-w-full table-auto border-collapse text-sm text-gray-900">
        <thead class="bg-gray-100 text-left">
          <tr>
            <th class="px-4 py-2">Username</th>
            <th class="px-4 py-2">Email</th>
            <th class="px-4 py-2">Role</th>
            <th class="px-4 py-2">Created</th>
            <th class="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200">
          <tr
            v-for="user in filteredUsers"
            :key="user.id"
            class="border-b bg-gray-900 text-gray-200 hover:bg-white hover:text-gray-900 transition-colors"
          >
            <td class="px-4 py-2">{{ user.username }}</td>
            <td class="px-4 py-2">{{ user.email }}</td>
            <td class="px-4 py-2">
              <span
                :class="[
                  'inline-block px-2 py-1 rounded text-xs font-medium',
                  roleColors[user.role] || 'bg-gray-300 text-gray-800',
                ]"
              >
                {{ user.role }}
              </span>
            </td>
            <td class="px-4 py-2">{{ formatDate(user.createdAt) }}</td>
            <td class="px-4 py-2 text-center text-gray-400 italic">–</td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Mocked user data (replace with real API integration later)
const users = ref([
  {
    id: 1,
    username: 'admin_hero',
    email: 'admin@example.com',
    role: 'admin',
    createdAt: '2025-05-01T12:00:00Z',
  },
  {
    id: 2,
    username: 'frau.lehrerin',
    email: 'teacher@example.com',
    role: 'teacher',
    createdAt: '2025-04-27T08:15:00Z',
  },
  {
    id: 3,
    username: 'novice_knight',
    email: 'student@example.com',
    role: 'student',
    createdAt: '2025-05-05T16:30:00Z',
  },
])

const search = ref('')

const filteredUsers = computed(() => {
  if (!search.value) return users.value
  return users.value.filter(
    (u) =>
      u.username.toLowerCase().includes(search.value.toLowerCase()) ||
      u.email.toLowerCase().includes(search.value.toLowerCase())
  )
})

function formatDate(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

const roleColors: Record<string, string> = {
  superadmin: 'bg-purple-100 text-purple-800',
  admin: 'bg-blue-100 text-blue-800',
  teacher: 'bg-green-100 text-green-800',
  student: 'bg-yellow-100 text-yellow-800',
}
</script>

<style scoped>
.input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  color: #111;
  background-color: #fff;
}
</style>

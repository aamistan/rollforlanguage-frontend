<template>
  <div class="space-y-4">
    <!-- 🔍 Search Bar -->
    <div class="flex items-center justify-between flex-wrap gap-4">
      <input
        v-model="search"
        type="text"
        placeholder="Search users..."
        class="input w-full max-w-xs"
      />

      <select v-model="limit" class="input w-24">
        <option v-for="opt in [10, 25, 50, 100]" :key="opt" :value="opt">
          {{ opt }} / page
        </option>
      </select>
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
        <tbody
          v-if="!loading && users.length"
          class="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200"
        >
          <tr
            v-for="user in users"
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
        <tbody v-else-if="loading">
          <tr><td colspan="5" class="text-center p-4 text-gray-500">Loading users…</td></tr>
        </tbody>
        <tbody v-else>
          <tr><td colspan="5" class="text-center p-4 text-gray-500">No users found.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- 📄 Pagination Controls -->
    <div class="flex items-center justify-between pt-2 text-sm text-gray-600 dark:text-gray-300">
      <div>
        Page {{ page }} of {{ pagination.totalPages }} • {{ pagination.total }} total users
      </div>
      <div class="flex gap-2">
        <button
          class="btn"
          :disabled="page === 1 || loading"
          @click="page--"
        >
          ⬅ Prev
        </button>
        <button
          class="btn"
          :disabled="page === pagination.totalPages || loading"
          @click="page++"
        >
          Next ➡
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { userService } from '@/features/admin/services/userService'
import type { User } from '@/features/admin/services/userService'
import { useUserDashboardStore } from '@/features/admin/stores/userDashboardStore'

const users = ref<User[]>([])
const search = ref('')
const page = ref(1)
const limit = ref(25)
const loading = ref(false)
const error = ref<string | null>(null)
const pagination = ref({
  total: 0,
  page: 1,
  limit: 25,
  totalPages: 1,
})

const userDashboardStore = useUserDashboardStore()

async function fetchUsers() {
  loading.value = true
  error.value = null
  try {
    const response = await userService.getUsers({
      search: search.value,
      page: page.value,
      limit: limit.value,
      sortBy: 'createdAt',
      sortOrder: 'desc',
    })
    users.value = response.data
    pagination.value = response.pagination
  } catch (err) {
    error.value = 'Failed to load users.'
    console.error(err)
  } finally {
    loading.value = false
  }
}

// 🔁 Load on init
fetchUsers()

// 🔍 Debounced search watcher
let timeout: ReturnType<typeof setTimeout>
watch(search, () => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    page.value = 1
    fetchUsers()
  }, 300)
})

// 📄 Page / Limit watchers
watch([page, limit], () => {
  fetchUsers()
})

// 🔄 Refresh trigger from dashboard
watch(
  () => userDashboardStore.lastUserListRefresh,
  () => {
    fetchUsers()
  }
)

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
.btn {
  padding: 0.25rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  background-color: #f8f8f8;
  color: #333;
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

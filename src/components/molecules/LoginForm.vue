<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from '@/features/auth/stores/authStore'
import InputField from '@/components/atoms/InputField.vue'
import LoadingSpinner from '@/components/atoms/LoadingSpinner.vue'
import ErrorBanner from '@/components/molecules/ErrorBanner.vue'

const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

const submit = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    await authStore.login({ email: email.value, password: password.value })
    // You can emit a success event here if desired
    // emit('success')
  } catch (error) {
    errorMessage.value = 'Invalid email or password.'
    console.error(error)
  } finally {
    loading.value = false
  }
}

const dismissError = () => {
  errorMessage.value = ''
}
</script>

<template>
  <form @submit.prevent="submit" class="space-y-4">
    <ErrorBanner v-if="errorMessage" :message="errorMessage" @dismiss="dismissError" />

    <InputField v-model="email" type="email" label="Email" placeholder="Enter your email" />
    <InputField v-model="password" type="password" label="Password" placeholder="Enter your password" />

    <button
      type="submit"
      class="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:opacity-50"
      :disabled="loading"
    >
      <LoadingSpinner v-if="loading" class="mr-2" />
      <span>{{ loading ? 'Logging in...' : 'Login' }}</span>
    </button>
  </form>
</template>

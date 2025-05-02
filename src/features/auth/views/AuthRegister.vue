<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Heading -->
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-2">Create Your Account</h1>
      <p class="text-sm text-muted">Join our adventure and start your language-learning journey!</p>
    </div>

    <!-- Username -->
    <div>
      <label for="username" class="block text-sm font-medium mb-1">
        Username
      </label>
      <input
        id="username"
        v-model="form.username"
        type="text"
        class="w-full input-field"
        :class="{ 'input-error': errors.username }"
        placeholder="Choose a unique username"
      />
      <p v-if="errors.username" class="text-sm text-error mt-1">{{ errors.username }}</p>
    </div>

    <!-- Email -->
    <div>
      <label for="email" class="block text-sm font-medium mb-1">
        Email Address
      </label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        class="w-full input-field"
        :class="{ 'input-error': errors.email }"
        placeholder="you@example.com"
      />
      <p v-if="errors.email" class="text-sm text-error mt-1">{{ errors.email }}</p>
    </div>

    <!-- Password -->
    <div>
      <label for="password" class="block text-sm font-medium mb-1">
        Password
      </label>
      <input
        id="password"
        v-model="form.password"
        type="password"
        class="w-full input-field"
        :class="{ 'input-error': errors.password }"
        placeholder="Create a strong password"
      />
      <p v-if="errors.password" class="text-sm text-error mt-1">{{ errors.password }}</p>
    </div>

    <!-- Confirm Password -->
    <div>
      <label for="confirmPassword" class="block text-sm font-medium mb-1">
        Confirm Password
      </label>
      <input
        id="confirmPassword"
        v-model="form.confirmPassword"
        type="password"
        class="w-full input-field"
        :class="{ 'input-error': errors.confirmPassword }"
        placeholder="Re-enter your password"
      />
      <p v-if="errors.confirmPassword" class="text-sm text-error mt-1">{{ errors.confirmPassword }}</p>
    </div>

    <!-- Terms & Conditions -->
    <div class="flex items-center">
      <input
        id="terms"
        v-model="form.agreeToTerms"
        type="checkbox"
        class="checkbox"
      />
      <label for="terms" class="ml-2 text-sm">
        I agree to the Terms and Conditions
      </label>
    </div>
    <p v-if="errors.agreeToTerms" class="text-sm text-error mt-1">{{ errors.agreeToTerms }}</p>

    <!-- Submit Button -->
    <div>
      <button
        type="submit"
        class="w-full btn-primary"
        :disabled="isSubmitting"
      >
        <span v-if="isSubmitting">Creating Account...</span>
        <span v-else>Sign Up</span>
      </button>
    </div>

    <!-- Already have account? -->
    <p class="text-center text-sm mt-4">
      Already have an account?
      <RouterLink to="/login" class="text-link hover:underline">
        Log in here
      </RouterLink>
    </p>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRegisterStore } from '@/features/auth/stores/useRegisterStore';

const registerStore = useRegisterStore();

// Form state
const form = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false,
});

// Errors
const errors = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: '',
});

// Loading state
const isSubmitting = ref(false);

// Simple front-end validation
function validateForm() {
  let valid = true;

  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key] = '';
  });

  if (!form.username) {
    errors.username = 'Username is required';
    valid = false;
  }

  if (!form.email) {
    errors.email = 'Email is required';
    valid = false;
  }

  if (!form.password) {
    errors.password = 'Password is required';
    valid = false;
  }

  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
    valid = false;
  }

  if (!form.agreeToTerms) {
    errors.agreeToTerms = 'You must agree to the terms';
    valid = false;
  }

  return valid;
}

// Submit handler
async function handleSubmit() {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  try {
    const result = await registerStore.register({
      username: form.username,
      email: form.email,
      password: form.password,
    });

    // Handle success (optional: redirect, show success message, etc.)
    console.log('Registration successful', result);
  } catch (error) {
    // Handle backend errors (map to UI if needed)
    console.error('Registration failed', error);
    if (error.response?.data?.message) {
      // You can map backend error to UI here
      alert(`Error: ${error.response.data.message}`);
    }
  } finally {
    isSubmitting.value = false;
  }
}
</script>

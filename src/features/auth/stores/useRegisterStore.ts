import { defineStore } from 'pinia';
import { registerUser } from '@/features/auth/services/registerService';

export const useRegisterStore = defineStore('register', {
  state: () => ({
    user: null,  // You can store the user or token here if needed
  }),

  actions: {
    async register({ username, email, password }) {
      try {
        const response = await registerUser({ username, email, password });

        // You can store the user/token if returned
        this.user = response.data.user;

        return response.data;
      } catch (error) {
        console.error('RegisterStore error:', error);
        throw error; // Let the component handle user-facing errors
      }
    },
  },
});

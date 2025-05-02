import axios from '@/services/axiosInstance'; // ← Adjust if you have a global axios setup

interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export async function registerUser(payload: RegisterPayload) {
  try {
    const response = await axios.post('/api/register', payload);
    return response;
  } catch (error) {
    // Log or process here if you want, but generally pass up to store
    throw error;
  }
}

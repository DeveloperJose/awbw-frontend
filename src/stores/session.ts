import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { UserSession } from '@/api/sessionApi';
import * as sessionApi from '@/api/sessionApi';

export const useSessionStore = defineStore('session', () => {
  const session = ref<UserSession | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function login(username: string, password: string) {
    loading.value = true;
    error.value = null;
    const response = await sessionApi.login(username, password);
    loading.value = false;

    if (response.success) {
      await fetchSession();
    } else {
      error.value = response.errorMessage;
    }
  }

  async function fetchSession() {
    loading.value = true;
    error.value = null;
    const response = await sessionApi.getSession();
    loading.value = false;

    if (response.success) {
      session.value = response;
    } else {
      session.value = null;
      error.value = response.errorMessage;
    }
  }

  return {
    session,
    loading,
    error,
    login,
    fetchSession,
  };
});

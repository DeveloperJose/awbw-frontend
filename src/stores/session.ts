// Preferences stored in the AWBW server
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

    if (response.isErr()) {
      error.value = response.error.errorMessage;
      return response;
    }

    return await fetchSession();
  }

  async function logout() {
    loading.value = true;
    error.value = null;
    const response = await sessionApi.logout();
    loading.value = false;
    if (response.isErr()) {
      error.value = response.error.errorMessage;
      return response;
    }

    session.value = null;
    return response;
  }

  async function fetchSession() {
    loading.value = true;
    error.value = null;

    const response = await sessionApi.getSession();
    loading.value = false;
    if (response.isErr()) {
      session.value = null;
      error.value = response.error.errorMessage;
      return response;
    }

    session.value = response.value;
    return response;
  }

  return {
    session,
    loading,
    error,
    login,
    logout,
    fetchSession,
  };
});

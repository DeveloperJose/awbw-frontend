<script setup lang="ts">
import { onMounted } from 'vue';
import LayoutDefault from '@/layouts/LayoutDefault.vue';
import { Button } from '@/components/ui/button';
import { useSessionStore } from '@/stores/session';
import { usePreferencesStore } from '@/stores/preferences';

const sessionStore = useSessionStore();
const preferencesStore = usePreferencesStore();

onMounted(async () => {
  // await sessionStore.fetchSession();
  // if (sessionStore.error) {
  //   await sessionStore.login('dev', 'dev');
  //   if (!sessionStore.error) await sessionStore.fetchSession();
  // }
});
</script>

<template>
  <LayoutDefault>
    <section class="max-w-l mx-auto">
      <Button @click="preferencesStore.toggleDarkMode">Toggle Dark Mode</Button>

      <div class="flex flex-row items-center justify-center gap-2">
        <img class="size-8" :src="'/terrain/aw2/osinfantry.gif'" />
        <h1 class="text-4xl font-bold">Welcome to Advance Wars By Web!</h1>
        <img class="size-8" :src="'/terrain/aw2/bminfantry.gif'" />
      </div>

      <!--<div v-if="sessionStore.loading">Loading session...</div>
      <div v-else-if="sessionStore.session">Logged in as: {{ sessionStore.session.username }}</div>
      <div v-else>Not logged in.</div>
      <div v-if="sessionStore.error" class="text-red-600">Error: {{ sessionStore.error }}</div>
      -->
    </section>
  </LayoutDefault>
</template>

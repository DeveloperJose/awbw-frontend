<script setup lang="ts">
import { onMounted } from 'vue';
import LayoutDefault from '@/layouts/LayoutDefault.vue';
import { Button } from '@/components/ui/button';
import { useSessionStore } from '@/stores/session';
import { usePreferencesStore } from '@/stores/preferences';

const sessionStore = useSessionStore();
const preferencesStore = usePreferencesStore();

onMounted(async () => {
  await sessionStore.fetchSession();
  // if (sessionStore.error) {
  //   await sessionStore.login('dev', 'dev');
  //   if (!sessionStore.error) await sessionStore.fetchSession();
  // }
});
</script>

<template>
  <LayoutDefault>
    <section class="max-w-l mx-auto flex items-center justify-center">
      <div class="flex flex-row items-center justify-center gap-2">
        <img class="size-6" :src="'/terrain/aw2/osinfantry.gif'" />
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Welcome to Advance Wars By Web!</h1>
          <h2>Revive the unique Advance Wars experience with other players from around the world!</h2>
        </div>
        <img class="size-6" :src="'/terrain/aw2/bminfantry.gif'" />
      </div>
    </section>
  </LayoutDefault>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import { Button } from '@/components/ui/button'
import { useSessionStore } from '@/stores/session'

const sessionStore = useSessionStore()

onMounted(async () => {
  await sessionStore.fetchSession()
  if (sessionStore.error) {
    await sessionStore.login('dev', 'dev')
    if (!sessionStore.error) await sessionStore.fetchSession()
  }
})
</script>

<template>
  <LayoutDefault>
    <section class="p-4 sm:p-8">
      <h1 class="text-2xl font-bold sm:text-4xl">Welcome to Advance Wars By Web</h1>
      <img :src="'/terrain/co-portraits/nell.png'" />
      <div class="bg-red-500 p-4 text-white">If this is red with padding, the secret CSS is working!</div>

      <Button>Clicky</Button>
      <div v-if="sessionStore.loading">Loading session...</div>
      <div v-else-if="sessionStore.session">Logged in as: {{ sessionStore.session.username }}</div>
      <div v-else>Not logged in.</div>
      <div v-if="sessionStore.error" class="text-red-600">Error: {{ sessionStore.error }}</div>
    </section>
  </LayoutDefault>
</template>

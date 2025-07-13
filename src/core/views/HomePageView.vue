<script setup lang="ts">
import { onMounted } from 'vue'
import LayoutDefault from '@/core/layouts/LayoutDefault.vue'
import { useSessionStore } from '@/core/stores/session'

const sessionStore = useSessionStore()

onMounted(() => {
  sessionStore.fetchSession()
})
</script>

<template>
  <LayoutDefault>
    <section class="p-4 sm:p-8">
      <h1 class="text-2xl sm:text-4xl font-bold">Welcome to Advance Wars By Web</h1>
      <img :src="'/terrain/co-portraits/nell.png'" />
      <div class="bg-red-500 text-white p-4">If this is red with padding, the secret CSS is working!</div>

      <div v-if="sessionStore.loading">Loading session...</div>

      <div v-else-if="sessionStore.session">
        Logged in as: {{ sessionStore.session.username }}
      </div>

      <div v-else>
        Not logged in.
      </div>

      <div v-if="sessionStore.error" class="text-red-600">
        Error: {{ sessionStore.error }}
      </div>
    </section>
  </LayoutDefault>
</template>

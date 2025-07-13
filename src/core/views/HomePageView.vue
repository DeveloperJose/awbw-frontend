<script setup lang="ts">
import { onMounted } from 'vue'
import LayoutDefault from '@/core/layouts/LayoutDefault.vue'
import { getSession, login } from '../api/sessionApi'

onMounted(async () => {
  let loginResponse = await login('dev', 'dev')
  let sessionResponse = await getSession()
  if (!loginResponse.success) {
    console.error('Login failed', loginResponse)
  }
  if (!sessionResponse.success) {
    console.error('Session failed', sessionResponse)
  } else {
    console.log('Session success', sessionResponse)
  }
})
</script>

<template>
  <LayoutDefault>
    <section class="p-4 sm:p-8">
      <h1 class="text-2xl sm:text-4xl font-bold">Welcome to Advance Wars By Web</h1>
      <img :src="'/terrain/co-portraits/nell.png'" />
      <div class="bg-red-500 text-white p-4">
        If this is red with padding, the secret CSS is working!
      </div>

      <!--<div v-if="sessionResponse?.success">Logged In: {{ sessionResponse.username }}</div>-->
    </section>
  </LayoutDefault>
</template>

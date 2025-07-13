<script setup lang="ts">
import LayoutDefault from '@/core/layouts/LayoutDefault.vue'
</script>

<template>
  <LayoutDefault>
    <section class="p-4 sm:p-8">
      <h1 class="text-2xl sm:text-4xl font-bold">Welcome to Advance Wars By Web</h1>
      <img :src="'/terrain/co-portraits/nell.png'">
      <div class="bg-red-500 text-white p-4">
        If this is red with padding, the secret CSS is working!
      </div>
    </section>
  </LayoutDefault>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const greeting = ref('Hello World!')
const src = '/terrain/co-portraits/nell.png'
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
  <img :src=src>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>

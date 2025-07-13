<script setup lang="ts">
import Navbar from '@/core/components/Navbar.vue'
import Footer from '@/core/components/Footer.vue'

const backgroundImage = "background: url(/terrain/macroland250.png)"
</script>

<template>
  <div class="min-h-screen flex flex-col" :style=backgroundImage>
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

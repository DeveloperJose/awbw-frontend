<script setup lang="ts">
import Navbar from '@/core/components/Navbar.vue'
import Footer from '@/core/components/Footer.vue'

// const backgroundImage = "background: url(/terrain/macroland250.png)"
const backgroundImage = "";
</script>

<template>
  <div class="min-h-screen flex flex-col auto-scroll-bg" :style=backgroundImage>
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
@keyframes scrollBackground {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 100% 100%;
  }
}

.auto-scroll-bg {
  background-image: url('/terrain/macroland250.png');
  background-repeat: repeat;
  animation: scrollBackground 30s linear infinite;
}
</style>

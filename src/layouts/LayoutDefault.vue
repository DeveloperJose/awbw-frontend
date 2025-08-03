<script setup lang="ts">
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';
// import AppSidebar from '@/components/AppSidebar.vue';

import { usePreferencesStore } from '@/stores/preferences';
const preferencesStore = usePreferencesStore();
</script>

<template>
  <div class="auto-scroll-bg flex min-h-screen flex-col">
    <AppNavbar />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
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

.dark .auto-scroll-bg {
  background-image: url('/terrain/macroland250-dark.png');
}
</style>

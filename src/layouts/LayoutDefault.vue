<script setup lang="ts">
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppSidebar from '@/components/AppSidebar.vue';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

import { usePreferencesStore } from '@/stores/preferences';
const preferencesStore = usePreferencesStore();
</script>

<template>
  <div class="flex min-h-screen">
    <SidebarProvider>
      <!-- Navigation -->
      <AppSidebar />

      <!-- Content Container -->
      <div class="auto-scroll-bg flex flex-1 flex-col">
        <SidebarTrigger />

        <!-- Page Content -->
        <main class="flex-grow">
          <slot />
        </main>

        <!-- Footer -->
        <AppFooter />
      </div>
    </SidebarProvider>
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

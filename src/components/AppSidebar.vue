<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { usePreferencesStore } from '@/stores/preferences';
const preferencesStore = usePreferencesStore();
</script>

<template>
  <Sidebar>
    <SidebarContent>
      <!-- Groups -->
      <SidebarGroup>
        <SidebarGroupLabel>User</SidebarGroupLabel>
      </SidebarGroup>
    </SidebarContent>

    <!-- Footer -->
    <SidebarFooter>
      <Button @click="preferencesStore.toggleDarkMode"
        >Switch to {{ preferencesStore.darkMode ? 'Light' : 'Dark' }} Mode</Button
      >
    </SidebarFooter>
  </Sidebar>
</template>

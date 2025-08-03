<script setup lang="ts">
import { ref } from 'vue';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import LoginForm from '@/components/LoginForm.vue';
import { usePreferencesStore } from '@/stores/preferences';
import { useSessionStore } from '@/stores/session';
const preferencesStore = usePreferencesStore();
const sessionStore = useSessionStore();

const showLoginModal = ref(false);
function openLogin() {
  showLoginModal.value = true;
}

function closeLogin() {
  showLoginModal.value = false;
}
</script>

<template>
  <LoginForm :visible="showLoginModal" @close="closeLogin" />

  <Sidebar>
    <SidebarContent>
      <!-- Groups -->
      <SidebarGroup>
        <SidebarGroupLabel>
          User: {{ sessionStore.session ? sessionStore.session.username : 'Not Logged In' }}
          <SidebarGroupAction> </SidebarGroupAction>
        </SidebarGroupLabel>
      </SidebarGroup>
    </SidebarContent>

    <!-- Footer -->
    <SidebarFooter>
      <Button size="sm" variant="outline" v-if="!sessionStore.session" @click="openLogin"> Login </Button>
      <Button size="sm" variant="outline" v-else @click="sessionStore.logout"> Logout </Button>
      <Button @click="preferencesStore.toggleDarkMode">
        Switch to {{ preferencesStore.darkMode ? 'Light' : 'Dark' }} Mode
      </Button>
    </SidebarFooter>
  </Sidebar>
</template>

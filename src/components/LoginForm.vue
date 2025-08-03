<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useSessionStore } from '@/stores/session';
const sessionStore = useSessionStore();

const props = defineProps<{
  visible: boolean;
  class?: HTMLAttributes['class'];
}>();

const emit = defineEmits(['close']);

const username = ref('');
const password = ref('');
const loading = ref(false);
const error = ref<string | null>(null);

async function onSubmit(e: Event) {
  e.preventDefault();
  loading.value = true;
  error.value = null;

  try {
    const result = await sessionStore.login(username.value, password.value);
    if (result.isErr()) {
      error.value = result.error.errorMessage;
    } else {
      emit('close');
    }
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div
    v-if="visible"
    class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
    @click.self="emit('close')"
  >
    <div :class="cn('mx-4 w-full max-w-md', props.class)">
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your username below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form @submit="onSubmit" class="flex flex-col gap-6">
            <div class="grid gap-3">
              <Label for="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Your username"
                v-model="username"
                required
                autocomplete="username"
              />
            </div>

            <div class="grid gap-3">
              <div class="flex items-center">
                <Label for="password">Password</Label>
                <a href="#" class="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" v-model="password" required autocomplete="current-password" />
            </div>

            <div v-if="error" class="text-sm text-red-600">{{ error }}</div>

            <div class="flex flex-col gap-3">
              <Button type="submit" class="w-full" :disabled="loading">
                {{ loading ? 'Logging in...' : 'Login' }}
              </Button>
              <Button variant="outline" class="w-full" disabled> Login with Google </Button>
            </div>
          </form>

          <div class="mt-4 text-center text-sm">
            Don't have an account?
            <a href="#" class="underline underline-offset-4">Sign up</a>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

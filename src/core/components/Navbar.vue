<template>
    <nav class="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
        <div class="text-lg font-bold">AWBW</div>

        <button @click="toggleMenu" class="sm:hidden">
            <svg class="w-6 h-6" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        <ul class="hidden sm:flex gap-4">
            <li><a href="#" class="hover:underline">Home</a></li>
            <li><a href="#" class="hover:underline">Games</a></li>
            <li><a href="#" class="hover:underline">Forum</a></li>
        </ul>

        <!-- Mobile menu -->
        <ul v-if="menuOpen" class="absolute top-12 left-0 right-0 bg-gray-700 text-white p-4 sm:hidden">
            <li class="mb-2"><a href="#" class="block">Home</a></li>
            <li class="mb-2"><a href="#" class="block">Games</a></li>
            <li><a href="#" class="block">Forum</a></li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
}
</script>

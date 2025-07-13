<script setup lang="ts">
import Navbar from '@/core/components/Navbar.vue'
import Footer from '@/core/components/Footer.vue'
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <Navbar />
        <main class="flex-grow">
            <slot />
        </main>
        <Footer />
    </div>
</template>

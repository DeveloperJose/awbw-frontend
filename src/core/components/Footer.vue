<template>
  <footer class="bg-gray-900 text-gray-300 text-sm mt-8">
    <div class="max-w-7xl mx-auto px-4 py-6 sm:flex sm:items-center sm:justify-between">
      <div class="mb-4 sm:mb-0">
        <p>&copy; {{ year }} Advance Wars By Web. All rights reserved.</p>
      </div>
      <ul class="flex flex-wrap gap-4">
        <li><a href="#" class="hover:underline">About</a></li>
        <li><a href="#" class="hover:underline">Forum</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
        <li><a href="#" class="hover:underline">Privacy</a></li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

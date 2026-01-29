<template>
  <div class="min-h-screen bg-slate-950 flex items-center justify-center text-white">
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-4">Redirecting to BBR 1-on-1 Mentorship...</h1>
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400 mx-auto"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  window.location.href = 'https://whop.com/waytrades/the-bbr-1-on-1-mentorship-c7/';
});
</script>

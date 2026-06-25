<template>
  <div class="relative w-full min-h-screen bg-slate-950 overflow-hidden flex items-center">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>

    <div class="relative z-10 w-full">
      <div class="max-w-3xl mx-auto px-4 py-20 md:py-32">
        <div v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="space-y-8 text-center"
        >
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            Stop Trying to Win More.<br class="hidden sm:block" /> Start Losing Less. <span class="text-green-500">For Free.</span>
          </h1>

          <p class="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Most traders lose because they overtrade, not because they don&apos;t know enough. We fix the part nobody teaches: patience and risk.
          </p>

          <div class="space-y-4 pt-4 max-w-md mx-auto text-left">
            <div class="flex items-start gap-4">
              <div class="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              </div>
              <span class="text-gray-300">50% win rate + 1:3 risk:reward = consistent profitability</span>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              </div>
              <span class="text-gray-300">BBR strategy education — NQ &amp; ES Futures</span>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              </div>
              <span class="text-gray-300"><span class="text-white font-bold">{{ memberCount }}</span> traders. 100% free. No credit card.</span>
            </div>
          </div>

          <div class="flex flex-col gap-3 pt-8 max-w-md mx-auto">
            <a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-slate-950 font-black rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/50 duration-300 text-lg">
              Join the Free Community
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <p class="text-center text-sm text-gray-500">
              Free forever. Join <span class="text-gray-400 font-bold">{{ memberCount }}</span> traders already inside.
            </p>
            <a href="https://www.youtube.com/@waytrades" target="_blank" class="inline-flex items-center justify-center px-8 py-3 border border-gray-700 hover:border-green-500 text-gray-400 hover:text-white font-bold rounded-full transition-all duration-300 hover:bg-green-500/10 text-sm mt-1">
              Watch Free Content on YouTube →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const { data: memberData } = await useFetch('/api/members', { server: true, lazy: false })
const memberCount = computed(() => {
  const count = memberData.value?.count
  if (!count) return '—'
  return count.toLocaleString()
})
</script>

<style scoped>
@keyframes subtle-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}
.animate-pulse {
  animation: subtle-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

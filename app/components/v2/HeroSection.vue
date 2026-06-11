<template>
  <div class="relative w-full min-h-screen bg-slate-950 overflow-hidden flex items-center">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>

    <div class="relative z-10 w-full">
      <div class="max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <!-- Left: Copy -->
          <div v-motion
            :initial="{ opacity: 0, x: -30 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
            class="space-y-8"
          >
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight text-center sm:text-left">
              You Don't Need a <span class="text-green-500">High Win Rate</span> to Become Profitable.
            </h1>

            <p class="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-lg text-center sm:text-left mx-auto sm:mx-0">
              Built around risk:reward, expectancy, and disciplined execution — not gambling.
            </p>

            <div class="space-y-4 pt-4">
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
                <span class="text-gray-300">Watch live screen-share trades every market day at 9:25 AM EST</span>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                </div>
                <span class="text-gray-300"><span class="text-white font-bold">{{ memberCount }}</span> serious traders. Not a signal farm.</span>
              </div>
            </div>

            <div class="flex flex-col gap-3 pt-8">
              <a href="https://whop.com/waytrades/vip-access-60-1cb2/" target="_blank" class="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-slate-950 font-black rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/50 duration-300 text-lg">
                Start 5-Day Free Trial
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
              <p class="text-center text-sm text-gray-500">
                5 days free — then <span class="text-gray-400 font-bold">$74/month</span>. Cancel anytime.
              </p>
              <a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="inline-flex items-center justify-center px-8 py-3 border border-gray-700 hover:border-green-500 text-gray-400 hover:text-white font-bold rounded-full transition-all duration-300 hover:bg-green-500/10 text-sm mt-1">
                Or join the Free Discord →
              </a>
            </div>
          </div>

          <!-- Right: Video & Stats -->
          <div v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
            class="relative w-full flex items-center justify-center mt-12 lg:mt-0"
          >
            <div class="relative w-full max-w-lg">
              <div class="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-2xl blur-3xl"></div>
              <div class="relative bg-slate-900/80 backdrop-blur-xl border border-green-500/30 rounded-2xl overflow-hidden shadow-2xl">
                <div class="aspect-video w-full bg-slate-800 relative">
                  <iframe
                    src="https://www.youtube.com/embed/RZkAQ7HU-38?autoplay=0&controls=1&modestbranding=1"
                    loading="lazy"
                    class="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div class="p-6 bg-slate-900/50">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-bold text-gray-400 uppercase tracking-widest">The Math Behind It</h3>
                    <span class="px-2 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold rounded border border-green-500/20">VERIFIED</span>
                  </div>
                  <div class="grid grid-cols-2 gap-8">
                    <div class="space-y-1">
                      <p class="text-xs text-gray-500 font-medium">Win Rate</p>
                      <div class="flex items-baseline gap-1">
                        <span class="text-3xl font-black text-white">50</span>
                        <span class="text-lg font-bold text-green-500">%</span>
                      </div>
                    </div>
                    <div class="space-y-1">
                      <p class="text-xs text-gray-500 font-medium">Risk:Reward</p>
                      <div class="flex items-baseline gap-1">
                        <span class="text-lg font-bold text-green-500">1:</span>
                        <span class="text-3xl font-black text-white">4.16</span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-6 pt-6 border-t border-white/5">
                    <p class="text-[11px] text-gray-500 italic leading-relaxed mb-4">
                      "You don't need to be right most of the time. You just need to be right when it matters."
                    </p>
                    <div class="flex items-center gap-2 px-3 py-2 bg-green-500/5 border border-green-500/20 rounded-xl">
                      <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0"></span>
                      <span class="text-[11px] text-green-400 font-bold">Live every market day · 9:25 AM EST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMotions } from '@vueuse/motion'

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


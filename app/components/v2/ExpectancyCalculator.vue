<template>
  <div class="w-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 py-20 md:py-32 px-4">
    <div class="max-w-5xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          The Math That Changes Everything
        </h2>
        <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          See why a 50% win rate with 1:3 risk:reward is mathematically superior to chasing high accuracy.
        </p>
      </div>

      <!-- Interactive Calculator -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- Professional Trader (BBR) -->
        <div v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="bg-slate-800/50 border border-green-500/30 rounded-2xl p-8 backdrop-blur-sm hover:border-green-500/60 transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-black text-white">Professional Trader</h3>
          </div>

          <div class="space-y-4 mb-8">
            <div class="flex justify-between items-center">
              <span class="text-gray-400">Win Rate</span>
              <span class="text-2xl font-black text-green-500">50%</span>
            </div>
            <div class="h-1 bg-slate-700 rounded-full overflow-hidden">
              <div class="h-full w-1/2 bg-gradient-to-r from-green-500 to-green-400"></div>
            </div>

            <div class="flex justify-between items-center pt-4">
              <span class="text-gray-400">Risk:Reward</span>
              <span class="text-2xl font-black text-green-500">1:3</span>
            </div>
            <div class="h-1 bg-slate-700 rounded-full overflow-hidden">
              <div class="h-full w-3/4 bg-gradient-to-r from-green-500 to-green-400"></div>
            </div>
          </div>

          <!-- Profit Calculation -->
          <div class="bg-slate-900/50 rounded-lg p-6 border border-green-500/20 mb-6">
            <p class="text-sm text-gray-400 mb-2">10 Trades Result</p>
            <p class="text-4xl font-black text-green-500 mb-2">+$10.00</p>
            <p class="text-xs text-gray-500">(5 wins × $3) - (5 losses × $1)</p>
          </div>

          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <p class="text-sm text-green-400 font-semibold">
              ✓ High margin for error. Can be wrong 65% of the time and still profit.
            </p>
          </div>
        </div>

        <!-- Hype Trader -->
        <div v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="bg-slate-800/50 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm hover:border-red-500/60 transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
              <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-black text-white">Hype Trader</h3>
          </div>

          <div class="space-y-4 mb-8">
            <div class="flex justify-between items-center">
              <span class="text-gray-400">Win Rate</span>
              <span class="text-2xl font-black text-red-500">90%</span>
            </div>
            <div class="h-1 bg-slate-700 rounded-full overflow-hidden">
              <div class="h-full w-9/12 bg-gradient-to-r from-red-500 to-red-400"></div>
            </div>

            <div class="flex justify-between items-center pt-4">
              <span class="text-gray-400">Risk:Reward</span>
              <span class="text-2xl font-black text-red-500">1:1</span>
            </div>
            <div class="h-1 bg-slate-700 rounded-full overflow-hidden">
              <div class="h-full w-1/4 bg-gradient-to-r from-red-500 to-red-400"></div>
            </div>
          </div>

          <!-- Profit Calculation -->
          <div class="bg-slate-900/50 rounded-lg p-6 border border-red-500/20 mb-6">
            <p class="text-sm text-gray-400 mb-2">10 Trades Result</p>
            <p class="text-4xl font-black text-red-500 mb-2">+$8.00</p>
            <p class="text-xs text-gray-500">(9 wins × $1) - (1 loss × $1)</p>
          </div>

          <div class="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <p class="text-sm text-red-400 font-semibold">
              ⚠ Zero margin for error. If accuracy drops to 50%, they break even.
            </p>
          </div>
        </div>
      </div>

      <!-- Key Insight -->
      <div v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
        class="bg-gradient-to-r from-green-500/10 via-slate-900 to-green-500/10 border border-green-500/30 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm"
      >
        <p class="text-xl md:text-2xl text-gray-200 mb-4">
          <span class="font-black text-green-500">The Professional Trader</span> makes more profit with a lower win rate because they focus on <span class="font-black text-green-500">expectancy</span>, not accuracy.
        </p>
        <p class="text-gray-400">
          This is the mathematical foundation of Way Trades. We teach the mindset and process that turns a 50% win rate into consistent, predictable profitability.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMotions } from '@vueuse/motion'
</script>

<style scoped>
/* Smooth transitions for interactive elements */
:deep(.v-motion) {
  will-change: transform, opacity;
}
</style>

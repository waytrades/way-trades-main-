<template>
  <div class="min-h-screen bg-slate-950">
    <!-- Navigation -->
    <v2-header />

    <!-- Hero Section -->
    <v2-hero-section />

    <!-- Expectancy Calculator -->
    <v2-expectancy-calculator />

    <!-- Testimonials Section -->
    <v2-testimonials />

    <!-- Community Preview Section -->
    <section class="w-full bg-slate-950 py-20 md:py-32 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Inside the Community
          </h2>
          <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Daily live trading sessions, trade recaps, and a community of disciplined traders.
          </p>
        </div>

        <!-- Community Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 100 } }"
            class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div class="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
              <Icon name="lucide:clock" class="w-6 h-6 text-green-500" />
            </div>
            <h3 class="text-xl font-black text-white mb-2">Live Trading Sessions</h3>
            <p class="text-gray-400">Watch real trades executed daily starting at 9:25 AM EST. See the 1:3 risk:reward model in action.</p>
          </div>

          <div v-motion
            :initial="{ opacity: 0, x: 20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 200 } }"
            class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div class="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
              <Icon name="lucide:bar-chart-3" class="w-6 h-6 text-green-500" />
            </div>
            <h3 class="text-xl font-black text-white mb-2">Trade Recaps & Analysis</h3>
            <p class="text-gray-400">Detailed breakdowns of every trade. Learn the process, not just the outcome.</p>
          </div>

          <div v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 300 } }"
            class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div class="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
              <Icon name="lucide:book-open" class="w-6 h-6 text-green-500" />
            </div>
            <h3 class="text-xl font-black text-white mb-2">Structured Learning</h3>
            <p class="text-gray-400">Master the BBR strategy step-by-step. From basics to advanced risk management.</p>
          </div>

          <div v-motion
            :initial="{ opacity: 0, x: 20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 400 } }"
            class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div class="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
              <Icon name="lucide:users" class="w-6 h-6 text-green-500" />
            </div>
            <h3 class="text-xl font-black text-white mb-2">Community Support</h3>
            <p class="text-gray-400">Connect with traders applying the same mathematical framework. Share wins and learn together.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="w-full bg-gradient-to-b from-slate-900 to-slate-950 py-20 md:py-32 px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Most Traders Chase Certainty.
        </h2>
        <p class="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Professionals focus on expectancy and process. Join traders who understand that <span class="text-green-500 font-black">profitability comes from math, not luck.</span>
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://whop.com/waytrades/vip-access-60-1cb2/" target="_blank" class="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-slate-950 font-black rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/50 duration-300">
            START 5-DAY FREE TRIAL
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="https://www.youtube.com/playlist?list=PLeVBW5ryrKoLEQVel4Ld0XjMOPYbj7zOt" target="_blank" class="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 hover:border-green-500 text-white font-black rounded-full transition-all duration-300 hover:bg-green-500/10">
            WATCH TRADE RECAPS
          </a>
        </div>

        <p class="text-sm text-gray-500 mt-8">
          First 5 days are 100% free. No credit card required.
        </p>
      </div>
    </section>

    <!-- Footer -->
    <v2-footer />
  </div>
</template>

<script setup lang="ts">
import { useMotions } from '@vueuse/motion'

// SEO Meta
useHead({
  title: 'Way Trades | Professional Trading with Mathematical Edge',
  meta: [
    {
      name: 'description',
      content: 'Learn professional trading with a 50% win rate and 1:3 risk:reward ratio. Join our Discord community for live trading sessions and disciplined trading education.'
    },
    {
      property: 'og:title',
      content: 'Way Trades | Professional Trading with Mathematical Edge'
    },
    {
      property: 'og:description',
      content: 'Learn professional trading with a 50% win rate and 1:3 risk:reward ratio. Join our Discord community for live trading sessions and disciplined trading education.'
    }
  ]
})
</script>

<style scoped>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>

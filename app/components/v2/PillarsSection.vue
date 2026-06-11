<template>
  <section id="pillars" class="bg-slate-950 py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <div
        class="text-center mb-16 max-w-3xl mx-auto"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }"
      >
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Two Disciplines. One Mathematical Foundation.
        </h2>
        <p class="text-lg md:text-xl text-gray-400 leading-relaxed">
          Whether you prefer the high-octane execution of intraday futures or the calculated patience of options swings, our BBR framework scales across both.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Futures Day Trading -->
        <div
          class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300"
          v-motion="{ initial: { opacity: 0, x: -30 }, enter: { opacity: 1, x: 0, transition: { duration: 600, delay: 200 } } }"
        >
          <div class="w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-xl mb-6">
            <Icon name="lucide:zap" class="w-6 h-6 text-green-500" />
          </div>
          <h3 class="text-2xl font-black text-white mb-4">Futures Day Trading</h3>
          <p class="text-gray-400 leading-relaxed mb-6">
            Master the NQ futures markets using intraday order flow and the BBR strategy. We focus on high-probability execution on the 30-second and 5-minute timeframes, specifically designed for prop firm consistency.
          </p>
          <ul class="space-y-3">
            <li v-for="item in futuresFeatures" :key="item" class="flex items-start gap-3 text-gray-300">
              <Icon name="lucide:check" class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Options Swing Trading -->
        <div
          class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300"
          v-motion="{ initial: { opacity: 0, x: 30 }, enter: { opacity: 1, x: 0, transition: { duration: 600, delay: 200 } } }"
        >
          <div class="w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-xl mb-6">
            <Icon name="lucide:trending-up" class="w-6 h-6 text-green-500" />
          </div>
          <h3 class="text-2xl font-black text-white mb-4">Options Swing Trading</h3>
          <p class="text-gray-400 leading-relaxed mb-6">
            Build wealth through individual equity options using higher timeframe setups. We utilize bullish divergence and oversold support levels to capture 2-week to 3-month moves with defined risk.
          </p>
          <ul class="space-y-3">
            <li v-for="item in optionsFeatures" :key="item" class="flex items-start gap-3 text-gray-300">
              <Icon name="lucide:check" class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const futuresFeatures = [
  'Intraday BBR (Breakouts, Bounces, Rejects)',
  'Order Flow & ICT Execution Concepts',
  'Prop Firm Risk Management Protocols',
]

const optionsFeatures = [
  'High-Timeframe BBR Setups',
  'Bullish Divergence & Support Confluence',
  'Strategic 2-Week to 3-Month Hold Periods',
]
</script>

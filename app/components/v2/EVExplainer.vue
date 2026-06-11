<template>
  <section class="bg-slate-950 border-t border-slate-800 py-24 px-4">
    <div class="max-w-6xl mx-auto">

      <!-- Heading -->
      <div
        class="text-center mb-16 max-w-3xl mx-auto"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }"
      >
        <span class="inline-block px-4 py-1.5 bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-black rounded-full uppercase tracking-widest mb-6">
          The Math Most Traders Ignore
        </span>
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
          Win Rate Is the Wrong Metric.<br />
          <span class="text-green-500">Expected Value Is Everything.</span>
        </h2>
        <p class="text-lg md:text-xl text-gray-400 leading-relaxed">
          A trader with a 90% win rate can still blow up. A trader with a 50% win rate can build consistent wealth. The difference is expected value — the only number that actually predicts long-term profitability.
        </p>
      </div>

      <!-- EV Formula -->
      <div
        class="mb-16 p-8 bg-slate-900/60 border border-green-500/20 rounded-2xl max-w-2xl mx-auto text-center"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 100 } } }"
      >
        <p class="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Expected Value Formula</p>
        <div class="flex items-center justify-center gap-3 flex-wrap text-lg font-black">
          <span class="text-white">EV</span>
          <span class="text-green-500">=</span>
          <span class="text-white">(Win Rate</span>
          <span class="text-green-500">×</span>
          <span class="text-white">Avg Win)</span>
          <span class="text-green-500">−</span>
          <span class="text-white">(Loss Rate</span>
          <span class="text-green-500">×</span>
          <span class="text-white">Avg Loss)</span>
        </div>
        <p class="text-gray-500 text-sm mt-4">Positive EV = profitable over time, regardless of win rate.</p>
      </div>

      <!-- Side by side comparison -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 200 } } }"
      >

        <!-- The Crowd: 99% WR -->
        <div class="bg-gradient-to-br from-red-500/5 to-slate-900/50 border border-red-500/20 rounded-2xl p-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 flex items-center justify-center bg-red-500/10 rounded-xl flex-shrink-0">
              <Icon name="lucide:trending-down" class="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p class="text-xs text-gray-500 uppercase tracking-widest font-bold">Most Retail Traders</p>
              <h3 class="text-xl font-black text-white">90% Win Rate · 1:1 R:R</h3>
            </div>
          </div>

          <div class="space-y-3 mb-6 text-sm text-gray-400 font-mono bg-slate-950/60 rounded-xl p-4">
            <div class="flex justify-between"><span>Win Rate</span><span class="text-white">90%</span></div>
            <div class="flex justify-between"><span>Avg Win</span><span class="text-white">$100</span></div>
            <div class="flex justify-between"><span>Loss Rate</span><span class="text-white">10%</span></div>
            <div class="flex justify-between"><span>Avg Loss</span><span class="text-white">$100</span></div>
            <div class="border-t border-slate-700 pt-3 flex justify-between font-black">
              <span class="text-gray-300">EV per trade</span>
              <span class="text-green-400">+$80.00</span>
            </div>
          </div>

          <div class="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
            <p class="text-red-400 text-sm font-bold mb-1">The hidden trap</p>
            <p class="text-gray-400 text-sm leading-relaxed">
              To hit 90% you take tiny wins and avoid cutting losses. One trade — a news spike, a gap, a margin call — wipes out 9 winning trades in a single session. This is how most retail accounts blow up.
            </p>
          </div>
        </div>

        <!-- The BBR Way: 50% WR -->
        <div class="relative bg-gradient-to-br from-green-500/10 to-slate-900/50 border-2 border-green-500/40 rounded-2xl p-8">
          <div class="absolute -top-3 right-4 px-3 py-1 bg-green-500 text-slate-950 text-xs font-black rounded-full uppercase tracking-wide">
            The BBR Way
          </div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 flex items-center justify-center bg-green-500/10 rounded-xl flex-shrink-0">
              <Icon name="lucide:trending-up" class="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p class="text-xs text-gray-500 uppercase tracking-widest font-bold">Way Trades Framework</p>
              <h3 class="text-xl font-black text-white">50% Win Rate · 1:3 R:R</h3>
            </div>
          </div>

          <div class="space-y-3 mb-6 text-sm text-gray-400 font-mono bg-slate-950/60 rounded-xl p-4">
            <div class="flex justify-between"><span>Win Rate</span><span class="text-white">50%</span></div>
            <div class="flex justify-between"><span>Avg Win</span><span class="text-white">$300</span></div>
            <div class="flex justify-between"><span>Loss Rate</span><span class="text-white">50%</span></div>
            <div class="flex justify-between"><span>Avg Loss</span><span class="text-white">$100</span></div>
            <div class="border-t border-slate-700 pt-3 flex justify-between font-black">
              <span class="text-gray-300">EV per trade</span>
              <span class="text-green-400">+$100.00</span>
            </div>
          </div>

          <div class="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
            <p class="text-green-400 text-sm font-bold mb-1">Why this is durable</p>
            <p class="text-gray-400 text-sm leading-relaxed">
              You can be wrong half the time and still grow your account. Every loss is capped. Every win is 3× the risk. The math works in your favor — session after session, account after account.
            </p>
          </div>
        </div>

      </div>

      <!-- Takeaway -->
      <div
        class="text-center max-w-2xl mx-auto"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 300 } } }"
      >
        <p class="text-xl md:text-2xl font-black text-white leading-snug mb-4">
          Stop chasing a high win rate.<br />
          <span class="text-green-500">Start trading with positive expected value.</span>
        </p>
        <p class="text-gray-400 leading-relaxed">
          The BBR strategy is built around this math from the ground up. Every setup, every entry, every exit — designed to keep EV positive even when half your trades lose.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>


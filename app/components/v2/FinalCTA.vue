<template>
  <section class="bg-slate-950 border-t border-slate-800 py-24 px-4">
    <div class="max-w-3xl mx-auto text-center" v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }">

      <!-- Math visual -->
      <div class="inline-flex items-center gap-3 mb-10 px-6 py-3 bg-slate-900 border border-green-500/20 rounded-2xl flex-wrap justify-center">
        <div class="text-center">
          <p class="text-xs text-gray-500 uppercase tracking-widest mb-1">Win Rate</p>
          <p class="text-2xl font-black text-white">50%</p>
        </div>
        <span class="text-2xl font-black text-green-500">+</span>
        <div class="text-center">
          <p class="text-xs text-gray-500 uppercase tracking-widest mb-1">Risk:Reward</p>
          <p class="text-2xl font-black text-white">1:3</p>
        </div>
        <span class="text-2xl font-black text-green-500">=</span>
        <div class="text-center">
          <p class="text-xs text-gray-500 uppercase tracking-widest mb-1">Result</p>
          <p class="text-2xl font-black text-green-500">Profitable</p>
        </div>
      </div>

      <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
        Stop Guessing. Start Executing.
      </h2>
      <p class="text-lg md:text-xl text-gray-400 mb-4 leading-relaxed max-w-2xl mx-auto">
        The difference between a gambler and a trader is a repeatable process. Join a free community of traders who are building that process — together.
      </p>

      <!-- Member quote -->
      <div class="mb-10 px-6 py-5 bg-slate-900/60 border border-slate-800 rounded-2xl max-w-xl mx-auto text-left">
        <p class="text-gray-300 text-sm leading-relaxed italic mb-3">
          "An elegant strategy with logical confluences — the best trading week of my 4-year career from the very first week I joined."
        </p>
        <p class="text-green-500 text-xs font-bold">— Emmanuel C., Community Member</p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://whop.com/waytrades/free-access-c6/"
          target="_blank"
          class="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-slate-950 font-black rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/50 duration-300"
        >
          Join the Free Community
        </a>
        <a
          href="https://www.instagram.com/way_trades"
          target="_blank"
          class="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 hover:border-green-500 text-white font-black rounded-full transition-all duration-300 hover:bg-green-500/10"
        >
          Follow on Instagram
        </a>
      </div>
      <p class="mt-4 text-sm text-gray-600">Free forever. No credit card. No catch.</p>
    </div>
  </section>
</template>

<script setup>
</script>

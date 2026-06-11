<template>
  <section class="bg-slate-950 border-t border-slate-800 py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }"
      >
        <!-- Left: Copy -->
        <div>
          <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            The Last Trading Community You'll Ever Need to Join.
          </h2>
          <p class="text-lg text-gray-400 leading-relaxed mb-10">
            Trading is a lonely game, but it doesn't have to be. Join a room full of practitioners who value risk management over screenshots of P&amp;L.
          </p>

          <div class="space-y-8">
            <div class="flex items-start gap-5">
              <div class="w-10 h-10 flex items-center justify-center bg-green-500/10 rounded-xl flex-shrink-0 mt-1">
                <Icon name="lucide:radio" class="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h4 class="text-white font-black text-lg mb-1">Live Market Analysis</h4>
                <p class="text-gray-400">Real-time breakdowns of NQ and Equity setups as they form.</p>
              </div>
            </div>
            <div class="flex items-start gap-5">
              <div class="w-10 h-10 flex items-center justify-center bg-green-500/10 rounded-xl flex-shrink-0 mt-1">
                <Icon name="lucide:users" class="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h4 class="text-white font-black text-lg mb-1">Process-Driven Peer Group</h4>
                <p class="text-gray-400">Surround yourself with traders who care more about R:R than "get rich quick" schemes.</p>
              </div>
            </div>
            <div class="flex items-start gap-5">
              <div class="w-10 h-10 flex items-center justify-center bg-green-500/10 rounded-xl flex-shrink-0 mt-1">
                <Icon name="lucide:book" class="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h4 class="text-white font-black text-lg mb-1">The BBR Resource Library</h4>
                <p class="text-gray-400">Instant access to the core frameworks for both futures and options.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Tiers -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <!-- Free Tier -->
          <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-green-500/50 rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300">
            <div class="border-b border-slate-700 pb-4">
              <h3 class="text-xl font-black text-white mb-1">Free Tier</h3>
              <p class="text-green-500 font-bold text-lg">$0</p>
            </div>
            <ul class="space-y-3 flex-1">
              <li v-for="f in freeFeatures" :key="f" class="flex items-center gap-3 text-gray-300 text-sm">
                <Icon name="lucide:check" class="w-4 h-4 text-green-500 flex-shrink-0" />
                {{ f }}
              </li>
            </ul>
            <p class="text-gray-500 text-xs italic">A no-brainer for any serious student.</p>
            <a
              href="https://whop.com/waytrades/free-access-c6/"
              target="_blank"
              class="block text-center w-full bg-green-500 hover:bg-green-600 text-slate-950 font-black py-3 rounded-full transition-all transform hover:scale-105 text-sm"
            >
              Join the Discord
            </a>
          </div>

          <!-- Mentorship Tier -->
          <div class="relative bg-gradient-to-br from-green-500/10 to-slate-900/50 border-2 border-green-500/50 rounded-2xl p-6 flex flex-col gap-5">
            <div class="absolute -top-3 right-4 px-3 py-1 bg-green-500 text-slate-950 text-xs font-black rounded-full uppercase tracking-wide">
              Coming Soon
            </div>
            <div class="border-b border-slate-700 pb-4">
              <h3 class="text-xl font-black text-white mb-1">Mentorship Tier</h3>
              <p class="text-green-500 font-bold text-lg">Premium</p>
            </div>
            <ul class="space-y-3 flex-1">
              <li v-for="f in mentorFeatures" :key="f" class="flex items-center gap-3 text-gray-300 text-sm">
                <Icon name="lucide:check" class="w-4 h-4 text-green-500 flex-shrink-0" />
                {{ f }}
              </li>
            </ul>
            <p class="text-gray-500 text-xs italic">For traders ready for absolute transformation.</p>
            <button disabled class="w-full border border-green-500/50 text-green-500/50 font-black py-3 rounded-full text-sm cursor-not-allowed">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const freeFeatures = [
  'Community chat access',
  'Basic resources & guides',
  'General market outlooks',
  'Peer support & accountability',
]

const mentorFeatures = [
  '1-on-1 direct access',
  'Advanced accountability',
  'Deep-dive execution reviews',
  'Professional-grade coaching',
]
</script>

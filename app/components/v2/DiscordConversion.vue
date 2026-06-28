<template>
  <section class="bg-slate-950 border-t border-slate-800 py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }"
      >
        <!-- Left: Copy -->
        <div>
          <span class="inline-block px-4 py-1.5 bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-black rounded-full uppercase tracking-widest mb-6">
            100% Free
          </span>
          <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            The Last Trading Community You'll Ever Need to Join.
          </h2>
          <p class="text-lg text-gray-400 leading-relaxed mb-10">
            Trading is a lonely game, but it doesn't have to be. Join a room full of practitioners who value risk management over screenshots of P&amp;L. Everything inside is free — no tiers, no paywalls, no upsells.
          </p>

          <div class="space-y-8">
            <div class="flex items-start gap-5">
              <div class="w-10 h-10 flex items-center justify-center bg-green-500/10 rounded-xl flex-shrink-0 mt-1">
                <Icon name="lucide:book-open" class="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h4 class="text-white font-black text-lg mb-1">BBR Strategy Education</h4>
                <p class="text-gray-400">Full access to the Breakouts, Bounces, Rejects framework — the exact system Waylon trades.</p>
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
                <Icon name="lucide:trending-up" class="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h4 class="text-white font-black text-lg mb-1">Chart Analysis &amp; Trade Ideas</h4>
                <p class="text-gray-400">Real-time breakdowns of NQ and equity setups posted regularly by Waylon and community members.</p>
              </div>
            </div>
            <div class="flex items-start gap-5">
              <div class="w-10 h-10 flex items-center justify-center bg-green-500/10 rounded-xl flex-shrink-0 mt-1">
                <Icon name="lucide:instagram" class="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h4 class="text-white font-black text-lg mb-1">Follow Along Daily on Instagram</h4>
                <p class="text-gray-400">Waylon is very active on Instagram — charts, trade breakdowns, and real talk posted daily.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Join Card -->
        <div class="flex flex-col gap-6">
          <div class="bg-gradient-to-br from-green-500/10 via-slate-900 to-slate-900 border-2 border-green-500/40 rounded-2xl p-8 text-center hover:border-green-500/70 transition-all duration-300 shadow-xl">
            <div class="w-16 h-16 flex items-center justify-center bg-green-500/10 rounded-2xl mx-auto mb-6">
              <Icon name="lucide:message-circle" class="w-8 h-8 text-green-500" />
            </div>
            <div class="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-black rounded-full uppercase tracking-widest mb-4">Free Forever</div>
            <h3 class="text-2xl font-black text-white mb-3">Way Trades Community</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              BBR education, chart analysis, prop firm guidance, and a group of traders who think in terms of risk:reward. No credit card. No trial. Just free.
            </p>
            <ul class="text-left space-y-3 mb-8">
              <li v-for="item in features" :key="item" class="flex items-center gap-3 text-gray-300 text-sm">
                <Icon name="lucide:check" class="w-4 h-4 text-green-500 flex-shrink-0" />
                {{ item }}
              </li>
            </ul>
            <a
              href="https://whop.com/waytrades/free-access-c6/"
              target="_blank"
              class="block w-full bg-green-500 hover:bg-green-600 text-slate-950 font-black py-4 px-6 rounded-full transition-all transform hover:scale-105 text-lg shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              Join Free on Whop →
            </a>
            <p class="text-gray-600 text-xs mt-3">No credit card required. Ever.</p>
          </div>

          <!-- Social proof nudge -->
          <div class="flex items-center gap-4 px-6 py-4 bg-slate-900/60 border border-slate-800 rounded-2xl">
            <Icon name="lucide:instagram" class="w-5 h-5 text-pink-400 flex-shrink-0" />
            <div>
              <p class="text-white font-black text-sm">@way_trades on Instagram</p>
              <p class="text-gray-500 text-xs">Daily charts, setups, and real trade breakdowns</p>
            </div>
            <a href="https://www.instagram.com/way_trades" target="_blank" class="ml-auto flex-shrink-0 text-xs font-bold text-green-500 hover:text-green-400 transition-colors">Follow →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  'Full BBR strategy framework',
  'NQ futures &amp; options education',
  'Chart analysis and trade ideas',
  'Prop firm tips and guidance',
  'Like-minded community of traders',
  'Direct access to Waylon',
]
</script>

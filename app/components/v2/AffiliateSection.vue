<template>
  <section id="tools" class="bg-slate-900 border-t border-slate-800 py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <div
        class="text-center mb-16 max-w-3xl mx-auto"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }"
      >
        <span class="inline-block px-4 py-1.5 bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-black rounded-full uppercase tracking-widest mb-6">
          Tools We Actually Use
        </span>
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          The Stack Behind the Strategy.
        </h2>
        <p class="text-lg md:text-xl text-gray-400 leading-relaxed">
          These are the platforms Waylon personally uses. No random sponsorships — if it's on this page, it's in the daily workflow.
        </p>
        <div class="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/10 border border-green-500/30 rounded-full">
          <Icon name="lucide:tag" class="w-4 h-4 text-green-500" />
          <span class="text-green-400 font-black text-sm tracking-widest">Use code <span class="text-white">WAY</span> at prop firms for a discount</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="tool in tools"
          :key="tool.name"
          v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: tool.delay } } }"
          class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 flex flex-col gap-6"
        >
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-xl flex-shrink-0">
              <Icon :name="tool.icon" class="w-6 h-6 text-green-500" />
            </div>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="text-xl font-black text-white">{{ tool.name }}</h3>
                <span v-if="tool.badge" class="px-2 py-0.5 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black rounded uppercase tracking-wider">{{ tool.badge }}</span>
              </div>
              <p class="text-gray-500 text-xs font-bold uppercase tracking-wider mt-0.5">{{ tool.category }}</p>
            </div>
          </div>
          <p class="text-gray-400 leading-relaxed flex-1">{{ tool.description }}</p>
          <a
            :href="tool.url"
            target="_blank"
            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-slate-950 font-black rounded-full transition-all transform hover:scale-105 text-sm shadow-lg hover:shadow-green-500/30 duration-300"
          >
            {{ tool.cta }}
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </a>
        </div>
      </div>

      <p class="text-center text-gray-600 text-xs mt-10 max-w-xl mx-auto">
        Some links above are affiliate links. Waylon may earn a commission at no extra cost to you. He only recommends tools he personally uses.
      </p>
    </div>
  </section>
</template>

<script setup>
const tools = [
  {
    name: 'Alpha Futures',
    category: 'Prop Firm',
    badge: 'Code: WAY',
    icon: 'lucide:zap',
    description: 'Waylon's primary prop firm. Fast payouts, trader-friendly rules, and a structure built for consistent futures traders running the BBR strategy. Use code WAY at signup.',
    url: 'https://app.alpha-futures.com/signup/WAY/',
    cta: 'Get Funded with Alpha Futures',
    delay: 100,
  },
  {
    name: 'Tradeify',
    category: 'Prop Firm',
    badge: 'Code: WAY',
    icon: 'lucide:trending-up',
    description: 'A top-tier prop firm for futures traders. Solid evaluation process, competitive payouts, and rules that actually make sense if you're trading with discipline. Use code WAY at checkout.',
    url: 'https://tradeify.co/?ref=way',
    cta: 'Get Funded with Tradeify',
    delay: 200,
  },
  {
    name: 'TradeZella',
    category: 'Trading Journal &amp; Backtester',
    icon: 'lucide:bar-chart-2',
    description: 'The journal Waylon uses to track every trade and backtest BBR setups. If you're serious about improving, you need data. TradeZella gives you that — beautifully designed and built for active traders.',
    url: 'https://refer.tradezella.com/waylon-skinner',
    cta: 'Start Journaling with TradeZella',
    delay: 300,
  },
  {
    name: 'Robinhood',
    category: 'Options Trading',
    icon: 'lucide:feather',
    description: 'Where Waylon executes options swing trades. Commission-free, clean interface, and solid for running the BBR options strategy on individual equities. Great starting point for swing traders.',
    url: 'https://join.robinhood.com/',
    cta: 'Open a Robinhood Account',
    delay: 400,
  },
]
</script>

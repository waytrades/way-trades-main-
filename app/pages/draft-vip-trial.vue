<template>
  <div class="min-h-screen bg-slate-950 text-white font-sans selection:bg-yellow-500 selection:text-slate-950">
    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div class="container mx-auto px-4 py-3 flex justify-center md:justify-between items-center">
        <NuxtLink to="/" class="flex items-center gap-3 justify-center hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="Way Trades Logo" class="w-12 h-12 object-contain" />
          <span class="text-xl font-black tracking-tighter">WAY TRADES</span>
        </NuxtLink>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative py-4 md:py-8 overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent -z-10"></div>
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-xs font-bold border border-red-500/20 mb-2 animate-pulse">
            <div class="w-2 h-2 bg-red-500 rounded-full"></div>
            LIMITED TIME OFFER
          </div>

          <!-- Main Headline -->
          <h1 class="text-3xl md:text-5xl font-black tracking-tighter mb-3 leading-[1.1]">
            Watch Me Trade Live
            <br class="md:hidden" />
            <span class="text-yellow-500">Every Day For Free</span>
          </h1>

          <!-- Subheadline -->
          <p class="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
            See exactly how I apply the BBR Strategy to live markets. Full screen share. Real trades. Real results. No BS.
          </p>

          <!-- Main CTA -->
          <div class="mb-4">
            <a href="https://whop.com/waytrades/vip-access-60-1cb2/" target="_blank" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-black py-3 px-8 rounded-lg transition-all transform hover:scale-105 text-base shadow-[0_0_30px_rgba(234,179,8,0.4)]">
              START 7-DAY FREE TRIAL
            </a>
            <p class="text-gray-400 text-xs mt-2">Cancel anytime.</p>
          </div>

          <!-- VSL Placeholder -->
          <div class="bg-slate-900 border-2 border-dashed border-yellow-500/30 rounded-xl p-4 text-center mb-6">
            <Icon name="lucide:video" class="w-10 h-10 text-yellow-500/50 mx-auto mb-1" />
            <p class="text-gray-400 text-sm font-bold mb-1">Video Sales Letter (VSL)</p>
            <p class="text-gray-500 text-xs">Your custom VSL will be embedded here</p>
          </div>

          <!-- Value Props -->
          <div class="grid md:grid-cols-3 gap-3 mb-6">
            <div class="bg-slate-900/50 border border-slate-800 rounded-lg p-3">
              <Icon name="lucide:calendar" class="w-5 h-5 text-yellow-500 mx-auto mb-1" />
              <p class="text-xs font-bold">Daily at 9:25 AM EST</p>
            </div>
            <div class="bg-slate-900/50 border border-slate-800 rounded-lg p-3">
              <Icon name="lucide:monitor" class="w-5 h-5 text-yellow-500 mx-auto mb-1" />
              <p class="text-xs font-bold">Full Screen Share</p>
            </div>
            <div class="bg-slate-900/50 border border-slate-800 rounded-lg p-3">
              <Icon name="lucide:zap" class="w-5 h-5 text-yellow-500 mx-auto mb-1" />
              <p class="text-xs font-bold">Real Money Trading</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What You Get Section -->
    <section class="py-16 md:py-24 bg-slate-950">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-black text-center mb-12">What's Included in Your 7-Day Trial</h2>
        
        <div class="max-w-3xl mx-auto space-y-6">
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <Icon name="lucide:video" class="w-6 h-6 text-yellow-500" />
              </div>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-2">Live Daily Trading Sessions</h3>
              <p class="text-gray-400">Join me every weekday at 9:25 AM EST as I trade the BBR Strategy in real-time. Full screen share. Every trade explained.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <Icon name="lucide:list" class="w-6 h-6 text-yellow-500" />
              </div>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-2">Morning Watchlists</h3>
              <p class="text-gray-400">Every morning before the market opens, I send a curated list of setups I'm watching. Pre-identified opportunities.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <Icon name="lucide:signal" class="w-6 h-6 text-yellow-500" />
              </div>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-2">Live Trading Signals</h3>
              <p class="text-gray-400">Real-time alerts when I identify a BBR setup forming. Entry, exit, and risk management all included.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <Icon name="lucide:book" class="w-6 h-6 text-yellow-500" />
              </div>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-2">Full Video Courses</h3>
              <p class="text-gray-400">Access to the complete BBR Strategy video library. Learn at your own pace. Lifetime access.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <Icon name="lucide:users" class="w-6 h-6 text-yellow-500" />
              </div>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-2">Trading Community</h3>
              <p class="text-gray-400 text-sm">Join 100+ serious traders in our Discord. Ask questions, share wins, get feedback from the community.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Math Section -->
    <section class="py-16 md:py-24 bg-slate-900/50 border-y border-slate-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-black text-center mb-12">The Math That Works</h2>
        
        <div class="max-w-3xl mx-auto">
          <div class="bg-slate-900 border-2 border-yellow-500/30 rounded-2xl p-8 md:p-12">
            <div class="grid grid-cols-3 gap-6 mb-8">
              <div class="text-center">
                <p class="text-yellow-500 text-4xl md:text-5xl font-black mb-2">55%</p>
                <p class="text-gray-400 font-bold">WIN RATE</p>
              </div>
              <div class="text-center">
                <p class="text-yellow-500 text-4xl md:text-5xl font-black mb-2">3.92</p>
                <p class="text-gray-400 font-bold">PROFIT FACTOR</p>
              </div>
              <div class="text-center">
                <p class="text-yellow-500 text-4xl md:text-5xl font-black mb-2">1:3</p>
                <p class="text-gray-400 font-bold">RISK:REWARD</p>
              </div>
            </div>

            <p class="text-gray-300 text-center mb-6">
              This isn't theoretical. This is 6 hours of raw backtest data on real market conditions. The BBR Strategy works because it's built on mathematical edge, not hype.
            </p>

            <div class="bg-slate-800 border border-yellow-500/20 rounded-lg p-4 text-center">
              <p class="text-gray-400 text-sm">
                <span class="text-yellow-500 font-bold">55% Win Rate</span> means you win more than you lose. 
                <span class="text-yellow-500 font-bold">1:3 Risk:Reward</span> means every win is 3x bigger than every loss. 
                <span class="text-yellow-500 font-bold">3.92 Profit Factor</span> means you make $3.92 for every $1 you risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof Section -->
    <section class="py-16 md:py-24 bg-slate-950">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-black text-center mb-12">What VIP Members Are Saying</h2>
        
        <div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div class="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <span class="text-yellow-500 font-black text-sm">JC</span>
              </div>
              <div>
                <p class="font-bold">JCNY</p>
                <p class="text-xs text-gray-500">VIP Member</p>
              </div>
            </div>
            <p class="text-gray-300 text-sm mb-3">"Watching you trade live changed everything. I finally understand how to apply the strategy in real-time."</p>
            <div class="flex gap-1">
              <Icon name="lucide:star" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Icon name="lucide:star" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Icon name="lucide:star" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Icon name="lucide:star" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Icon name="lucide:star" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
            </div>
          </div>

          <div class="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <span class="text-yellow-500 font-black text-sm">BE</span>
              </div>
              <div>
                <p class="font-bold">Big E</p>
                <p class="text-xs text-gray-500">VIP Member</p>
              </div>
            </div>
            <p class="text-gray-300 text-sm mb-3">"The live sessions are worth 10x the price. Seeing the strategy in action is completely different from watching videos."</p>
            <div class="flex gap-1">
              <Icon name="lucide:star" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Icon name="lucide:star" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Icon name="lucide:star" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Icon name="lucide:star" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Icon name="lucide:star" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 md:py-24 bg-slate-900/50 border-y border-slate-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-black text-center mb-12">Common Questions</h2>
        
        <div class="max-w-2xl mx-auto space-y-4">
          <details class="bg-slate-900 border border-slate-800 rounded-lg p-6 cursor-pointer group">
            <summary class="font-bold flex items-center justify-between">
              <span>Do I need trading experience?</span>
              <Icon name="lucide:chevron-down" class="w-5 h-5 group-open:rotate-180 transition-transform" />
            </summary>
            <p class="text-gray-400 mt-4">No. The BBR Strategy is designed for traders of all levels. I explain everything from the ground up during the live sessions.</p>
          </details>

          <details class="bg-slate-900 border border-slate-800 rounded-lg p-6 cursor-pointer group">
            <summary class="font-bold flex items-center justify-between">
              <span>What if I can't make the 9:25 AM EST time?</span>
              <Icon name="lucide:chevron-down" class="w-5 h-5 group-open:rotate-180 transition-transform" />
            </summary>
            <p class="text-gray-400 mt-4">If you can't make the morning lives, you'll be able to watch me recap each and every trading day in the "trade-recaps" channel in the Discord.</p>
          </details>

          <details class="bg-slate-900 border border-slate-800 rounded-lg p-6 cursor-pointer group">
            <summary class="font-bold flex items-center justify-between">
              <span>What happens after the 7-day trial?</span>
              <Icon name="lucide:chevron-down" class="w-5 h-4 group-open:rotate-180 transition-transform" />
            </summary>
            <p class="text-gray-400 mt-4">Your trial converts to a $74/month VIP membership. You can cancel anytime, no questions asked. But most people stay because the value is undeniable.</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-16 md:py-24 bg-slate-950">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-black mb-6">Ready to See the Math in Action?</h2>
          <p class="text-lg text-gray-400 mb-8">Join me tomorrow at 9:25 AM EST. See exactly how I trade the BBR Strategy. No hype. Just math.</p>
          
          <a href="https://whop.com/waytrades/vip-access-60-1cb2/" target="_blank" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-black py-5 px-12 rounded-lg transition-all transform hover:scale-105 text-lg shadow-[0_0_30px_rgba(234,179,8,0.4)] mb-4">
            START 7-DAY FREE TRIAL
          </a>
          <p class="text-gray-400 text-sm">Cancel anytime.</p>
        </div>
      </div>
    </section>

    <!-- Backtest Video Section -->
    <section class="py-16 md:py-24 bg-slate-900/50 border-t border-slate-800">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-black text-center mb-12">The Math That Works</h2>
          <!-- YouTube Video Embed -->
          <div class="relative bg-slate-900 border-2 border-yellow-500/50 rounded-2xl overflow-hidden aspect-video mb-6">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TbDnaZZVZ-E"
              title="4-Hour Backtest Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="absolute inset-0"
            ></iframe>
          </div>
          <p class="text-center text-gray-400 text-sm">6 hours of raw backtest data. 55% win rate. 3.92 profit factor. No hype. Just math.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 border-t border-slate-800 bg-slate-950">
      <div class="container mx-auto px-4 text-center">
        <p class="text-gray-500 text-sm">
          © 2026 Way Trades. Trading involves significant risk. This is educational content only.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Page meta
definePageMeta({
  layout: 'default'
})
</script>

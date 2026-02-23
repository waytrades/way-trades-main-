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
          <div class="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full text-sm font-bold border border-yellow-500/20 mb-6">
            <Icon name="lucide:zap" class="w-4 h-4" />
            FREE STRATEGY GUIDE
          </div>

          <!-- Main Headline -->
          <h1 class="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.1]">
            The <span class="text-yellow-500">BBR Strategy</span> Cheat Sheet
          </h1>

          <!-- Subheadline -->
          <p class="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Stop chasing high win rates with low risk:reward. Get the exact framework I use to rinse prop firms with a 1:3 edge and a 55% win rate.
          </p>

          <!-- CTA Button -->
          <a href="https://whop.com/waytrades/the-bbr-strategy-starter-kit/?utm_source=store_page&funnelId=store_a4d97bb8-8f7c-46b9-922b-21890f5d5180" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-black px-8 md:px-12 py-4 md:py-5 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg md:text-xl mb-6 shadow-lg shadow-yellow-500/20">
            <Icon name="lucide:download" class="w-5 h-5" />
            GET FREE CHEAT SHEET
          </a>

          <!-- Trust Signals -->
          <div class="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-400">
            <div class="flex items-center gap-2">
              <Icon name="lucide:lock" class="w-4 h-4 text-yellow-500" />
              <span>Your email is safe with us</span>
            </div>
            <div class="hidden md:block">•</div>
            <div class="flex items-center gap-2">
              <Icon name="lucide:mail" class="w-4 h-4 text-yellow-500" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>

          <!-- Value Props -->
          <div class="grid md:grid-cols-3 gap-6 mb-12">
            <div class="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <Icon name="lucide:target" class="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <p class="font-bold mb-2">The 3 BBR Setups</p>
              <p class="text-sm text-gray-400">Breakouts, Bounces & Rejects explained</p>
            </div>
            <div class="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <Icon name="lucide:calculator" class="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <p class="font-bold mb-2">Risk Management Math</p>
              <p class="text-sm text-gray-400">Position sizing for the 1:3 edge</p>
            </div>
            <div class="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <Icon name="lucide:chart-line" class="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <p class="font-bold mb-2">Real Backtest Data</p>
              <p class="text-sm text-gray-400">55% win rate. 3.92 profit factor.</p>
            </div>
          </div>


        </div>
      </div>
    </section>

    <!-- What You'll Get Section -->
    <section class="py-16 md:py-24 bg-slate-900/50 border-y border-slate-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-black text-center mb-12">What's Inside the Cheat Sheet</h2>
        
        <div class="max-w-3xl mx-auto space-y-6">
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <span class="text-yellow-500 font-black">1</span>
              </div>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-2">The BBR Framework</h3>
              <p class="text-gray-400">The exact 3-setup system I use to identify high-probability trades. No guessing. Pure math.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <span class="text-yellow-500 font-black">2</span>
              </div>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-2">Position Sizing Formula</h3>
              <p class="text-gray-400">How to calculate your exact position size based on your account and the 1:3 risk-reward ratio.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <span class="text-yellow-500 font-black">3</span>
              </div>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-2">Entry & Exit Rules</h3>
              <p class="text-gray-400">The exact price action patterns that signal a BBR setup is forming. When to enter. When to exit.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <span class="text-yellow-500 font-black">4</span>
              </div>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-2">Real Backtest Results</h3>
              <p class="text-gray-400">6 hours of raw backtest data showing the exact performance metrics of this strategy on live market data.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof Section -->
    <section class="py-16 md:py-24 bg-slate-950">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-black text-center mb-12">Traders Are Already Using This</h2>
        
        <div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div class="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <span class="text-yellow-500 font-black text-sm">DE</span>
                </div>
                <div>
                  <p class="font-bold">DeErick</p>
                <p class="text-xs text-gray-500">Verified Member</p>
              </div>
            </div>
            <p class="text-gray-300 text-sm">"This strategy changed how I think about risk. The 1:3 edge is the real deal."</p>
          </div>

            <div class="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <span class="text-yellow-500 font-black text-sm">BE</span>
                </div>
                <div>
                  <p class="font-bold">Big E</p>
                <p class="text-xs text-gray-500">Verified Member</p>
              </div>
            </div>
            <p class="text-gray-300 text-sm">"Finally, someone teaching math over hype. This is exactly what I was looking for."</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-16 md:py-24 bg-slate-900/50 border-t border-slate-800">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-black mb-6">Ready to Learn the Math?</h2>
          <p class="text-lg text-gray-400 mb-8">Get the cheat sheet and start thinking about trading differently. No credit card required.</p>
          
          <a href="https://whop.com/waytrades/the-bbr-strategy-starter-kit/?utm_source=store_page&funnelId=store_a4d97bb8-8f7c-46b9-922b-21890f5d5180" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-black px-8 md:px-12 py-4 md:py-5 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg md:text-xl shadow-lg shadow-yellow-500/20">
            <Icon name="lucide:download" class="w-5 h-5" />
            GET FREE CHEAT SHEET
          </a>
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

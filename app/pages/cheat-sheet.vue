<template>
  <div class="min-h-screen bg-slate-950 text-white font-sans selection:bg-green-500 selection:text-slate-950">
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
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent -z-10"></div>
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <!-- Main Headline -->
          <h1 class="text-4xl md:text-6xl font-black tracking-tighter mb-12 leading-[1.1]">
            The <span class="text-green-500">BBR Strategy</span> Cheat Sheet
          </h1>

          <!-- VSL Video Section -->
          <div class="w-full max-w-2xl mx-auto mb-8">
            <div class="relative w-full bg-slate-900 rounded-lg overflow-hidden border border-slate-800 shadow-lg" style="padding-bottom: 56.25%;">
              <iframe 
                src="https://player.mediadelivery.net/embed/617398/1239e75e-8a41-4831-a58f-9052807cbedf?autoplay=false&loop=true&muted=false&preload=true&responsive=true" 
                loading="lazy" 
                style="border:0;position:absolute;top:0;height:100%;width:100%;" 
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
                allowfullscreen="true">
              </iframe>
            </div>
          </div>

          <!-- CTA Button -->
          <a href="https://whop.com/waytrades/the-bbr-strategy-starter-kit/?utm_source=store_page&funnelId=store_a4d97bb8-8f7c-46b9-922b-21890f5d5180" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-slate-950 font-black px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg md:text-xl mb-8 shadow-lg shadow-green-500/20">
            <Icon name="lucide:download" class="w-5 h-5" />
            GET FREE CHEAT SHEET
          </a>

          <!-- Subheadline (Moved Below CTA) -->
          <p class="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            Stop chasing high win rates with low risk:reward. Get the exact framework I use to rinse prop firms with a 1:3 edge and a 50% win rate.
          </p>

          <!-- Value Props -->
          <div class="grid md:grid-cols-3 gap-6 mb-12">
            <div class="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <Icon name="lucide:target" class="w-8 h-8 text-green-500 mx-auto mb-3" />
              <p class="font-bold mb-2">The 3 BBR Setups</p>
              <p class="text-sm text-gray-400">Breakouts, Bounces & Rejects explained</p>
            </div>
            <div class="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <Icon name="lucide:calculator" class="w-8 h-8 text-green-500 mx-auto mb-3" />
              <p class="font-bold mb-2">Risk Management Math</p>
              <p class="text-sm text-gray-400">Position sizing for the 1:3 edge</p>
            </div>
            <div class="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <Icon name="lucide:chart-line" class="w-8 h-8 text-green-500 mx-auto mb-3" />
              <p class="font-bold mb-2">Real Backtest Data</p>
              <p class="text-sm text-gray-400">50% win rate. 1:3 Risk:Reward.</p>
            </div>
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
          
          <a href="https://whop.com/waytrades/the-bbr-strategy-starter-kit/?utm_source=store_page&funnelId=store_a4d97bb8-8f7c-46b9-922b-21890f5d5180" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-slate-950 font-black px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg md:text-xl shadow-lg shadow-green-500/20">
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

// SEO Meta Tags
useSeoMeta({
  title: 'Free BBR Strategy Cheat Sheet | Master the 1:3 Trading Edge',
  ogTitle: 'Free BBR Strategy Cheat Sheet | Master the 1:3 Trading Edge',
  description: 'Download the exact framework I use to trade breakouts, bounces, and rejects with a 50% win rate. Get the PDF cheat sheet and start trading with a mathematical edge today.',
  ogDescription: 'Download the exact framework I use to trade breakouts, bounces, and rejects with a 50% win rate. Get the PDF cheat sheet and start trading with a mathematical edge today.',
  ogImage: '/logo.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <section id="about" class="bg-slate-950 border-t border-slate-800 py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

        <!-- Photo -->
        <div
          class="lg:col-span-2"
          v-motion="{ initial: { opacity: 0, x: -30 }, enter: { opacity: 1, x: 0, transition: { duration: 700 } } }"
        >
          <div class="relative max-w-sm mx-auto lg:mx-0">
            <div class="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-3xl blur-2xl"></div>
            <div class="relative rounded-3xl overflow-hidden border border-green-500/20 shadow-2xl">
              <img
                src="/waylon.jpg"
                alt="Waylon — founder of Way Trades"
                class="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <!-- Floating badge -->
            <div class="absolute -bottom-4 -right-4 bg-slate-900 border border-green-500/30 rounded-2xl px-5 py-3 shadow-xl">
              <p class="text-green-500 font-black text-lg leading-none">5 Years</p>
              <p class="text-gray-500 text-xs mt-1">Trading Full-Time</p>
            </div>
          </div>
        </div>

        <!-- Copy -->
        <div
          class="lg:col-span-3"
          v-motion="{ initial: { opacity: 0, x: 30 }, enter: { opacity: 1, x: 0, transition: { duration: 700, delay: 150 } } }"
        >
          <span class="inline-block px-4 py-1.5 bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-black rounded-full uppercase tracking-widest mb-6">
            Meet the Trader
          </span>
          <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Hey, I\'m Waylon.
          </h2>

          <div class="space-y-5 text-gray-400 text-lg leading-relaxed">
            <p>
              I\'ve been trading for almost five years, and it\'s now my full-time income. But the turning point wasn\'t learning more — it was realizing <span class="text-white font-bold">less is more</span>. I already had the knowledge and the tools. What I was missing was the discipline to wait for A+ setups and size correctly when they showed up.
            </p>
            <p>
              When I started, I had no way to learn properly from real traders for free. So that\'s exactly what I built. The BBR strategy and everything inside the community is free — because seeing other traders pass accounts and take payouts from what I teach is what makes it worth it.
            </p>
            <p class="text-gray-300">
              If you want to support the free education, use my code when you buy an account — and always treat every account like it\'s real money, with proper risk management.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 mt-10">
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
              class="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-600 hover:border-green-500 text-white font-black rounded-full transition-all duration-300 hover:bg-green-500/10"
            >
              <Icon name="lucide:instagram" class="w-5 h-5" />
              Follow @way_trades
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>

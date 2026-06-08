<template>
  <div class="min-h-screen bg-slate-950 text-gray-200 font-sans selection:bg-green-500 selection:text-slate-950">
    <!-- Navigation -->
    <nav class="sticky top-4 z-50 px-4">
      <div class="container mx-auto max-w-5xl">
        <div class="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full px-2 py-2 flex justify-between items-center shadow-2xl relative">
          <div class="flex items-center gap-3 pl-4">
            <NuxtLink to="/">
              <img src="/logo.png" alt="Way Trades Logo" class="w-8 h-8 object-contain" />
            </NuxtLink>
            <NuxtLink to="/" class="text-[11px] font-black tracking-tighter text-gray-200 hover:text-green-500 transition-colors">WAY TRADES</NuxtLink>
          </div>
          <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-[11px] font-bold text-gray-400">
            <NuxtLink to="/" class="hover:text-green-500 transition-colors">HOME</NuxtLink>
          </div>
          <div class="hidden md:block">
            <a href="https://whop.com/waytrades/vip-access-60-1cb2/" target="_blank" class="bg-green-500 text-slate-950 px-6 py-2.5 rounded-full hover:bg-green-600 transition-all font-black text-xs flex items-center gap-2 group">
              JOIN DISCORD
              <Icon name="lucide:chevron-right" class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto max-w-3xl px-4 py-12">
      <div class="prose prose-invert max-w-none">
        <h1 class="text-4xl font-black mb-2 text-white">Terms & Conditions</h1>

        <div class="space-y-6 text-gray-300 leading-relaxed">
          <div class="bg-red-900/20 border border-red-800 rounded-lg p-4 my-6">
            <p class="font-bold text-red-400">
              This is NOT an investment advisory, and should not be used to make investment decisions. Information provided should only be considered for informational purposes.
            </p>
          </div>

          <section>
            <p class="font-bold text-lg">
              WayTradesLLC, known as Way Trades, accepts no liability for any direct or
              consequential loss arising from any use of information found within the Way
              Trades server.
            </p>
          </section>

          <section>
            <p>
              The reader bears responsibility for his/her own investment research and
              decisions. Information found on the Way Trades server, posted by Admins and
              Waylon is not intended to be used as the sole basis of any investment decision,
              nor should it be construed as advice designed to meet the investment needs of
              any particular investor.
            </p>
          </section>

          <section>
            <p>
              The Sites or Associated Services is provided solely for informational purposes on
              an "as is" basis at the user's sole risk. Even if the information is displayed as
              "signals" or "trade ideas", this is not trading or investment advice. Information in
              this chat is purely for educational purposes. In addition, Way Trades has no
              affiliations with companies or investment houses. As such, any educational
              individual listings are purely based upon one of our team member's personal
              beliefs and research, not on any outside influence or possible bias.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">Important Disclaimer</h2>
            <div class="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4">
              <p>
                Trading in financial markets involves substantial risk of loss. Past performance is not indicative of future results. 
                Way Trades provides educational content and is not liable for any trading losses or financial outcomes resulting from the use of our materials.
              </p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">Acknowledgment</h2>
            <p>
              By accessing and using Way Trades services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p>
              For any questions regarding these Terms & Conditions, please contact us at<br />
              <strong>contact@waytrades.com</strong>
            </p>
          </section>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-800 mt-16 py-8">
      <div class="container mx-auto max-w-5xl px-4">
        <div class="flex flex-col items-center justify-center space-y-6">
          <div class="flex items-center gap-2">
            <img src="/logo.png" alt="Way Trades Logo" class="w-6 h-6 object-contain" />
            <span class="text-xs font-black text-gray-400">WAY TRADES</span>
          </div>
          <div class="text-xs text-gray-500 text-center max-w-md">
            Trading involves significant risk of loss and is not suitable for all investors. Way Trades provides educational content only and does not provide financial advice.
          </div>
          <div class="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
            <NuxtLink to="/privacy" class="hover:text-green-500 transition-colors">Privacy Policy</NuxtLink>
            <span>|</span>
            <NuxtLink to="/return-policy" class="hover:text-green-500 transition-colors">Return Policy</NuxtLink>
            <span>|</span>
            <NuxtLink to="/terms-of-service" class="hover:text-green-500 transition-colors">Terms & Conditions</NuxtLink>
            <span>|</span>
            <NuxtLink to="/eula" class="hover:text-green-500 transition-colors">EULA</NuxtLink>
          </div>
          <div class="text-xs text-gray-600">
            © 2026 Way Trades. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Terms & Conditions | Way Trades',
  meta: [
    {
      name: 'description',
      content: 'Way Trades Terms & Conditions - Important legal information and disclaimers for using our services.'
    }
  ]
})
</script>

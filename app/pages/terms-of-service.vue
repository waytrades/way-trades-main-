<template>
  <div class="min-h-screen bg-slate-950 text-slate-200 py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold text-yellow-400 mb-8">Terms & Conditions</h1>
      <p class="text-sm text-slate-400 mb-12">Last Updated: February 11, 2026</p>

      <section class="mb-10">
        <p class="mb-4">
          This is NOT an investment advisory, and should not be used to make investment
          decisions. Information provided should only be considered for informational
          purposes.
        </p>
        <p class="mb-4">
          WayTradesLLC, known as Way Trades, accepts no liability for any direct or
          consequential loss arising from any use of information found within the Way
          Trades server.
        </p>
        <p class="mb-4">
          The reader bears responsibility for his/her own investment research and
          decisions. Information found on the Way Trades server, posted by Admins and
          Waylon is not intended to be used as the sole basis of any investment decision,
          nor should it be construed as advice designed to meet the investment needs of
          any particular investor.
        </p>
        <p class="mb-4">
          The Sites or Associated Services is provided solely for informational purposes on
          an “as is” basis at the user’s sole risk. Even if the information is displayed as
          “signals” or “trade ideas”, this is not trading or investment advice. Information in
          this chat is purely for educational purposes. In addition, Way Trades has no
          affiliations with companies or investment houses. As such, any educational
          individual listings are purely based upon one of our team member’s personal
          beliefs and research, not on any outside influence or possible bias.
        </p>
      </section>

      <div class="mt-20 pt-8 border-t border-slate-800">
        <NuxtLink to="/" class="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-2">
          <span>&larr;</span> Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Terms & Conditions | Way Trades',
  meta: [
    { name: 'description', content: 'Terms and Conditions for Way Trades - Trading Education and BBR Strategy.' }
  ]
})
</script>

<template>
  <section class="bg-slate-950 border-t border-slate-800 py-24 px-4">
    <div class="max-w-3xl mx-auto text-center" v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }">
      <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
        Stop Guessing. Start Executing.
      </h2>
      <p class="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
        The difference between a gambler and a trader is a repeatable process. Your journey toward consistency starts with the right community and the right math.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://whop.com/waytrades/vip-access-60-1cb2/"
          target="_blank"
          class="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-slate-950 font-black rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/50 duration-300"
        >
          Start 5-Day Free Trial
        </a>
        <a
          href="https://whop.com/waytrades/free-access-c6/"
          target="_blank"
          class="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 hover:border-green-500 text-white font-black rounded-full transition-all duration-300 hover:bg-green-500/10"
        >
          Join Free Discord
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

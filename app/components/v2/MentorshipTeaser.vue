<template>
  <section class="bg-slate-950 border-t border-slate-800 py-24 px-4">
    <div class="max-w-2xl mx-auto text-center" v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-2xl mb-8 animate-float">
        <Icon name="lucide:star" class="w-8 h-8 text-green-500" />
      </div>
      <h2 class="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
        The Next Level: 1-on-1 Mentorship.
      </h2>
      <p class="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
        We are currently refining a high-touch mentorship program for traders ready for absolute accountability and professional-grade execution reviews. This isn't a course — it's a transformation.
      </p>
      <div class="inline-flex flex-col items-center gap-3">
        <span class="px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-500 text-sm font-bold rounded-full uppercase tracking-wider">
          Limited Spots
        </span>
        <p class="text-gray-500 text-sm">Waitlist opening soon.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>

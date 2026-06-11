<template>
  <section class="bg-slate-950 border-t border-slate-800 py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <div
        class="text-center mb-16 max-w-3xl mx-auto"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }"
      >
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          You've Got the Knowledge. Now You Need the Discipline.
        </h2>
        <p class="text-lg md:text-xl text-gray-400 leading-relaxed">
          You've been trading for 1–4 years. You know the indicators, you've seen the setups, but the equity curve isn't moving. We bridge the gap between "knowing how to trade" and "being a trader."
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(point, index) in audiencePoints"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 + index * 100 } }"
          class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300"
        >
          <div class="w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-xl mb-6">
            <Icon :name="point.icon" class="w-6 h-6 text-green-500" />
          </div>
          <h3 class="text-xl font-black text-white mb-3">{{ point.title }}</h3>
          <p class="text-gray-400 leading-relaxed">{{ point.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const audiencePoints = [
  {
    icon: 'lucide:alert-circle',
    title: 'This is for you if...',
    description: 'You find yourself breaking your own rules in the heat of the moment and sabotaging perfectly good setups.'
  },
  {
    icon: 'lucide:trending-down',
    title: 'This is for you if...',
    description: 'You've struggled to pass or maintain prop firm accounts because of emotional over-leveraging and revenge trading.'
  },
  {
    icon: 'lucide:compass',
    title: 'This is for you if...',
    description: 'You have a "strategy" but lack a clear, repeatable process for when to step away from the screens.'
  }
]
</script>

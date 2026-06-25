<template>
  <section class="bg-slate-950 border-b border-slate-800 py-10 px-4">
    <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        v-motion
        :initial="{ opacity: 0, y: 10 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
        class="flex items-center gap-4 p-4 rounded-xl hover:bg-green-500/5 transition-all duration-300"
      >
        <Icon :name="stat.icon" class="w-8 h-8 text-green-500 flex-shrink-0" />
        <div>
          <p class="text-white font-black text-lg leading-none">{{ stat.value }}</p>
          <p class="text-gray-500 text-sm mt-1">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const { data: memberData } = await useFetch('/api/members', {
  server: true,
  lazy: false,
})

const memberCount = computed(() => {
  const count = memberData.value?.count
  if (!count) return '—'
  return count.toLocaleString()
})

const stats = computed(() => [
  { icon: 'lucide:shield', value: memberCount.value, label: 'Members · Not a signal farm' },
  { icon: 'lucide:target', value: '1:3+ R:R', label: 'Target Risk:Reward' },
  { icon: 'lucide:star', value: '4.9 / 5', label: 'Avg Member Rating' },
  { icon: 'lucide:gift', value: '100% Free', label: 'No Paywalls · No Catch' },
])
</script>

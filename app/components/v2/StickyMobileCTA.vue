<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div
      v-if="visible"
      class="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-safe-area-inset-bottom"
      style="padding-bottom: max(1rem, env(safe-area-inset-bottom));"
    >
      <div class="bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-2xl flex items-center gap-3">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1.5 mb-0.5">
            <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0"></span>
            <span class="text-[10px] text-green-400 font-bold uppercase tracking-wider">Live every market day</span>
          </div>
          <p class="text-white font-black text-sm truncate">5-Day Free Trial</p>
          <p class="text-gray-500 text-[11px]">Then $74/mo · cancel anytime</p>
        </div>
        <a
          href="https://whop.com/waytrades/vip-access-60-1cb2/"
          target="_blank"
          class="flex-shrink-0 bg-green-500 hover:bg-green-600 text-slate-950 font-black px-5 py-3 rounded-xl text-sm transition-all active:scale-95"
        >
          Join VIP →
        </a>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

const handleScroll = () => {
  const scrolled = window.scrollY
  const total = document.body.scrollHeight - window.innerHeight
  visible.value = total > 0 && scrolled / total >= 0.4
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

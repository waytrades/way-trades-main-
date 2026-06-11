<template>
  <section class="bg-slate-950 border-t border-slate-800 py-24 px-4">
    <div class="max-w-3xl mx-auto">

      <div
        class="text-center mb-16"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }"
      >
        <h2 class="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Common Questions
        </h2>
        <p class="text-lg text-gray-400">Everything you need to know before joining.</p>
      </div>

      <div
        class="space-y-3"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 150 } } }"
      >
        <div
          v-for="(item, i) in faqs"
          :key="i"
          class="border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
          :class="open === i ? 'border-green-500/30 bg-slate-900/60' : 'bg-slate-900/30 hover:border-slate-700'"
        >
          <button
            class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            @click="open = open === i ? null : i"
          >
            <span class="text-white font-black text-base leading-snug">{{ item.q }}</span>
            <span class="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full border transition-all duration-300"
              :class="open === i ? 'border-green-500/50 bg-green-500/10 text-green-500' : 'border-slate-700 text-gray-500'"
            >
              <Icon :name="open === i ? 'lucide:minus' : 'lucide:plus'" class="w-4 h-4" />
            </span>
          </button>

          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-96"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 max-h-96"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="open === i" class="px-6 pb-6">
              <div class="border-t border-slate-800 pt-4">
                <p class="text-gray-400 leading-relaxed">{{ item.a }}</p>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-12 text-center">
        <p class="text-gray-500 text-sm mb-4">Still have questions? Join the free Discord and ask directly.</p>
        <a
          href="https://whop.com/waytrades/free-access-c6/"
          target="_blank"
          class="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-green-500 text-gray-400 hover:text-white font-bold rounded-full transition-all duration-300 hover:bg-green-500/10 text-sm"
        >
          <Icon name="lucide:message-circle" class="w-4 h-4" />
          Join Free Discord
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(0)

const faqs = [
  {
    q: "Are your signals instant copy-and-paste trades?",
    a: "No — and that's intentional. Way Trades is an education-first community. You'll watch live screen-share sessions, understand the BBR setup, and learn to execute it yourself. The goal is to make you a self-sufficient trader, not dependent on someone else's alerts."
  },
  {
    q: "Is this beginner-friendly?",
    a: "It's best suited for traders who have some foundational knowledge — ideally 1–4 years of experience — and are struggling with consistency and discipline rather than needing to learn what a candlestick is. If you're completely new to trading, the free Discord is a great starting point."
  },
  {
    q: "How often are sessions delivered?",
    a: "Every market day. Live screen-share trading sessions start at 9:25 AM EST, Monday through Friday, on every day the US markets are open. Morning watchlists, trade recaps, and swing trade alerts are posted throughout the day in the VIP channels."
  },
  {
    q: "How do I get Discord access after purchasing?",
    a: "Immediately after completing checkout on Whop, you'll receive an invitation link to the private Discord server. The whole process takes under two minutes. If you run into any issues, support is available directly in the free Discord."
  },
  {
    q: "Do you offer refunds?",
    a: "The 5-day free trial exists so you can evaluate the community with zero financial risk. Because of the trial, refunds are not offered after the trial period ends and billing begins. If you're unsure, start with the free Discord or the BBR Cheat Sheet before committing."
  },
]
</script>

<template>
  <section class="py-20 md:py-32 bg-slate-950 border-t border-slate-800">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-white mb-4">
          REAL <span class="text-yellow-500">RESULTS</span> FROM REAL TRADERS
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          See how traders like you are applying the BBR Strategy and achieving consistent, mathematically-proven results.
        </p>
      </div>

      <!-- Testimonials Carousel -->
      <div class="relative">
        <!-- Scroll Container -->
        <div 
          ref="scrollContainer"
          class="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scroll-smooth"
          style="scroll-behavior: smooth; -webkit-overflow-scrolling: touch;"
        >
          <!-- Testimonial Cards -->
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center"
          >
            <div class="bg-slate-900 border border-slate-800 rounded-xl p-8 h-full flex flex-col justify-between hover:border-yellow-500/50 transition-colors">
              <!-- Stars -->
              <div class="flex gap-1 mb-4">
                <Icon v-for="star in 5" :key="star" name="lucide:star" class="w-5 h-5 text-yellow-500 fill-yellow-500" />
              </div>

              <!-- Quote -->
              <p class="text-gray-300 text-lg mb-6 flex-grow">
                "{{ testimonial.quote }}"
              </p>

              <!-- Author -->
              <div class="border-t border-slate-700 pt-4">
                <p class="font-bold text-white">{{ testimonial.author }}</p>
                <p class="text-gray-400 text-sm">{{ testimonial.title }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons (Desktop) -->
        <button 
          @click="scroll('left')"
          class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 items-center justify-center w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-slate-950 rounded-full transition-colors z-10"
          aria-label="Scroll left"
        >
          <Icon name="lucide:chevron-left" class="w-6 h-6" />
        </button>
        <button 
          @click="scroll('right')"
          class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 items-center justify-center w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-slate-950 rounded-full transition-colors z-10"
          aria-label="Scroll right"
        >
          <Icon name="lucide:chevron-right" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Scroll Indicator -->
      <div class="md:hidden text-center mt-6 text-gray-400 text-sm">
        Swipe to see more testimonials →
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const scrollContainer = ref(null)

const testimonials = [
  {
    quote: "I was skeptical about the 50% win rate until I backtested it myself. The math checks out. Way Trades isn't hype—it's pure strategy.",
    author: "Marcus T.",
    title: "Day Trader, 3 months VIP"
  },
  {
    quote: "The BBR strategy changed how I approach trading. Instead of chasing 90% win rates, I focused on the 1:3 risk-to-reward. My account is up 34% this quarter.",
    author: "Sarah M.",
    title: "Swing Trader, 6 months VIP"
  },
  {
    quote: "Finally, a community that values education over false promises. The live trading sessions alone are worth the membership. The math is real.",
    author: "James K.",
    title: "Options Trader, 1 year VIP"
  },
  {
    quote: "I've been in trading for 5 years. Way Trades is the first place where I actually understand WHY the strategy works, not just HOW to execute it.",
    author: "Alex R.",
    title: "Futures Trader, Mentorship Program"
  },
  {
    quote: "The backtest proof video convinced me. Seeing 3.92 profit factor with a 56% win rate over 6 months of data—that's not luck, that's a system.",
    author: "Chris D.",
    title: "Stock Trader, Free Community"
  },
  {
    quote: "The free Discord has more value than paid courses I've taken. The mentorship program took my trading to the next level. Highly recommend.",
    author: "Emma L.",
    title: "Crypto Trader, Mentorship Program"
  }
]

const scroll = (direction) => {
  if (!scrollContainer.value) return
  
  const scrollAmount = scrollContainer.value.offsetWidth
  const newScrollPosition = direction === 'left' 
    ? scrollContainer.value.scrollLeft - scrollAmount 
    : scrollContainer.value.scrollLeft + scrollAmount
  
  scrollContainer.value.scrollTo({
    left: newScrollPosition,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
/* Hide scrollbar while keeping functionality */
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}

.overflow-x-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

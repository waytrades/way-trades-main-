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
                <Icon v-for="star in 5" :key="star" name="lucide:star" class="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>

              <!-- Quote -->
              <p class="text-gray-300 text-lg mb-6">
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
    quote: "I promise yall there are so many more to come. Want to thank God, myself, and all of you guys for believing me and helping me achieve this! Just another step up the ladder and nothing is slowing me down! Discipline and consistency always wins! Thank you again and lets keep getting at it!!",
    author: "GhostTapz",
    title: "Consistent Trader"
  },
  {
    quote: "I didn\'t realize how many small mistakes were adding up until i met Waylon. He took time to give me advice and not sugar coat anything. I watched his vids and joined his live. I was eager to get better. And thanks to my dedication and help from people like @WayTrades (Admin) i changed how i trade completely, and it ended up leading to myfirst $5,000 week in payouts",
    author: "Angs",
    title: "$5,000 Payout Week"
  },
  {
    quote: "I\'ve taken and explored a few trading courses over the last two years, but this one really stands out. The way the break and retest strategy is taught is clear, practical, and easy to apply in real market conditions. Nothing feels overcomplicated or theoretical just for the sake of it. What I appreciate most is the focus on patience, confirmation, and risk management—not just chasing moves. The lessons helped me understand why setups work, not just when to enter. Even early on, I found myself trading with more confidence and discipline. If you\'re serious about learning a structured, repeatable approach to day trading—this course is absolutely worth your time.",
    author: "JCNY",
    title: "Structured Day Trading"
  },
  {
    quote: "WAY IS A SELF MADE TRADER. CONSISTENT/KNOWS WHAT HE TALKING ABOUT/EXECUTION ON POINT/SIMPLE AMD EFFECTIVE ANALYSIS/POISED. JOIN THE \"WAY\". COME FOR THE JOURNEY. LEARN AND EARN. He taught me a lot about myself and made me better as a trader and person.",
    author: "Big E",
    title: "Self-Made Trader"
  },
  {
    quote: "Joining this discord was a turning point for me. The focus on discipline, risk management, and a proven system completely changed how I approach the market. I finally broke out of the breakeven phase and built consistent habits that actually work. Way and loc are some of the most transparent traders I know, and if you\'re serious about futures trading and want real progress without the hype, this Discord delivers. 💯💰",
    author: "Damon",
    title: "Futures Trading Success"
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

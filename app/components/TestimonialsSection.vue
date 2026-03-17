<template>
  <section class="py-20 md:py-32 bg-slate-950 border-t border-slate-800">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-gray-200 mb-4">
          REAL <span class="text-green-500">RESULTS</span> FROM REAL TRADERS
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          See how traders like you are applying the strategy and achieving consistent, mathematically-proven results.
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
          <!-- Testimonial Cards with Images -->
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center"
          >
            <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden h-full flex flex-col justify-between hover:border-green-500/50 transition-colors">
              <!-- Screenshot Image -->
              <div class="relative w-full bg-slate-800 overflow-hidden">
                <img 
                  :src="testimonial.image" 
                  :alt="testimonial.author"
                  class="w-full h-auto object-cover"
                />
              </div>

              <!-- Text Content -->
              <div class="p-6 flex flex-col justify-between flex-grow">
                <!-- Author Info -->
                <div class="mb-4">
                  <p class="font-bold text-gray-200 text-lg">{{ testimonial.author }}</p>
                  <p class="text-green-500 text-sm font-bold">{{ testimonial.title }}</p>
                </div>

                <!-- Quote -->
                <p class="text-gray-300 text-sm leading-relaxed">
                  "{{ testimonial.quote }}"
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons (Desktop) -->
        <button 
          @click="scroll('left')"
          class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-slate-950 rounded-full transition-colors z-10"
          aria-label="Scroll left"
        >
          <Icon name="lucide:chevron-left" class="w-6 h-6" />
        </button>
        <button 
          @click="scroll('right')"
          class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-slate-950 rounded-full transition-colors z-10"
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
    image: "/testimonial-charly.png",
    quote: "Just got paid now, my first payout !!! And this is just the beginning",
    author: "Charly",
    title: "First Payout Achieved"
  },
  {
    image: "/testimonial-angs.webp",
    quote: "I didn't realize how many small mistakes were adding up until i met Waylon. He took time to give me advice and not sugar coat anything. I watched his vids and joined his live. I was eager to get better. And thanks to my dedication and help from people like @WayTrades (Admin) i changed how i trade completely, and it ended up leading to my first $5,000 week in payouts",
    author: "Angs",
    title: "$5,000 Payout Week"
  },
  {
    image: "/testimonial-aftradescash.webp",
    quote: "Joining this cord is the best decision I made in a while. After blowing 4 evals, following @WayTrades (Admin) and his psychology has helped me passed my first Eval, many more to come!!!",
    author: "aftradescash",
    title: "First Eval Passed"
  },
  {
    image: "/testimonial-damon.webp",
    quote: "Joining this discord was a turning point for me. The focus on discipline, risk management, and a proven system completely changed how I approach the market. I finally broke out of the breakeven phase and built consistent habits that actually work. Way and loc are some of the most transparent traders I know, and if you're serious about futures trading and want real progress without the hype, this Discord delivers.",
    author: "Damon",
    title: "Futures Trading Success"
  },
  {
    image: "/testimonial-bige.webp",
    quote: "WAY IS A SELF MADE TRADER. CONSISTENT/KNOWS WHAT HE TALKING ABOUT/EXECUTION ON POINT/SIMPLE AND EFFECTIVE ANALYSIS/POISED. JOIN THE WAY. COME FOR THE JOURNEY. LEARN AND EARN. He taught me a lot about myself and made me better as a trader and person.",
    author: "Big E",
    title: "Self-Made Trader"
  },
  {
    image: "/testimonial-ghosttapz.webp",
    quote: "I promise yall there are so many more to come. Want to thank God, myself, and all of you guys for believing me and helping me achieve this! Just another step up the ladder and nothing is slowing me down! Discipline and consistency always wins! Thank you again and lets keep getting at it!!",
    author: "GhostTapz",
    title: "Multiple Achievements"
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

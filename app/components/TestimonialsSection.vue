<template>
  <section class="py-20 md:py-32 bg-slate-950 border-t border-slate-800">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-gray-200 mb-4">
          REAL <span class="text-green-500">RESULTS</span> FROM REAL TRADERS
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          See how traders like you are applying the strategy while live trading with me and achieving consistent, mathematically-proven results.
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
                  :alt="'Testimonial ' + (index + 1)"
                  class="w-full h-auto object-cover"
                />
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
  { image: "/testimonials/t1.png" },
  { image: "/testimonials/t2.png" },
  { image: "/testimonials/t3.png" },
  { image: "/testimonials/t4.png" },
  { image: "/testimonials/t5.png" },
  { image: "/testimonials/t6.png" },
  { image: "/testimonials/t7.png" },
  { image: "/testimonials/t8.png" },
  { image: "/testimonials/t9.png" },
  { image: "/testimonials/t10.png" },
  { image: "/testimonials/t11.png" },
  { image: "/testimonials/t12.png" },
  { image: "/testimonials/t13.png" },
  { image: "/testimonials/t14.png" },
  { image: "/testimonials/t15.png" },
  { image: "/testimonials/t16.png" },
  { image: "/testimonials/t17.png" },
  { image: "/testimonials/t18.png" }
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

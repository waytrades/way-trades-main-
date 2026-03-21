<template>
  <div class="w-full">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-black text-gray-200 mb-4">
        REAL <span class="text-green-500">RESULTS</span> FROM REAL TRADERS
      </h2>
      <p class="text-gray-400 text-lg max-w-2xl mx-auto">
        See how traders like you are applying the strategy while live trading with me and achieving consistent, mathematically-proven results.
      </p>
    </div>

    <!-- Carousel Container -->
    <div class="relative w-full max-w-4xl mx-auto">
      <!-- Main Carousel -->
      <div class="relative bg-slate-900 border-2 border-green-500/30 rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-[500px]">
        <!-- Image Display -->
        <div class="relative w-full h-full flex items-center justify-center bg-slate-950">
          <transition name="fade" mode="out-in">
            <img
              :key="currentIndex"
              :src="`/testimonials/t${currentIndex + 1}.png`"
              :alt="`Testimonial ${currentIndex + 1}`"
              class="w-full h-full object-contain"
            />
          </transition>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="previousTestimonial"
          class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-green-500/80 hover:bg-green-500 text-slate-950 p-3 rounded-full transition-all transform hover:scale-110"
        >
          <Icon name="lucide:chevron-left" class="w-6 h-6" />
        </button>

        <button
          @click="nextTestimonial"
          class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-green-500/80 hover:bg-green-500 text-slate-950 p-3 rounded-full transition-all transform hover:scale-110"
        >
          <Icon name="lucide:chevron-right" class="w-6 h-6" />
        </button>

        <!-- Indicator Dots -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          <button
            v-for="(_, index) in totalTestimonials"
            :key="index"
            @click="currentIndex = index"
            :class="[
              'w-2 h-2 rounded-full transition-all',
              index === currentIndex
                ? 'bg-green-500 w-8'
                : 'bg-gray-500 hover:bg-gray-400'
            ]"
          />
        </div>
      </div>

      <!-- Counter -->
      <div class="text-center mt-6 text-gray-400 font-bold">
        {{ currentIndex + 1 }} / {{ totalTestimonials }}
      </div>

      <!-- Auto-rotate info -->
      <p class="text-center text-gray-500 text-sm mt-4">
        Auto-rotating every 5 seconds
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const totalTestimonials = ref(21)
let autoRotateInterval = null

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % totalTestimonials.value
  resetAutoRotate()
}

const previousTestimonial = () => {
  currentIndex.value = (currentIndex.value - 1 + totalTestimonials.value) % totalTestimonials.value
  resetAutoRotate()
}

const resetAutoRotate = () => {
  if (autoRotateInterval) {
    clearInterval(autoRotateInterval)
  }
  startAutoRotate()
}

const startAutoRotate = () => {
  autoRotateInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % totalTestimonials.value
  }, 5000)
}

onMounted(() => {
  startAutoRotate()
})

onUnmounted(() => {
  if (autoRotateInterval) {
    clearInterval(autoRotateInterval)
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

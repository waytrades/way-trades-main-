<template>
  <section id="testimonials" class="w-full bg-slate-900 py-20 md:py-32 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Real Results from Real Traders
        </h2>
        <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          See how traders like you are applying the 1:3 mathematical edge and achieving consistent results.
        </p>
      </div>

      <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="break-inside-avoid group relative overflow-hidden rounded-xl border border-slate-800 hover:border-green-500/50 transition-all duration-300 cursor-pointer bg-slate-800/50"
          @click="openLightbox(testimonial.image)"
        >
          <div class="relative overflow-hidden">
            <img
              :src="testimonial.image"
              :alt="'Testimonial ' + (index + 1)"
              class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <Icon name="lucide:zoom-in" class="w-8 h-8 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>

        <!-- CTA Card -->
        <div class="break-inside-avoid flex items-center justify-center min-h-[400px]">
          <div class="w-full bg-gradient-to-br from-green-500/10 via-slate-900 to-slate-900 border-2 border-green-500/50 rounded-2xl p-8 md:p-12 text-center hover:border-green-500 transition-all duration-300 group shadow-xl">
            <Icon name="lucide:shield-check" class="w-16 h-16 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 class="text-2xl md:text-3xl font-black text-white mb-4">Ready to Join?</h3>
            <p class="text-gray-400 text-lg mb-8 leading-relaxed">
              Stop watching from the sidelines. Join the community of traders applying the 1:3 mathematical edge.
            </p>
            <div class="space-y-4">
              <a
                href="https://whop.com/waytrades/vip-access-60-1cb2/"
                target="_blank"
                class="block w-full bg-green-500 hover:bg-green-600 text-slate-950 font-black py-4 px-6 rounded-full transition-all transform hover:scale-105 text-lg shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                START 5-DAY FREE TRIAL
              </a>
              <p class="text-green-500 font-bold flex items-center justify-center gap-2 text-sm">
                <Icon name="lucide:shield-check" class="w-4 h-4" />
                First 5 Days are 100% FREE
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
        @click="closeLightbox"
      >
        <div class="relative max-w-4xl w-full" @click.stop>
          <button @click="closeLightbox" class="absolute -top-12 right-0 text-gray-400 hover:text-green-500 transition-colors">
            <Icon name="lucide:x" class="w-8 h-8" />
          </button>
          <img :src="lightboxImage" alt="Testimonial full view" class="w-full h-auto rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const lightboxOpen = ref(false)
const lightboxImage = ref('')

const testimonials = Array.from({ length: 17 }, (_, i) => ({
  image: `/testimonials/t${i + 1}.png`
}))

const openLightbox = (image) => {
  lightboxImage.value = image
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
.break-inside-avoid { break-inside: avoid; }
</style>

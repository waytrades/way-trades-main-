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

      <!-- Masonry Grid Wall of Proof -->
      <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <!-- Testimonial Images -->
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="break-inside-avoid group relative overflow-hidden rounded-lg border border-slate-800 hover:border-green-500/50 transition-all duration-300 cursor-pointer"
          @click="openLightbox(testimonial.image)"
        >
          <div class="relative bg-slate-800 overflow-hidden">
            <img 
              :src="testimonial.image" 
              :alt="'Testimonial ' + (index + 1)"
              class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <Icon name="lucide:zoom-in" class="w-8 h-8 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>

        <!-- Integrated CTA Card (appears in the middle of the grid) -->
        <div class="break-inside-avoid flex items-center justify-center min-h-[400px] md:min-h-[500px]">
          <div class="w-full bg-gradient-to-br from-green-500/10 via-slate-900 to-slate-900 border-2 border-green-500/50 rounded-lg p-8 md:p-12 text-center hover:border-green-500 transition-all duration-300 group">
            <div class="mb-6">
              <Icon name="lucide:shield-check" class="w-16 h-16 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-200 mb-4">
              Ready to Join?
            </h3>
            <p class="text-gray-400 text-lg mb-8 leading-relaxed">
              Stop watching from the sidelines. Join the community of traders who are applying the 1:3 mathematical edge and achieving consistent, proven results.
            </p>
            <div class="space-y-4">
              <a 
                href="https://whop.com/waytrades/vip-access-60-1cb2/" 
                target="_blank" 
                class="block w-full bg-green-500 hover:bg-green-600 text-slate-950 font-black py-4 px-6 rounded-full transition-all transform hover:scale-105 text-lg shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                JOIN DISCORD
              </a>
              <p class="text-green-500 font-bold flex items-center justify-center gap-2">
                <Icon name="lucide:shield-check" class="w-5 h-5" />
                First 7 Days are 100% FREE
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox Modal -->
      <div 
        v-if="lightboxOpen" 
        class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
        @click="closeLightbox"
      >
        <div class="relative max-w-4xl w-full" @click.stop>
          <!-- Close Button -->
          <button 
            @click="closeLightbox"
            class="absolute -top-12 right-0 text-gray-400 hover:text-green-500 transition-colors"
          >
            <Icon name="lucide:x" class="w-8 h-8" />
          </button>
          
          <!-- Image -->
          <img 
            :src="lightboxImage" 
            :alt="'Testimonial full view'"
            class="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const lightboxOpen = ref(false)
const lightboxImage = ref('')

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
/* CSS Columns for Masonry Layout */
.columns-1 {
  column-count: 1;
}

@media (min-width: 768px) {
  .columns-2 {
    column-count: 2;
  }
}

@media (min-width: 1024px) {
  .columns-3 {
    column-count: 3;
  }
}

.break-inside-avoid {
  break-inside: avoid;
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.gap-6 {
  gap: 1.5rem;
}
</style>

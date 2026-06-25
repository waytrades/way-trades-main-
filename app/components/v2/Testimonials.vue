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
            <Icon name="lucide:users" class="w-16 h-16 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 class="text-2xl md:text-3xl font-black text-white mb-4">Join the Community</h3>
            <p class="text-gray-400 text-lg mb-8 leading-relaxed">
              Join traders applying the 1:3 mathematical edge. Free forever — no credit card required.
            </p>
            <div class="space-y-4">
              <a
                href="https://whop.com/waytrades/free-access-c6/"
                target="_blank"
                class="block w-full bg-green-500 hover:bg-green-600 text-slate-950 font-black py-4 px-6 rounded-full transition-all transform hover:scale-105 text-lg shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                JOIN FREE NOW
              </a>
              <p class="text-green-500 font-bold flex items-center justify-center gap-2 text-sm">
                <Icon name="lucide:check-circle" class="w-4 h-4" />
                100% Free · No Credit Card
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="lightboxImage"
        class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        @click="lightboxImage = null"
      >
        <button class="absolute top-4 right-4 text-white hover:text-green-500 transition-colors z-10" @click="lightboxImage = null">
          <Icon name="lucide:x" class="w-8 h-8" />
        </button>
        <img
          :src="lightboxImage"
          alt="Testimonial"
          class="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
          @click.stop
        />
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const lightboxImage = ref(null)
const openLightbox = (img) => { lightboxImage.value = img }

const testimonials = Array.from({ length: 17 }, (_, i) => ({
  image: `/testimonials/t${i + 1}.png`
}))
</script>

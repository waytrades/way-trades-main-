<template>
  <section id="content" class="bg-slate-900 border-t border-slate-800 py-24 px-4">
    <div class="max-w-6xl mx-auto">

      <!-- Heading -->
      <div
        class="text-center mb-16 max-w-3xl mx-auto"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }"
      >
        <span class="inline-block px-4 py-1.5 bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-black rounded-full uppercase tracking-widest mb-6">
          See the Strategy in Action
        </span>
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Watch Before You Join.
        </h2>
        <p class="text-lg md:text-xl text-gray-400 leading-relaxed">
          No paywalls, no catch. Watch how I actually think through setups, manage risk, and execute the BBR strategy — then decide if the community is for you.
        </p>
      </div>

      <!-- Video grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div
          v-for="(video, index) in videos"
          :key="video.id"
          v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: index * 120 } } }"
          class="bg-slate-800/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-300 group"
        >
          <div class="aspect-video w-full bg-slate-800 relative">
            <iframe
              :src="`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0`"
              loading="lazy"
              class="absolute inset-0 w-full h-full border-0"
              allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="p-5">
            <p class="text-white font-bold leading-snug">{{ video.title }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center">
        <a
          href="https://www.youtube.com/@waytrades"
          target="_blank"
          class="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-600 hover:border-green-500 text-white font-black rounded-full transition-all duration-300 hover:bg-green-500/10"
        >
          <Icon name="simple-icons:youtube" class="w-5 h-5 text-red-500" />
          Watch More on YouTube
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
const videos = [
  { id: 'rpO9RFv9hhA', title: 'Liquidity Sweeps Explained In Less Than 4 Minutes' },
  { id: 'Oo0nDbxEKYg', title: 'The ONLY Day Trading Setup You Need (Break & Retest)' },
  { id: 'RZkAQ7HU-38', title: 'How Taking LESS Trades Made Me MORE Money' },
]
</script>

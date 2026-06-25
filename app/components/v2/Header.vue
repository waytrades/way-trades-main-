<template>
  <nav class="sticky top-4 z-50 px-4">
    <div class="container mx-auto max-w-5xl">
      <div class="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full px-2 py-2 flex justify-between items-center shadow-2xl relative">
        <!-- Logo -->
        <div class="flex items-center gap-3 pl-4">
          <img src="/wt-logo-transparent.png" alt="Way Trades Logo" class="w-10 h-10 object-contain" />
          <span class="text-[11px] font-black tracking-tighter text-gray-200 uppercase">Way Trades</span>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-[11px] font-bold text-gray-400">
          <a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="hover:text-green-500 transition-colors">FREE DISCORD</a>
          <a href="/cheat-sheet" class="hover:text-green-500 transition-colors">FREE STRATEGY</a>
          <a href="#testimonials" class="hover:text-green-500 transition-colors">TESTIMONIALS</a>
          <a href="#tools" class="hover:text-green-500 transition-colors">TOOLS</a>
        </div>

        <!-- Desktop CTA -->
        <div class="hidden md:block">
          <a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="bg-green-500 text-slate-950 px-6 py-2.5 rounded-full hover:bg-green-600 transition-all font-black text-xs flex items-center gap-2 group">
            JOIN FREE
            <Icon name="lucide:chevron-right" class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <!-- Mobile -->
        <div class="md:hidden flex items-center gap-2 pr-2">
          <a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="bg-green-500 hover:bg-green-600 text-slate-950 font-black px-4 py-2 rounded-full text-[10px] transition-all">
            JOIN FREE
          </a>
          <button
            @click="mobileOpen = !mobileOpen"
            class="text-gray-400 hover:text-green-500 transition-colors flex items-center p-2"
            aria-label="Toggle menu"
          >
            <Icon :name="mobileOpen ? 'lucide:x' : 'lucide:menu'" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Panel -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="mobileOpen"
          class="md:hidden mt-2 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          <a href="https://whop.com/waytrades/free-access-c6/" target="_blank" @click="mobileOpen = false" class="flex items-center gap-3 px-5 py-4 text-xs font-bold text-gray-400 hover:text-green-500 hover:bg-slate-800 transition-colors border-b border-slate-800">
            <Icon name="lucide:message-circle" class="w-4 h-4" /> FREE DISCORD
          </a>
          <a href="/cheat-sheet" @click="mobileOpen = false" class="flex items-center gap-3 px-5 py-4 text-xs font-bold text-gray-400 hover:text-green-500 hover:bg-slate-800 transition-colors border-b border-slate-800">
            <Icon name="lucide:file-text" class="w-4 h-4" /> FREE STRATEGY
          </a>
          <a href="#testimonials" @click="mobileOpen = false" class="flex items-center gap-3 px-5 py-4 text-xs font-bold text-gray-400 hover:text-green-500 hover:bg-slate-800 transition-colors border-b border-slate-800">
            <Icon name="lucide:star" class="w-4 h-4" /> TESTIMONIALS
          </a>
          <a href="#tools" @click="mobileOpen = false" class="flex items-center gap-3 px-5 py-4 text-xs font-bold text-gray-400 hover:text-green-500 hover:bg-slate-800 transition-colors">
            <Icon name="lucide:wrench" class="w-4 h-4" /> TOOLS WE USE
          </a>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const mobileOpen = ref(false)
</script>

<template>
  <nav class="sticky top-4 z-50 px-4">
    <div class="container mx-auto max-w-5xl">
      <div class="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full px-2 py-2 flex justify-between items-center shadow-2xl relative">
        <!-- Logo and Brand Name (Left) -->
        <div class="flex items-center gap-3 pl-4">
          <img src="/wt-logo-transparent.png" alt="Way Trades Logo" class="w-10 h-10 object-contain" />
          <span class="text-[11px] font-black tracking-tighter text-gray-200 uppercase">Way Trades</span>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-[11px] font-bold text-gray-400">
          <a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="hover:text-green-500 transition-colors">FREE DISCORD</a>
          <a href="/cheat-sheet" class="hover:text-green-500 transition-colors">FREE STRATEGY CHEAT SHEET</a>
          <a href="#testimonials" class="hover:text-green-500 transition-colors">TESTIMONIALS</a>
        </div>

        <!-- CTA Button (Desktop) -->
        <div class="hidden md:block">
          <a href="https://whop.com/waytrades/vip-access-60-1cb2/" target="_blank" class="bg-green-500 text-slate-950 px-6 py-2.5 rounded-full hover:bg-green-600 transition-all font-black text-xs flex items-center gap-2 group">
            JOIN DISCORD
            <Icon name="lucide:chevron-right" class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
        
        <!-- Mobile -->
        <div class="md:hidden flex items-center gap-2 pr-2">
          <a href="https://whop.com/waytrades/vip-access-60-1cb2/" target="_blank" class="bg-green-500 hover:bg-green-600 text-slate-950 font-black px-4 py-2 rounded-full text-[10px] transition-all">
            JOIN DISCORD
          </a>
          <div class="relative group">
            <button class="text-gray-400 hover:text-green-500 transition-colors flex items-center p-2">
              <Icon name="lucide:menu" class="w-5 h-5" />
            </button>
            <div class="absolute right-0 mt-4 w-56 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
              <a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="block px-5 py-4 text-xs font-bold text-gray-400 hover:text-green-500 hover:bg-slate-800 transition-colors border-b border-slate-800">
                Free Discord
              </a>
              <a href="/cheat-sheet" class="block px-5 py-4 text-xs font-bold text-gray-400 hover:text-green-500 hover:bg-slate-800 transition-colors border-b border-slate-800">
                Free Strategy Cheat Sheet
              </a>
              <a href="#testimonials" class="block px-5 py-4 text-xs font-bold text-gray-400 hover:text-green-500 hover:bg-slate-800 transition-colors">
                Testimonials
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

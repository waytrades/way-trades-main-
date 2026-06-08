<template>
  <footer class="py-12 border-t border-slate-800 bg-slate-950">
    <div class="container mx-auto px-4 text-center">
      <div class="flex items-center justify-center gap-3 mb-6">
        <img src="/logo.png" alt="Way Trades Logo" class="w-10 h-10 object-contain" />
        <span class="text-lg font-black tracking-tighter text-white uppercase">Way Trades</span>
      </div>
      <p class="text-gray-500 text-sm max-w-2xl mx-auto mb-8">
        Trading involves significant risk of loss and is not suitable for all investors. Way Trades provides educational content only and does not provide financial advice.
      </p>
      <div class="flex justify-center gap-6 text-gray-400 mb-8">
        <a href="https://www.instagram.com/way_trades" target="_blank" class="hover:text-green-500 transition-colors"><Icon name="simple-icons:instagram" class="w-6 h-6" /></a>
        <a href="https://www.youtube.com/@waytrades" target="_blank" class="hover:text-green-500 transition-colors"><Icon name="simple-icons:youtube" class="w-6 h-6" /></a>
        <a href="https://www.tiktok.com/@waytrades" target="_blank" class="hover:text-green-500 transition-colors"><Icon name="simple-icons:tiktok" class="w-6 h-6" /></a>
      </div>
      <div class="flex flex-wrap justify-center gap-4 text-gray-600 text-xs mb-4">
        <span>© 2026 Way Trades. All rights reserved.</span>
        <span class="hidden md:inline">|</span>
        <NuxtLink to="/privacy" class="hover:text-green-500 transition-colors">Privacy Policy</NuxtLink>
        <span>|</span>
        <NuxtLink to="/return-policy" class="hover:text-green-500 transition-colors">Return Policy</NuxtLink>
        <span>|</span>
        <NuxtLink to="/terms-of-service" class="hover:text-green-500 transition-colors">Terms & Conditions</NuxtLink>
        <span>|</span>
        <NuxtLink to="/eula" class="hover:text-green-500 transition-colors">EULA</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<template>
  <div class="min-h-screen bg-slate-950 text-white font-sans selection:bg-green-500 selection:text-slate-950">
    <!-- Top Warning Banner -->
    <div class="bg-red-500/10 border-b border-red-500/30 py-3 text-center">
      <p class="text-red-400 text-sm md:text-base font-bold px-4">
        If You're Still Chasing High Win Rates With Low R:R, This Site Isn't For You
      </p>
    </div>

    <!-- Navigation -->
    <nav class="sticky top-4 z-50 px-4">
      <div class="container mx-auto max-w-5xl">
        <div class="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full px-2 py-2 flex justify-between items-center shadow-2xl">
          <!-- Logo and Brand Name (Left) -->
          <div class="flex items-center gap-3 pl-4">
            <img src="/logo.png" alt="Way Trades Logo" class="w-8 h-8 object-contain" />
            <span class="text-[11px] font-black tracking-tighter text-white">WAY TRADES</span>
          </div>
          
          <!-- Desktop Navigation (Hidden on Mobile) -->
          <div class="hidden md:flex items-center gap-6 text-[11px] font-bold text-gray-400">
            <a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="hover:text-green-500 transition-colors">FREE DISCORD</a>
            <a href="/cheat-sheet" class="hover:text-green-500 transition-colors">FREE STRATEGY CHEAT SHEET</a>
            <a href="#testimonials" class="hover:text-green-500 transition-colors">TESTIMONIALS</a>
            <a href="#mentorship" class="hover:text-green-500 transition-colors">MENTORSHIP</a>
          </div>

          <!-- CTA Button (Desktop) -->
          <div class="hidden md:block">
            <a href="https://whop.com/waytrades/vip-access-60-1cb2/" target="_blank" class="bg-green-500 text-slate-950 px-6 py-2.5 rounded-full hover:bg-green-600 transition-all font-black text-xs flex items-center gap-2 group">
              JOIN DISCORD
              <Icon name="lucide:chevron-right" class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
          
          <!-- Mobile Hamburger Menu and CTA -->
          <div class="md:hidden flex items-center gap-2 pr-2">
            <!-- Mobile Discord CTA Button -->
            <a href="https://whop.com/waytrades/vip-access-60-1cb2/" target="_blank" class="bg-green-500 hover:bg-green-600 text-slate-950 font-black px-4 py-2 rounded-full text-xs transition-all">
              JOIN DISCORD
            </a>

            <!-- Hamburger Menu Button -->
            <div class="relative group">
              <button class="text-gray-400 hover:text-green-500 transition-colors flex items-center p-2">
                <Icon name="lucide:menu" class="w-5 h-5" />
              </button>
              <!-- Dropdown Menu -->
              <div class="absolute right-0 mt-4 w-56 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="block px-5 py-4 text-xs font-bold text-gray-400 hover:text-green-500 hover:bg-slate-800 transition-colors border-b border-slate-800">
                  Free Discord
                </a>
                <a href="/cheat-sheet" class="block px-5 py-4 text-xs font-bold text-gray-400 hover:text-green-500 hover:bg-slate-800 transition-colors border-b border-slate-800">
                  Free Strategy Cheat Sheet
                </a>
                <a href="#testimonials" class="block px-5 py-4 text-xs font-bold text-gray-400 hover:text-green-500 hover:bg-slate-800 transition-colors border-b border-slate-800">
                  Testimonials
                </a>
                <a href="#mentorship" class="block px-5 py-4 text-xs font-bold text-gray-400 hover:text-green-500 hover:bg-slate-800 transition-colors">
                  Mentorship
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section with Backtest Proof -->
    <header class="relative py-4 md:py-20 overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent -z-10"></div>
      <div class="container mx-auto px-4">
        
        <!-- Hero Content - Vertical Stack for Mobile -->
        <div class="max-w-4xl mx-auto">
          <!-- Headline -->
          <h1 class="text-[26px] md:text-6xl font-black tracking-tight md:tracking-tighter mb-4 md:mb-6 leading-[1.2] md:leading-[0.95] text-center md:max-w-none mx-auto">
            Experience <span class="text-green-500">Professional</span> Futures Trading in <span class="text-green-500">Real-Time</span>
          </h1>
          
          <!-- Video Placeholder with Clean Stats Bar Below -->
          <div class="mb-8 md:mb-10">
            <!-- Temporary YouTube Backtesting Video (Until Vimeo VSL is Ready) -->
            <div class="relative bg-slate-900 border-2 border-green-500/50 rounded-2xl overflow-hidden aspect-video mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/TbDnaZZVZ-E"
                title="4-Hour Backtest Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="absolute inset-0"
              ></iframe>
            </div>
            
            <!-- Clean Stats Bar Below Video -->
            <div class="bg-slate-900 border border-green-500/30 rounded-lg p-4 md:p-6">
              <div class="grid grid-cols-3 gap-4">
                <div class="text-center">
                  <p class="text-green-500 text-2xl md:text-3xl font-black">3.92</p>
                  <p class="text-gray-400 text-xs md:text-sm font-bold mt-2">PROFIT FACTOR</p>
                </div>
                <div class="text-center">
                  <p class="text-green-500 text-2xl md:text-3xl font-black">50%</p>
                  <p class="text-gray-400 text-xs md:text-sm font-bold mt-2">WIN RATE</p>
                </div>
                <div class="text-center">
                  <p class="text-green-500 text-2xl md:text-3xl font-black">1:3</p>
                  <p class="text-gray-400 text-xs md:text-sm font-bold mt-2">RISK:REWARD</p>
                </div>
              </div>
              <p class="text-gray-500 text-xs md:text-sm text-center mt-4">Only 2 Losing Days</p>
            </div>
          </div>
          
          <!-- CTA Button (Desktop and Mobile) -->
          <div class="flex justify-center">
            <a href="https://whop.com/waytrades/vip-access-60-1cb2/" target="_blank" @click="gtag.event('click', { event_category: 'cta', event_label: 'start_trial' })" class="w-full md:w-auto text-center bg-green-500 hover:bg-green-600 text-slate-950 font-black py-4 md:py-5 px-8 md:px-12 rounded-lg transition-all transform hover:scale-105 text-base md:text-lg shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              START 7-DAY FREE TRIAL
            </a>
          </div>
          
          <!-- CTA Description -->
          <p class="text-center text-green-500 text-sm md:text-base font-bold mt-6 md:mt-8">
            First week is FREE so you can see we're legitimate, transparent, profitable, and CAN help you get payouts and become consistently profitable as well.
          </p>
        </div>
      </div>
    </header>



    <!-- Mathematical Superiority Section -->
    <div id="strategy">
      <MathematicalSuperiority />
    </div>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-24 bg-slate-950">
      <div class="container mx-auto px-4">
        <TestimonialsSection />
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-24 bg-slate-950">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black mb-4">CHOOSE YOUR PATH</h2>
          <p class="text-gray-400 text-xl">From free education to professional VIP mentorship.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Free Plan -->
          <div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col">
            <h3 class="text-2xl font-bold mb-2">FREE COMMUNITY</h3>
            <div class="text-4xl font-black mb-6">$0<span class="text-sm text-gray-500 font-normal">/forever</span></div>
            <ul class="space-y-4 mb-8 flex-grow">
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-green-500 w-5 h-5" />
                Full Video Courses
              </li>
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-green-500 w-5 h-5" />
                Free Live Classes + Q&A
              </li>
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-green-500 w-5 h-5" />
                Trading Chat Access
              </li>
              <li class="flex items-center gap-3 text-gray-500 line-through">
                Live Daily Trading (VIP Only)
              </li>
              <li class="flex items-center gap-3 text-gray-500 line-through">
                Morning Watchlists
              </li>
            </ul>
            <a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg text-center transition-colors">
              JOIN FREE
            </a>
          </div>
          <!-- VIP Plan -->
          <div class="bg-slate-900 border-2 border-green-500 rounded-2xl p-8 flex flex-col relative transform md:scale-105 shadow-2xl shadow-green-500/10">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-slate-950 text-xs font-black px-4 py-1 rounded-full">
              MOST POPULAR
            </div>
            <h3 class="text-2xl font-bold mb-2 text-green-500">VIP MEMBERSHIP</h3>
            <div class="text-4xl font-black mb-6">$74<span class="text-sm text-gray-500 font-normal">/month</span></div>
            <ul class="space-y-4 mb-8 flex-grow">
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-green-500 w-5 h-5" />
                Everything in Free
              </li>
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-green-500 w-5 h-5" />
                Live Daily Trading (9:25 AM EST)
              </li>
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-green-500 w-5 h-5" />
                Morning Watchlists
              </li>
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-green-500 w-5 h-5" />
                Live Day Trading Signals
              </li>
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-green-500 w-5 h-5" />
                Full Access to BBR Strategy
              </li>
              <li class="flex items-center gap-3 text-gray-300">
                <Icon name="lucide:check" class="text-green-500 w-5 h-5" />
                Priority Support & Guidance
              </li>
            </ul>
            <a href="https://whop.com/waytrades/vip-access-60-1cb2/?utm_source=store_page&funnelId=product_7b3b2e38-8bc7-402b-9afa-d939c94b9673" target="_blank" class="w-full py-4 bg-green-500 hover:bg-green-600 text-slate-950 font-black rounded-lg text-center transition-colors">
              GET VIP ACCESS
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Elite 1-on-1 Mentorship Section -->
    <section id="mentorship" class="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-green-500/20">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-sm font-bold border border-green-500/20 mb-6">
            <Icon name="lucide:crown" class="w-4 h-4" />
            ELITE TIER
          </div>
          <h2 class="text-4xl md:text-5xl font-black mb-4">The 6-Week <span class="text-green-500">Trader Transformation</span></h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">Master the 1:3 Edge with personalized 1-on-1 mentorship. Limited to 5 serious traders only.</p>
        </div>

        <!-- Main Mentorship Card -->
        <div class="max-w-4xl mx-auto">
          <div class="bg-slate-900 border-2 border-green-500 rounded-2xl p-8 md:p-12 relative">
            <!-- Scarcity Badge -->
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-black px-4 py-2 rounded-full">
              ONLY 5 SPOTS AVAILABLE
            </div>

            <!-- Price & Headline -->
            <div class="text-center mb-8">
              <p class="text-green-500 text-sm font-bold mb-2">ONE-TIME INVESTMENT</p>
              <h3 class="text-5xl md:text-6xl font-black text-white mb-4">$2,500</h3>
              <p class="text-gray-300 text-lg">6-Week Intensive Program with Lifetime VIP Access</p>
            </div>

            <!-- What's Included -->
            <div class="mb-12">
              <h4 class="text-2xl font-black mb-6 text-center">What's Included:</h4>
              <div class="grid md:grid-cols-2 gap-6">
                <!-- Column 1 -->
                <div class="space-y-4">
                  <div class="flex items-start gap-4">
                    <Icon name="lucide:check-circle" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p class="font-bold text-white">12 Private 1-on-1 Calls</p>
                      <p class="text-gray-400 text-sm">2 dedicated calls per week for 6 weeks</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <Icon name="lucide:check-circle" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p class="font-bold text-white">Personalized Trading Roadmap</p>
                      <p class="text-gray-400 text-sm">Custom plan tailored to your capital, schedule & goals</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <Icon name="lucide:check-circle" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p class="font-bold text-white">Weekly Accountability</p>
                      <p class="text-gray-400 text-sm">I review your journal & hold you to your plan</p>
                    </div>
                  </div>
                </div>

                <!-- Column 2 -->
                <div class="space-y-4">
                  <div class="flex items-start gap-4">
                    <Icon name="lucide:check-circle" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p class="font-bold text-white">Full BBR Strategy Breakdown</p>
                      <p class="text-gray-400 text-sm">Complete mastery of the 1:3 Edge & all setups</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <Icon name="lucide:check-circle" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p class="font-bold text-white">1-on-1 Risk Management Class</p>
                      <p class="text-gray-400 text-sm">Position sizing, capital preservation & survival</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <Icon name="lucide:check-circle" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p class="font-bold text-white">1-on-1 Trading Psychology Class</p>
                      <p class="text-gray-400 text-sm">Eliminate fear, greed & revenge trading</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bonus: Lifetime VIP -->
            <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-8">
              <div class="flex items-start gap-4">
                <Icon name="lucide:gift" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p class="font-bold text-green-500 mb-2">BONUS: Lifetime VIP Discord Access</p>
                  <p class="text-gray-300">Full access to everything we offer forever. Live signals, watchlists, courses, priority support—all included.</p>
                </div>
              </div>
            </div>

            <!-- Who This Is For -->
            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <p class="text-green-400 font-bold mb-3 text-center">✓ This is for you if:</p>
                <ul class="text-gray-300 text-center text-sm space-y-2">
                  <li>• You're serious about making trading a profession</li>
                  <li>• You want a clear, personalized roadmap</li>
                  <li>• You need high-level accountability</li>
                  <li>• You're ready to master the 1:3 Edge</li>
                </ul>
              </div>
              <div>
                <p class="text-red-400 font-bold mb-3 text-center">✗ This is NOT for you if:</p>
                <ul class="text-gray-300 text-center text-sm space-y-2">
                  <li>• You're chasing hype or magic bullets</li>
                  <li>• You're unwilling to put in the work</li>
                  <li>• You want guaranteed profits</li>
                  <li>• You're not ready to commit</li>
                </ul>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="flex flex-col gap-4">
              <a href="https://whop.com/waytrades/the-bbr-1-on-1-mentorship/" target="_blank" class="w-full text-center bg-green-500 hover:bg-green-600 text-slate-950 font-black py-5 px-8 rounded-lg transition-all transform hover:scale-105 text-lg shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                ENROLL NOW - LIMITED SPOTS
              </a>
              <p class="text-center text-gray-400 text-sm">First-come, first-served. Once 5 spots are filled, the program closes until a student graduates.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 border-t border-slate-800 bg-slate-950">
      <div class="container mx-auto px-4 text-center">
        <div class="flex items-center justify-center gap-3 mb-6">
          <img src="/logo.png" alt="Way Trades Logo" class="w-10 h-10 object-contain" />
          <span class="text-lg font-black tracking-tighter">WAY TRADES</span>
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
  </div>
</template>

<script setup>
const { gtag } = useGtag()

// SEO Meta Tags
useSeoMeta({
  title: 'Way Trades | Experience Professional Futures Trading in Real-Time',
  ogTitle: 'Way Trades | Experience Professional Futures Trading in Real-Time',
  description: 'Stop chasing hype. Watch me live trade the BBR strategy daily with a 1:3 risk-reward edge and 50% win rate. Start your 7-day free trial and see the proof for yourself.',
  ogDescription: 'Stop chasing hype. Watch me live trade the BBR strategy daily with a 1:3 risk-reward edge and 50% win rate. Start your 7-day free trial and see the proof for yourself.',
  ogImage: '/logo.png',
  twitterCard: 'summary_large_image',
})
</script>

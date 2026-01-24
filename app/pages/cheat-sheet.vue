<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-yellow-500/20">
      <div class="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="Way Trades" class="h-8 w-auto">
          <span class="font-bold text-lg">WAY TRADES</span>
        </div>
        <a href="/" class="text-yellow-400 hover:text-yellow-300 transition">Back to Home</a>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="pt-24 pb-12 px-4">
      <div class="max-w-2xl mx-auto">
        <!-- Header Section -->
        <div class="text-center mb-12">
          <div class="inline-block mb-6 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <span class="text-yellow-400 text-sm font-semibold">FREE LEAD MAGNET</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Get the <span class="text-yellow-400">BBR Strategy</span> Cheat Sheet
          </h1>
          <p class="text-xl text-slate-300 mb-2">
            The exact rules that generated a <span class="font-bold text-green-400">3.92 Profit Factor</span> with a <span class="font-bold text-green-400">55% Win Rate</span>
          </p>
          <p class="text-lg text-slate-400">
            Learn why a 1:3 Risk:Reward is mathematically superior to the 90% win rate hype.
          </p>
        </div>

        <!-- Two Column Layout -->
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <!-- Left: Value Proposition -->
          <div class="space-y-6">
            <div class="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-6">
              <h3 class="text-lg font-bold text-yellow-400 mb-3">What You'll Get:</h3>
              <ul class="space-y-3 text-slate-300">
                <li class="flex items-start gap-3">
                  <span class="text-green-400 font-bold mt-1">✓</span>
                  <span>The 4 Core BBR Strategy Rules (non-negotiable framework)</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-400 font-bold mt-1">✓</span>
                  <span>The "Math Gap" table proving 1:3 R:R superiority</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-400 font-bold mt-1">✓</span>
                  <span>Risk management principles from a 3.92 profit factor strategy</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-400 font-bold mt-1">✓</span>
                  <span>Next steps to see the strategy executed live</span>
                </li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/30 rounded-lg p-6">
              <p class="text-sm text-slate-300">
                <span class="font-bold text-green-400">55% Win Rate</span> with <span class="font-bold text-green-400">1:3 Risk:Reward</span> = Mathematical Superiority
              </p>
            </div>
          </div>

          <!-- Right: Email Capture Form -->
          <div class="bg-slate-800/80 border border-yellow-500/30 rounded-lg p-8 h-fit sticky top-32">
            <h3 class="text-2xl font-bold mb-6 text-center">Instant Access</h3>
            
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <!-- Name Field -->
              <div>
                <label for="name" class="block text-sm font-semibold text-slate-300 mb-2">First Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Your name"
                  class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 transition"
                  required
                />
              </div>

              <!-- Email Field -->
              <div>
                <label for="email" class="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="your@email.com"
                  class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 transition"
                  required
                />
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-slate-900 font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed mt-6"
              >
                {{ isLoading ? 'Sending...' : 'Get Instant Access' }}
              </button>

              <!-- Privacy Note -->
              <p class="text-xs text-slate-400 text-center mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>

            <!-- Social Proof -->
            <div class="mt-8 pt-6 border-t border-slate-700">
              <p class="text-xs text-slate-400 text-center mb-3">Joined by traders who are serious about the math:</p>
              <div class="flex justify-center gap-2">
                <div class="w-8 h-8 bg-slate-600 rounded-full"></div>
                <div class="w-8 h-8 bg-slate-600 rounded-full"></div>
                <div class="w-8 h-8 bg-slate-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="bg-slate-800/40 border border-slate-700 rounded-lg p-8 mt-12">
          <h3 class="text-2xl font-bold mb-6 text-center">Common Questions</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="font-bold text-yellow-400 mb-2">Is this really free?</h4>
              <p class="text-slate-300 text-sm">Yes. This cheat sheet is our gift to traders who are serious about the math. No credit card required.</p>
            </div>
            <div>
              <h4 class="font-bold text-yellow-400 mb-2">What's the catch?</h4>
              <p class="text-slate-300 text-sm">No catch. We'll send you the PDF and a few follow-up emails about the 7-day free trial and mentorship. You can unsubscribe anytime.</p>
            </div>
            <div>
              <h4 class="font-bold text-yellow-400 mb-2">Can I use this strategy immediately?</h4>
              <p class="text-slate-300 text-sm">Yes. The cheat sheet contains the exact rules. However, we recommend watching the 6-hour backtest first to see it in action.</p>
            </div>
            <div>
              <h4 class="font-bold text-yellow-400 mb-2">Is this for beginners?</h4>
              <p class="text-slate-300 text-sm">It's for anyone serious about trading. If you understand basic market concepts, you can apply these rules.</p>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center mt-12">
          <p class="text-slate-400 mb-4">Ready to see the strategy in action?</p>
          <a href="/" class="inline-block bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-lg transition">
            Watch the 6-Hour Backtest
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: ''
})

const isLoading = ref(false)

const handleSubmit = async () => {
  isLoading.value = true
  
  try {
    // TODO: Connect to MailerLite API or your email service
    console.log('Form submitted:', form.value)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success message
    alert(`Thank you, ${form.value.name}! Check your email for the cheat sheet.`)
    
    // Reset form
    form.value = { name: '', email: '' }
  } catch (error) {
    console.error('Error:', error)
    alert('Something went wrong. Please try again.')
  } finally {
    isLoading.value = false
  }
}
</script>

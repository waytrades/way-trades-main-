<template>
  <div class="min-h-screen bg-slate-950 text-gray-200 font-sans selection:bg-green-500 selection:text-slate-950">
    <!-- Navigation -->
    <nav class="sticky top-4 z-50 px-4">
      <div class="container mx-auto max-w-5xl">
        <div class="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full px-2 py-2 flex justify-between items-center shadow-2xl relative">
          <div class="flex items-center gap-3 pl-4">
            <NuxtLink to="/">
              <img src="/logo.png" alt="Way Trades Logo" class="w-8 h-8 object-contain" />
            </NuxtLink>
            <NuxtLink to="/" class="text-[11px] font-black tracking-tighter text-gray-200 hover:text-green-500 transition-colors">WAY TRADES</NuxtLink>
          </div>
          <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-[11px] font-bold text-gray-400">
            <NuxtLink to="/" class="hover:text-green-500 transition-colors">HOME</NuxtLink>
          </div>
          <div class="hidden md:block">
            <a href="https://whop.com/waytrades/vip-access-60-1cb2/" target="_blank" class="bg-green-500 text-slate-950 px-6 py-2.5 rounded-full hover:bg-green-600 transition-all font-black text-xs flex items-center gap-2 group">
              JOIN DISCORD
              <Icon name="lucide:chevron-right" class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto max-w-3xl px-4 py-12">
      <div class="prose prose-invert max-w-none">
        <h1 class="text-4xl font-black mb-2 text-white">Privacy Policy</h1>
        <p class="text-gray-400 text-sm mb-8">Last updated: January 26, 2026</p>

        <div class="space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 class="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              Way Trades ("we," "our," or "us") operates the website at waytrades.com and provides trading
              education services. This policy explains how we handle your data across our website, Discord
              community, and email systems.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p>To provide you with the BBR Strategy assets and community access, we collect:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li><strong>Identity Data:</strong> Name, username, and email address.</li>
              <li><strong>Subscription Data:</strong> Your membership tier (Free, VIP, or Mentorship) and join date.</li>
              <li><strong>Financial Data:</strong> Transaction history managed via Whop (we do not store your credit card details directly).</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p>We use your information to:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Deliver the BBR Strategy Cheat Sheet and educational content.</li>
              <li>Manage your access to the Way Trades Discord server.</li>
              <li>Send you "Math Over Hype" nurture emails and VIP trial invitations.</li>
              <li>Ensure the security and integrity of our trading community.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
            <p>We integrate with elite service providers to run our ecosystem. Your data may be processed by:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li><strong>Whop:</strong> For payments and membership management.</li>
              <li><strong>Discord:</strong> For community hosting.</li>
              <li><strong>Mailmodo:</strong> For email automation and delivery.</li>
              <li><strong>ManyChat:</strong> For Instagram automation.</li>
              <li><strong>Zapier:</strong> For email integration.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or request the deletion of your personal data at any time.
              To do so, please contact us at the email provided below.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <p>
              For any questions regarding this policy, please contact:<br />
              <strong>contact@waytrades.com</strong>
            </p>
          </section>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-800 mt-16 py-8">
      <div class="container mx-auto max-w-5xl px-4">
        <div class="flex flex-col items-center justify-center space-y-6">
          <div class="flex items-center gap-2">
            <img src="/logo.png" alt="Way Trades Logo" class="w-6 h-6 object-contain" />
            <span class="text-xs font-black text-gray-400">WAY TRADES</span>
          </div>
          <div class="text-xs text-gray-500 text-center max-w-md">
            Trading involves significant risk of loss and is not suitable for all investors. Way Trades provides educational content only and does not provide financial advice.
          </div>
          <div class="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
            <NuxtLink to="/privacy" class="hover:text-green-500 transition-colors">Privacy Policy</NuxtLink>
            <span>|</span>
            <NuxtLink to="/return-policy" class="hover:text-green-500 transition-colors">Return Policy</NuxtLink>
            <span>|</span>
            <NuxtLink to="/terms-of-service" class="hover:text-green-500 transition-colors">Terms & Conditions</NuxtLink>
            <span>|</span>
            <NuxtLink to="/eula" class="hover:text-green-500 transition-colors">EULA</NuxtLink>
          </div>
          <div class="text-xs text-gray-600">
            © 2026 Way Trades. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Privacy Policy | Way Trades',
  meta: [
    {
      name: 'description',
      content: 'Way Trades Privacy Policy - Learn how we handle your data and protect your privacy.'
    }
  ]
})
</script>

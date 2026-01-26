<template>
  <div class="min-h-screen bg-slate-950 text-slate-200 py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold text-yellow-400 mb-8">Privacy Policy</h1>
      <p class="text-sm text-slate-400 mb-12">Last Updated: January 26, 2026</p>

      <section class="mb-10">
        <h2 class="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
        <p class="mb-4">
          Way Trades ("we," "our," or "us") operates the website at <a href="https://www.waytrades.com" class="text-yellow-400 hover:underline">waytrades.com</a> and provides trading education services. This policy explains how we handle your data across our website, Discord community, and email systems.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
        <p class="mb-4">To provide you with the BBR Strategy assets and community access, we collect:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li><span class="text-white font-medium">Identity Data:</span> Name, username, and email address.</li>
          <li><span class="text-white font-medium">Subscription Data:</span> Your membership tier (Free, VIP, or Mentorship) and join date.</li>
          <li><span class="text-white font-medium">Financial Data:</span> Transaction history managed via <span class="text-white font-medium">Whop</span> (we do not store your credit card details directly).</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-semibold text-white mb-4">3. How We Use Your Data</h2>
        <p class="mb-4">We use your information to:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Deliver the BBR Strategy Cheat Sheet and educational content.</li>
          <li>Manage your access to the Way Trades Discord server.</li>
          <li>Send you "Math Over Hype" nurture emails and VIP trial invitations.</li>
          <li>Ensure the security and integrity of our trading community.</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-semibold text-white mb-4">4. Third-Party Services</h2>
        <p class="mb-4">We integrate with elite service providers to run our ecosystem. Your data may be processed by:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li><span class="text-white font-medium">Whop:</span> For payments and membership management.</li>
          <li><span class="text-white font-medium">Discord:</span> For community hosting.</li>
          <li><span class="text-white font-medium">Mailmodo:</span> For email automation and delivery.</li>
          <li><span class="text-white font-medium">ManyChat:</span> For Instagram automation.</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
        <p class="mb-4">
          You have the right to access, correct, or request the deletion of your personal data at any time. To do so, please contact us at the email provided below.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
        <p class="mb-4">For any questions regarding this policy, please contact:</p>
        <p class="text-lg font-medium text-yellow-400">contact@waytrades.com</p>
      </section>

      <div class="mt-20 pt-8 border-t border-slate-800">
        <NuxtLink to="/" class="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-2">
          <span>&larr;</span> Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Privacy Policy | Way Trades',
  meta: [
    { name: 'description', content: 'Privacy Policy for Way Trades - Trading Education and BBR Strategy.' }
  ]
})
</script>

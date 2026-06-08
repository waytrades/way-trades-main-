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
        <h1 class="text-4xl font-black mb-2 text-white">Return Policy</h1>
        <p class="text-gray-400 text-sm mb-8">Last Updated: February 11, 2026</p>

        <div class="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Thank you for choosing Way Trades for your trading education and signal services. We are
            committed to providing high-quality digital content and valuable insights to help you navigate the
            financial markets with a "Math Over Hype" approach.
          </p>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">1. General Policy for Digital Products and Services</h2>
            <p>
              Due to the immediate, irrevocable nature of digital content and subscription-based services, all
              sales of digital products, educational courses, trading signals, mentorship programs, and access
              to private communities are final and non-refundable. Once access to a digital product or service
              has been granted or initiated, it cannot be returned. This policy is in place because:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4 mt-4">
              <li><strong>Instant Access:</strong> Upon purchase, you gain immediate access to proprietary information, strategies, and community resources.</li>
              <li><strong>Irreversibility:</strong> Digital content, once delivered or accessed, cannot be physically returned or unlearned.</li>
              <li><strong>Proprietary Information:</strong> Our products contain valuable intellectual property and trading methodologies.</li>
            </ul>
            <p class="mt-4">
              We encourage all prospective members to carefully review the product descriptions, features,
              and terms of service before making a purchase. If you have any questions about a specific
              product or service, please contact us prior to completing your transaction.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">2. Subscription Services</h2>
            <p>For subscription-based services (e.g., VIP Access, Trading Signals):</p>
            <ul class="list-disc list-inside space-y-2 ml-4 mt-4">
              <li><strong>Cancellation:</strong> You may cancel your subscription at any time. Your access to the service will continue until the end of your current billing period, and you will not be charged for subsequent periods.</li>
              <li><strong>No Pro-Rata Refunds:</strong> We do not offer pro-rata refunds for partial use of a subscription period. Cancellation will prevent future charges, but no refunds will be issued for the current or past billing cycles.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">3. Exceptions (Limited Circumstances)</h2>
            <p>
              Refunds may be considered only in the following extremely limited circumstances, at the sole
              discretion of Way Trades:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4 mt-4">
              <li><strong>Duplicate Purchase:</strong> If you are accidentally charged twice for the same product or service due to a technical error on our part.</li>
              <li><strong>Technical Failure:</strong> If you are unable to access the purchased digital product or service due to a persistent, unresolvable technical issue directly attributable to Way Trades, and our support team is unable to provide a solution within a reasonable timeframe. This does not include issues arising from your own device, internet connection, or third-party software.</li>
            </ul>
            <p class="mt-4">
              In such exceptional cases, you must contact our support team within 7 days of the purchase
              date, providing detailed evidence of the issue. All refund requests will be reviewed on a
              case-by-case basis.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
            <p>
              If you have any questions about our Return Policy, please contact us at<br />
              <strong>contact@waytrades.com</strong> or through the support channels available on Whop.
            </p>
            <p class="mt-4">
              By completing a purchase with Way Trades, you acknowledge and agree to this Return Policy.
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
  title: 'Return Policy | Way Trades',
  meta: [
    {
      name: 'description',
      content: 'Way Trades Return Policy - Learn about our refund and return policy for digital products and services.'
    }
  ]
})
</script>

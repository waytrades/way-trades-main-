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
        <h1 class="text-4xl font-black mb-2 text-white">End User License Agreement (EULA)</h1>
        <p class="text-gray-400 text-sm mb-8">Last Updated: February 11, 2026</p>

        <div class="space-y-6 text-gray-300 leading-relaxed">
          <p class="font-semibold">
            This End User License Agreement ("EULA") is a legal agreement between you
            ("Licensee" or "You") and Way Trades ("Licensor," "We," "Us," or "Our") for the use of
            our digital products, educational content, trading signals, mentorship programs, and
            access to our private communities (collectively, the "Licensed Products").
          </p>

          <p>
            By accessing, purchasing, downloading, or using any of the Licensed Products, you
            agree to be bound by the terms and conditions of this EULA. If you do not agree to the
            terms of this EULA, do not access, purchase, download, or use the Licensed Products.
          </p>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">1. Grant of License</h2>
            <p>
              Way Trades grants you a limited, non-exclusive, non-transferable, revocable license to
              access and use the Licensed Products for your personal, non-commercial use only,
              subject to the terms and conditions of this EULA. This license does not grant you any
              ownership rights in the Licensed Products.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">2. Restrictions</h2>
            <p>You agree not to, and you will not permit others to:</p>
            <ul class="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the Licensed Products, except as expressly permitted by this EULA.</li>
              <li>Use the Licensed Products for any commercial purpose, including but not limited to reselling, licensing, or otherwise exploiting the content for profit.</li>
              <li>Share your access credentials (username, password, etc.) with any third party.</li>
              <li>Attempt to decompile, reverse engineer, disassemble, or otherwise derive the source code or underlying ideas or algorithms of any part of the Licensed Products.</li>
              <li>Use the Licensed Products in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Licensed Products.</li>
              <li>Use any robot, spider, or other automatic device, process, or means to access the Licensed Products for any purpose, including monitoring or copying any of the material on the Licensed Products.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <p>
              All intellectual property rights, including copyrights, patents, trademarks, and trade
              secrets, in the Licensed Products and their content (including but not limited to text,
              graphics, logos, images, audio clips, video clips, data compilations, and software) are
              owned by Way Trades or its licensors. This EULA does not grant you any rights to use
              any trademarks, service marks, or logos of Way Trades.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">4. Disclaimer of Warranties; Trading Risks</h2>
            <div class="bg-red-900/20 border border-red-800 rounded-lg p-4 my-4">
              <p class="font-bold text-red-400">
                THE LICENSED PRODUCTS ARE PROVIDED "AS IS" AND "AS AVAILABLE"
                WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WAY
                TRADES DOES NOT WARRANT THAT THE LICENSED PRODUCTS WILL BE
                UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL
                COMPONENTS.
              </p>
            </div>
            <p class="font-bold mt-4">IMPORTANT TRADING RISK DISCLAIMER:</p>
            <ul class="list-disc list-inside space-y-2 ml-4 mt-4">
              <li><strong>Educational and Informational Purposes Only:</strong> The Licensed Products, including all educational content, trading signals, and mentorship, are provided for educational and informational purposes only. They are not intended as, and do not constitute, financial advice, investment advice, trading advice, or any other form of professional advice.</li>
              <li><strong>No Guarantee of Profits:</strong> Way Trades does not guarantee any specific financial outcome or profit from the use of the Licensed Products. Trading in financial markets involves substantial risk, and you could lose money. Past performance is not indicative of future results.</li>
              <li><strong>Your Responsibility:</strong> You acknowledge and agree that any trading decisions you make are solely your responsibility. You should consult with a qualified financial professional before making any investment decisions.</li>
              <li><strong>"Math Over Hype" Philosophy:</strong> While our strategies are built on a "Math Over Hype" philosophy, emphasizing a 1:3 Risk-to-Reward ratio and a 50% win rate, these are statistical probabilities and not guarantees. Market conditions can change rapidly, and individual results may vary significantly.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <div class="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4">
              <p class="font-bold text-yellow-400">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                SHALL WAY TRADES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
                REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF
                DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A)
                YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE
                LICENSED PRODUCTS; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY
                ON THE LICENSED PRODUCTS; OR (C) UNAUTHORIZED ACCESS, USE, OR
                ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
              </p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">6. Termination</h2>
            <p>
              This EULA is effective until terminated by you or Way Trades. Your rights under this
              EULA will terminate automatically without notice from Way Trades if you fail to comply
              with any term(s) of this EULA. Upon termination, you shall cease all use of the Licensed
              Products.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">7. Governing Law</h2>
            <p>
              This EULA shall be governed by and construed in accordance with the laws of New
              Jersey, United States, without regard to its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">8. Changes to this EULA</h2>
            <p>
              Way Trades reserves the right to modify this EULA at any time. We will notify you of any
              changes by posting the new EULA on our website or through other reasonable means.
              Your continued use of the Licensed Products after any such changes constitutes your
              acceptance of the new EULA.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about this EULA, please contact us at<br />
              <strong>contact@waytrades.com</strong> or through the support channels available on Whop.
            </p>
            <p class="mt-4">
              By using the Licensed Products, you acknowledge that you have read this EULA,
              understand it, and agree to be bound by its terms and conditions.
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
  title: 'EULA | Way Trades',
  meta: [
    {
      name: 'description',
      content: 'Way Trades End User License Agreement (EULA) - Legal terms for using our products and services.'
    }
  ]
})
</script>

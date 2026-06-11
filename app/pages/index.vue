<template>
  <div class="homepage">
    <Header />
    <HeroSection />
    <TrustBar />
    <PillarsSection />
    <TargetAudience />
    <TestimonialsGrid />
    <DiscordConversion />
    <FinalCTA />
    <Footer />
    <StickyMobileCTA />
  </div>
</template>

<script setup>
import Header from '~/components/v2/Header.vue'
import HeroSection from '~/components/v2/HeroSection.vue'
import TrustBar from '~/components/v2/TrustBar.vue'
import PillarsSection from '~/components/v2/PillarsSection.vue'
import TargetAudience from '~/components/v2/TargetAudience.vue'
import TestimonialsGrid from '~/components/v2/Testimonials.vue'
import DiscordConversion from '~/components/v2/DiscordConversion.vue'
import FinalCTA from '~/components/v2/FinalCTA.vue'
import Footer from '~/components/v2/Footer.vue'
import StickyMobileCTA from '~/components/v2/StickyMobileCTA.vue'

const { gtag } = useGtag()

useSeoMeta({
  title: 'Way Trades - Master Futures & Options Through Disciplined Process',
  ogTitle: 'Way Trades - Master Futures & Options Through Disciplined Process',
  description: 'Join 5,000+ traders mastering NQ futures day trading and equity options swings using the BBR framework. No hype. Just math and discipline.',
  ogDescription: 'Join 5,000+ traders mastering NQ futures day trading and equity options swings using the BBR framework. No hype. Just math and discipline.',
  ogImage: '/logo.png',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.homepage {
  background-color: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
}
</style>

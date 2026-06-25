<template>
  <div class="homepage">
    <Header />
    <HeroSection />
    <TrustBar />
    <EVExplainer />
    <TestimonialsGrid />
    <DiscordConversion />
    <AffiliateSection />
    <FAQSection />
    <FinalCTA />
    <Footer />
    <StickyMobileCTA />
  </div>
</template>

<script setup>
import Header from '~/components/v2/Header.vue'
import HeroSection from '~/components/v2/HeroSection.vue'
import TrustBar from '~/components/v2/TrustBar.vue'
import EVExplainer from '~/components/v2/EVExplainer.vue'
import TestimonialsGrid from '~/components/v2/Testimonials.vue'
import DiscordConversion from '~/components/v2/DiscordConversion.vue'
import AffiliateSection from '~/components/v2/AffiliateSection.vue'
import FAQSection from '~/components/v2/FAQSection.vue'
import FinalCTA from '~/components/v2/FinalCTA.vue'
import Footer from '~/components/v2/Footer.vue'
import StickyMobileCTA from '~/components/v2/StickyMobileCTA.vue'

const { gtag } = useGtag()

useSeoMeta({
  title: 'Way Trades - Free Trading Community | BBR Strategy',
  ogTitle: 'Way Trades - Free Trading Community | BBR Strategy',
  description: 'Join a free community of serious traders mastering the BBR strategy for NQ futures and options. No signals, no hype — just math, discipline, and like-minded traders.',
  ogDescription: 'Join a free community of serious traders mastering the BBR strategy for NQ futures and options. No signals, no hype — just math, discipline, and like-minded traders.',
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

<template>
  <div class="homepage">
    <Header />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Trust Bar -->
    <TrustBar />
    
    <!-- Two Pillars -->
    <PillarsSection />
    
    <!-- Target Audience -->
    <TargetAudience />
    
    <!-- Testimonials Grid -->
    <TestimonialsGrid />
    
    <!-- Discord Conversion -->
    <DiscordConversion />
    
    <!-- Mentorship Teaser -->
    <MentorshipTeaser />
    
    <!-- Final CTA -->
    <FinalCTA />
    
    <Footer />
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
import MentorshipTeaser from '~/components/v2/MentorshipTeaser.vue'
import FinalCTA from '~/components/v2/FinalCTA.vue'
import Footer from '~/components/v2/Footer.vue'

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
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  min-height: 100vh;
}

/* Global section wrapper */
:deep(.section) {
  max-width: var(--max-width-content);
  margin: 0 auto;
  padding: 0 24px;
}
</style>

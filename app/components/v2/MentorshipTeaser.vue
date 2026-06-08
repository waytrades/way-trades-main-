<template>
  <section class="mentorship-section">
    <div class="section">
      <div class="mentorship-container" v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }">
        <div class="mentorship-icon">
          <Icon name="lucide:star" />
        </div>
        
        <h2>The Next Level: 1-on-1 Mentorship.</h2>
        
        <p class="mentorship-description">We are currently refining a high-touch mentorship program for traders ready for absolute accountability and professional-grade execution reviews. This isn't a course; it's a transformation.</p>
        
        <div class="mentorship-status">
          <span class="status-badge">Limited Spots</span>
          <p>Waitlist opening soon.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
</script>

<style scoped>
.mentorship-section {
  background-color: var(--color-bg-primary);
  padding: var(--section-padding);
  border-top: 1px solid var(--color-border-subtle);
}

.mentorship-container {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 60px 40px;
  border-radius: var(--border-radius-card);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-border-subtle);
}

.mentorship-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 255, 148, 0.1);
  border-radius: 12px;
  color: var(--color-accent-primary);
  animation: float 3s ease-in-out infinite;
}

.mentorship-icon :deep(svg) {
  width: 32px;
  height: 32px;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.mentorship-container h2 {
  font-size: 2rem;
  color: var(--color-text-primary);
  margin: 0;
}

.mentorship-description {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
  max-width: 600px;
}

.mentorship-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
}

.status-badge {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(0, 255, 148, 0.1);
  border: 1px solid var(--color-accent-primary);
  color: var(--color-accent-primary);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.mentorship-status p {
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin: 0;
}

@media (max-width: 768px) {
  .mentorship-section {
    padding: var(--section-padding-mobile);
  }

  .mentorship-container {
    padding: 40px 24px;
    gap: 16px;
  }

  .mentorship-container h2 {
    font-size: 1.5rem;
  }

  .mentorship-description {
    font-size: 1rem;
  }
}
</style>

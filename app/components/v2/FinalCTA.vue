<template>
  <section class="final-cta-section">
    <div class="section">
      <div class="final-cta-container" v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }">
        <h2>Stop Guessing. Start Executing.</h2>
        <p>The difference between a gambler and a trader is a repeatable process. Your journey toward consistency starts with the right community and the right math.</p>
        
        <div class="cta-buttons">
          <a href="https://discord.gg/waytrades" target="_blank" class="btn btn-primary">Join the Discord Community</a>
          <a href="#" @click.prevent="scrollToTop" class="btn btn-secondary">Back to Top</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMotion } from '@vueuse/motion'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.final-cta-section {
  background-color: var(--color-bg-primary);
  padding: var(--section-padding);
  border-top: 1px solid var(--color-border-subtle);
}

.final-cta-container {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.final-cta-container h2 {
  font-size: 2.5rem;
  color: var(--color-text-primary);
  margin: 0;
}

.final-cta-container p {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  width: 100%;
}

.btn {
  padding: 12px 24px;
  border-radius: var(--border-radius-button);
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all var(--transition-default);
  font-family: var(--font-heading);
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background-color: var(--color-accent-primary);
  color: var(--color-bg-primary);
}

.btn-primary:hover {
  box-shadow: 0 0 20px rgba(0, 255, 148, 0.3);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-accent-primary);
  border: 1px solid var(--color-accent-primary);
}

.btn-secondary:hover {
  background-color: rgba(0, 255, 148, 0.1);
}

@media (max-width: 768px) {
  .final-cta-section {
    padding: var(--section-padding-mobile);
  }

  .final-cta-container h2 {
    font-size: 1.75rem;
  }

  .final-cta-container p {
    font-size: 1rem;
  }

  .cta-buttons {
    width: 100%;
  }
}
</style>

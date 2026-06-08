<template>
  <section class="target-audience-section">
    <div class="section">
      <div class="audience-header" v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }">
        <h2>You've Got the Knowledge. Now You Need the Discipline.</h2>
        <p>You've been trading for 1–4 years. You know the indicators, you've seen the setups, but the equity curve isn't moving. We bridge the gap between "knowing how to trade" and "being a trader."</p>
      </div>

      <div class="audience-grid">
        <div class="audience-card" v-for="(point, index) in audiencePoints" :key="index" v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 200 + index * 100 } } }">
          <div class="card-icon">
            <Icon :name="point.icon" />
          </div>
          <h3>{{ point.title }}</h3>
          <p>{{ point.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMotion } from '@vueuse/motion'

interface AudiencePoint {
  icon: string
  title: string
  description: string
}

const audiencePoints: AudiencePoint[] = [
  {
    icon: 'lucide:alert-circle',
    title: 'This is for you if...',
    description: 'You find yourself breaking your own rules in the heat of the moment and sabotaging perfectly good setups.'
  },
  {
    icon: 'lucide:trending-down',
    title: 'This is for you if...',
    description: 'You\'ve struggled to pass or maintain prop firm accounts because of emotional over-leveraging and revenge trading.'
  },
  {
    icon: 'lucide:compass',
    title: 'This is for you if...',
    description: 'You have a "strategy" but lack a clear, repeatable process for when to step away from the screens.'
  }
]
</script>

<style scoped>
.target-audience-section {
  background-color: var(--color-bg-primary);
  padding: var(--section-padding);
  border-top: 1px solid var(--color-border-subtle);
}

.audience-header {
  text-align: center;
  margin-bottom: 60px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.audience-header h2 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.audience-header p {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.audience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.audience-card {
  padding: 32px;
  border-radius: var(--border-radius-card);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-border-subtle);
  transition: all var(--transition-default);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.audience-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-accent-primary);
  box-shadow: 0 0 20px rgba(0, 255, 148, 0.1);
}

.card-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 255, 148, 0.1);
  border-radius: 8px;
  color: var(--color-accent-primary);
}

.card-icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.audience-card h3 {
  font-size: 1.25rem;
  color: var(--color-text-primary);
  margin: 0;
}

.audience-card p {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .target-audience-section {
    padding: var(--section-padding-mobile);
  }

  .audience-header h2 {
    font-size: 1.75rem;
  }

  .audience-header p {
    font-size: 1rem;
  }

  .audience-grid {
    grid-template-columns: 1fr;
  }

  .audience-card {
    padding: 24px;
  }
}
</style>

<template>
  <section class="trust-bar-section">
    <div class="trust-bar-container">
      <div class="trust-stat" v-for="(stat, index) in stats" :key="index" v-motion="{ initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } } }">
        <Icon :name="stat.icon" class="stat-icon" />
        <div class="stat-content">
          <p class="stat-value">{{ stat.value }}</p>
          <p class="stat-label">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMotion } from '@vueuse/motion'

interface Stat {
  icon: string
  value: string
  label: string
}

const stats: Stat[] = [
  {
    icon: 'lucide:target',
    value: '1:3+',
    label: 'Target Risk:Reward'
  },
  {
    icon: 'lucide:users',
    value: '5,000+',
    label: 'Community Members'
  },
  {
    icon: 'lucide:check-circle',
    value: 'Verified',
    label: 'BBR Framework'
  },
  {
    icon: 'lucide:zap',
    value: 'Zero Hype',
    label: 'Pure Execution'
  }
]
</script>

<style scoped>
.trust-bar-section {
  background-color: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border-subtle);
  padding: 40px 24px;
}

.trust-bar-container {
  max-width: var(--max-width-content);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
}

.trust-stat {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: var(--border-radius-card);
  transition: all var(--transition-default);
}

.trust-stat:hover {
  background-color: rgba(0, 255, 148, 0.05);
}

.stat-icon {
  width: 32px;
  height: 32px;
  color: var(--color-accent-primary);
  flex-shrink: 0;
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-value {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin: 0;
}

@media (max-width: 768px) {
  .trust-bar-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .trust-stat {
    padding: 12px;
  }

  .stat-icon {
    width: 24px;
    height: 24px;
  }

  .stat-value {
    font-size: 1rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }
}
</style>

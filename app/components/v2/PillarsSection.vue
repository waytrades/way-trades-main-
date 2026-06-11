<template>
  <section id="pillars" class="pillars-section">
    <div class="section">
      <div class="pillars-header" v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }">
        <h2>Two Disciplines. One Mathematical Foundation.</h2>
        <p>We don't believe in "one size fits all." Whether you prefer the high-octane execution of intraday futures or the calculated patience of options swings, our BBR framework scales across both.</p>
      </div>

      <div class="pillars-grid">
        <!-- Futures Day Trading -->
        <div class="pillar-card" v-motion="{ initial: { opacity: 0, x: -30 }, enter: { opacity: 1, x: 0, transition: { duration: 600, delay: 200 } } }">
          <div class="pillar-icon">
            <Icon name="lucide:zap" />
          </div>
          <h3>Futures Day Trading</h3>
          <p class="pillar-description">Master the NQ futures markets using intraday order flow and the BBR strategy. We focus on high-probability execution on the 30-second and 5-minute timeframes, specifically designed for prop firm consistency.</p>
          
          <ul class="pillar-features">
            <li>
              <Icon name="lucide:check" />
              <span>Intraday BBR (Breakouts, Bounces, Rejects)</span>
            </li>
            <li>
              <Icon name="lucide:check" />
              <span>Order Flow &amp; ICT Execution Concepts</span>
            </li>
            <li>
              <Icon name="lucide:check" />
              <span>Prop Firm Risk Management Protocols</span>
            </li>
          </ul>
        </div>

        <!-- Options Swing Trading -->
        <div class="pillar-card" v-motion="{ initial: { opacity: 0, x: 30 }, enter: { opacity: 1, x: 0, transition: { duration: 600, delay: 200 } } }">
          <div class="pillar-icon">
            <Icon name="lucide:trending-up" />
          </div>
          <h3>Options Swing Trading</h3>
          <p class="pillar-description">Build wealth through individual equity options using higher timeframe setups. We utilize bullish divergence and oversold support levels to capture 2-week to 3-month moves with defined risk.</p>
          
          <ul class="pillar-features">
            <li>
              <Icon name="lucide:check" />
              <span>High-Timeframe BBR Setups</span>
            </li>
            <li>
              <Icon name="lucide:check" />
              <span>Bullish Divergence &amp; Support Confluence</span>
            </li>
            <li>
              <Icon name="lucide:check" />
              <span>Strategic 2-Week to 3-Month Hold Periods</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMotion } from '@vueuse/motion'
</script>

<style scoped>
.pillars-section {
  background-color: var(--color-bg-primary);
  padding: var(--section-padding);
}

.pillars-header {
  text-align: center;
  margin-bottom: 60px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.pillars-header h2 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.pillars-header p {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.pillar-card {
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

.pillar-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-accent-primary);
  box-shadow: 0 0 20px rgba(0, 255, 148, 0.1);
}

.pillar-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 255, 148, 0.1);
  border-radius: 8px;
  color: var(--color-accent-primary);
}

.pillar-icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.pillar-card h3 {
  font-size: 1.5rem;
  color: var(--color-text-primary);
  margin: 0;
}

.pillar-description {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}

.pillar-features {
  list-style: none;
  padding: 0;
  margin: 16px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.pillar-features li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

.pillar-features li :deep(svg) {
  width: 18px;
  height: 18px;
  color: var(--color-accent-primary);
  flex-shrink: 0;
  margin-top: 2px;
}

@media (max-width: 768px) {
  .pillars-section {
    padding: var(--section-padding-mobile);
  }

  .pillars-header h2 {
    font-size: 1.75rem;
  }

  .pillars-header p {
    font-size: 1rem;
  }

  .pillar-card {
    padding: 24px;
  }
}
</style>

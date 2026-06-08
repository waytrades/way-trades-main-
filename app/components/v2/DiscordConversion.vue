<template>
  <section class="discord-section">
    <div class="section">
      <div class="discord-container" v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } }">
        <!-- Left: Copy -->
        <div class="discord-copy">
          <h2>The Last Trading Community You'll Ever Need to Join.</h2>
          <p>Trading is a lonely game, but it doesn't have to be. Join a room full of practitioners who value risk management over screenshots of P&L.</p>

          <div class="benefits-list">
            <div class="benefit-item">
              <Icon name="lucide:radio" />
              <div>
                <h4>Live Market Analysis</h4>
                <p>Real-time breakdowns of NQ and Equity setups as they form.</p>
              </div>
            </div>
            <div class="benefit-item">
              <Icon name="lucide:users" />
              <div>
                <h4>Process-Driven Peer Group</h4>
                <p>Surround yourself with traders who care more about R:R than "get rich quick" schemes.</p>
              </div>
            </div>
            <div class="benefit-item">
              <Icon name="lucide:book" />
              <div>
                <h4>The BBR Resource Library</h4>
                <p>Instant access to the core frameworks for both futures and options.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Tiers -->
        <div class="discord-tiers">
          <div class="tier-card tier-free">
            <div class="tier-header">
              <h3>Free Tier</h3>
              <p class="tier-price">$0</p>
            </div>
            <ul class="tier-features">
              <li>
                <Icon name="lucide:check" />
                <span>Community chat access</span>
              </li>
              <li>
                <Icon name="lucide:check" />
                <span>Basic resources & guides</span>
              </li>
              <li>
                <Icon name="lucide:check" />
                <span>General market outlooks</span>
              </li>
              <li>
                <Icon name="lucide:check" />
                <span>Peer support & accountability</span>
              </li>
            </ul>
            <p class="tier-description">A no-brainer for any serious student.</p>
            <a href="https://discord.gg/waytrades" target="_blank" class="btn btn-primary w-full">Join the Discord</a>
          </div>

          <div class="tier-card tier-mentorship">
            <div class="tier-badge">Coming Soon</div>
            <div class="tier-header">
              <h3>Mentorship Tier</h3>
              <p class="tier-price">Premium</p>
            </div>
            <ul class="tier-features">
              <li>
                <Icon name="lucide:check" />
                <span>1-on-1 direct access</span>
              </li>
              <li>
                <Icon name="lucide:check" />
                <span>Advanced accountability</span>
              </li>
              <li>
                <Icon name="lucide:check" />
                <span>Deep-dive execution reviews</span>
              </li>
              <li>
                <Icon name="lucide:check" />
                <span>Professional-grade coaching</span>
              </li>
            </ul>
            <p class="tier-description">For traders ready for absolute transformation.</p>
            <button class="btn btn-secondary w-full" disabled>Coming Soon</button>
          </div>
        </div>
      </div>

      <!-- Trust Microcopy -->
      <div class="trust-microcopy" v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { duration: 600, delay: 400 } } }">
        <p>Join 5,000+ traders. Access is instant. No credit card required.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
</script>

<style scoped>
.discord-section {
  background-color: var(--color-bg-primary);
  padding: var(--section-padding);
  border-top: 1px solid var(--color-border-subtle);
}

.discord-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.discord-copy h2 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.discord-copy > p {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 32px;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.benefit-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.benefit-item :deep(svg) {
  width: 24px;
  height: 24px;
  color: var(--color-accent-primary);
  flex-shrink: 0;
  margin-top: 2px;
}

.benefit-item h4 {
  font-size: 1.125rem;
  color: var(--color-text-primary);
  margin: 0 0 4px 0;
}

.benefit-item p {
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin: 0;
}

.discord-tiers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.tier-card {
  padding: 32px;
  border-radius: var(--border-radius-card);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-border-subtle);
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  transition: all var(--transition-default);
}

.tier-free:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-accent-primary);
  box-shadow: 0 0 20px rgba(0, 255, 148, 0.1);
}

.tier-mentorship {
  border-color: var(--color-accent-primary);
  background: rgba(0, 255, 148, 0.05);
}

.tier-badge {
  position: absolute;
  top: -12px;
  right: 16px;
  padding: 4px 12px;
  background: var(--color-accent-primary);
  color: var(--color-bg-primary);
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tier-header {
  border-bottom: 1px solid var(--color-border-subtle);
  padding-bottom: 16px;
}

.tier-header h3 {
  font-size: 1.5rem;
  margin: 0 0 8px 0;
  color: var(--color-text-primary);
}

.tier-price {
  font-size: 1.125rem;
  color: var(--color-accent-primary);
  margin: 0;
  font-weight: 600;
}

.tier-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tier-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

.tier-features li :deep(svg) {
  width: 18px;
  height: 18px;
  color: var(--color-accent-primary);
  flex-shrink: 0;
}

.tier-description {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  font-style: italic;
  margin: 0;
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

.btn-secondary:hover:not(:disabled) {
  background-color: rgba(0, 255, 148, 0.1);
}

.btn-secondary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.trust-microcopy {
  text-align: center;
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--color-border-subtle);
}

.trust-microcopy p {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  margin: 0;
}

@media (max-width: 768px) {
  .discord-section {
    padding: var(--section-padding-mobile);
  }

  .discord-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .discord-copy h2 {
    font-size: 1.75rem;
  }

  .discord-copy > p {
    font-size: 1rem;
  }

  .discord-tiers {
    grid-template-columns: 1fr;
  }

  .tier-card {
    padding: 24px;
  }
}
</style>

# waytrades.com — Claude Site Engineer

## OVERVIEW

Workflow for every change:
1. Waylon describes what he wants
2. Claude asks clarifying questions if needed (one round only, grouped)
3. Claude writes complete production-ready code
4. Claude commits via GitHub API directly to main — Vercel auto-deploys
5. Waylon never touches the terminal

---

## ACCESS

- GitHub repo: https://github.com/waytrades/way-trades-main-
- Branch: main
- Production: waytrades.com
- Vercel preview: way-trades-nuxt.vercel.app
- GitHub PAT: stored in Claude Project instructions (not committed to repo)
- Vercel Token: stored in Claude Project instructions (not committed to repo)

GitHub API write pattern:
1. GET /repos/{repo}/contents/{path} to get current SHA
2. Base64-encode full new file content
3. PUT with { message, content, sha } + Authorization: token {PAT}
Vercel deploys automatically on push (~60s).

---

## TECH STACK

- Nuxt 3, compatibilityVersion: 4, SSR: true
- Nuxt 4 app/ directory structure (all source under /app)
- Tailwind CSS (@nuxtjs/tailwindcss) — primary styling
- Design tokens: /app/assets/css/design-tokens.css
- Sanity CMS (@nuxtjs/sanity)
- Icons: @nuxt/icon — <Icon name="lucide:xxx" />
- Animations: @vueuse/motion — v-motion :initial="{}" :enter="{}"
- Analytics: nuxt-gtag, GA4 G-QXNYRXWPJ9
- Language: JavaScript (not TypeScript) in .vue files

---

## REPO STRUCTURE

public/
  favicon.png, logo.png
  testimonials/ (t1.png through t18.png)

app/
  assets/css/design-tokens.css
  pages/
    index.vue          <- MAIN HOMEPAGE
    v2.vue             <- Legacy staging
    cheat-sheet.vue    <- BBR cheat sheet landing
    privacy.vue, return-policy.vue, terms-of-service.vue, eula.vue
  components/
    TestimonialsSection.vue  <- Legacy
    v2/                      <- ALL ACTIVE COMPONENTS
      Header.vue, HeroSection.vue, TrustBar.vue
      PillarsSection.vue, TargetAudience.vue
      Testimonials.vue, DiscordConversion.vue
      MentorshipTeaser.vue, FinalCTA.vue, Footer.vue

Homepage order:
  Header -> HeroSection -> TrustBar -> PillarsSection -> TargetAudience
  -> Testimonials -> DiscordConversion -> MentorshipTeaser -> FinalCTA -> Footer

---

## DESIGN SYSTEM

Colors (design-tokens.css):
  --color-bg-primary:     #0a0a0a
  --color-bg-card:        #1a1a1a
  --color-accent-primary: #00FF94  (green)
  --color-text-primary:   #ffffff
  --color-text-secondary: #a0a0a0
  --color-border-subtle:  rgba(255,255,255,0.06)

Tailwind equivalents: bg-slate-950/900/800 for backgrounds, green-500 for accent.

Typography:
  Font: Inter everywhere
  Headings: font-black, tracking-tight, white
  Body: text-gray-300 / text-gray-400
  Labels: text-xs font-bold uppercase tracking-widest text-gray-400

Primary CTA:
  bg-green-500 hover:bg-green-600 text-slate-950 font-black rounded-full px-8 py-4
  transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/50 duration-300

Secondary CTA:
  border-2 border-gray-600 hover:border-green-500 text-white font-black rounded-full px-8 py-4
  transition-all duration-300 hover:bg-green-500/10

Cards:
  bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm

Nav pill:
  bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full

Glow orbs:
  absolute w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse

Section animation:
  v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"

---

## BRAND

- waytrades / Way Trades
- Strategy: BBR — Breakouts, Bounces, Rejects
- Markets: NQ futures day trading (30s + 5min TF) and options swing trading
- Core math: 50% win rate + 1:3 risk:reward = consistent profitability
- Tone: Confident, direct, trader-to-trader. Zero hype. Math-first.
- Mentorship: 8-week futures curriculum for intermediate prop firm traders
- NOT this brand: long-term investing, stock picking, passive income

Key links:
  Paid Discord (5-day free trial): https://whop.com/waytrades/vip-access-60-1cb2/
  Free Discord: https://whop.com/waytrades/free-access-c6/
  BBR Cheat Sheet: https://whop.com/waytrades/the-bbr-strategy-starter-kit/
  YouTube recaps: https://www.youtube.com/playlist?list=PLeVBW5ryrKoLEQVel4Ld0XjMOPYbj7zOt
  YouTube channel: https://www.youtube.com/@waytrades
  Instagram: https://www.instagram.com/way_trades
  TikTok: https://www.tiktok.com/@waytrades
  Hero embed: https://www.youtube.com/embed/RZkAQ7HU-38

Community stats for copy:
  5,000+ members, 50% win rate + 1:3 R:R, live sessions at 9:25 AM EST

---

## STANDING PERMISSIONS

No approval needed:
  - Edit any file in app/components/v2/ or app/pages/
  - Create new components or pages
  - Update copy, SEO meta, CTAs, animations, Tailwind classes
  - Fix bugs, typos, layout issues
  - Update any external links

Must ask first:
  - Delete existing pages or components
  - Change nav structure
  - Modify nuxt.config.ts modules
  - Change Sanity config
  - Change paid CTA destination URL

---

## COMMIT FORMAT

Lowercase, under 60 chars.
Examples: add options section to homepage, fix mobile nav, update hero copy

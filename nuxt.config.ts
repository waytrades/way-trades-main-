export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  future: {
    compatibilityVersion: 4, ssr: true,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sanity', '@nuxt/icon'],
  sanity: {
    projectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_PUBLIC_SANITY_DATASET,
    useCdn: true
  }
})

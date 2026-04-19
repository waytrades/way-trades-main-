// Force redeployment
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-QXNYRXWPJ9'
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QXNYRXWPJ9');`
        }
      ]
    }
  },
  future: {
    compatibilityVersion: 4, ssr: true,
  },
  components: {
    dirs: [
      '~/components',
      '~/app/components'
    ]
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sanity', '@nuxt/icon', 'nuxt-gtag'],
  gtag: {
    id: 'G-QXNYRXWPJ9'
  },
  sanity: {
    projectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_PUBLIC_SANITY_DATASET,
    useCdn: true
  }
})

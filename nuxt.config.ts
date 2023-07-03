// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  css: ['~/assets/style/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      viewport: "width=500, initial-scale=1",
      title: "165娛樂城評價",
      meta: [
          { name: "description", content: "165娛樂城評價" },
          { property: "og:title", content: "165娛樂城評價" },
          { property: "og:url", content: "https://165club.tw/" },
          { property: "og:description", content: "165娛樂城評價" },
      ]
    } 
  }
})

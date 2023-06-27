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
          { name: "description", content: "這是 Mike 的 Nuxt3 高效入門全攻略課程" },
          { property: "og:title", content: "Nuxt3 高效入門全攻略" },
          { property: "og:url", content: "http://localhost:3000/" },
          { property: "og:description", content: "這是 Mike 的 Nuxt3 高效入門全攻略課程" },
      ]
    } 
  }
})

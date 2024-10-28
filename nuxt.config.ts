// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    ["@storyblok/nuxt", {
      accessToken: "HeW3xrj4OU6SiBjP4DxkmAtt"
    }]
  ],
})

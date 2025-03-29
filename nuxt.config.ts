// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  mode: "static",

  router: {
    base: "/profile-website/",
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/plausible",
  ],

  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },

  plausible: {
    domain: "westernwilson.com",
  },

  app: {
    head: {
      titleTemplate: 'Western Wilson %s'
    },
  },

  compatibilityDate: "2024-10-26"
});
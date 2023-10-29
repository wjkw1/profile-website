// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: "12345678",
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/content"],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
});

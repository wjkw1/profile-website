// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  mode: "static",
  router: {
    base: "/profile-website/",
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/content"],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
});
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
    "nuxt-swiper",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  swiper: { prefix: "Swiper" },
});

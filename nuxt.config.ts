// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-08-16",
  devtools: { enabled: true },
  css: ["@/assets/stylesheets/all.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/stylesheets/variables" as *;
          `,
        },
      },
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiKey: process.env.API_KEY,
    apiBase: process.env.API_BASE_URL,
    selectedAlbuns: process.env.SELECTED_ALBUNS
  }
})

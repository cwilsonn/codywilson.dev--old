// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            htmlAttrs: {
                'data-theme': 'light',
            },
        },
    },
    googleFonts: {
        families: {
            Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Archivo Black': [400],
        },
    },
    modules: [
        '@nuxtjs/google-fonts',
        '@nuxtjs/tailwindcss',
    ],
})

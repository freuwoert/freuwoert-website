// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/app.sass'
    ],

    modules: [
        '@nuxtjs/tailwindcss',
    ],

    devtools: {
        enabled: false
    },
})

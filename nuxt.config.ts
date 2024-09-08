// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/app.sass'
    ],

    modules: [
        'floating-vue/nuxt',
        '@nuxtjs/tailwindcss',
    ],

    devtools: {
        enabled: false
    },
})

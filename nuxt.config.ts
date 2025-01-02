// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/app.sass'
    ],

    modules: [
        'floating-vue/nuxt',
        '@nuxtjs/tailwindcss',
    ],

    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    api: 'modern',
                },
            },
        },
    },

    runtimeConfig: {
        public: {
            posthogPublicKey: 'phc_iXAp1Vl3WntVZpYrgXno723Bv0AM9QPnTenL2vCkE5K',
            posthogHost: 'https://eu.i.posthog.com',
        },
    },

    devtools: {
        enabled: false
    },

    compatibilityDate: '2025-01-02',
})
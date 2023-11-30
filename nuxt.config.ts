// https://nuxt.com/docs/api/configuration/nuxt-config

const {NUXT_PUBLIC_API_BASE: apiBase} = process.env;

export default defineNuxtConfig({
    devtools: {enabled: true},
    plugins: [
        '~/plugins/httpClient.ts',
        '~/plugins/apiService.ts',
        '~/plugins/mobile-detect.ts'
    ],
    css: ['~/assets/main.scss'],
    runtimeConfig: {
        public: {
            apiBase: apiBase,
        },
    },
    nitro: {
        devProxy: {
            '/api/': {
                target: apiBase,
                changeOrigin: true,
            }
        }
    }
})

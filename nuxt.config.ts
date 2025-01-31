// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    app: {
        baseURL: '/',
    },
    ssr: false,
    css: [
        '@/assets/_main.scss'
    ],
});

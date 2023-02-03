// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
        }
    },
    css: ['@/assets/css/tailwind.css'],
    modules: [
        "@nuxtjs-alt/proxy",
    ],
    proxy: {
        proxies: {
            '/api': {
                target: 'http://api.zxcv.cx',
                rewrite: path => path.replace('/api', ''),
            },
        }
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    }
})

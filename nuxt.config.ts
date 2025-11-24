// nuxt.config.ts
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    components: [{ path: '~/components', pathPrefix: false }],

    modules: [
        '@nuxt/eslint',
        '@pinia/nuxt',
        '@nuxt/image'
    ],

    css: ['@/assets/scss/main.scss'],

    vite: {
        plugins: [
            svgLoader({
                defaultImport: 'component',
                svgo: true
            })
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
            @use "@/assets/scss/variables" as *;
            @use "@/assets/scss/fonts" as *;        /* если есть @font-face */
            @use "@/assets/scss/breakpoints" as *;  /* если используешь mixin breakpoint */
          `
                }
            }
        }
    }
})


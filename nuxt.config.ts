export default defineNuxtConfig({
  // 개발환경 설정
  srcDir: 'src/',
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  components: [
    { path: '~/components/layout', prefix: 'layout' },
    '~/components',
  ],

  // 런타임 설정
  runtimeConfig: {
    db: {
      host: 'localhost',
      port: 5432,
      name: 'sijak',
      username: '',
      password: '',
    },
  },

  // 기능 설정
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],
  tailwindcss: {
    exposeConfig: false,
    cssPath: 'assets/styles/tailwind.css',
  },
  pinia: {
    disableVuex: true,
  },
  vueuse: {
    ssrHandlers: true,
    autoImports: false,
  },
})

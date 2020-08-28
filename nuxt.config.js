import head from './config/head'
import feed from './config/feed'
import sitemap from './config/sitemap'
import vuetify from './config/vuetify'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  generate: {
    fallback: true,
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head,
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#EF1D13',
    height: '4px',
    throttle: 0,
  },
  /*
   ** Customize the loading indicator color
   */
  loadingIndicator: {
    name: '~/loading-indicator.html',
    color: 'white',
    background: '#EF1D13',
  },
  /**
   * Customize the page transition
   */
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
  /**
   * Customize the layout transition
   */
  layoutTransition: {
    name: 'page',
    mode: 'in-out',
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: [
    '~/components/',
    { path: '~/components/shell/', prefix: 'shell' },
    { path: '~/components/campus/', prefix: 'campus' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/feed',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    fullTextSearchFields: ['title', 'description', 'slug', 'text'],
    liveEdit: false,
  },
  /*
   ** Feed module configuration
   ** See https://github.com/nuxt-community/feed-module
   */
  feed,
  /*
   ** Sitemap module configuration
   ** See https://github.com/nuxt-community/sitemap-module
   */
  sitemap,
  /*
   ** Robots module configuration
   ** See https://github.com/nuxt-community/robots-module
   */
  robots: {
    UserAgent: '*',
    Sitemap: 'https://campus.insa-cvl.fr/sitemap.xml',
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify,
  /*
   ** Webfontloader module configuration
   ** https://github.com/Developmint/nuxt-webfontloader
   */
  webfontloader: {
    google: {
      families: ['Roboto:100,300,400,500,700,900'],
    },
  },
  /*
   ** PWA module configuration
   ** https://github.com/nuxt-community/pwa-module
   */
  pwa: {
    manifest: {
      name: 'Campus INSA Centre-Val de Loire',
      short_name: 'Campus INSA CVL',
      orientation: 'portrait',
      display: 'standalone',
      lang: 'fr',
      description: "Website du campus de l'INSA Centre-Val de Loire",
      icons: [
        {
          src: '/icon.png',
          type: 'image/png',
          sizes: '512x512',
          purpose: 'any maskable',
        },
      ],
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}

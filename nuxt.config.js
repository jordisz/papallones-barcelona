export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/papallones-barcelona/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Les papallones de Barcelona',
    htmlAttrs: {
      lang: 'ca'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Espècies de papallones diurnes que podem trobar a Barcelona, i dades sobre la seva distribució en els parcs de la ciutat' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Cabin: [400, 600]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-interpolation']
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true
  }
}

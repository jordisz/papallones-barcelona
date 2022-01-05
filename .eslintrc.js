module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    indent: ['error', 2],
    'object-shorthand': ['warn'],
    'no-unused-vars': ['warn'],
    'vue/multi-word-component-names': ['warn']
  }
}

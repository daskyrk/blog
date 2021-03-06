module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    // 'plugin:prettier/recommended',
    // 'prettier',
    // 'prettier/vue'
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    'no-unused-vars': 'warn',
    'import/no-named-as-default': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/require-default-prop': 'off',
    "vue/component-name-in-template-casing": ["off", "kebab-case"],
    'nuxt/no-cjs-in-config': 'off'
  }
}

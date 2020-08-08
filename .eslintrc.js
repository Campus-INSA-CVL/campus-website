module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'prettier',
    // 'plugin:md/recommended',
    'prettier/vue',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    // 'md/remark': [
    //   'error',
    //   {
    //     // This object corresponds to object you would export in .remarkrc file
    //     plugins: [
    //       // 'remark-preset-lint-recommended',
    //       // 'preset-lint-markdown-style-guide',
    //       // 'frontmatter',
    //     ],
    //   },
    // ],
  },
  // overrides: [
  //   {
  //     files: ['*.md'],
  //     parser: 'markdown-eslint-parser',
  //     rules: {
  //       'prettier/prettier': ['error', { parser: 'markdown' }],
  //     },
  //   },
  // ],
}

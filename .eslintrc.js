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
    'prettier/vue',
    'plugin:md/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'md/remark': [
      'error',
      {
        // This object corresponds to object you would export in .remarkrc file
        plugins: [
          'preset-lint-markdown-style-guide',
          ['lint-no-heading-punctuation', '.,;:!?'],
          'frontmatter',
          // Disable rules handled by Prettier
          ['lint-maximum-line-length', false],
          ['lint-emphasis-marker', false],
          ['lint-list-item-indent', false],
          ['lint-list-item-spacing', false],
          ['lint-ordered-list-marker-value', false],
          ['lint-no-consecutive-blank-lines', false],
          ['lint-table-cell-padding', false],
          ['lint-link-title-style', false],
          ['lint-no-shortcut-reference-link', false],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.md'],
      parser: 'markdown-eslint-parser',
      rules: {
        'prettier/prettier': ['error', { parser: 'markdown' }],
      },
    },
  ],
}

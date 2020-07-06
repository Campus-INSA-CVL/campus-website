module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Docs Campus Website',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description:
    "Documentation du website du Campus de l'INSA Centre-Val de Loire",
  base: '/campus-website/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  theme: 'default-prefers-color-scheme',
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    // displayAllHeaders: true,
    repo: 'Campus-INSA-CVL/campus-website',
    docsDir: 'docs',
    editLinks: true,
    // editLinkText: 'Aidez nous à améliorer cette page',
    // lastUpdated: false,
    sidebar: ['/bienvenue.md', '/guide-associations.md', '/guide-dev.md'],
    serviceWorker: {
      updatePopup: true,
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
}

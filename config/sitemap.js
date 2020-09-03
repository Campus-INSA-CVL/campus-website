export default {
  hostname: 'https://campus.insa-cvl.fr',
  gzip: true,
  defaults: {
    changefreq: 'weekly',
    priority: 1,
    lastmod: new Date(),
  },
  routes: async () => {
    const { $content } = require('@nuxt/content')
    const dynRoutes = [
      '/vie-etudiante',
      '/services',
      '/outils',
      '/federation/index',
      '/federation/culturel/associations',
      '/federation/solidarites/associations',
      '/federation/sport/associations',
      '/federation/sport/sports',
      '/federation/techniques/associations',
      // '/federation/culturel/blog',
      // '/federation/solidarites/blog',
    ]
    let path = []

    for await (const route of dynRoutes) {
      if (route.includes('associations')) {
        const content = await $content(route).fetch()
        path = [
          ...content.associations.map((file) => {
            return {
              url: file.path,
              changefreq: 'monthly',
              priority: 0.3,
              lastmod: new Date(),
            }
          }),
          ...path,
        ]
      } else if (route === '/federation/index') {
        const content = await $content(route).fetch()
        path = [
          ...content.federations.map((file) => {
            return {
              url: file.path,
              changefreq: 'monthly',
              priority: 0.7,
              lastmod: new Date(),
            }
          }),
          ...path,
        ]
      } else {
        const content = await $content(route).only(['path']).fetch()
        path = [
          ...content.map((file) => {
            return {
              url: file.path,
              changefreq: 'weekly',
              priority: 0.5,
              lastmod: new Date(),
            }
          }),
          ...path,
        ]
      }
    }
    return path
  },
}

export default {
  hostname: 'https://campus.insa-cvl.org',
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
      '/representation',
      '/federation',
      // '/federation/culturel/associations',
      // '/federation/solidarites/associations',
      // '/federation/sport/associations',
      // '/federation/sport/sports',
      // '/federation/techniques/associations',
      // '/federation/culturel/blog',
      // '/federation/solidarites/blog',
    ]
    let path = []

    for await (const route of dynRoutes) {
      if (route.includes('federation')) {
        const content = await $content(route, {
          deep: true,
        })
          .only(['path'])
          .where({ extension: '.md', slug: 'index' })
          .fetch()

        content.map((obj) => {
          // search for the 'index term'
          const place = obj.path.lastIndexOf('/index')

          if (place === -1) {
            return obj
          }

          // Remove term for the path
          obj.path = obj.path.slice(0, place)
          return obj
        })

        path = [
          ...content.map((file) => {
            if ([...file.path.matchAll(/\//g)].length <= 2) {
              return {
                url: file.path,
                changefreq: 'monthly',
                priority: 0.7,
                lastmod: new Date(),
              }
            } else {
              return {
                url: file.path,
                changefreq: 'monthly',
                priority: 0.3,
                lastmod: new Date(),
              }
            }
          }),
          ...path,
        ]
      } /* else if (route === '/federation') {
        const data = await $content('federation', { deep: true })
          .only(['path'])
          .where({ extension: '.md', slug: 'index' })
          .sortBy('order')
          .fetch()

        data.map((obj) => {
          // search for the 'index term'
          const place = obj.path.lastIndexOf('/index')

          if (place === -1) {
            return obj
          }

          // Remove term for the path
          obj.path = obj.path.slice(0, place)
          return obj
        })

        const content = data.filter(
          (obj) => [...obj.path.matchAll(/\//g)].length <= 2
        )

        console.log(content)

        path = [
          ...content.map((file) => {
            return {
              url: file.path,
              changefreq: 'monthly',
              priority: 0.7,
              lastmod: new Date(),
            }
          }),
          ...path,
        ]
      } */ else {
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

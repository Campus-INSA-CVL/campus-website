export default {
  data: [
    // {
    //   path: 'culturel',
    //   title: 'Le blog du pôle Culturel',
    //   description: 'Mauris congue orci eget ornare scelerisque.',
    // },
    // {
    //   path: 'solidarites',
    //   title: 'Pôle Solidarités',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // },
  ],
  factory: (data) => {
    const baseUrlArticles = 'https://campus.insa-cvl.fr'

    const { $content } = require('@nuxt/content')

    return data.map(({ path, title, description }) => {
      const createFeedArticles = async function (feed) {
        feed.options = {
          title,
          description,
          link: baseUrlArticles,
        }

        const articles = await $content(`federation/${path}/blog`).fetch()

        articles.forEach((article) => {
          const url = `${baseUrlArticles}/federation/${path}/blog/${article.slug}`

          feed.addItem({
            title: article.title,
            id: url,
            link: url,
            date: new Date(article.updatedAt),
            description: article.description,
            author: article.author,
          })
        })
      }
      return {
        path: `/feed/${path}/rss.xml`,
        type: 'rss2',
        create: createFeedArticles,
      }
    })
  },
}

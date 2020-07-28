<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      nuxt-content(:document="article", :id="color", class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto")

      v-row(justify="end")
        v-col
          v-card(elevation="0")
            v-card-title
              | #[span.text-capitalize.font-weight-light par]&nbsp;{{ article.author.name }}
              v-spacer
              div.subtitle-1
                | #[span.font-weight-light mis à jour le]&nbsp;{{ formatDate(article.updatedAt) }}&nbsp;|
                | #[span.font-weight-light publié le]&nbsp;{{ formatDate(article.createdAt) }}

      v-divider(:class="article.color")

      v-row
        v-col(cols="12", sm="6", align="start", v-if="prev")
          v-card(nuxt, :to="prev.slug", elevation="0")
            v-card-title.text-left {{ prev.title }}
            v-card-text.text-truncate {{ prev.description }}
        v-col(cols="12", sm="6", align="end", :offset-sm=" prev ? 0 : 6", v-if="next")
          v-card(nuxt, :to="next.slug", elevation="0")
            v-card-title
              v-spacer
              | {{ next.title }}
            v-card-text.text-truncate {{ next.description }}
</template>

<script>
export default {
  name: 'BlogSlug',
  async asyncData({ $content, params }) {
    const article = await $content(
      'federation',
      params.federation,
      'blog',
      params.slug
    ).fetch()

    const [prev, next] = await $content('federation', params.federation, 'blog')
      .only(['title', 'slug', 'description'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
    }
  },
  computed: {
    color() {
      return this.$route.params.federation ?? ''
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('fr', options)
    },
  },
  head() {
    return {
      title: this.article.title.toUpperCase() ?? 'chargement...'.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            this.article.description + ' - Campus INSA Centre-Val de Loire',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.article.title.toUpperCase()} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            this.article.description + ' - Campus INSA Centre-Val de Loire',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.article.title.toUpperCase()} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            this.article.description + ' - Campus INSA Centre-Val de Loire',
        },
      ],
    }
  },
}
</script>

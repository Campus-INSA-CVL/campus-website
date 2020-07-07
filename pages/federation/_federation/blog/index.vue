<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      v-toolbar(flat)
        v-row(justify="space-around")
          v-col(cols="6", sm="5", md="4", xl="3")
            v-select(label="Élements par page", :items="itemsPerPageArray", :menu-props="{bottom: true, offsetY: true}", v-model="itemsPerPage", hide-details, outlined, dense,:color="color", :item-color="color")
          v-col(cols="6", sm="5", md="4", xl="3")
            v-text-field(:prepend-inner-icon="svg.mdiMagnify", v-model="searchQuery", type="search", autocomplete="off", placeholder="Chercher des Articles", outlined, dense, hide-details, single-line, :color="color")
      v-row(justify="center")
        v-col(cols="12", sm="6", lg="6", v-for="article in articles", :key="article.slug")
          preview-card(:content="article")
      v-pagination(v-model="page", :length="totalPages", elevation="0", :color="color")
</template>

<script>
import { mdiMagnify } from '@mdi/js'

const itemsPerPage = 12

export default {
  name: 'Blog',
  async asyncData({ $content, params }) {
    const articles = await $content('federation', params.federation, 'blog')
      .only(['title', 'color', 'description', 'slug', 'path'])
      .sortBy('createdAt', 'asc')
      .limit(itemsPerPage)
      .fetch()

    const totalArticles = await $content(
      'federation',
      params.federation,
      'blog'
    )
      .only(['slug'])
      .fetch()
    const total = totalArticles.length
    return {
      total,
      articles,
    }
  },
  data() {
    return {
      svg: {
        mdiMagnify,
      },
      searchQuery: '',
      page: 1,
      itemsPerPage,
      itemsPerPageArray: [12, 24, 36],
    }
  },
  computed: {
    color() {
      return this.$route.params.federation + 'Color'
    },
    totalPages() {
      return Math.ceil(this.total / this.itemsPerPage)
    },
    skip() {
      return this.itemsPerPage * (this.page - 1)
    },
  },
  watch: {
    async itemsPerPage() {
      this.articles = await this.fetchArticles
      this.page = 1
    },
    async page() {
      this.articles = await this.fetchArticles
    },
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        const articles = await this.$content(
          'federation',
          this.$route.params.federation,
          'blog'
        )
          .only(['title', 'color', 'description', 'slug', 'path'])
          .sortBy('createdAt', 'asc')
          .limit(this.itemsPerPage)
          .fetch()
        const totalArticles = await this.$content(
          'federation',
          this.$route.params.federation,
          'blog'
        )
          .only(['slug'])
          .fetch()
        this.total = totalArticles.length
        this.articles = Object.assign({}, articles)
        return
      }

      const articles = await this.$content(
        'federation',
        this.$route.params.federation,
        'blog'
      )
        .sortBy('createdAt', 'asc')
        .search(searchQuery)
        .fetch()
      this.page = 1
      this.articles = articles.slice(0, this.itemsPerPage)
      this.total = this.articles.length
    },
  },
  methods: {
    async fetchArticles() {
      return await this.$content(
        'federation',
        this.$route.params.federation,
        'blog'
      )
        .only(['title', 'color', 'description', 'slug', 'path'])
        .sortBy('createdAt', 'asc')
        .limit(this.itemsPerPage)
        .skip(this.skip)
        .fetch()
    },
  },
  head() {
    return {
      title: 'le blog'.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Blog d'un pôle du Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Blog - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: "Blog d'un pôle du Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Blog - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: "Blog d'un pôle du Campus de l'INSA Centre-Val de Loire",
        },
      ],
    }
  },
}
</script>

<style>
.v-pagination__navigation {
  box-shadow: none !important;
}
.v-pagination__item {
  box-shadow: none !important;
}
</style>

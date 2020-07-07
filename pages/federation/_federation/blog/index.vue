<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      v-row(justify="center")
        v-col(cols="12", sm="6", lg="6", v-for="article in articles", :key="article.slug")
          preview-card(:content="article")
</template>

<script>
export default {
  name: 'Blog',
  async asyncData({ $content, params }) {
    const articles = await $content('federation', params.federation, 'blog')
      .only(['title', 'color', 'description', 'slug', 'path'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>

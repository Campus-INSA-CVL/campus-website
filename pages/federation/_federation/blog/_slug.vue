<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      pre {{ prev }}
      pre {{ next }}
      nuxt-content(:document="article", :id="color")
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
      .only(['title', 'slug'])
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
}
</script>

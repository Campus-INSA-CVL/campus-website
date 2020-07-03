<template lang="pug">
  nuxt-content(:document="page", id="sport")
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { tab } = params
    const page = await $content(`federation/sport/sports/${tab}`).fetch()
    return {
      page,
    }
  },
  head() {
    return {
      title: `sports à ${this.$route.params.tab}`.toUpperCase(),
    }
  },
}
</script>

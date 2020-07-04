<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      nuxt-content(:document="page", :id="color")
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { federation } = params
    const page = await $content(`federation/${federation}/index`).fetch()
    return {
      page,
    }
  },
  layout({ params }) {
    return params.federation ?? 'default'
  },
  computed: {
    color() {
      return this.$route.params.federation ?? ''
    },
  },
  head() {
    return {
      title: this.page.title.toUpperCase() ?? 'chargement...'.toUpperCase(),
    }
  },
}
</script>

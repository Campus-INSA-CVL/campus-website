<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      nuxt-content(:document="content", :id="color")
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { federation, asso } = params
    let content = $content(`federation/${federation}/${asso}/index`)
    content = await content.fetch()
    return {
      content,
    }
  },
  computed: {
    color() {
      return this.$route.params.federation ?? ''
    },
  },
  layout({ params }) {
    return params.federation ?? 'default'
  },
  head() {
    return {
      title: this.content.title ?? 'chargement...'.toUpperCase(),
    }
  },
}
</script>

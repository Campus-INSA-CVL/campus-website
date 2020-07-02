<template lang="pug">
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
}
</script>

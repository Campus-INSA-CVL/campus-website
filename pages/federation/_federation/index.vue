<template lang="pug">
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
}
</script>

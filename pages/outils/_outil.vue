<template lang="pug">
  nuxt-content(:document="page").default
</template>

<script>
import { VRow, VCol } from 'vuetify/lib/components/VGrid'

export default {
  components: {
    VRow,
    VCol,
  },
  async asyncData({ $content, params }) {
    const { outil } = params
    const page = await $content(`outils/${outil}`).fetch()
    return {
      page,
    }
  },
  layout() {
    return 'outils'
  },
  head() {
    return {
      title: this.$route.params.outil.toUpperCase(),
    }
  },
}
</script>

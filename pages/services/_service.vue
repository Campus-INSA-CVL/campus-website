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
    const { service } = params
    const page = await $content(`services/${service}`).fetch()
    return {
      page,
    }
  },
  layout() {
    return 'services'
  },
  head() {
    return {
      title: this.$route.params.service.toUpperCase(),
    }
  },
}
</script>

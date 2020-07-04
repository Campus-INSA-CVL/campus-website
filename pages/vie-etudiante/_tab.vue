<template lang="pug">
  nuxt-content(:document="page").default
</template>

<script>
import { VImg } from 'vuetify/lib/components/VImg'
export default {
  components: {
    VImg,
  },
  async asyncData({ $content, params }) {
    const { tab } = params
    const page = await $content(`vie-etudiante/${tab}`).fetch()
    return {
      page,
    }
  },
  head() {
    return {
      title: `${this.$route.params.tab}`.toUpperCase(),
    }
  },
}
</script>

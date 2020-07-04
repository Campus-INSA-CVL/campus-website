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
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$route.params.service.toUpperCase()} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.$route.params.service.toUpperCase()} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.page.description,
        },
      ],
    }
  },
}
</script>

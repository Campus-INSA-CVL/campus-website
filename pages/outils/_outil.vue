<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      nuxt-content(:document="page")
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
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$route.params.outil.toUpperCase()} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.$route.params.outil.toUpperCase()} - Campus INSA Centre-Val de Loire`,
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

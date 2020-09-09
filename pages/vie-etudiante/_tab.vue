<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      nuxt-content(:document="page", class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto")
</template>

<script>
export default {
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
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "La vie étudiante sur le Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$route.params.tab.toUpperCase()} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "La vie étudiante sur le Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.$route.params.tab.toUpperCase()} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "La vie étudiante sur le Campus de l'INSA Centre-Val de Loire",
        },
      ],
    }
  },
}
</script>

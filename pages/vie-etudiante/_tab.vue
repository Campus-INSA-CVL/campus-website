<template lang="pug">
nuxt-content.prose.prose-sm.mx-auto(
  :document='page',
  class='sm:prose lg:prose-lg xl:prose-xl'
)
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
            this.page.description ??
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
            this.page.description ??
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
            this.page.description ??
            "La vie étudiante sur le Campus de l'INSA Centre-Val de Loire",
        },
      ],
    }
  },
}
</script>

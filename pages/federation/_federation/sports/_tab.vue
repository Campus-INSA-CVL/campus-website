<template lang="pug">
  nuxt-content(:document="page", id="sport")
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { tab } = params
    const page = await $content(`federation/sport/sports/${tab}`).fetch()
    return {
      page,
    }
  },
  head() {
    return {
      title: `sports à ${this.$route.params.tab}`.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Retrouver l'ensemble des sports du Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `SPORTS À ${this.$route.params.tab.toUpperCase()} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Retrouver l'ensemble des sports du Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `SPORTS À ${this.$route.params.tab.toUpperCase()} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Retrouver l'ensemble des sports du Campus de l'INSA Centre-Val de Loire",
        },
      ],
    }
  },
}
</script>

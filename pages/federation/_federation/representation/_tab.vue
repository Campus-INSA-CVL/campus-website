<template lang="pug">
  nuxt-content(:document="page")
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { tab } = params
    const page = await $content(`federation/elus/representation/${tab}`).fetch()
    return {
      page,
    }
  },
  head() {
    return {
      title: this.page.title.toUpperCase() ?? 'chargement...'.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Comprendre les différents conseils de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.page.title.toUpperCase()} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Comprendre les différents conseils de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.page.title.toUpperCase()} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Comprendre les différents conseils de l'INSA Centre-Val de Loire",
        },
      ],
    }
  },
}
</script>

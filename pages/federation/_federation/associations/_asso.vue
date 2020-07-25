<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      nuxt-content(:document="content", :id="color", class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto")
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { federation, asso } = params
    let content = $content(`federation/${federation}/${asso}/index`)
    content = await content.fetch()
    return {
      content,
    }
  },
  computed: {
    color() {
      return this.$route.params.federation ?? ''
    },
  },
  layout() {
    return 'default'
  },
  head() {
    return {
      title: this.content.title ?? 'chargement...'.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Découvrir:  ${this.content.title}, association sur le Campus de l'INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.content.title} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Découvrir:  ${this.content.title}, association sur le Campus de l'INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.content.title} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `Découvrir:  ${this.content.title}, association sur le Campus de l'INSA Centre-Val de Loire`,
        },
      ],
    }
  },
}
</script>

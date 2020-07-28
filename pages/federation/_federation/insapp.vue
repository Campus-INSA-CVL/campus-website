<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      nuxt-content(:document="page", :id="color", class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto")
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { federation } = params
    const page = await $content(`federation/${federation}/insapp`).fetch()
    return {
      page,
    }
  },
  layout() {
    return 'default'
  },
  computed: {
    color() {
      return this.$route.params.federation ?? ''
    },
  },
  head() {
    return {
      title: this.page.title.toUpperCase() ?? 'chargement...'.toUpperCase(),
      // meta: [
      //   {
      //     hid: 'description',
      //     name: 'description',
      //     content:
      //       "Présentation du pôle du Campus de l'INSA Centre-Val de Loire",
      //   },
      //   {
      //     hid: 'og:title',
      //     property: 'og:title',
      //     content: `${this.page.title.toUpperCase()} - Campus INSA Centre-Val de Loire`,
      //   },
      //   {
      //     hid: 'og:description',
      //     property: 'og:description',
      //     content:
      //       "Présentation du pôle du Campus de l'INSA Centre-Val de Loire",
      //   },
      //   {
      //     hid: 'twitter:title',
      //     name: 'twitter:title',
      //     content: `${this.page.title.toUpperCase()} - Campus INSA Centre-Val de Loire`,
      //   },
      //   {
      //     hid: 'twitter:description',
      //     name: 'twitter:description',
      //     content:
      //       "Présentation du pôle du Campus de l'INSA Centre-Val de Loire",
      //   },
      // ],
    }
  },
}
</script>

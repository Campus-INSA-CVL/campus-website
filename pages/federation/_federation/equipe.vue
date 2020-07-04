<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      nuxt-content(:document="content", :id="color")
</template>

<script>
import fetchContent from '@/mixins/fetch-content'

export default {
  mixins: [
    fetchContent({
      folderName: 'federation',
      paramsNames: ['federation'],
      fileName: 'equipe',
    }),
  ],
  layout({ params }) {
    return params.federation ?? 'default'
  },
  computed: {
    color() {
      return this.$route.params.federation ?? ''
    },
  },
  head() {
    return {
      title: this.content.title.toUpperCase() ?? 'chargement...'.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Décrouvrir l'équipe d'un pôle du Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.content.title.toUpperCase()} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Décrouvrir l'équipe d'un pôle du Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.content.title.toUpperCase()} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Décrouvrir l'équipe d'un pôle du Campus de l'INSA Centre-Val de Loire",
        },
      ],
    }
  },
}
</script>

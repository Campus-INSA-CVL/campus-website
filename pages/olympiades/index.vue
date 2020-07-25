<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      nuxt-content(:document="content", class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto")
</template>

<script>
import fetchContent from '@/mixins/fetch-content'

export default {
  mixins: [
    fetchContent({
      folderName: 'olympiades',
      fileName: 'index',
    }),
  ],
  head() {
    return {
      title: 'olympiades'.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Présentation des olympiades et résultats, jeux mensuels proposés par le Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `OLYMPIADES - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Présentation des olympiades et résultats, jeux mensuels proposés par le Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `OLYMPIADES - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Présentation des olympiades et résultats, jeux mensuels proposés par le Campus de l'INSA Centre-Val de Loire",
        },
      ],
    }
  },
}
</script>

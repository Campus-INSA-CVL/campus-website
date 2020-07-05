<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      v-row(justify="center")
        v-col(cols="12", sm="6", lg="6", v-for="association in content.associations", :key="association.path")
          preview-card(:content="association")
</template>

<script>
import fetchContent from '@/mixins/fetch-content'

export default {
  mixins: [
    fetchContent({
      folderName: 'federation',
      paramsNames: ['federation'],
      fileName: 'associations',
    }),
  ],
  layout() {
    return 'default'
  },
  head() {
    return {
      title: 'associations'.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Découvrir les associations d'un pôle du Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `ASSOCIATIONS - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Découvrir les associations d'un pôle du Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `ASSOCIATIONS - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Découvrir les associations d'un pôle du Campus de l'INSA Centre-Val de Loire",
        },
      ],
    }
  },
}
</script>

<style scoped>
a {
  transition: box-shadow 0.2s ease-in-out;
}
</style>

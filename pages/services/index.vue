<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      v-row(justify="center")
        v-col(cols="12", sm="6", lg="6", v-for="page in content", :key="page.title")
          preview-card(:content="page")
</template>

<script>
import fetchContent from '@/mixins/fetch-content'

export default {
  mixins: [
    fetchContent({
      folderName: 'services',
      sortBy: { key: 'title', direction: 'asc' },
      only: ['title', 'description', 'path', 'color'],
    }),
  ],
  head() {
    return {
      title: 'services'.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Les différents services proposés par le Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `SERVICES - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Les différents services proposés par le Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `SERVICES - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Les différents services proposés par le Campus de l'INSA Centre-Val de Loire",
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

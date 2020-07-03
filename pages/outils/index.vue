<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", lg="8", offset-lg="2")
      v-row
        v-col(cols="12", sm="6", lg="6", v-for="page in content", :key="page.title")
          preview-card(:content="page")
</template>

<script>
import fetchContent from '@/mixins/fetch-content'

export default {
  mixins: [
    fetchContent({
      folderName: 'outils',
      sortBy: { key: 'title', direction: 'asc' },
      only: ['title', 'description', 'path', 'color'],
    }),
  ],
  head() {
    return {
      title: 'outils'.toUpperCase(),
    }
  },
}
</script>

<style scoped>
a {
  transition: box-shadow 0.2s ease-in-out;
}
</style>

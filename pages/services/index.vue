<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", lg="6", offset-lg="3")
      v-row
        v-col(cols="12", sm="6", lg="6", v-for="page in pages", :key="page.title")
          preview-card(:content="page")
</template>

<script>
import fetchContent from '@/mixins/fetch-content'

export default {
  mixins: [
    fetchContent({
      folderName: 'services',
      sortBy: { key: 'title', direction: 'asc' },
      only: ['title', 'description', 'path'],
    }),
  ],
}
</script>

<style scoped>
a {
  transition: box-shadow 0.2s ease-in-out;
}
</style>

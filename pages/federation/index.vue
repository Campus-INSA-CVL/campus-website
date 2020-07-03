<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", lg="8", offset-lg="2")
      v-row
        v-col(cols="12", sm="6", lg="6", v-for="federation in content.federations", :key="federation.path")
          preview-card(:content="federation")
</template>

<script>
import fetchContent from '@/mixins/fetch-content'

export default {
  mixins: [
    fetchContent({
      folderName: 'federation',
      fileName: 'index',
    }),
  ],
  head() {
    return {
      title: 'fédération'.toUpperCase(),
    }
  },
}
</script>

<style scoped>
a {
  transition: box-shadow 0.2s ease-in-out;
}
</style>

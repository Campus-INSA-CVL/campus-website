<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", lg="6", offset-lg="3")
      v-row
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
  layout({ params }) {
    return params.federation ?? 'default'
  },
}
</script>

<style scoped>
a {
  transition: box-shadow 0.2s ease-in-out;
}
</style>

<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      nuxt-content(:document="content")
</template>

<script>
import { VRow, VCol } from 'vuetify/lib/components/VGrid'
import fetchContent from '@/mixins/fetch-content'

export default {
  components: {
    VRow,
    VCol,
  },
  mixins: [
    fetchContent({
      folderName: 'olympiades',
      fileName: 'index',
    }),
  ],
  head() {
    return {
      title: 'olympiades'.toUpperCase(),
    }
  },
}
</script>

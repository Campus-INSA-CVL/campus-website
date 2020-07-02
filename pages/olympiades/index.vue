<template lang="pug">
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
}
</script>

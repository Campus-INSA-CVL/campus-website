<template lang="pug">
  nuxt-content(:document="content")
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
}
</script>

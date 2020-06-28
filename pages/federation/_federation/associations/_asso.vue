<template lang="pug">
  nuxt-content(:document="content")
</template>

<script>
import fetchContent from '@/mixins/fetch-content'

export default {
  mixins: [
    fetchContent({
      folderName: 'federation',
      paramsNames: ['federation', 'asso'],
      fileName: 'index',
    }),
  ],
  layout({ params }) {
    return params.federation ?? 'default'
  },
}
</script>

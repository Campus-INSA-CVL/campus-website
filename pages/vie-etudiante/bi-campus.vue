<template lang="pug">
  nuxt-content(:document="page")
</template>

<script>
import fetchContent from '@/mixins/fetch-content'

export default {
  mixins: [
    fetchContent({
      folderName: 'student-life/bi-campus',
    }),
  ],
}
</script>

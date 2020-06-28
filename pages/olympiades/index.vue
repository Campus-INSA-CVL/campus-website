<template lang="pug">
  nuxt-content(:document="content")
</template>

<script>
import fetchContent from '@/mixins/fetch-content'
import Carousel from '@/components/Carousel'

export default {
  components: {
    Carousel,
  },
  mixins: [
    fetchContent({
      folderName: 'olympiades/index',
    }),
  ],
}
</script>

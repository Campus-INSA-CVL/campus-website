<template lang="pug">
  section
    v-parallax(:src="require('@/assets/index/banner.jpg')")
      v-row(align="center", justify="center")
        v-col(cols="12").text-center
          h1 {{ content.title }}
          p  {{ content.description}}

</template>

<script>
import fetchContent from '@/mixins/fetch-content'

export default {
  mixins: [
    fetchContent({
      folderName: 'index',
      fileName: 'index',
    }),
  ],
}
</script>

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
  name: 'Index',
  mixins: [
    fetchContent({
      folderName: 'index',
      fileName: 'index',
    }),
  ],
  head() {
    return {
      title: 'acceuil'.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Website du campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Campus INSA Centre-Val de Loire',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: "Website du campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Campus INSA Centre-Val de Loire',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: "Website du campus de l'INSA Centre-Val de Loire",
        },
      ],
    }
  },
}
</script>

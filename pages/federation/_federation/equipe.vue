<template lang="pug">
  nuxt-content(:document="content", :id="color")
</template>

<script>
import fetchContent from '@/mixins/fetch-content'

export default {
  mixins: [
    fetchContent({
      folderName: 'federation',
      paramsNames: ['federation'],
      fileName: 'equipe',
    }),
  ],
  layout({ params }) {
    return params.federation ?? 'default'
  },
  computed: {
    color() {
      return this.$route.params.federation ?? ''
    },
  },
  head() {
    return {
      title: this.content.title.toUpperCase() ?? 'chargement...'.toUpperCase(),
    }
  },
}
</script>

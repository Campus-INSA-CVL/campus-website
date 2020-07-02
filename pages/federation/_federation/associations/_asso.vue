<template lang="pug">
  nuxt-content(:document="content", :id="color")
</template>

<script>
// import fetchContent from '@/mixins/fetch-content'

export default {
  async asyncData({ $content, params }) {
    const { federation, asso } = params
    // let content = $content('federation', federation, asso, 'index')
    let content = $content(`federation/${federation}/${asso}/index`)
    content = await content.fetch()
    return {
      content,
    }
  },
  // mixins: [
  //   fetchContent({
  //     folderName: 'federation/culturel/insarpege',
  //     paramsNames: [],
  //     fileName: 'index',
  //   }),
  // ],
  computed: {
    color() {
      return this.$route.params.federation ?? ''
    },
  },
  created() {
    console.log(' this.$route:', this.$route)
  },
  layout({ params }) {
    return params.federation ?? 'default'
  },
}
</script>

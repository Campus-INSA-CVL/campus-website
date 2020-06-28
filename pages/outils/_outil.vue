<template lang="pug">
  nuxt-content(:document="page")
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { outil } = params
    const page = await $content(`outils/${outil}`).fetch()
    return {
      page,
    }
  },
}
</script>

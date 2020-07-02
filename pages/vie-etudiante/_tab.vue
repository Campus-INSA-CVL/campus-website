<template lang="pug">
  nuxt-content(:document="page").default
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { tab } = params
    const page = await $content(`vie-etudiante/${tab}`).fetch()
    return {
      page,
    }
  },
}
</script>

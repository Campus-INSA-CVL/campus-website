<template lang="pug">
  nuxt-content(:document="page")
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { service } = params
    const page = await $content(`services/${service}`).fetch()
    return {
      page,
    }
  },
}
</script>

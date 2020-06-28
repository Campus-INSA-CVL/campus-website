<template lang="pug">
  nuxt-content(:document="page")
</template>

<script>
export default {
  layout({ params }) {
    return params.federation ?? 'default'
  },
  async asyncData({ $content, params }) {
    const { federation } = params
    const page = await $content(`federation/${federation}/index`).fetch()
    return {
      page,
    }
  },
}
</script>

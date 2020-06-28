<template lang="pug">
  nuxt-content(:document="page")
</template>

<script>
import Carousel from '@/components/Carousel'

export default {
  components: {
    Carousel,
  },
  async asyncData({ $content }) {
    const page = await $content('olympiades/index').fetch()

    return {
      page,
    }
  },
}
</script>

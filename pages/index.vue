<template lang="pug">
  section
    v-parallax(:src="require('@/assets/index/banner.jpg')")
      v-row(align="center", justify="center")
        v-col(cols="12").text-center
          h1 {{ page.title }}
          p  {{ page.description}}

</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('index/index').fetch()

    return {
      page,
    }
  },
}
</script>

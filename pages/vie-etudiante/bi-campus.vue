<template lang="pug">
  nuxt-content(:document="page")
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('student-life/bi-campus').fetch()

    return {
      page,
    }
  },
}
</script>

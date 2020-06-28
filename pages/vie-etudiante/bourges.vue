<template lang="pug">
  nuxt-content(:document="page")
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('student-life/bourges').fetch()

    return {
      page,
    }
  },
}
</script>

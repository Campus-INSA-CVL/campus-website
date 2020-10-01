<template lang="pug">
v-row(tag='section', no-gutters)
  v-col(cols='12', md='10', lg='8', offset-md='1', offset-lg='2')
    v-row(justify='center')
      v-col(
        cols='12',
        sm='6',
        lg='6',
        v-for='representation in content',
        :key='representation.path'
      )
        preview-card(:content='representation')
</template>

<script>
export default {
  async asyncData({ $content }) {
    const content = await $content('representation')
      .only(['title', 'description', 'path', 'color', 'order'])
      .sortBy('order')
      .fetch()

    return {
      content,
    }
  },
  head() {
    return {
      title: 'représentation'.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Retrouver l'ensemble des associations qui représentent les élèves ingéneurs de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `REPRÉSENTATION - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Retrouver l'ensemble des associations qui représentent les élèves ingéneurs de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `REPRÉSENTATION - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Retrouver l'ensemble des associations qui représentent les élèves ingéneurs de l'INSA Centre-Val de Loire",
        },
      ],
    }
  },
}
</script>

<style scoped>
a {
  transition: box-shadow 0.2s ease-in-out;
}
</style>

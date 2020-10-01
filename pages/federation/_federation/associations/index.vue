<template lang="pug">
v-row(tag='section', no-gutters)
  v-col(cols='12', md='10', lg='8', offset-md='1', offset-lg='2')
    v-row(justify='center')
      v-col(
        cols='12',
        sm='6',
        lg='6',
        v-for='association in associations',
        :key='association.path'
      )
        preview-card(:content='association')
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { federation } = params

    const content = await $content('federation', federation, 'associations', {
      deep: true,
    })
      .only(['title', 'path', 'description', 'color', 'order'])
      .where({ extension: '.md', slug: 'index' })
      .sortBy('order')
      .fetch()

    content.map((obj) => {
      // search for the 'index term'
      const place = obj.path.lastIndexOf('/index')

      if (place === -1) {
        return obj
      }

      // Remove term for the path
      obj.path = obj.path.slice(0, place)
      return obj
    })

    return {
      content,
    }
  },
  layout() {
    return 'default'
  },
  head() {
    return {
      title: 'associations'.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Découvrir les associations d'un pôle du Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `ASSOCIATIONS - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Découvrir les associations d'un pôle du Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `ASSOCIATIONS - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Découvrir les associations d'un pôle du Campus de l'INSA Centre-Val de Loire",
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

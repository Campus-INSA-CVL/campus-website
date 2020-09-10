<template lang="pug">
  section
    v-menu(offset-y)
      template(v-slot:activator="{ on, attrs }")
        v-text-field(v-bind="attrs", v-on="on", v-model="query", outlined)
      v-card
        ul
          li(v-for="obj in searchContent")
            nuxt-link(:to="obj.path") {{ obj.title }}
    pre {{ searchContent }}
</template>

<script>
export default {
  data() {
    return {
      query: '',
      searchContent: [],
    }
  },
  watch: {
    async query(query) {
      this.searchContent = await this.$content('federation', { deep: true })
        .only(['title'])
        .where({ extension: '.md' })
        .limit(12)
        .search(query)
        .fetch()

      this.searchContent.map((obj) => {
        // search for the 'index term'
        const place = obj.path.lastIndexOf('/index')
        if (place === -1) {
          return obj
        }
        // Remove term for the path
        obj.path = obj.path.slice(0, place)
        return obj
      })
    },
  },
}
</script>

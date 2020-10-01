<template lang="pug">
v-text-field(
  v-model='query',
  :prepend-inner-icon='svg.mdiMagnify',
  type='search',
  v-bind='$attrs',
  v-on='$attrs.on'
)
</template>

<script>
import { mdiMagnify } from '@mdi/js'

export default {
  name: 'Search',
  props: {
    limit: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      svg: { mdiMagnify },
    }
  },
  computed: {
    query: {
      get() {
        return this.$store.state.search.query
      },
      set(value) {
        this.$store.commit('search/updateQuery', value)
      },
    },
  },
  watch: {
    async query(query) {
      if (!query) {
        return
      }

      const searchContent = await this.$content({ deep: true })
        .only(['title', 'description'])
        .where({ extension: '.md' })
        .limit(this.limit)
        .search(query)
        .fetch()

      searchContent.map((obj) => {
        // search for the 'index term'
        const place = obj.path.lastIndexOf('/index')

        if (place === -1) {
          return obj
        }

        // Remove term for the path
        obj.path = obj.path.slice(0, place)
        return obj
      })

      this.$emit('search', searchContent)
    },
  },
}
</script>

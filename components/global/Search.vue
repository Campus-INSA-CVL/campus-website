<template lang="pug">
  v-text-field(v-model="query", :prepend-inner-icon="svg.mdiMagnify", type="search", v-bind="$attrs", v-on="$attrs.on")
</template>

<script>
import { mdiMagnify } from '@mdi/js'

export default {
  name: 'Search',
  props: {
    clearInput: {
      type: Boolean,
      default: false,
    },
    clear: {
      type: Function,
      default: undefined,
    },
  },
  data() {
    return {
      query: '',
      svg: { mdiMagnify },
    }
  },
  watch: {
    clearInput(value) {
      if (value) {
        this.query = ''
      }
    },
    async query(query) {
      if (!query) {
        return
      }

      const searchContent = await this.$content({ deep: true })
        .only(['title', 'description'])
        .where({ extension: '.md' })
        .limit(4)
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

<template lang="pug">
  v-menu(offset-y)
    template(v-slot:activator="{ on, attrs }")
      search(:on="on", v-bind="attrs", flat, solo, dense, clearable, label="Chercher", hide-details, rounded, @search="searchData")
    search-list(v-model="searchResults")
</template>

<script>
export default {
  name: 'SearchMenu',
  data() {
    return {
      searchResults: [],
    }
  },
  computed: {
    query() {
      return this.$store.state.search.query
    },
  },
  watch: {
    searchResults(value) {
      if (value.length === 0 && this.query) {
        this.$store.commit('search/updateQuery', '')
      }
    },
  },
  methods: {
    searchData(data) {
      this.searchResults = data
    },
  },
}
</script>

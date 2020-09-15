<template lang="pug">
  v-menu(offset-y)
    template(v-slot:activator="{ on, attrs }")
      search(:on="on", v-bind="attrs", flat, solo, dense, clearable, label="Chercher", hide-details, rounded, @search="searchData")
    v-list(dense, two-line, width="400")
      v-list-item-group(color="primary")
        v-subheader Résultats
        v-list-item(v-for="(item, index) in searchResults", :key="index", nuxt, :to="item.path", @click="clearSearchData()")
          v-list-item-content
            v-list-item-title {{ item.title }}
            v-list-item-subtitle {{ item.description }}
</template>

<script>
export default {
  name: 'SearchMenu',
  data() {
    return {
      searchResults: [],
    }
  },
  methods: {
    clearSearchData() {
      this.searchResults = []
    },
    searchData(data) {
      this.searchResults = data
    },
  },
}
</script>

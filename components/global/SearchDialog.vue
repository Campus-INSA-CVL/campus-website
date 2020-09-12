<template lang="pug">
  v-dialog(v-model="searchDialog", fullscreen)
    v-card(height="100%")
      v-card-title
        search(@search="searchData", :clearInput="stateDialog")
      v-card-text.mt-4
        v-list(dense, two-line, v-if="searchResults.length !== 0", :elevation="0")
          v-list-item-group(color="primary")
            v-subheader Résultats
            v-list-item(v-for="(item, index) in searchResults", :key="index", nuxt, :to="item.path", @click="closeSearchDialog()")
              v-list-item-content
                v-list-item-title {{ item.title }}
                v-list-item-subtitle {{ item.description }}
      v-row(align="end", style="bottom: 0; left: 0; right: 0; position: absolute;", no-gutters)
        v-col
          v-card-actions
            v-spacer
            v-btn(@click="closeSearchDialog()", depressed) Fermer
</template>

<script>
export default {
  name: 'SearchDialog',
  data() {
    return {
      searchResults: [],
    }
  },
  computed: {
    stateDialog() {
      return this.$store.state.shell.searchDialog
    },
    searchDialog: {
      get() {
        return this.stateDialog
      },
      set() {
        this.$store.commit('shell/toggleSearchDialog')
      },
    },
  },
  methods: {
    closeSearchDialog() {
      this.searchResults = []
      this.$store.commit('shell/toggleSearchDialog')
    },
    searchData(data) {
      this.searchResults = data
    },
  },
}
</script>

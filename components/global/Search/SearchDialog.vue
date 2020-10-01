<template lang="pug">
v-dialog(v-model='searchDialog', fullscreen)
  v-card(height='100%')
    v-card-title
      search(
        @search='searchData',
        filled,
        rounded,
        clearable,
        label='Chercher',
        hide-details,
        autofocus,
        :limit='6'
      )
    v-card-text.mt-4
      search-list(v-model='searchResults')
    v-row(
      align='end',
      style='bottom: 0; left: 0; right: 0; position: absolute;',
      no-gutters
    )
      v-col
        v-card-actions
          v-spacer
          v-btn(@click='closeSearchDialog()', depressed) Fermer
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
  watch: {
    '$route.path'() {
      if (this.stateDialog) {
        this.closeSearchDialog()
      }
    },
  },
  methods: {
    closeSearchDialog() {
      this.$store.commit('shell/toggleSearchDialog')
      this.$store.commit('search/updateQuery', '')
      this.searchResults = []
    },
    searchData(data) {
      this.searchResults = data
    },
  },
}
</script>

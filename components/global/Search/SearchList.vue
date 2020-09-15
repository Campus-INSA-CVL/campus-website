<template lang="pug">
v-list(dense, two-line, max-width='400')
  v-list-item-group(color='primary')
    v-subheader {{ message }}
    v-list-item(
      v-for='(item, index) in value',
      :key='index',
      nuxt,
      :to='item.path',
      @click='clearSearchData()',
      exact
    )
      v-list-item-content
        v-list-item-title.text-uppercase {{ item.title }}
        v-list-item-subtitle {{ item.description }}
</template>

<script>
export default {
  name: 'SearchList',
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    message() {
      return this.value.length
        ? 'Résultats'
        : 'Aucun résultat pour votre requête'
    },
  },
  methods: {
    clearSearchData() {
      this.$emit('input', [])
    },
  },
}
</script>

<template lang="pug">
  v-expansion-panels(accordion, flat, focusable, hover)
    v-expansion-panel(v-for="(item, i) in expansion", :key="i", v-if="item.title")
      v-expansion-panel-header.text-uppercase.font-weight-bold {{ item.title }}
        template(v-slot:actions)
          v-icon(:color="color") $expand
      v-expansion-panel-content.text-justify {{ item.content }}
</template>

<script>
export default {
  name: 'ExpansionPanels',
  inheritAttrs: false,
  props: {
    expansion: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    color() {
      return this.$attrs.color ?? 'primary'
    },
  },
}
</script>

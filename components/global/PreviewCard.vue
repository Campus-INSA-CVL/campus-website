<template lang="pug">
  intersect-card(:path="path", toHover)
    v-card-title(:class="`${content.color}--text`").font-weight-bold.text-uppercase {{ content.title }}
    v-card-text.text-justify {{ content.description }}
    v-card-actions
      v-spacer
      v-btn(depressed, :color="`${content.color}`", dark) voir plus
</template>

<script>
export default {
  name: 'PreviewCard',
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    path() {
      return this.content.path
    },
  },
}
</script>

<template lang="pug">
  v-hover(v-slot:default="{ hover }")
    v-card(:to="content.path", :elevation="hover ? 4 : 0")
      v-card-title(:class="`${content.color}--text`").font-weight-bold.text-uppercase {{ content.title }}
      v-card-text {{ content.description }}
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
}
</script>

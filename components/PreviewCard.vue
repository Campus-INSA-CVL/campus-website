<template lang="pug">
  v-hover(v-slot:default="{ hover }")
    v-card(:to="content.path", :elevation="hover ? 4 : 0")
      v-card-title {{ content.title }}
      v-card-text {{ content.description }}
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

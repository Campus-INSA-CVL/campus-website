<template lang="pug">
  v-hover(v-slot:default="{ hover }")
    v-card(:to="path", nuxt, :elevation="hover ? 4 : 0", v-intersect.once="{ handler: onIntersect, options: { threshold: 0.25 } }", :class="intersectingClass")
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
  data() {
    return {
      isIntersecting: false,
    }
  },
  computed: {
    path() {
      return this.content.path
    },
    intersectingClass() {
      return this.isIntersecting ? 'moveup' : 'invisible'
    },
  },
  methods: {
    onIntersect(entries, observer, isIntersecting) {
      if (isIntersecting) {
        this.isIntersecting = entries[0].isIntersecting
      }
    },
  },
}
</script>

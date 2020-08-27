<template lang="pug">
  v-hover(v-slot:default="{ hover }")
    v-card(:to="path", nuxt, :elevation="hover && toHover ? 4 : 0", v-intersect.once="{ handler: onIntersect, options: { threshold: 0.25 } }", :class="intersectingClass")
      slot
</template>

<script>
export default {
  name: 'IntersectCard',
  props: {
    path: {
      type: String,
      default: '',
    },
    toHover: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isIntersecting: false,
    }
  },
  computed: {
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

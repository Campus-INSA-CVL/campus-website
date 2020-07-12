<template lang="pug">
  v-hover(v-slot:default="{ hover }")
    v-card(:to="path", nuxt, :elevation="hover ? 4 : 0", v-intersect.once="{ handler: onIntersect, options: { threshold: 0.4 } }")
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
  computed: {
    path() {
      return this.content.path
    },
  },
  mounted() {
    const cards = document.getElementsByClassName('v-card')
    for (let index = 0; index < cards.length; index++) {
      const card = cards[index]
      card.classList.add('invisible')
    }
  },
  methods: {
    onIntersect(entries, observer, isIntersecting) {
      if (isIntersecting) {
        entries[0].target.classList.add('moveup')
        entries[0].target.classList.remove('invisible')
      } else {
        entries[0].target.classList.remove('moveup')
      }
    },
  },
}
</script>

<template lang="pug">
  v-carousel(cycle, continous, show-arrows-on-hover, interval="4000", height="100%")
    v-carousel-item(v-for="(name, index) in names", :key="index")
      v-img(:src="requireLink(name)")
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    names: {
      type: Array,
      default: () => [],
      required: true,
    },
    folderName: {
      type: String,
      required: true,
    },
  },
  methods: {
    requireLink(link) {
      return require(`@/assets/${this.folderName}/${link}`)
    },
  },
}
</script>

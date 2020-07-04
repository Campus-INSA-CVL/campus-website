<template lang="pug">
  v-app(v-touch="{right: () => openDrawer()}")
    slot
</template>

<script>
export default {
  methods: {
    openDrawer() {
      this.$store.commit('shell/toggleDrawer', true)
    },
  },
}
</script>

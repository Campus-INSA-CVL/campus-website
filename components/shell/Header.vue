<template lang="pug">
  v-app-bar(app, elevate-on-scroll)
    v-app-bar-nav-icon(@click.stop="toggleDrawer()")
    template(v-slot:extension, v-if="type === 'association'")
      v-btn(icon, nuxt, to='/federation', exact, :small="isSmAndDown").text--secondary
        v-icon mdi-web
      v-btn(:to="fullPath", depressed, nuxt, :color="`${color}--text`").pole-btn
        v-toolbar-title.font-weight-bold.text-capitalize {{ title }}
      v-spacer
      v-btn(outlined, :color="`${color}`", :to="`${fullPath}/equipe`", nuxt, :small="isSmAndDown").mr-4
        v-icon(:left="!isSmAndDown") mdi-account-group
        span(v-if="!isSmAndDown") l'équipe
      v-btn(depressed, :color="`${color}`", :to="`${fullPath}/associations`", nuxt, dark, :small="isSmAndDown")
        v-icon(:left="!isSmAndDown") mdi-file-tree
        span(v-if="!isSmAndDown") les associations
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: () => {},
    },
    path: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    fullPath() {
      return `/${this.path.main}/${this.path.secondary}`
    },
    teamPath() {
      return this.$route.params
    },
    associationsPath() {
      return `/`
    },
    isSmAndDown() {
      return this.$vuetify.breakpoint.smAndDown
    },
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('shell/toggleDrawer')
    },
  },
}
</script>

<style>
.pole-btn::before {
  background-color: transparent;
}
</style>

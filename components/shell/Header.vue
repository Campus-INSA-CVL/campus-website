<template lang="pug">
  v-app-bar(app, elevate-on-scroll)
    v-app-bar-nav-icon(@click.stop="toggleDrawer()")
    v-btn(to="/", nuxt, exact, depressed).header-btn
      v-toolbar-title.primary--text #&nbsp;#[span.font-weight-black.text-lowercase campus]&nbsp;#[span.text-uppercase.font-weight-black insa]&nbsp;#[span.text-capitalize centre]-#[span.text-capitalize val]&nbsp;#[span.text-lowercase de]&nbsp;#[span.text-capitalize loire]
    template(v-slot:extension, v-if="type === 'association'")
      v-btn(icon, nuxt, to='/federation', exact).text--secondary
        v-icon mdi-web
      v-btn(:to="fullPath", depressed, nuxt, :color="`${color}--text`").header-btn
        v-toolbar-title.font-weight-bold.text-capitalize {{ title }}
      v-spacer
      v-btn(outlined, :color="`${color}`", :to="`${fullPath}/equipe`", nuxt, v-if="!isSmAndDown").mr-4
        v-icon(:left="!isSmAndDown") mdi-account-group
        span(v-if="!isSmAndDown") l'équipe
      v-btn(depressed, :color="`${color}`", :to="`${fullPath}/associations`", nuxt, dark, v-if="!isSmAndDown")
        v-icon(left) mdi-file-tree
        span les associations
      v-menu(offset-y, v-if="isSmAndDown")
        template(v-slot:activator="{ on, attrs }")
          v-btn(depressed, :color="`${color}`", dark, v-bind="attrs", v-on="on")
            v-icon {{ JSON.parse(attrs['aria-expanded']) ? 'mdi-menu-up' : 'mdi-menu-down'}}
        v-list(:color="`${color}--text`", flat).text-uppercase
          v-list-item(nuxt, :to="`${fullPath}/equipe`")
            v-list-item-title l'équipe
          v-list-item(nuxt, :to="`${fullPath}/associations`")
            v-list-item-title les associations
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
.header-btn::before {
  background-color: transparent;
}
</style>

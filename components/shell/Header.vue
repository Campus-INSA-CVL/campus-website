<template lang="pug">
  v-app-bar(app, elevate-on-scroll)
    v-app-bar-nav-icon(@click.stop="toggleDrawer()")
    v-btn(to="/", nuxt, exact, depressed).header-btn
      v-toolbar-title #[span.text-lowercase.font-weight-regular.primary--text  #campus] #[span.text-uppercase.font-weight-regular.primary--text insa]#[span.text-uppercase.font-weight-black.primary--text cvl]
    template(v-slot:extension, v-if="type === 'association'")
      v-btn(icon, nuxt, to='/federation', exact).text--secondary
        v-icon {{ svg.mdiWeb }}
      v-btn(:to="fullPath", depressed, nuxt, :color="`${color}--text`", exact).header-btn
        v-toolbar-title.font-weight-bold.text-capitalize {{ title }}
      v-spacer

      v-btn(:outlined="btn.style.outlined", :depressed="btn.style.depressed", :color="`${color}`", dark, :to="`${fullPath}/${btn.path}`", exact, nuxt, :class="index !== btns.length - 1 ? 'mr-4': ''", v-for="(btn, index) in btns", :key="index", , v-if="!isSmAndDown")
        v-icon(:left="!isSmAndDown") {{ svg[btn.icon] }}
        span(v-if="!isSmAndDown") {{ btn.name }}

      v-menu(offset-y, v-if="isSmAndDown")
        template(v-slot:activator="{ on, attrs }")
          v-btn(depressed, :color="`${color}`", dark, v-bind="attrs", v-on="on")
            v-icon {{ JSON.parse(attrs['aria-expanded']) ? svg.mdiMenuUp : svg.mdiMenuDown }}
        v-list(:color="`${color}--text`", flat).text-uppercase
          v-list-item(nuxt, :to="`${fullPath}/${btn.path}`", v-for="(btn, index) in btns", :key="index")
            v-list-item-title {{  btn.name }}
    template(v-slot:extension, v-else-if="type === 'page'")
      v-btn(icon, nuxt, :to="`/${path.main}`", exact).text--secondary
        v-icon {{ svg.mdiWeb }}
      v-btn(:to="fullPath", depressed, nuxt, :color="`${color}--text`", exact).header-btn
        v-toolbar-title.font-weight-bold.text-capitalize {{ title }}
</template>

<script>
import {
  mdiAccountGroup,
  mdiFileTree,
  mdiMenuUp,
  mdiMenuDown,
  mdiWeb,
  mdiHandball,
  mdiEye,
} from '@mdi/js'

export default {
  name: 'Header',
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
    btns: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      svg: {
        mdiAccountGroup,
        mdiFileTree,
        mdiMenuUp,
        mdiMenuDown,
        mdiWeb,
        mdiHandball,
        mdiEye,
      },
    }
  },
  computed: {
    fullPath() {
      return `/${this.path.main}/${this.path.secondary ?? ''}`
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
  background-color: transparent !important;
}
</style>

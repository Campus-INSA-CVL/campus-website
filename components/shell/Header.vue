<template lang="pug">
  v-app-bar(app, hide-on-scroll, :scroll-off-screen="$vuetify.breakpoint.smAndDown", :elevation="0")
    v-app-bar-nav-icon(@click.stop="toggleDrawer()")
    v-btn(to="/", nuxt, exact, depressed).header-btn
      v-toolbar-title #[span.text-lowercase.font-weight-regular.primary--text  #campus] #[span.text-uppercase.font-weight-regular.primary--text insa]#[span.text-uppercase.font-weight-black.primary--text cvl]
    v-spacer
    v-btn(icon, @click="openSearchDialog()", v-if="$vuetify.breakpoint.xs")
      v-icon {{ svg.mdiMagnify }}
    template(v-slot:extension, v-if="extension")
      slot(name="extension")
</template>

<script>
import { mdiMagnify } from '@mdi/js'

export default {
  name: 'Header',
  props: {
    extension: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      svg: {
        mdiMagnify,
      },
    }
  },
  methods: {
    openSearchDialog() {
      this.$store.commit('shell/toggleSearchDialog')
    },
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

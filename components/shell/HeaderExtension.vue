<template lang="pug">
    div
      v-btn(icon, nuxt, to='/federation', exact).text--secondary
        v-icon {{ svg.mdiWeb }}
      v-btn(:to="fullPath", depressed, nuxt, :color="`${config.color}--text`", exact).header-btn
        v-toolbar-title.font-weight-bold.text-capitalize {{ config.title }}
      v-spacer

      v-btn(:outlined="btn.style.outlined", :depressed="btn.style.depressed", :color="`${config.color}`", dark, :to="`${fullPath}/${btn.path}`", exact, nuxt, :class="index !== config.btns.length - 1 ? 'mr-4': ''", v-for="(btn, index) in config.btns", :key="index", , v-if="!isSmAndDown")
        v-icon(:left="!isSmAndDown") {{ svg[btn.icon] }}
        span(v-if="!isSmAndDown") {{ btn.name }}

      v-menu(offset-y, v-if="isSmAndDown")
        template(v-slot:activator="{ on, attrs }")
          v-btn(depressed, :color="`${config.color}`", dark, v-bind="attrs", v-on="on")
            v-icon {{ JSON.parse(attrs['aria-expanded']) ? svg.mdiMenuUp : svg.mdiMenuDown }}
        v-list(:color="`${config.color}--text`", flat).text-uppercase
          v-list-item(nuxt, :to="`${fullPath}/${btn.path}`", v-for="(btn, index) in config.btns", :key="index")
            v-list-item-title {{  btn.name }}
    //- template(v-else-if="config.type === 'page'")
    //-   v-btn(icon, nuxt, :to="`/${config.path.main}`", exact).text--secondary
    //-     v-icon {{ svg.mdiWeb }}
    //-   v-btn(:to="fullPath", depressed, nuxt, :color="`${config.color}--text`", exact).header-btn
    //-     v-toolbar-title.font-weight-bold.text-capitalize {{ config.title }}
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
  name: 'HeaderExtension',
  props: {
    config: {
      type: Object,
      default: () => {},
    },
    // type: {
    //   type: String,
    //   default: '',
    // },
    // title: {
    //   type: String,
    //   default: '',
    // },
    // color: {
    //   type: String,
    //   default: () => {},
    // },
    // path: {
    //   type: Object,
    //   default: () => {},
    // },
    // btns: {
    //   type: Array,
    //   default: () => [],
    // },
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
      return `/${this.config.path.main}/${this.config.path.secondary ?? ''}`
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
}
</script>

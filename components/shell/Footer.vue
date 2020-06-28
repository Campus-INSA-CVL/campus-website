<template lang="pug">
  v-footer(:app="$vuetify.breakpoint.lgAndUp")
    v-row(align="center", justify="center", no-gutters)
      v-col(cols="12", sm="6", :order="$vuetify.breakpoint.smAndDown ? '1' : '0'")
        div.text-center.font-weight-light.text-secondary.mx-2 {{ new Date().getFullYear() }} - Campus INSA Centre-Val de Loire
      v-col(cols="12", sm="6", align="center", v-if="socialNetworks")
        v-btn(v-for="icon in icons", :key="icon", icon).text--secondary.mx-2
          v-icon {{ icon }}
</template>

<script>
export default {
  props: {
    socialNetworks: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    }
  },
}
</script>

<template lang="pug">
  v-footer(:app="$vuetify.breakpoint.lgAndUp")
    v-row(align="center", justify="center", no-gutters)
      v-col(cols="12", sm="8", :order="$vuetify.breakpoint.xs ? '1' : '0'")
        div.text-center.font-weight-light.text-secondary.mx-2 {{ new Date().getFullYear() }} - Campus INSA Centre-Val de Loire
      v-col(cols="12", sm="4", align="center", v-if="socialNetworks")
        v-btn(v-for="network in networks", :key="network.path", icon, :href="network.path", target="_blank").text--secondary.mx-2
          v-icon {{ network.icon }}
</template>

<script>
export default {
  name: 'Footer',
  props: {
    socialNetworks: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      networks: [
        {
          icon: 'mdi-facebook',
          path: 'https://www.facebook.com/campusinsacvl',
        },
        {
          icon: 'mdi-instagram',
          path: 'https://www.instagram.com/campusinsacvl/',
        },
        {
          icon: 'mdi-github',
          path: 'https://github.com/Campus-INSA-CVL',
        },
      ],
    }
  },
}
</script>

<template lang="pug">
  v-footer(:app="$vuetify.breakpoint.lgAndUp")
    v-row(align="center", justify="center", no-gutters)
      v-col(cols="12", sm="8", :order="$vuetify.breakpoint.xs ? '1' : '0'")
        div.text-center.font-weight-light.text-secondary.mx-2 {{ new Date().getFullYear() }} - Campus INSA Centre-Val de Loire
      v-col(cols="12", sm="4", align="center", v-if="socialNetworks")
        v-btn(v-for="network in networks", :key="network.path", icon, :href="network.path", target="_blank").text--secondary.mx-2
          v-icon {{ svg[network.icon] }}
</template>

<script>
import { mdiFacebook, mdiInstagram, mdiGithub } from '@mdi/js'

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
      svg: {
        mdiFacebook,
        mdiInstagram,
        mdiGithub,
      },
      networks: [
        {
          icon: 'mdiFacebook',
          path: 'https://www.facebook.com/campusinsacvl',
        },
        {
          icon: 'mdiInstagram',
          path: 'https://www.instagram.com/campusinsacvl/',
        },
        {
          icon: 'mdiGithub',
          path: 'https://github.com/Campus-INSA-CVL',
        },
      ],
    }
  },
}
</script>

<template lang="pug">
  v-navigation-drawer(app, v-model="handleDrawer")
    v-list(nav)
      v-list-item-group(color="primary")
        v-list-item(v-for="(item, indice) in nav", :key="indice", nuxt, :to="item.path")
          v-list-item-icon
            v-icon(left) {{ svg[item.icon] }}
          v-list-item-content
            v-list-item-title.text-uppercase {{ item.name }}

    template(v-slot:prepend)
      v-container(no-gutters).pb-0
        v-row(justify="center", align="center")
          v-col(align="center")
            v-img(alt="logo du Campus INSA CVL", :src="require('~/assets/img/icon.png')", width="50")
          v-col(cols="12")
            v-divider
</template>

<script>
import {
  mdiHome,
  mdiSchool,
  mdiRoomService,
  mdiHomeAssistant,
  mdiMedal,
  mdiToolbox,
  mdiCardAccountMail,
  mdiInformation,
} from '@mdi/js'

export default {
  name: 'NavigationDrawer',
  data() {
    return {
      svg: {
        mdiHome,
        mdiSchool,
        mdiRoomService,
        mdiHomeAssistant,
        mdiMedal,
        mdiToolbox,
        mdiCardAccountMail,
        mdiInformation,
      },
      nav: [
        {
          name: 'Acceuil',
          path: '/',
          icon: 'mdiHome',
        },
        {
          name: 'Vie étudiante',
          path: '/vie-etudiante',
          icon: 'mdiSchool',
        },
        {
          name: 'Fédération',
          path: '/federation',
          icon: 'mdiHomeAssistant',
        },
        {
          name: 'Services',
          path: '/services',
          icon: 'mdiRoomService',
        },
        {
          name: 'Olympiades',
          path: '/olympiades',
          icon: 'mdiMedal',
        },
        {
          name: 'Outils',
          path: '/outils',
          icon: 'mdiToolbox',
        },
        {
          name: 'nous contacter',
          path: '/nous-contacter',
          icon: 'mdiCardAccountMail',
        },
        {
          name: 'à propos',
          path: '/a-propos',
          icon: 'mdiInformation',
        },
      ],
    }
  },
  computed: {
    handleDrawer: {
      get() {
        return this.$store.state.shell.drawer
      },
      set(value) {
        if (value === false) {
          this.$store.commit('shell/toggleDrawer', value)
        }
      },
    },
  },
}
</script>

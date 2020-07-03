<template lang="pug">
  v-navigation-drawer(app, v-model="handleDrawer")
    v-list(nav)
      v-list-item-group(color="primary")
        v-list-item(v-for="(item, indice) in nav", :key="indice", nuxt, :to="item.path")
          v-list-item-icon
            v-icon(left) {{ item.icon }}
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
export default {
  name: 'NavigationDrawer',
  data() {
    return {
      nav: [
        {
          name: 'Acceuil',
          path: '/',
          icon: 'mdi-home',
        },
        {
          name: 'Vie étudiante',
          path: '/vie-etudiante',
          icon: 'mdi-school',
        },
        {
          name: 'Fédération',
          path: '/federation',
          icon: 'mdi-home-assistant',
        },
        {
          name: 'Services',
          path: '/services',
          icon: 'mdi-room-service',
        },
        {
          name: 'Olympiades',
          path: '/olympiades',
          icon: 'mdi-medal',
        },
        {
          name: 'Outils',
          path: '/outils',
          icon: 'mdi-toolbox',
        },
        {
          name: 'nous contacter',
          path: '/nous-contacter',
          icon: 'mdi-card-account-mail',
        },
        {
          name: 'à propos',
          path: '/a-propos',
          icon: 'mdi-information',
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

<template lang="pug">
  shell-app
    shell-navigation-drawer
    shell-header(:type="type", :title="title", :color="color", :path="path", :btns="btns")
    v-main
      v-container(fluid)
        nuxt
    shell-footer
</template>

<script>
import {} from '@mdi/js'

export default {
  data() {
    return {
      type: 'association',
      title: 'gala',
      color: 'galaColor',
      path: {
        main: 'federation',
        secondary: 'gala',
      },
      btns: [
        {
          name: "l'équipe",
          path: 'equipe',
          icon: 'mdiAccountGroup',
          style: { outlined: true, depressed: false },
        },
      ],
    }
  },
}
</script>

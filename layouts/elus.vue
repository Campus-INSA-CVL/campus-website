<template lang="pug">
  shell-app
    shell-navigation-drawer
    shell-header(:type="type", :title="title", :color="color", :path="path", :btns='btns')
    v-main
      v-container(fluid)
        nuxt
    shell-footer
</template>

<script>
export default {
  data() {
    return {
      type: 'association',
      title: 'élus',
      color: 'elusColor',
      path: {
        main: 'federation',
        secondary: 'elus',
      },
      btns: [
        {
          name: "l'équipe",
          path: 'equipe',
          icon: 'mdi-account-group',
          style: { outlined: true, depressed: false },
        },
        {
          name: 'représentation',
          path: 'representation',
          icon: 'mdi-eye',
          style: { outlined: false, depressed: true },
        },
      ],
    }
  },
}
</script>

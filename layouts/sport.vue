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
export default {
  data() {
    return {
      type: 'association',
      title: 'pôle sportif',
      color: 'sportColor',
      path: {
        main: 'federation',
        secondary: 'sport',
      },
      btns: [
        {
          name: "l'équipe",
          path: 'equipe',
          icon: 'mdi-account-group',
          style: { outlined: true, depressed: false },
        },
        {
          name: 'les sports',
          path: 'sports',
          icon: 'mdi-handball',
          style: { outlined: false, depressed: true },
        },
        {
          name: 'les associations',
          path: 'associations',
          icon: 'mdi-file-tree',
          style: { outlined: false, depressed: true },
        },
      ],
    }
  },
}
</script>

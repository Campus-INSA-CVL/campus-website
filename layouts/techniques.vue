<template lang="pug">
  v-app
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
      title: 'pôle techniques',
      color: 'techniquesColor',
      path: {
        main: 'federation',
        secondary: 'techniques',
      },
      btns: [
        {
          name: "l'équipe",
          path: 'equipe',
          icon: 'mdi-account-group',
          style: { outlined: true, depressed: false },
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

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
          icon: 'mdiAccountGroup',
          style: { outlined: true, depressed: false },
        },
        {
          name: 'les associations',
          path: 'associations',
          icon: 'mdiFileTree',
          style: { outlined: false, depressed: true },
        },
      ],
    }
  },
}
</script>

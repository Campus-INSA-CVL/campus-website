<template lang="pug">
  v-app
    shell-navigation-drawer
    shell-header(:type="type", :title="title", :color="color", :path="path")
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
      color: 'sports',
      path: {
        main: 'federation',
        secondary: 'sport',
      },
    }
  },
}
</script>

<template lang="pug">
  v-app
    shell-navigation-drawer
    shell-header(:type="type", :title="title", :path="path")
    v-main
      v-container(fluid)
        nuxt
    shell-footer(socialNetworks)
</template>

<script>
export default {
  data() {
    return {
      type: 'page',
      title: 'outils',
      path: {
        main: 'outils',
      },
    }
  },
}
</script>

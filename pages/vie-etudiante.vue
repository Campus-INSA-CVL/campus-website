<template lang="pug">
  v-row(no-gutters)
    v-col(cols="12")
      v-tabs(centered, show-arrows)
        v-tabs-slider(color="primary")
        v-tab(v-for="tab in tabs", :key="tab.name", :to="tab.path", nuxt, exact) {{ tab.name }}
    v-container
      nuxt-child
</template>

<script>
export default {
  middleware({ redirect, route }) {
    if (route.fullPath.match(/^\/vie-etudiante\/?$/)) {
      redirect('/vie-etudiante/bi-campus')
    }
  },
  data() {
    return {
      tabs: [
        {
          name: 'bi-campus',
          path: '/vie-etudiante/bi-campus',
        },
        {
          name: 'blois',
          path: '/vie-etudiante/blois',
        },
        {
          name: 'bourges',
          path: '/vie-etudiante/bourges',
        },
      ],
    }
  },
}
</script>

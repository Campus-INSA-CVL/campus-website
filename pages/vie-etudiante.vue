<template lang="pug">
  v-row(no-gutters)
    v-col(cols="12")
      v-tabs(centered, show-arrows)
        v-tabs-slider(color="primary")
        v-tab(v-for="tab in tabs", :key="tab.title", :to="`${tab.title}`", nuxt, exact) {{ tab.title }}
    v-container
      nuxt-child
</template>

<script>
export default {
  middleware({ redirect, route }) {
    if (route.fullPath.match(/^\/vie-etudiante\/?$/)) {
      redirect('/vie-etudiante/insa')
    }
  },
  async asyncData({ $content, params }) {
    const tabs = await $content(`vie-etudiante`)
      .only(['title', 'order'])
      .sortBy('order')
      .fetch()
    return {
      tabs,
    }
  },
}
</script>

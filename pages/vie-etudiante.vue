<template lang="pug">
  v-row(no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      v-tabs(centered, show-arrows)
        v-tabs-slider(color="primary")
        v-tab(v-for="tab in tabs", :key="tab.title", :to="`${tab.slug}`", nuxt, exact) {{ tab.title }}
    v-container(fluid).px-0.pb-0
      v-row(no-gutters)
        v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
          transition(name="sub-page", mode="out-in")
            nuxt-child
</template>

<script>
export default {
  name: 'VieEtudiante',
  middleware({ redirect, route }) {
    if (route.fullPath.match(/^\/vie-etudiante\/?$/)) {
      redirect('/vie-etudiante/insa')
    }
  },
  async asyncData({ $content, params }) {
    const tabs = await $content(`vie-etudiante`)
      .only(['title', 'order', 'slug'])
      .sortBy('order')
      .fetch()
    return {
      tabs,
    }
  },
  head() {
    return {
      title: 'vie étudiante'.toUpperCase(),
    }
  },
}
</script>

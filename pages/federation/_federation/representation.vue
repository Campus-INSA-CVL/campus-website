<template lang="pug">
  v-row(no-gutters)
    v-col(cols="12")
      v-tabs(centered, show-arrows, color="elusColor")
        v-tabs-slider(color="elusColor")
        v-tab(v-for="tab in tabs", :key="tab.title", :to="`${tab.slug}`", nuxt, exact) {{ tab.title }}
    v-container(fluid).px-0.pb-0
      v-row(no-gutters)
        v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
          transition(name="sub-page", mode="out-in")
            nuxt-child
</template>

<script>
export default {
  middleware({ redirect, route }) {
    if (route.fullPath.match(/^\/federation\/elus\/representation\/?$/)) {
      redirect('/federation/elus/representation/conseil-administration')
    }
  },
  async asyncData({ $content, params }) {
    const tabs = await $content(`federation/elus/representation`)
      .only(['title', 'order', 'slug'])
      .sortBy('order')
      .fetch()
    return {
      tabs,
    }
  },
  layout() {
    return 'default'
  },
  head() {
    return {
      title: 'représentation'.toUpperCase(),
    }
  },
}
</script>

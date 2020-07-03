<template lang="pug">
  v-row(no-gutters)
    v-col(cols="12")
      v-tabs(centered, show-arrows, color="sportColor")
        v-tabs-slider(color="sportColor")
        v-tab(v-for="tab in tabs", :key="tab.title", :to="`${tab.slug}`", nuxt, exact) {{ tab.title }}
    v-container
      nuxt-child
</template>

<script>
export default {
  middleware({ redirect, route }) {
    if (route.fullPath.match(/^\/federation\/sport\/sports\/?$/)) {
      redirect('/federation/sport/sports/blois')
    }
  },
  async asyncData({ $content, params }) {
    const tabs = await $content(`federation/sport/sports`)
      .only(['title', 'order', 'slug'])
      .sortBy('order')
      .fetch()
    return {
      tabs,
    }
  },
  layout({ params }) {
    return params.federation ?? 'default'
  },
  head() {
    return {
      title: 'sports'.toUpperCase(),
    }
  },
}
</script>

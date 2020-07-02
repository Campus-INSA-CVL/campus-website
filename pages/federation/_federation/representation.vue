<template lang="pug">
  v-row(no-gutters)
    v-col(cols="12")
      v-tabs(centered, show-arrows, color="elected")
        v-tabs-slider(color="elected")
        v-tab(v-for="tab in tabs", :key="tab.title", :to="`${tab.slug}`", nuxt, exact) {{ tab.title }}
    v-container
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
  layout({ params }) {
    return params.federation ?? 'default'
  },
}
</script>

<template lang="pug">
  v-row(no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      v-tabs(centered, show-arrows, color="sportColor")
        v-tabs-slider(color="sportColor")
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
  layout() {
    return 'default'
  },
  head() {
    return {
      title: 'LES SPORTS',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Retrouver l'ensemble des sports proposés par l'association sportive de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `LES SPORTS - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Retrouver l'ensemble des sports proposés par l'association sportive de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `LES SPORTS - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Retrouver l'ensemble des sports proposés par l'association sportive de l'INSA Centre-Val de Loire",
        },
      ],
    }
  },
}
</script>

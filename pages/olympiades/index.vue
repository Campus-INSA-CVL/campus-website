<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      nuxt-content(:document="content", class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto")
</template>

<script>
import Team from '@/components/campus/Team'
import Social from '@/components/campus/Social'
import Center from '@/components/campus/Center'
import ResponsiveImage from '@/components/campus/ResponsiveImage'
import Carousel from '@/components/campus/Carousel'

export default {
  components: {
    CampusTeam: Team,
    CampusSocial: Social,
    CampusCenter: Center,
    CampusResponsiveImage: ResponsiveImage,
    CampusCarousel: Carousel,
  },
  async asyncData({ $content }) {
    const content = await $content('olympiades', 'index').fetch()
    return {
      content,
    }
  },
  head() {
    return {
      title: 'olympiades'.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Présentation des olympiades et résultats, jeux mensuels proposés par le Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `OLYMPIADES - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Présentation des olympiades et résultats, jeux mensuels proposés par le Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `OLYMPIADES - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Présentation des olympiades et résultats, jeux mensuels proposés par le Campus de l'INSA Centre-Val de Loire",
        },
      ],
    }
  },
}
</script>

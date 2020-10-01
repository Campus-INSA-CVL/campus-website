<template lang="pug">
v-row(tag='section', no-gutters)
  v-col(cols='12', md='10', lg='8', offset-md='1', offset-lg='2')
    nuxt-content.prose.prose-sm.mx-auto(
      :document='page',
      class='sm:prose lg:prose-lg xl:prose-xl',
      :id='color'
    )
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
  async asyncData({ $content, params }) {
    const { representation } = params
    const page = await $content(`representation/${representation}`).fetch()
    return {
      page,
    }
  },
  computed: {
    color() {
      return this.$route.params.representation ?? ''
    },
  },
  head() {
    return {
      title: this.$route.params.representation.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$route.params.representation.toUpperCase()} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.$route.params.representation.toUpperCase()} - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.page.description,
        },
      ],
    }
  },
}
</script>

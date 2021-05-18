<template lang="pug">
section
  .parallax-container
    h1.parallax-title(
      :style='$vuetify.breakpoint.mdAndUp ? "-webkit-text-stroke: 5px white;font-size: 7rem;" : "-webkit-text-stroke: 2.5px white;font-size: 3.5rem;"'
    )
      | #campus
      span &nbsp;
        br(v-if='$vuetify.breakpoint.mdAndDown')
      | INSA CVL
    parallax.rounded(
      :sectionHeight='42',
      :speed-factor='0.15',
      breakpoint='(min-width: 200px)'
    )
      v-img(:src='heroBanner', min-height='470')
  v-row(no-guetter, justify='center')
    v-col.pa-0.text-uppercase.text-subtitle-1.font-weight-bold(
      :cols='$vuetify.breakpoint.smAndDown ? "6" : undefined',
      v-for='card in content.cards',
      :key='card.title',
      :style='`color: ${card.color};font-family: "Arial Rounded"!important;`',
      align='center'
    ) #
      | {{ card.title }}
  v-row
    v-col
      typewriter.primary--text.text-left.text-h4.font-weight-light.text-center(
        :toRotate='toRotate',
        :typewriterClass='typewriterClass'
      )
        h2 Le campus de l'INSA CVL est un lieu
  v-row(justify='center')
    v-col(
      cols='12',
      sm='6',
      xl='4',
      v-for='card in content.cards',
      :key='card.title'
    )
      intersect-card(dark, :color='card.color')
        v-card-title.font-weight-bold.text-h5.text-uppercase #
          | {{ card.title }}
        v-card-text.text-justify {{ card.text }}
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  name: 'Index',
  components: {
    Parallax,
  },
  async asyncData({ $content }) {
    const content = await $content('index', 'index').fetch()
    return {
      content,
    }
  },
  data() {
    return {
      typewriterClass: 'font-weight-bold',
      toRotate: [
        'de partage.',
        "d'entraide.",
        'de bonne humeur.',
        "d'investissement.",
        'de connaissance.',
      ],
    }
  },
  computed: {
    heroBanner() {
      return require('@/assets/img/hero-banner.png')
    },
  },
  head() {
    return {
      title: 'accueil'.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Website du campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Campus INSA Centre-Val de Loire',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: "Website du campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Campus INSA Centre-Val de Loire',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: "Website du campus de l'INSA Centre-Val de Loire",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.Masthead {
  z-index: 0;
  position: relative;
}
@media screen and (min-width: 768px) {
  .Masthead {
    min-height: 0;
  }
}
.parallax-container {
  position: relative;
}
.parallax-title {
  position: absolute;
  top: 50%;
  left: 20px;
  right: 20px;
  transform: translateY(-50%);
  font-family: 'Arial Rounded', sans-serif !important;
  font-weight: bold;
  border: 0.2rem solid white;
  text-align: center;
  border-radius: 5px;
  box-shadow: inset 2px 2px 1rem hsla(0, 0%, 0%, 0.75),
    2px 2px 1rem hsla(0, 0%, 0%, 0.75);
  text-shadow: 0px 0px 1rem hsla(0, 0%, 0%, 0.6);
  color: transparent;
  paint-order: stroke fill;
  z-index: 2;
}
</style>

<template lang="pug">
  section
    div.parallax-container
      h1.parallax-title.text-h3 #campus INSA CVL
      parallax(:sectionHeight="42", :speed-factor="0.2", breakpoint="(min-width: 200px)").rounded
          v-img(:src="heroBanner", min-height="450")
    v-row(no-guetter, justify="center")
      v-col(:cols="$vuetify.breakpoint.smAndDown ? '6' : undefined", v-for="card in content.cards", :style="`color: ${card.color};font-family: 'Arial Rounded'!important;`", align="center").pa-0.text-uppercase.text-subtitle-1.font-weight-bold #
        | {{card.title}}
    v-row
      v-col
        typewriter(:toRotate="toRotate", :typewriterClass="typewriterClass").primary--text.text-left.text-h4.font-weight-light.text-center
          h2 Le campus de l'INSA CVL est un lieu
    v-row(justify="center")
      v-col(cols="12", sm="6" , xl="4", v-for="card in content.cards", :key="card.title")
        intersect-card(dark, :color="card.color")
          v-card-title.font-weight-bold.text-h5.text-uppercase #
            | {{card.title}}
          v-card-text.text-justify {{card.text}}
</template>

<script>
import Parallax from 'vue-parallaxy'
import fetchContent from '@/mixins/fetch-content'

export default {
  name: 'Index',
  components: {
    Parallax,
  },
  mixins: [
    fetchContent({
      folderName: 'index',
      fileName: 'index',
    }),
  ],
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
      title: 'acceuil'.toUpperCase(),
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
  left: 0;
  right: 0;
  transform: translateY(-50%);
  padding: 20px;
  font-family: 'Arial Rounded';
  margin: 0 50px;
  font-weight: bold;
  border: 0.35rem solid white;
  color: white;
  text-align: center;
  border-radius: 5px;
  text-shadow: 2px 2px 1rem hsla(0, 0%, 0%, 0.75);
  z-index: 2;
}
</style>

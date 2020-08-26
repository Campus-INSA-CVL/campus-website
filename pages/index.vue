<template lang="pug">
  section
    div.parallax-container
      h1.parallax-title.text-h3 #campus INSA CVL
      parallax(:sectionHeight="42", :speed-factor="0.3", breakpoint="(min-width: 300px)")
          v-img(:src="heroBanner", min-height="500").rounded
    v-row(no-guetter, justify="center")
      v-col(:cols="$vuetify.breakpoint.smAndDown ? '6' : undefined", v-for="card in cards", :style="`color: ${card.color};font-family: 'Arial Rounded'!important;`", align="center").pa-0.text-uppercase.text-subtitle-1.font-weight-bold #
        | {{card.title}}
    v-row
      v-col
        div.typewriter-container
          h2.typewriter.primary--text.text-left.text-h4.font-weight-light.text-center Le campus de l'INSA CVL est un lieu<br />#[span.font-weight-bold#typewriter-animation]
    v-row(justify="center")
      v-col(cols="12", sm="6" , xl="4", v-for="card in cards", :key="card.title")
        v-card(v-intersect.once="{ handler: onIntersect, options: { threshold: 0.4 } }", outlined, :color="card.color", dark)
          v-card-title.font-weight-bold.text-h5.text-uppercase #
            | {{card.title}}
          v-card-text.text-justify Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec tincidunt lectus, ut accumsan diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet dignissim turpis, ac finibus libero sollicitudin sit amet. Duis vel tristique neque.
              //- v-col(cols="auto")
              //-   v-img(src="https://via.placeholder.com/200", height="200", width="200").rounded

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
      el: null,
      toRotate: [
        'de partage.',
        "d'entraide.",
        'de bonne humeur.',
        "d'investissement.",
        'de connaissance.',
      ],
      loopNum: 0,
      isDeleting: false,
      period: 2000,
      txt: '',
      cards: [
        {
          title: 'partage',
          color: '#f7a900',
        },
        {
          title: 'entraide',
          color: '#6bbe00',
        },
        {
          title: 'bonne humeur',
          color: '#0098ad',
        },
        {
          title: 'investissement',
          color: '#fd6300',
        },
        {
          title: 'connaissance',
          color: '#811158',
        },
      ] /* [
        {
          title: 'partage',
          color: '#df5a5a',
        },
        {
          title: 'entraide',
          color: '#e9944f',
        },
        {
          title: 'bonne humeur',
          color: '#f2d34f',
        },
        {
          title: 'investissement',
          color: '#ede584',
        },
        {
          title: 'connaissance',
          color: '#e3ecc7',
        },
      ], */,
    }
  },
  computed: {
    heroBanner() {
      return require('@/assets/img/hero-banner-classic.png')
    },
  },
  mounted() {
    const cards = document.getElementsByClassName('v-card')
    for (let index = 0; index < cards.length; index++) {
      const card = cards[index]
      card.classList.add('invisible')
    }
    const typewriter = document.getElementById('typewriter-animation')
    if (!typewriter) return

    this.el = typewriter

    this.typewriter()

    const css = document.createElement('style')
    css.type = 'text/css'
    css.innerHTML =
      '#typewriter-animation .wrap { border-right: 0.08em solid #555 }'
    document.body.appendChild(css)
  },
  methods: {
    onIntersect(entries, observer, isIntersecting) {
      if (isIntersecting) {
        entries[0].target.classList.add('moveup')
        entries[0].target.classList.remove('invisible')
      } else {
        entries[0].target.classList.remove('moveup')
      }
    },
    typewriter() {
      const i = this.loopNum % this.toRotate.length
      const fullTxt = this.toRotate[i]

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

      const that = this
      let delta = 150 - Math.random() * 20

      if (this.isDeleting) {
        delta /= 2
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period
        this.isDeleting = true
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        this.loopNum++
        delta = 300
      }

      setTimeout(function () {
        that.typewriter()
      }, delta)
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
  // background: rgba(0, 0, 0, 0.6);
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
// .typewriter-container {
//   position: relative;
// }
// .typewriter {
//   position: absolute;
//   bottom: 50px;
//   left: 10px;
// }
</style>

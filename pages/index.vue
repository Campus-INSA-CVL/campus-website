<template lang="pug">
  section
    div.typewriter-container
      v-img(src="https://via.placeholder.com/900x250").rounded
      h1.typewriter.primary--text.text-left.text-h4.font-weight-light Le campus de l'INSA CVL c'est<br />#[span(data-period="2000", data-type='[ "cool", "stylé", "amusant ]').font-weight-bold#typewriter-animation]
    v-row(justify="center")
      v-col(cols="12", md="6" , xl="4", v-for="n in 4", :key="n")
        v-card(v-intersect.once="{ handler: onIntersect, options: { threshold: 0.4 } }", outlined)
          v-container
            div.font-weight-bold.text-h5 Lorem ipsum
            v-row
              v-col
                div Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec tincidunt lectus, ut accumsan diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet dignissim turpis, ac finibus libero sollicitudin sit amet. Duis vel tristique neque.
              v-col(cols="auto")
                v-img(src="https://via.placeholder.com/200", height="200", width="200").rounded

</template>

<script>
import fetchContent from '@/mixins/fetch-content'

export default {
  name: 'Index',
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
        "un lieu d'appretissage !",
        'un lieu de convivialité !',
        'une représentation forte dans les instances !',
        'une vie associative riche !',
      ],
      loopNum: 0,
      isDeleting: false,
      period: 2000,
      txt: '',
    }
  },
  mounted() {
    const cards = document.getElementsByClassName('v-card')
    for (let index = 0; index < cards.length; index++) {
      const card = cards[index]
      card.classList.add('invisible')
    }
    const typewriter = document.getElementById('typewriter-animation')
    this.el = typewriter

    this.typewriter()

    const css = document.createElement('style')
    css.type = 'text/css'
    css.innerHTML =
      '#typewriter-animation .wrap { border-right: 0.08em solid #fff }'
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
.typewriter-container {
  position: relative;
}
.typewriter {
  position: absolute;
  bottom: 50px;
  left: 10px;
}
</style>

<template lang="pug">
  div.typewriter-container
    slot
    span(:class="typewriterClass")#typewriter-animation
</template>

<script>
export default {
  name: 'Typewriter',
  props: {
    toRotate: {
      type: Array,
      default: () => [],
    },
    typewriterClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      el: null,
      loopNum: 0,
      isDeleting: false,
      period: 2000,
      txt: '',
    }
  },
  mounted() {
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
}
</script>

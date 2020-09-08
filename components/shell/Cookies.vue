<template lang="pug">
  v-snackbar(v-model="snackbar", rounded, :timeout="-1")
    div.text-justify Ce site utilise un cookie pour vous assurer une meilleure expérience. En continuant, vous consentez à l'utilisation de celui-ci.
    template(v-slot:action="{ attrs }")
      v-btn(@click="close") Fermer
</template>

<script>
export default {
  name: 'Cookies',
  data() {
    return {
      snackbar: false,
    }
  },
  mounted() {
    if (localStorage) {
      const cookieExpire = localStorage.getItem('cookieTime')
      if (cookieExpire) {
        const time = Date.parse(new Date())
        if (time > cookieExpire) {
          this.snackbar = true
        }
      } else {
        this.snackbar = true
      }
    }
  },
  methods: {
    close() {
      this.snackbar = false
      if (localStorage) {
        const time = Date.parse(new Date()) + 1000 * 60 * 60 * 24 * 364
        localStorage.setItem('cookieTime', time)
      }
    },
  },
}
</script>

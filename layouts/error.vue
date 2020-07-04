<template lang="pug">
  section
    v-row(justify="center", v-if="error.statusCode === 404")
      v-col(cols="12", align="center")
        div.heading-2 {{ pageNotFound }}
      v-col(cols="12", align="center")
        h1 Il semble que tu sois perdu !
      v-col(cols="12", align="center")
        div.font-weight-light Si tu penses que c'est une erreur, n'hésite pas à nous contacter !
      v-col(cols="12", sm="4", align="center")
        v-btn(href="https://github.com/Campus-INSA-CVL/campus-website/", outlined, target="_blank").primary--text
          v-icon(left) mdi-github
          span github
      v-col(cols="12", sm="4", align="center")
        v-btn(to="/nous-contacter", outlined, nuxt).primary--text
          v-icon(left) mdi-card-account-mail
          span nous contacter
      v-col(cols="12", align="center")
        div.font-weight-light Sinon, on te laisse retourner à l'acceuil !
      v-col(cols="12", align="center")
        v-btn(to="/", outlined, nuxt).primary--text
          v-icon(left) mdi-home
          span acceuil
    v-row(v-else)
      v-col(cols="12", align="center")
        div.heading-2 {{ otherError }}
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: "C'est une erreur",
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>

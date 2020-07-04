<template lang="pug">
  section
    v-row(tag="section", justify="center")
      v-col(cols="12", align="center")
        v-img(:src="campusPath", max-width="100")
      v-col(cols="12", sm="8", align="center")
        p.font-weight-medium Ce site a été conçu par des élèves-ingénieurs de l'INSA Centre-Val de Loire. Pour tous problèmes ou retours, n'hésitez pas à nous contacter !<br />
          | Vous pouvez aussi retrouver l'ensemble de son code source sur Github !
    v-row(tag="section", justify="space-around")
      v-col(cols="12", md="4", align="center")
        v-btn(to="/nous-contacter", outlined).primary--text
          v-icon(left) mdi-card-account-mail
          span nous contacter
      v-col(cols="12", md="4", align="center")
        v-btn(href="https://github.com/Campus-INSA-CVL/campus-website/", outlined, target="_blank").primary--text
          v-icon(left) mdi-github
          span github
      v-col(cols="12", md="4", align="center")
        v-btn(href="https://www.insa-centrevaldeloire.fr/", outlined, target="_blank").primary--text
          v-icon(left) mdi-school
          span insa centre-val de loire
</template>

<script>
export default {
  computed: {
    campusPath() {
      return require('@/assets/img/icon.png')
    },
  },
  head() {
    return {
      title: 'à propos'.toUpperCase(),
    }
  },
}
</script>

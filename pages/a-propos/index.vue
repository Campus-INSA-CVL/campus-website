<template lang="pug">
  v-row(tag="section", no-gutters)
    v-col(cols="12", md="10", lg="8", offset-md="1", offset-lg="2")
      v-row(tag="section", justify="center")
        v-col(cols="12", align="center")
          v-img(:src="campusPath", max-width="100")
        v-col(cols="12", sm="8", align="center")
          p.font-weight-medium.mb-0 Ce site a été conçu par des élèves-ingénieurs de l'INSA Centre-Val de Loire. Pour tous problèmes ou retours, n'hésitez pas à nous contacter !<br />
            | Vous pouvez aussi retrouver l'ensemble de son code source sur Github !
        v-col(cols="12", sm="8", align="center")
          div.text-capitalize.font-weight-light.primary--text développeur: #[span.font-weight-bold SOUBIRAN Estéban]
          div.text-capitalize.font-weight-light.primary--text contributeurs: #[span.font-weight-bold BEZIAUD Jordan] / #[span.font-weight-bold RICHARD Jérémy]
          div.text-capitalize.font-weight-light.primary--text gestion serveur: #[span.font-weight-bold LESCHI Cyprien]
      v-row(justify="center", no-gutters, align="center")
        v-col(cols="12")
          div.text-secondary.font-weight-light.text-center.body-2 v0.9.14
      v-row(tag="section", justify="space-around")
        v-col(cols="12", md="4", align="center")
          v-btn(to="/nous-contacter", outlined, nuxt).primary--text
            v-icon(left) {{ svg.mdiCardAccountMail }}
            span nous contacter
        v-col(cols="12", md="4", align="center")
          v-btn(href="https://github.com/Campus-INSA-CVL/campus-website/", outlined, target="_blank").primary--text
            v-icon(left) {{ svg.mdiGithub }}
            span github
        v-col(cols="12", md="4", align="center")
          v-btn(href="https://www.insa-centrevaldeloire.fr/", outlined, target="_blank").primary--text
            v-icon(left) {{ svg.mdiSchool }}
            span insa centre-val de loire
</template>

<script>
import { mdiCardAccountMail, mdiGithub, mdiSchool } from '@mdi/js'

export default {
  data() {
    return {
      svg: {
        mdiCardAccountMail,
        mdiGithub,
        mdiSchool,
      },
    }
  },
  computed: {
    campusPath() {
      return require('@/assets/img/icon.png')
    },
  },
  head() {
    return {
      title: 'à propos'.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "À propos du website du Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `À PROPOS - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "À propos du website du Campus de l'INSA Centre-Val de Loire",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `À PROPOS - Campus INSA Centre-Val de Loire`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "À propos du website du Campus de l'INSA Centre-Val de Loire",
        },
      ],
    }
  },
}
</script>

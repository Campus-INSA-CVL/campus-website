<template lang="pug">
v-row(tag='section', no-gutters)
  v-col(cols='12', md='10', lg='8', offset-md='1', offset-lg='2')
    v-row(tag='section', justify='center')
      v-col(cols='12', align='center')
        v-img(:src='campusPath', max-width='100')
      v-col(cols='12', sm='8', align='center')
        p.font-weight-medium.mb-0 Ce site a été conçu par des élèves-ingénieurs de l'INSA Centre-Val de Loire. Pour tous problèmes ou retours, n'hésitez pas à nous contacter !<br />
          | Vous pouvez aussi retrouver l'ensemble de son code source sur Github !
      v-col(cols='12', sm='8', align='center')
        .text-capitalize.font-weight-light.primary--text développeur: #[span.font-weight-bold SOUBIRAN Estéban]
        .text-capitalize.font-weight-light.primary--text illustration/design de la home page: #[span.font-weight-bold YAOUANCQ Quentin]
        .text-capitalize.font-weight-light.primary--text contributeurs: #[span.font-weight-bold BEZIAUD Jordan] / #[span.font-weight-bold RICHARD Jérémy]
        .text-capitalize.font-weight-light.primary--text gestion des associations: #[span.font-weight-bold GARO Benjamin]
        .text-capitalize.font-weight-light.primary--text gestion serveur: #[span.font-weight-bold LESCHI Cyprien]
        .text-capitalize.font-weight-light.primary--text hébergement:&nbsp;
          a.font-weight-bold(
            href='https://www.netlify.com/',
            target='blank',
            rel='nofollow noopener noreferrer'
          ) Netlify
    v-row(justify='center', no-gutters, align='center')
      v-col(cols='12')
        .text-secondary.font-weight-light.text-center.body-2 v1.2.2
    v-row(tag='section', justify='space-around')
      v-col(cols='12', md='4', align='center')
        v-btn.primary--text(to='/nous-contacter', outlined, nuxt)
          v-icon(left) {{ svg.mdiCardAccountMail }}
          span nous contacter
      v-col(cols='12', md='4', align='center')
        v-btn.primary--text(
          href='https://github.com/Campus-INSA-CVL/campus-website/',
          outlined,
          target='_blank'
        )
          v-icon(left) {{ svg.mdiGithub }}
          span github
      v-col(cols='12', md='4', align='center')
        v-btn.primary--text(
          href='https://www.insa-centrevaldeloire.fr/',
          outlined,
          target='_blank'
        )
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
          name: 'Partenaires',
          content:
            "À propos des partenaires du BDE de l'INSA Centre-Val de Loire",
        },
      ],
    }
  },
}
</script>

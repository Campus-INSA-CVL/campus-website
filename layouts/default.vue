<template lang="pug">
shell-app
  shell-navigation-drawer
  shell-header(:extension='!!params')
    template(v-slot:extension, v-if='type === "association"')
      v-btn.text--secondary(icon, nuxt, to='/federation', exact)
        v-icon {{ svg.mdiWeb }}
      v-btn.header-btn(
        :to='fullPath',
        depressed,
        nuxt,
        :color='`${config[params].color}--text`',
        exact
      )
        v-toolbar-title.font-weight-bold.text-capitalize {{ config[params].title }}
      v-spacer
      v-btn(
        :outlined='btn.style.outlined',
        :depressed='btn.style.depressed',
        :color='`${config[params].color}`',
        dark,
        :to='`${fullPath}/${btn.path}`',
        exact,
        nuxt,
        :class='index !== config[params].btns.length - 1 ? "mr-4" : ""',
        v-for='(btn, index) in config[params].btns',
        :key='index',
        ,
        v-if='!isSmAndDown'
      )
        v-icon(:left='!isSmAndDown') {{ svg[btn.icon] }}
        span(v-if='!isSmAndDown') {{ btn.name }}

        v-menu(offset-y, v-if='isSmAndDown && config[params].btns')
          template(v-slot:activator='{ on, attrs }')
            v-btn(
              depressed,
              :color='`${config[params].color}`',
              dark,
              v-bind='attrs',
              v-on='on'
            )
              v-icon {{ JSON.parse(attrs["aria-expanded"]) ? svg.mdiMenuUp : svg.mdiMenuDown }}
          v-list.text-uppercase(:color='`${config[params].color}--text`', flat)
            v-list-item(
              nuxt,
              :to='`${fullPath}/${btn.path}`',
              v-for='(btn, index) in config[params].btns',
              :key='index'
            )
              v-list-item-title {{ btn.name }}
      template(v-slot:extension, v-else-if='type === "page"')
        v-btn.text--secondary(
          icon,
          nuxt,
          :to='`/${config[params].path.main}`',
          exact
        )
          v-icon {{ svg.mdiWeb }}
        v-btn.header-btn(
          :to='fullPath',
          depressed,
          nuxt,
          :color='`${config[params].color}--text`',
          exact
        )
          v-toolbar-title.font-weight-bold.text-capitalize {{ config[params].title }}
    v-main
      v-container(fluid)
        nuxt
        searchDialog
    shell-footer(social-networks)
    shell-cookies
</template>

<script>
import {
  mdiAccountGroup,
  mdiFileTree,
  mdiMenuUp,
  mdiMenuDown,
  mdiWeb,
  mdiHandball,
  mdiEye,
  mdiTextBoxMultiple,
} from '@mdi/js'

export default {
  data() {
    return {
      svg: {
        mdiAccountGroup,
        mdiFileTree,
        mdiMenuUp,
        mdiMenuDown,
        mdiWeb,
        mdiHandball,
        mdiEye,
        mdiTextBoxMultiple,
      },
      config: {
        bde: {
          type: 'association',
          title: 'bde',
          color: 'primary',
          path: {
            main: 'federation',
            secondary: 'bde',
          },
          btns: [
            // {
            //   name: "l'équipe",
            //   path: 'equipe',
            //   icon: 'mdiAccountGroup',
            //   style: { outlined: true, depressed: false },
            // },
            {
              name: 'publications officielles',
              path: 'publications-officielles',
              icon: 'mdiAccountGroup',
              style: { outlined: false, depressed: true },
            },
          ],
        },
        iris: {
          type: 'association',
          title: 'iris',
          color: 'irisColor',
          path: {
            main: 'federation',
            secondary: 'iris',
          },
          btns: [],
        },
        aiep: {
          type: 'association',
          title: 'aiep',
          color: 'primary',
          path: {
            main: 'federation',
            secondary: 'aiep',
          },
          btns: [],
        },
        insapp: {
          type: 'association',
          title: 'insapp',
          color: 'primary',
          path: {
            main: 'federation',
            secondary: 'insapp',
          },
          btns: [],
        },
        culturel: {
          type: 'association',
          title: 'pôle culturel',
          color: 'culturelColor',
          path: {
            main: 'federation',
            secondary: 'culturel',
          },
          btns: [
            // {
            //  name: "l'équipe",
            //  path: 'equipe',
            //  icon: 'mdiAccountGroup',
            //  style: { outlined: true, depressed: false },
            // },
            {
              name: 'les associations',
              path: 'associations',
              icon: 'mdiFileTree',
              style: { outlined: false, depressed: true },
            },
            // {
            //   name: 'le blog',
            //   path: 'blog',
            //   icon: 'mdiTextBoxMultiple',
            //   style: { outlined: false, depressed: true },
            // },
          ],
        },
        solidarites: {
          type: 'association',
          title: 'pôle des solidarités',
          color: 'solidaritesColor',
          path: {
            main: 'federation',
            secondary: 'solidarites',
          },
          btns: [
            // {
            //   name: "l'équipe",
            //   path: 'equipe',
            //   icon: 'mdiAccountGroup',
            //   style: { outlined: true, depressed: false },
            // },
            {
              name: 'les associations',
              path: 'associations',
              icon: 'mdiFileTree',
              style: { outlined: false, depressed: true },
            },
            // {
            //   name: 'le blog',
            //   path: 'blog',
            //   icon: 'mdiTextBoxMultiple',
            //   style: { outlined: false, depressed: true },
            // },
          ],
        },
        gala: {
          type: 'association',
          title: 'gala',
          color: 'galaColor',
          path: {
            main: 'federation',
            secondary: 'gala',
          },
          // btns: [
          //   {
          //     name: "l'équipe",
          //     path: 'equipe',
          //     icon: 'mdiAccountGroup',
          //     style: { outlined: true, depressed: false },
          //   },
          // ],
        },
        sport: {
          type: 'association',
          title: 'pôle sportif',
          color: 'sportColor',
          path: {
            main: 'federation',
            secondary: 'sport' /* redirection vers /federation/sport */,
          },
          btns: [
            {
              name: "l'équipe",
              path: 'equipe' /* redirection vers /federation/sport/equipe */,
              icon: 'mdiAccountGroup',
              style: { outlined: true, depressed: false },
            },
            {
              name: 'les sports',
              path: 'sports',
              icon: 'mdiHandball',
              style: { outlined: false, depressed: true },
            },
            {
              name: 'les associations',
              path: 'associations',
              icon: 'mdiFileTree',
              style: { outlined: false, depressed: true },
            },
          ],
        },
        elus: {
          type: 'association',
          title: 'élus',
          color: 'elusColor',
          path: {
            main: 'federation',
            secondary: 'elus',
          },
          btns: [
            {
              name: "l'équipe",
              path: 'equipe',
              icon: 'mdiAccountGroup',
              style: { outlined: true, depressed: false },
            },
            // {
            //   name: 'représentation',
            //   path: 'representation',
            //   icon: 'mdiEye',
            //   style: { outlined: false, depressed: true },
            // },
          ],
        },
        techniques: {
          type: 'association',
          title: 'pôle techniques',
          color: 'techniquesColor',
          path: {
            main: 'federation',
            secondary: 'techniques',
          },
          btns: [
            {
              name: "l'équipe",
              path: 'equipe',
              icon: 'mdiAccountGroup',
              style: { outlined: true, depressed: false },
            },
            {
              name: 'les associations',
              path: 'associations',
              icon: 'mdiFileTree',
              style: { outlined: false, depressed: true },
            },
          ],
        },
        'les-autres-assos': {
          type: 'association',
          title: 'les autres assos',
          color: 'othersColor',
          path: {
            main: 'federation',
            secondary: 'les-autres-assos',
          },
          btns: [
            {
              name: 'les associations',
              path: 'associations',
              icon: 'mdiFileTree',
              style: { outlined: false, depressed: true },
            },
          ],
        },
        services: {
          type: 'page',
          title: 'services',
          path: {
            main: 'services',
          },
        },
        outils: {
          type: 'page',
          title: 'outils',
          path: {
            main: 'outils',
          },
        },
        representation: {
          type: 'page',
          title: 'représentation',
          path: {
            main: 'representation',
          },
        },
      },
    }
  },
  computed: {
    fullPath() {
      return `/${this.config[this.params].path.main}/${
        this.config[this.params].path.secondary ?? ''
      }`
    },
    teamPath() {
      return this.$route.params
    },
    associationsPath() {
      return `/`
    },
    isSmAndDown() {
      return this.$vuetify.breakpoint.smAndDown
    },
    params() {
      if (
        this.$route.fullPath.includes('representation') &&
        this.$route.params.representation
      ) {
        return 'representation'
      }
      if (this.$route.fullPath.includes('outils') && this.$route.params.outil) {
        return 'outils'
      }
      if (
        this.$route.fullPath.includes('services') &&
        this.$route.params.service
      ) {
        return 'services'
      }
      return this.$route.params.federation ?? ''
    },
    type() {
      return this.config[this.params]?.type ?? ''
    },
  },
}
</script>

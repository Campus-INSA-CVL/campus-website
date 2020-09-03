<template lang="pug">
  v-row(justify="space-around")
    v-col(v-for="key in keys", :key="key", align="center", v-if="social[key]")
      v-tooltip(bottom, v-if="key === 'snapchat' && !isURL(social[key])")
        template(v-slot:activator="{ on, attrs}")
          v-btn(icon, :class='`${color}--text`', x-large, v-on="on", v-bind="attrs")
            v-icon(large) {{ svg[key] }}
        span {{ social[key] }}
      v-btn(icon, :href="social[key]", target="_blank", :class='`${color}--text`', x-large, v-else)
        v-icon(large) {{ svg[key] }}
</template>

<script>
import {
  mdiFacebook,
  mdiInstagram,
  mdiTwitter,
  mdiTwitch,
  mdiSnapchat,
  mdiDiscord,
  mdiLinkedin,
  mdiYoutube,
} from '@mdi/js'

export default {
  name: 'Social',
  inheritAttrs: false,
  props: {
    social: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      svg: {
        facebook: mdiFacebook,
        instagram: mdiInstagram,
        twitter: mdiTwitter,
        twitch: mdiTwitch,
        snapchat: mdiSnapchat,
        discord: mdiDiscord,
        linkedin: mdiLinkedin,
        youtube: mdiYoutube,
      },
    }
  },
  computed: {
    keys() {
      return Object.keys(this.social)
    },
    color() {
      return this.$attrs.color ?? 'primary'
    },
  },
  methods: {
    isURL(link) {
      return link.match(/(https|www|\.com)/g)
    },
  },
}
</script>

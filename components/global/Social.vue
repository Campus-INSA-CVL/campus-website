<template lang="pug">
  v-row(justify="space-around")
    v-col(v-for="key in keys", :key="key", align="center")
      v-btn(icon, :href="social[key]", target="_blank", :class='`${color}--text`', x-large)
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
}
</script>

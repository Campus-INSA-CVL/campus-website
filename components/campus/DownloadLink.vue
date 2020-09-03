<template lang="pug">
  span
    a(:href="path", target="_blank") {{ name }}
    v-btn(icon, :href="path", download, :class="color").ml-4
      v-icon {{ svg.mdiDownload }}
</template>

<script>
import { mdiDownload } from '@mdi/js'

export default {
  name: 'DownLoadLink',
  props: {
    name: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      svg: {
        mdiDownload,
      },
    }
  },
  computed: {
    path() {
      return this.link
    },
    color() {
      return (this.$attrs.color ?? 'primary') + '--text'
    },
  },
}
</script>

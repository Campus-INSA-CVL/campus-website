<template lang="pug">
  a(:href="path", download) {{ name }}
</template>

<script>
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
  computed: {
    path() {
      return this.link
    },
  },
}
</script>

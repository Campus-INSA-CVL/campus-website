<template lang="pug">
  ul
    li(v-for="file in files")
      CampusDownloadLink(:link="file.link", :name="file.name", :color="color")
</template>

<script>
export default {
  name: 'DownloadLinks',
  props: {
    color: {
      type: String,
      default: undefined,
    },
    files: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

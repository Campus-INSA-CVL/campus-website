<template lang="pug">
  ul
    li(v-for="file in files")
      CampusDownloadLink(:link="file.link", :name="file.name")
</template>

<script>
export default {
  name: 'DownloadLinks',
  props: {
    files: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

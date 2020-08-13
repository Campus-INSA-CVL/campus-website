<template lang="pug">
  v-row(justify="center")
    v-col(cols="12", md="8", lg="6", xl="4", align="center")
      slot
</template>

<script>
export default {
  name: 'Center',
}
</script>

<template lang="pug">
  address
    h1 Nous contacter
    v-row
      v-col(cols="12", align="center")
        div.font-weight-bold.text-uppercase par téléphone
        v-btn(href="tel:+33254558436", outlined).primary--text.mt-4
          v-icon(left) {{ svg.mdiPhone }}
          span 02-54-55-84-36
      v-col(cols="12", align="center")
        div.font-weight-bold.text-uppercase par mail
        v-btn(href="mailto:contact@bde.insa-cvl.fr", outlined).primary--text.mt-4
          v-icon(left) {{ svg.mdiEmail }}
          span contact@bde.insa-cvl.fr
      v-col(cols="12", align="center")
        div.font-weight-bold.text-uppercase.mb-4 nos adresses
        a(href="https://www.google.fr/maps/place/88+Boulevard+Lahitolle,+18000+Bourges/@47.0826313,2.4136873,17z/data=!3m1!4b1!4m5!3m4!1s0x47fa9642c3d6c0d9:0xb2b20afec152d674!8m2!3d47.0826277!4d2.4158813", target="_blank").address.mb-4 88 boulevard Lahitolle 18000 Bourges
        br
        a(href="https://www.google.fr/maps/place/3+Rue+de+la+Chocolaterie,+41000+Blois/@47.584576,1.3242422,17z/data=!3m1!4b1!4m5!3m4!1s0x47e357e20e3d9545:0x300ca673280e0e45!8m2!3d47.5845724!4d1.3264362", target="_blank").address 3 rue de la chocolaterie 41000 Blois
</template>

<script>
import { mdiEmail, mdiPhone } from '@mdi/js'

export default {
  data() {
    return {
      svg: {
        mdiEmail,
        mdiPhone,
      },
    }
  },
  head() {
    return {
      title: 'nous contacter'.toUpperCase(),
    }
  },
}
</script>

<style>
address {
  font-style: normal;
}

a.address {
  text-decoration: none;
}
</style>

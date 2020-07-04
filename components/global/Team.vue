<template lang="pug">
  section
    template(v-for="pole in poles")
      div.font-weight-bold.text-center.text-h5.text-capitalize {{ pole }}
      v-row(:key="pole", justify="center")
        v-col(cols="12", sm="6", md="6", lg="4", v-for="user in team[pole]")
          v-card(outlined, :class="`${color}--text`")
            v-list-item(two-line)
              v-list-item-content
                div.body-2.text-uppercase.font-weight-light.mb-2 {{ user.responsability }}
                v-list-item-title(:class="$vuetify.breakpoint.mdAndUp ? 'text-h5' : ''").font-weight-bold {{ user.name }}
              v-list-item-avatar(:size="$vuetify.breakpoint.mdAndUp ? 120 : 80")
                v-img(:src="requireLink(user.avatar)")
            v-card-text.text-justify.pt-0
              v-divider(:class="color").mb-4
              | {{ user.description }}

</template>

<script>
export default {
  name: 'Team',
  props: {
    team: {
      type: Object,
      default: () => {},
    },
    color: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    poles() {
      return Object.keys(this.team)
    },
  },
  methods: {
    requireLink(link) {
      return require(`@/assets/${link ?? 'user-random.png'}`)
    },
  },
}
</script>

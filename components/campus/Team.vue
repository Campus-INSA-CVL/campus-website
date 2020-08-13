<template lang="pug">
  section
    template(v-for="pole in poles")
      div.font-weight-bold.text-center.text-h5.text-capitalize {{ pole }}
      v-row(:key="pole", justify="center")
        v-col(cols="12", sm="6", xl="6", v-for="user in team[pole]", :key="user.name")
          v-card(outlined, :class="`${color}--text`")
            v-list-item(two-line)
              v-row(no-gutters, align="center")
                v-col(align="center", cols="4", sm="12")
                  v-list-item-avatar(:size="size").ma-0.mt-4
                    v-img(:src="requireLink(user.avatar)")
                v-col(align="center", cols="8", sm="12")
                  v-list-item-content(:class="isSm ? 'mt-2': ''").pa-0
                    div.body-2.text-uppercase.font-weight-light.ma-0 {{ user.responsability }}
                    v-list-item-title(:class="$vuetify.breakpoint.mdAndUp ? 'text-h5' : ''").font-weight-bold {{ user.name }}
            v-card-text.text-justify.pt-0
              v-divider(:class="color").my-2
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
    isSm() {
      return this.$vuetify.breakpoint.smAndUp
    },
    size() {
      return this.$vuetify.breakpoint.smAndDown
        ? 80
        : this.$vuetify.breakpoint.md
        ? 100
        : 120
    },
  },
  methods: {
    requireLink(link) {
      return require(`@/assets/${link ?? 'user-random-male.png'}`)
    },
  },
}
</script>

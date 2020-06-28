export const state = () => ({
  drawer: false,
})

export const mutations = {
  toggleDrawer(state, value) {
    state.drawer = value ?? !state.drawer
  },
}

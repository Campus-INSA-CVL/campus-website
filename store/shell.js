export const state = () => ({
  drawer: false,
  searchDialog: false,
})

export const mutations = {
  toggleSearchDialog(state) {
    state.searchDialog = !state.searchDialog
  },
  toggleDrawer(state, value) {
    state.drawer = value ?? !state.drawer
  },
}

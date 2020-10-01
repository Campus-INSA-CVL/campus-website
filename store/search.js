export const state = () => ({
  query: '',
})

export const mutations = {
  updateQuery(state, value) {
    state.query = value
  },
}

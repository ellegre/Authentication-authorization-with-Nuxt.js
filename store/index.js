export const state = () => ({
  users: []
})

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  }
}

// export const actions = {
//   nuxtServerInit({ commit }) {
//     return this.$axios.$get('http://localhost:4000/users/')
//     .then((response) => {
//       commit('SET_USERS', response)
//     })
//   }
// }

export const state = () => ({
  videos: [],
  currentVideo: {},
  users:[],
  currentUser: {}
})

export const mutations = {
  SET_VIDEOS(state, videos) {
    state.videos = videos
  },
  SET_USERS(state, users) {
    state.users = users
  },
  SET_CURRENT_VIDEO(state, video) {
    state.currentVideo = video
  },
  SET_CURRENT_USER(state, user) {
    state.currentUser = user
    window.localStorage.currentUser = JSON.stringify(user)
  },
  LOGOUT_USER(state) {
    state.currentUser = {}
    window.localStorage.currentUser = JSON.stringify({})
  }
}

export const actions = {
  async loadAllVideos({ commit }) {
    const videos = await this.$axios.$get('/videos')
    commit('SET_VIDEOS', videos)
  },
  async loadAllUsers({ commit }) {
    const users = await this.$axios.$get('/users')
    commit('SET_USERS', users)
    const user = JSON.parse(window.localStorage.currentUser)
    commit('SET_CURRENT_USER', user)
  },
  logoutUser({ commit }) {
    commit('LOGOUT_USER')
  },
  async loginUser( { commit }, loginInfo) {
    const user = await this.$axios.$post('/users', loginInfo)
    commit('SET_CURRENT_USER', user)
  }
}

const state = {
  isUserLoggedIn: false
}
const getters = {}
const actions = {
  setIsUserLoggedIn({ commit }, isLoggedIn) {
    commit('SET_IS_USER_LOGGED_IN', isLoggedIn)
  }
}
const mutations = {
  SET_IS_USER_LOGGED_IN(state, isLoggedIn) {
    state.isUserLoggedIn = isLoggedIn
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

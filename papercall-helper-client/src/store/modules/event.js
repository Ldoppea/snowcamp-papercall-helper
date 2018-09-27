import * as mutationTypes from '../mutation-types'

// initial state
const state = {
  event: undefined
}

// getters
const getters = {
  event: state => state.event
}

// actions
const actions = {
}

// mutations
const mutations = {
  [mutationTypes.INIT_EVENT] (state, { event }) {
    state.event = event
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

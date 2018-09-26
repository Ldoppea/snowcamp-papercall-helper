import * as mutationTypes from '../mutation-types'

// initial state
const state = {
  submissions: []
}

// getters
const getters = {
  submissions: state => state.submissions
}

// actions
const actions = {
}

// mutations
const mutations = {
  [mutationTypes.INIT_SUBMISSIONS] (state, { submissions }) {
    state.submissions = submissions
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

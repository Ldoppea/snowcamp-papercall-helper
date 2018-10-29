import * as mutationTypes from '../mutation-types'
import * as actionTypes from '../action-types'

// initial state
const state = {
  papercallToken: undefined,
  papercallEmail: undefined,
  filterByEmail: false,
  isLoading: false
}

// getters
const getters = {
  papercallToken: state => state.papercallToken,
  papercallEmail: state => state.papercallEmail,
  filterByEmail: state => state.filterByEmail,
  isLoading: state => state.isLoading
}

// actions
const actions = {
  async [actionTypes.ACTION_INIT_PAPERCALL_TOKEN] ({ commit, dispatch }, { papercallToken, papercallEmail }) {
    await commit(mutationTypes.IS_LOADING_TRUE)
    await commit(mutationTypes.INIT_PAPERCALL_TOKEN, { papercallToken })
    await commit(mutationTypes.INIT_PAPERCALL_EMAIL, { papercallEmail })
    await dispatch(actionTypes.ACTION_INIT_EVENT, { papercallToken })
    await dispatch(actionTypes.ACTION_INIT_SUBMISSIONS, { papercallToken })
    await commit(mutationTypes.IS_LOADING_FALSE)
  }
}

// mutations
const mutations = {
  [mutationTypes.INIT_PAPERCALL_TOKEN] (state, { papercallToken }) {
    state.papercallToken = papercallToken
  },
  [mutationTypes.INIT_PAPERCALL_EMAIL] (state, { papercallEmail }) {
    state.papercallEmail = papercallEmail
  },
  [mutationTypes.IS_LOADING_TRUE] (state) {
    state.isLoading = true
  },
  [mutationTypes.IS_LOADING_FALSE] (state) {
    state.isLoading = false
  },
  [mutationTypes.SET_EMAIL_FILTER] (state, value) {
    state.filterByEmail = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

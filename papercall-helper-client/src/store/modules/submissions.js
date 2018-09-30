import * as mutationTypes from '../mutation-types'
import * as actionTypes from '../action-types'

import PapercallService from '@/services/papercall-service'

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
  async [actionTypes.ACTION_INIT_SUBMISSIONS] ({ commit }, { papercallToken }) {
    console.log('load submissions')
    const response = await PapercallService.fetchSubmissions(papercallToken)

    commit(mutationTypes.INIT_SUBMISSIONS, {
      submissions: response.data
    })
  }
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

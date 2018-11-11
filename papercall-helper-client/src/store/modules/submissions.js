import * as mutationTypes from '../mutation-types'
import * as actionTypes from '../action-types'

import PapercallService from '@/services/papercall-service'

// initial state
const state = {
  submissions: [],
  filterStatus: [
    { name: 'submitted', value: true },
    { name: 'accepted', value: true },
    { name: 'rejected', value: true },
    { name: 'waitlist', value: true }
  ]
}

// getters
const getters = {
  submissions: state => state.submissions,
  filterStatus: state => state.filterStatus
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
  },
  [mutationTypes.SET_STATUS_FILTER] (state, { statusName, value }) {
    state.filterStatus.find(s => s.name === statusName).value = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

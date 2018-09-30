import api from '@/services/api'

export default {
  fetchSubmissions (papercallToken) {
    return api().post('submissions', {
      token: papercallToken
    })
  },
  fetchEvent (papercallToken) {
    return api().post('event', {
      token: papercallToken
    })
  }
}

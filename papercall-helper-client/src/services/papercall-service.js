import api from '@/services/api'

export default {
  fetchSubmissions () {
    return api().get('submissions')
  },
  fetchEvent () {
    return api().get('event')
  }
}

import api from '@/services/api'

export default {
  fetchSubmissions () {
    return api().get('submissions')
  }
}

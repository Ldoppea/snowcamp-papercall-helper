import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: process.env.NODE_ENV === 'development'
      ? process.env.VUE_APP_ROOT_API
      : process.env.ROOT_API
  })
}

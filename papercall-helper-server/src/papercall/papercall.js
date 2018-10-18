const axios = require('axios')

axios.defaults.baseURL = 'https://www.papercall.io/api/v1/'

const getAxiosConfig = (papercallToken) => {
  const config = {
    headers: {
      'Authorization' : papercallToken
    }
  }

  return config
}

// Get X submissions from the event
const getSubmissions = (numberOfSubmissions, config) => {
  return axios.get(`submissions?per_page=${numberOfSubmissions}`, config)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
      throw error
    })
}

// Get feedbacks by submissionId
const getSubmissionFeedback = (submissionId, config) => {
  return axios.get(`submissions/${submissionId}/feedback`, config)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
      throw error
    })
}

// Fill specified submission object with its feedbacks
const retrieveFeedbackIntoSubmission = (submission, config) => {
  return getSubmissionFeedback(submission.id, config)
    .then(feedback => {
      return {
        ...submission,
        feedback
      }
    })
}

// Fill all specified submissions objects with their feedbacks 
const retrieveFeedbackIntoSubmissions = (submissions, config) => {
  return Promise.all(
    submissions.map(submission => retrieveFeedbackIntoSubmission(submission, config))
  )
}

// Get ratings by submissionId
const getSubmissionRatings = (submissionId, config) => {
  return axios.get(`submissions/${submissionId}/ratings`, config)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
      throw error
    })
}

// Fill specified submission object with its ratings
const retrieveRatingsIntoSubmission = (submission, config) => {
  return getSubmissionRatings(submission.id, config)
    .then(ratings => {
      return {
        ...submission,
        ratings
      }
    })
}

// Fill all specified submissions objects with their ratings 
const retrieveRatingsIntoSubmissions = (submissions, config) => {
  return Promise.all(
    submissions.map(submission => retrieveRatingsIntoSubmission(submission, config))
  )
}

const getEvent = (config) => {
  return axios.get(`event`, config)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
      throw error
    })
}

const getApi = (papercallToken) => {
  const axiosConfig = getAxiosConfig(papercallToken)
  console.log({axiosConfig})
  return {
    getEvent: () => getEvent(axiosConfig),
    getSubmissions: (numberOfSubmissions) => getSubmissions(numberOfSubmissions, axiosConfig),
    getSubmissionFeedback: (submissionId) => getSubmissionFeedback(submissionId, axiosConfig),
    retrieveFeedbackIntoSubmission: (submission) => retrieveFeedbackIntoSubmission(submission, axiosConfig),
    retrieveFeedbackIntoSubmissions: (submissions) => retrieveFeedbackIntoSubmissions(submissions, axiosConfig),
    getSubmissionRatings: (submissionId) => getSubmissionRatings(submissionId, axiosConfig),
    retrieveRatingsIntoSubmission: (submission) => retrieveRatingsIntoSubmission(submission, axiosConfig),
    retrieveRatingsIntoSubmissions: (submissions) => retrieveRatingsIntoSubmissions(submissions, axiosConfig)
  }
}

module.exports = {
  getApi
}

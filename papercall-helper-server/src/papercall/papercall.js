const axios = require('axios')

axios.defaults.baseURL = 'https://www.papercall.io/api/v1/'

// Get X submissions from the event
const getSubmissions = (numberOfSubmissions) => {
  return axios.get(`submissions?per_page=${numberOfSubmissions}`)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
      throw error
    })
}

// Get feedbacks by submissionId
const getSubmissionFeedback = (submissionId) => {
  return axios.get(`submissions/${submissionId}/feedback`)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
      throw error
    })
}

// Fill specified submission object with its feedbacks
const retrieveFeedbackIntoSubmission = (submission) => {
  return getSubmissionFeedback(submission.id)
    .then(feedback => {
      return {
        ...submission,
        feedback
      }
    })
}

// Fill all specified submissions objects with their feedbacks 
const retrieveFeedbackIntoSubmissions = (submissions) => {
  return Promise.all(
    submissions.map(retrieveFeedbackIntoSubmission)
  )
}

const getEvent = () => {
  return axios.get(`event`)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
      throw error
    })
}

module.exports = {
  getEvent,
  getSubmissions,
  getSubmissionFeedback,
  retrieveFeedbackIntoSubmission,
  retrieveFeedbackIntoSubmissions,
}

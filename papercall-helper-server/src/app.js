const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const papercall = require('./papercall/papercall')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

app.get('/submissions', (req, res) => {
  papercall.getSubmissions(1000)
    .then(papercall.retrieveFeedbackIntoSubmissions)
    .then(submissions => {
      // const submissionsLight = submissions.map(submission => {
      //   return {
      //     id: submission.id,
      //     speakerName: submission.profile.name,
      //     speakerLocation: submission.profile.location,
      //     talkName: submission.talk.title,
      //     feedbacks: submission.feedback.map(feedback => {
      //       return {
      //         user: feedback.user.name,
      //         body: feedback.body,
      //         creationDate: feedback.created_at
      //       }
      //     })
      //   }
      // })

      // const submissionsByAuthor = groupBy(submissionsLight, 'speakerName')

      // const submissionsByAuthor2 = Object.keys(submissionsByAuthor).map(function (key) {
      //   const authorSumissions = submissionsByAuthor[key]
      //   return {
      //     speakerName: key,
      //     hasFeedback: authorSumissions.some(submission => submission.feedbacks !== undefined && submission.feedbacks.length > 0),
      //     submissions: authorSumissions
      //   }
      // })

      res.send(submissions)
      // const jsonString = JSON.stringify(submissionsByAuthor2)
      // console.log(jsonString)
    })
})

app.listen(process.env.PORT || 8081)
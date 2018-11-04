require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const papercall = require('./papercall/papercall')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/submissions', (req, res) => {
  const papercallApi = papercall.getApi(req.body.token)

  papercallApi.getSubmissions(1000)
    .catch(error => {
      console.log('Error retrieving Submissions', error);
      res.status(500).send(error)
    })
    .then(papercallApi.retrieveFeedbackIntoSubmissions)
    .catch(error => {
      console.log('Error retrieving Feedbacks', error);
      res.status(500).send(error)
    })
    .then(papercallApi.retrieveRatingsIntoSubmissions)
    .catch(error => {
      console.log('Error retrieving Ratings', error);
      res.status(500).send(error)
    })
    .then(submissions => {
      res.send(submissions)
    })
})

app.post('/event', (req, res) => {
  const papercallApi = papercall.getApi(req.body.token)

  papercallApi.getEvent()
    .then(event => {
      res.send(event)
    })
    .catch(error => {
      console.log('Error retrieving Event', error);
      res.status(500).send(error)
    })
})

app.use(express.static('src/static'))
app.use('/papercall', express.static('src/static'))

const port = process.env.PORT || 8081
console.log('serving files on port', port)
app.listen(port)
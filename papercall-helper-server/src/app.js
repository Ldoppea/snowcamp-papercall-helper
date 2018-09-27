const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const papercall = require('./papercall/papercall')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/submissions', (req, res) => {
  papercall.getSubmissions(1000)
    .then(papercall.retrieveFeedbackIntoSubmissions)
    .then(submissions => {
      res.send(submissions)
    })
})

app.get('/event', (req, res) => {
  papercall.getEvent()
    .then(event => {
      res.send(event)
    })
})

app.listen(process.env.PORT || 8081)
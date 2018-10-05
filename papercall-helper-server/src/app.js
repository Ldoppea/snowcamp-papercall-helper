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

app.post('/papercall/submissions', (req, res) => {
  const papercallApi = papercall.getApi(req.body.token)

  papercallApi.getSubmissions(1000)
    .then(papercallApi.retrieveFeedbackIntoSubmissions)
    .then(submissions => {
      res.send(submissions)
    })
    .catch(error => {
      res.status(500).send(error)
    })
})

app.post('/papercall/event', (req, res) => {
  const papercallApi = papercall.getApi(req.body.token)

  papercallApi.getEvent()
    .then(event => {
      res.send(event)
    })
    .catch(error => {
      res.status(500).send(error)
    })
})

app.use(express.static('src/static'))
app.use('/papercall', express.static('src/static'))

const port = process.env.PORT || 8081
console.log('serving files on port', port)
app.listen(port)
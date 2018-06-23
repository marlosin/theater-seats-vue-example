const express = require('express')

// Initialize http server
const app = express()
const router = express.Router()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', router)

module.exports = app

require('./app/routes')(router)

const server = app.listen(3000, () => {
  const { port } = server.address()
  console.log(`Listening at http://localhost:${port}`)
})

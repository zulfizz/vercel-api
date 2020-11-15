const app = require('express')()
const { v4 } = require('uuid')

app.get('/', (req, res) => {
  res.json({status: true})
})

app.get('/ok', (req, res) => {
  res.end(`ok`)
})

module.exports = app

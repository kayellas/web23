const express = require('express')
const app = express()
//index.html
app.get('/', function (req, res) {
  res.send('ana sayfa World')
})
app.get('/app', function (req, res) {
  res.send('app World')
})

app.listen(3000)
const express = require('express')
const db_connect=require('./db/mysql.connect')
require('dotenv/config')
const app = express()
//index.html
app.get('/', function (req, res) {
  res.send('ana sayfa World')
})
app.get('/app', function (req, res) {
  res.send('app World')
})

app.listen(process.env.PORT)
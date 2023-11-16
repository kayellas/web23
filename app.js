/*const express = require('express')
const db_connect=require('./db/mysql_connect')
const router=require('./routers')

require('dotenv/config')
const app = express()
//index.html
app.get('/', function (req, res) {
  res.send('ana sayfa')
})
app.get('/app', function (req, res) {
  res.send('app sayfası')
  })

*/
//Midllewares

/*
app.use(express.json())
app.use(express.json({limit:'50mb'}))
app.use(express.json({limit:'50mb', extended:true,parameterLimit:5000}))
app.use('/api',router)
app.listen(process.env.PORT) 
*/

const express = require('express')
const db_connect=require('./db/mysql_connect')
const router=require('./routers')
require('dotenv/config')
const app = express()
app.get('/', function (req, res) {
  res.send('Anasayfa')
})
app.get('/app', function (req, res) {
    res.send('app sayfası')
  })
//Midllewares
app.use(express.json({limit:'50mb',extended:true,parameterLimit:50000}))
app.use('/api',router)
app.listen(process.env.PORT)
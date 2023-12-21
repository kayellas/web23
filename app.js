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
/* 
app.get('/', function (req, res) {
  res.send('Anasayfa')
})
app.get('/app', function (req, res) {
    res.send('app sayfası')
  })
*/

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,"index.html"))
})
app.get('/musteri_ekle', function (req, res) {
  res.sendFile(path.join(__dirname,"musteri_ekle.html"))
})
app.get('/musteri_sil', function (req, res) {
  res.sendFile(path.join(__dirname,"musteri_sil.html"))
})
app.get('/musteri_guncelle', function (req, res) {
  res.sendFile(path.join(__dirname,"musteri_guncelle.html"))
})
app.get('/musteri_getir', function (req, res) {
  res.sendFile(path.join(__dirname,"musteri_getir.html"))
})

//Midllewares
app.use(express.json({limit:'50mb',extended:true,parameterLimit:50000}))
app.use('/api',router)
app.listen(process.env.PORT)

/*  app.listen(3308, () => {
  console.log('Uygulama 3000 numaralı bağlantı noktasında dinleniyor...');
 }); */
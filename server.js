// requerimos los paquetes instalados
const express = require('express')
const ig = require('instagram-node').instagram()

// creamos la app con express
var app = express()

// especificamos a node la ruta
app.use(express.static(__dirname + '/public'))

// especificamos que utilizaremos ejs como motor de vistas
app.set('view engine', 'ejs')

// creamos la ruta
app.get('/', function (req, res) {
  ig.user_self_media_recent(function (err, medias, pagination, remaining, limit) {
     // render the home page and pass in the popular images
    res.render('pages/index', { grams: medias })
  })
})

ig.use({
  access_token: '568139.1677ed0.d64b0024c65443bcb8314af56a777c30'
})

// especificamos el puerto
app.listen(8080)
console.log('Escuchando en el puerto 8080')

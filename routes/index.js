var express = require('express');
var router = express.Router();

var nombres = ['Saul','Gerardo','Leonel','Gabriela','Mariel','Alondra','Juan','Luis','Karina','Charles'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page: 'Home', menuId:'home'});
});
//geolocalizacion
router.get('/ubicacion', function(req, res, next) {
  res.render('pages/ubicacion', {page: 'Ubicacion', menuId:'ubicacion'});
});

//Metodo POST
router.post('/', function(req, res){
  res.send('Tengo una peticion con POST');
});

//Metodo PUT
router.put('/greeting', function(req, res){
  res.send('Te doy un saludo con Greeting');
});

//Metodo Delete
router.delete('/hello', function(req, res){
  res.send('Te doy un saludo con DELETE');
});


module.exports = router;

const express = require('express');

/* INIT */
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

/** ROUTING*/
app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/galeria', (req, res) => {
  res.render('galeria.ejs');
});

app.get('/promociones', (req, res) => {
  res.render('promociones.ejs');
});

app.get('/contacto', (req, res) => {
  res.render('contacto.ejs');
});

app.get('/iniciar-sesion', (req, res) => {
  res.render('iniciar-sesion.ejs');
});

app.get('*', (req, res) => {
  res.render('404.ejs');
});

/**LISTEN **/
app.listen(3000);
console.log('Server started');

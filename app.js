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

app.get('/calendario', (req, res) => {
  res.render('calendario.ejs');
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

/*Admin*/

app.get('/panel-admin', (req, res) => {
  res.render('panel-admin.ejs');
});

app.get('/panel-admin/usuarios', (req, res) => {
  res.render('usuarios/index.ejs');
});

app.get('/panel-admin/usuarios/editar', (req, res) => {
  res.render('usuarios/editar.ejs');
});

app.get('/panel-admin/usuarios/vista', (req, res) => {
  res.render('usuarios/vista.ejs');
});







/*Otros*/

app.get('*', (req, res) => {
  res.render('404.ejs');
});

/**LISTEN **/
app.listen(3000);
console.log('Server started');

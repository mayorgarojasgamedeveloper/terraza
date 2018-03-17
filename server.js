const express = require('express');

/* INIT */
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;

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

/*Clientes*/

app.get('/cliente-inicio', (req, res) => {
  res.render('./clientes/index.ejs');
});

app.get('/cliente-crear', (req, res) => {
  res.render('./clientes/crear.ejs');
});

app.get('/cliente-editar/:id', (req, res) => {
  res.render('./clientes/editar.ejs', {id: req.params.id});
});

app.get('/cliente-vista/:id', (req, res) => {
  res.render('./clientes/vista.ejs', {id: req.params.id});
});

/*Administrador*/

app.get('/administrador-inicio', (req, res) => {
  res.render('./administrador/index.ejs');
});

app.get('/administrador-crear', (req, res) => {
  res.render('./administrador/crear.ejs');
});

app.get('/administrador-editar/:id', (req, res) => {
  res.render('./administrador/editar.ejs', {id: req.params.id});
});

app.get('/administrador-vista/:id', (req, res) => {
  res.render('./administrador/vista.ejs', {id: req.params.id});
});

/*Evento*/

app.get('/evento-inicio', (req, res) => {
  res.render('./evento/index.ejs');
});

app.get('/evento-crear', (req, res) => {
  res.render('./evento/crear.ejs');
});

app.get('/evento-editar/:id', (req, res) => {
  res.render('./evento/editar.ejs', {id: req.params.id});
});

app.get('/evento-vista/:id', (req, res) => {
  res.render('./evento/vista.ejs', {id: req.params.id});
});

/*Paquetes*/

app.get('/paquetes-inicio', (req, res) => {
  res.render('./paquetes/index.ejs');
});

app.get('/paquetes-crear', (req, res) => {
  res.render('./paquetes/crear.ejs');
});

app.get('/paquetes-editar/:id', (req, res) => {
  res.render('./paquetes/editar.ejs', {id: req.params.id});
});

app.get('/paquetes-vista/:id', (req, res) => {
  res.render('./paquetes/vista.ejs', {id: req.params.id});
});

/*Proveedores*/

app.get('/proveedores-inicio', (req, res) => {
  res.render('./proveedores/index.ejs');
});

app.get('/proveedores-crear', (req, res) => {
  res.render('./proveedores/crear.ejs');
});

app.get('/proveedores-editar/:id', (req, res) => {
  res.render('./proveedores/editar.ejs', {id: req.params.id});
});

app.get('/proveedores-vista/:id', (req, res) => {
  res.render('./proveedores/vista.ejs', {id: req.params.id});
});

/*Otros*/

app.get('*', (req, res) => {
  res.render('404.ejs');
});

/**LISTEN **/
app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

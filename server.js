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

app.get('/cliente-editar/:id', (req, res) => {
  res.render('./clientes/editar.ejs', {id: req.params.id});
});

app.get('/cliente-vista/:id', (req, res) => {
  res.render('./clientes/vista.ejs', {id: req.params.id});
});





/*Otros*/

app.get('*', (req, res) => {
  res.render('404.ejs');
});

/**LISTEN **/
app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

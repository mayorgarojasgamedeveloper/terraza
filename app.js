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
  res.send('Galeria');
});

app.get('*', (req, res) => {
  res.send('404 not found.');
});

/**LISTEN **/
app.listen(3000);
console.log('Server started');

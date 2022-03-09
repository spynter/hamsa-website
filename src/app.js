const express = require('express');
const app = express();
const path = require('path');

// configuraciones
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//  rutas
app.get("/", (req, res) =>{
  res.render('index');
});

module.exports = app;
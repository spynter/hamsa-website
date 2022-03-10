const express = require('express');
const app = express();
const path = require('path');


// configuraciones
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//routes
app.use(require('./routes/index'));

// archivos estáticos

module.exports = app;
const express = require('express');
const app = express();

// settings
app.set('port', 3000);

// middlewares


// routes
app.get('/', (req, res) => {
    res.send('hello world!');
});

// static files

// listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
const app = require('./src');

const port = process.env.PORT || 3000;

// archivos estáticos

// Servidor escuchando
app.listen(port);

console.log(`Escuchando en el puerto ${port}`);
const app = require('./src/app');

const port = process.env.PORT || 4000;

// archivos estáticos

// Servidor escuchando
app.listen(port);

console.log(`Escuchando en el puerto ${port}`);
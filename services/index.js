const express = require('express');
const connectDB = require('./services/db');
const userRoutes = require('./services/user');

const app = express();

// Middleware para analizar los cuerpos de las solicitudes HTTP
app.use(express.json());

// Conexión a la base de datos
connectDB();

// Rutas CRUD de usuarios
app.use('/', userRoutes);

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});

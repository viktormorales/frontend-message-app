const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

//Connect to the MongoDB test database  
mongoose.connect('mongodb://localhost/test_database');

// Expone la ruta /api con los archivos dentro de la carpeta /server/api
const api = require("./server/api");
app.use("/api", api);

// Expone la ruta base (/) con los archivos de la carpeta "client"
app.use("/", express.static('client'));

app.listen(port, () => {
    console.log(`El servidor está inicializado en el puerto ${port}`);
});
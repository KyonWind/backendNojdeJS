//este archivo estan guardadas las coanfiguraciones de las dependencias 'express' y 'body-parser'
'use strict'

//cargamos las librerias a usar con 'require()'

let bodyparser = require('body-parser');
let express = require('express');

let app = express(); // ponemos en uso la libreria express

/*cargamos archivos de routes*/

let projectRoutes = require('./routes/project');

/*Aqui se carga funciones que se ejecutan para recibir los datos*/

app.use(bodyparser.urlencoded({extended:false})); //activa el Body parser dentro de express
app.use(bodyparser.json()); //convierte los objetos recibos a JSON

/*aqui se carga el CORS que le permite terner acesso a las peticiones que hagamos */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


/*RUTAS*/
app.use('/api',projectRoutes);

/*Exportar*/
module.exports = app; // esto debe exportarse al index.js para crear el servidor de node

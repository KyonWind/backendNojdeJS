'use strict'


let app = require('./app');
let mongoose = require('mongoose');//en esta linea se carga el modulo a usar
let port = 3700; //esto es el puerto que estara usando la base de datos dentro del localhost
mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log('conexion activada');
    //creacion del servidor
     app.listen(port, ()=>{
         console.log('Servidor activo, puerto localhost:3700');
     })
 }).catch(error => console.log(error));

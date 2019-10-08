'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema; //Schema toma la propiedad de Schema de mongoose para crear esquemas de la base de datos

let ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});
//esto debe exportarse a Controllers
module.exports =  mongoose.model('Proyects',ProjectSchema);

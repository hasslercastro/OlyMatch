var mongoose = require('mongoose');
var Schema = mongoose.Schema;

<<<<<<< HEAD
var DeporteSchema = new Schema({
    nombre : {type: String, required: true},
});

var DisponibilidadSchema = new Schema({
    dia: {type: String, required: true},
    hora: {type: String, required: true},
    disponible: {type: Boolean, required: true}
});

var EscenarioSchema = new Schema({
    nombre :{type: String, required: true},
    deportes :{type: [DeporteSchema],require:true},
    imagen_escenario :{type: String, required: true},
    disponibilidad : {type: DisponibilidadSchema, required: true}
=======
var EscenarioSchema = new Schema({
    id :{type: Number, required: true, unique: true},
    escenario :{type: String, required: true},
    deportes : {type:[String],require:true},
    imagen_escenario :{type: String, required: true}
>>>>>>> b458c5d783dc6fb08d8c272611538450d5db91e5
});

module.exports = mongoose.model('Escenario', EscenarioSchema);
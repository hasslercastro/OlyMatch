var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeporteSchema = new Schema({
    nombre : {type: String, required: false},
});

var DisponibilidadSchema = new Schema({
    dia: {type: String, required: true},
    hora: {type: String, required  : true},
    fecha : {type: String , required: true},
    disponible: {type: Boolean, required: true}
});

var EscenarioSchema = new Schema({
    nombre : {type: String, required: true},
    deportes : {type: [DeporteSchema],require:true},
    imagen_escenario :{type: String, required: true},
    disponibilidad : {type: DisponibilidadSchema, required: true}
});
    
module.exports = mongoose.model('Escenario', EscenarioSchema);
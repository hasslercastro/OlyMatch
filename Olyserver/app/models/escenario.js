var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DisponibilidadSchema = new Schema({
    dia: {type: String, required: true},
    hora: {type: String, required: true},
    disponible: {type: boolean, required: true}
});

var EscenarioSchema = new Schema({
    nombre :{type: String, required: true},
    deportes : {type:[String],require:true},
    imagen_escenario :{type: String, required: true},
    disponibilidad : {type: DisponibilidadSchema, required: true}
});

module.exports = mongoose.model('Escenario', EscenarioSchema);
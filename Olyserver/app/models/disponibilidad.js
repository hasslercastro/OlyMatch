var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Escenario = new Schema({
    nombre: {type: String, required: true},
    deportes: {type: [String], required: true}
});

var DisponibilidadSchema = new Schema({
    fecha: {type: String, required: true},
    hora: {type: String, required: true},
    escenario: {type: Escenario, required: true},
    disponible: {type: boolean, required: true}
});

module.exports = mongoose.model('Disponibilidad', DisponibilidadSchema);
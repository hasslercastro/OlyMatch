var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeporteSchema = new Schema({
    nombre : {type: String, required: true},
});

var DisponibilidadSchema = new Schema({
    dia: {type: String, required: true},
    hora: {type: String, required: true},
    disponible: {type: boolean, required: true}
});

var EscenarioSchema = new Schema({
<<<<<<< HEAD
    id :{type: Number, required: true, unique: true},
    escenario :{type: String, required: true},
    deportes : {type:[String],require:true},
    imagen_escenario :{type: String, required: true}
=======
    nombre :{type: String, required: true},
    deportes :{type: DeporteSchema,require:true},
    imagen_escenario :{type: String, required: true},
    disponibilidad : {type: DisponibilidadSchema, required: true}
>>>>>>> 4fb3f02106bdeee60d4ba6da63ce1193c98bd51a
});

module.exports = mongoose.model('Escenario', EscenarioSchema);
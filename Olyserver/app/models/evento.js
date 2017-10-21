var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IndumentariaSchema = new Schema({
    nombre: { type: String, required: true },
    cantidad: { type: Number, required: true }
});

var DeporteSchema = new Schema({
    nombre: { type: String, required: true },
    exigencia: { type: Number, required: true },
    indumentaria: { type: IndumentariaSchema, required: false }

});

var EventSchema = new Schema({
<<<<<<< HEAD
    nombre: {type: String, required: true},
    NivelExigencia: {type: number, required: true},
    admin :{type: String, required: true},
    lugar :{type: String, required: true},
    fecha :{type: String, required: true},
    hora :{type:String,required:true},
    participantes :{type :[String], required: false},
    numMaxParticipantes : {type : Number,required: true},
    publico: {type:Boolean, required: true},
    deporte : {type:DeporteSchema,required:true}
=======
    admin: { type: String, required: true },
    lugar: { type: String, required: true },
    fecha: { type: String, required: true },
    participantes: { type: [String], required: true },
    numMaxParticipantes: { type: Number, required: true },
    hora: { type: String, required: true },
    publico: { type: Boolean, required: true },
    deporte: { type: DeporteSchema, required: true }
>>>>>>> 6aad0cc54f3942e4fc9ea5458915c4bdadf479be
});

module.exports = mongoose.model('Evento', EventSchema);
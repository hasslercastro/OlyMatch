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
    nombre: {type: String, required: true},
    nivelExigencia: {type: number, required: true},
    admin :{type: String, required: true},
    lugar :{type: String, required: true},
    fecha :{type: String, required: true},
    hora :{type:String,required:true},
    participantes :{type :[String], required: false},
    numMaxParticipantes : {type : Number,required: true},
    publico: {type:Boolean, required: true},
    deporte : {type:DeporteSchema,required:true}
});

module.exports = mongoose.model('Evento', EventSchema);
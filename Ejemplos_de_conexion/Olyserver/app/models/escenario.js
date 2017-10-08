var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EscenarioSchema = new Schema({
    id :{type: Number, required: true, unique: true},
    escenario :{type: String, required: true},
    deportes : {type:[String],require:true},
    imagen_escenario :{type: String, required: true}
});

module.exports = mongoose.model('Escenario', EscenarioSchema);
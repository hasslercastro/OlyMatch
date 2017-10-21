var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EscenarioSchema = new Schema({
    id :{type: Number, required: true, unique: true},
<<<<<<< HEAD
    nombre :{type: String, required: true},
    deportes: {type: String[], required},
=======
    escenario :{type: String, required: true},
    deportes : {type:[String],require:true},
>>>>>>> 6aad0cc54f3942e4fc9ea5458915c4bdadf479be
    imagen_escenario :{type: String, required: true}
});

module.exports = mongoose.model('Escenario', EscenarioSchema);
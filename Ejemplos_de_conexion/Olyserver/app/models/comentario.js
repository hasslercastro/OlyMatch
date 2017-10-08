var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComentSchema = new Schema({
    id :{type: Number, required: true, unique: true},
    coment :{type: String, required: true},
    valor :{type: Number, required: true}
});

module.exports = mongoose.model('Comentario', ComentSchema);
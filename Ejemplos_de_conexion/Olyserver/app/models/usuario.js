var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UsuarioSchema = new Schema({
    username :{type: String, required: true, unique: true},
    correo :{type: String, required: true, unique: true},
    contrasena :{type: String, required: true},
  	telefono :{type: String, required: true},
  	calificacion: {type: Number, required: true},
  	nombre: {type: String, required: true},
  	primerApellido: {type: String, required: true},
  	segundoApellido: {type: String, required: false},
  	imagen_usuario: {type: String, default:'ruta' , required: true},
  	comentarios: {type: [String], required: false}
});

UsuarioSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.contrasena, null, null, function (err, hash) {
        if (err) return next(err);
        user.contrasena= hash;
        next();
    });
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
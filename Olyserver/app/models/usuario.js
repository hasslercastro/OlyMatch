var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UsuarioSchema = new Schema({
    usuario :{type: String, required: true, unique: true},
    correo :{type: String, required: true, unique: true},
    contrasena :{type: String, required: true},
    codigo: {type: String, required: true},
  	telefono :{type: String, required: true},
  	calificacion: {type: Number, required: true},
  	nombre: {type: String, required: true},
  	primerApellido: {type: String, required: true},
  	segundoApellido: {type: String, required: false},
  	imagen_usuario: {type: String, default:'ruta' , required:false},
    comentarios: {type: [String], required: false},
    carrera: {type: String, required: true},    
});

UsuarioSchema.pre('save', function (next) {
    var unUsuario = this;
    bcrypt.hash(unUsuario.contrasena, null, null, function (err, hash) {
        if (err) return next(err);
        unUsuario.contrasena= hash;
        next();
    });
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
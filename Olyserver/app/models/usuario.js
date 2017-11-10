var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UsuarioSchema = new Schema({
    usuario :{type: String, required: true, unique: true},
    correo :{type: String, required: false, unique: true},
    contrasena :{type: String, required: true},
    codigo: {type: String, required: true},
  	telefono :{type: String, required: false},
  	calificacion: {type: Number, required: false},
  	nombre: {type: String, required: true},
  	primerApellido: {type: String, required: true},
  	segundoApellido: {type: String, required: false},
  	imagen_usuario: {type: String, default:'ruta' , required:false},
    comentarios: {type: [Number], required: false},
    carrera: {type: String, required: false},    
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
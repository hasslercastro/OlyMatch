var express = require('express');
var app = module.exports = express.Router();
var User = require('../models/usuario');
var bcrypt = require('bcrypt-nodejs');

app.get('/usuario', function (req, res) {
    User.find({}, function (err, even) {
        if (err) {
            return res.json({
                "success": false,
                "msg": "Error while retrieving users",
                "error": err
            });
        }
        res.status(200).send({
            "success": true,
            "result": even
        });
    });
});

//Route para recuperar los datos de la pestaña de usuario.
app.get('/usuario/:user', function (req, res) {
    var user = req.params.user;
    User.findOne({"usuario" : user}, function (err, even) {
        if (err) {
            return res.json({
                "success": false,
                "msg": "No se encontro el usuario",
                "error": err
            });
        }
        res.status(200).send({
            "success": true,
            "result": even
        });
    }).select('nombre').select('usuario').select('imagen_usuario');
});

app.get('/usuario/:username/:password', function (req, res) {
    var user = req.params.username;
    var pass = req.params.password;
    var passd;
    User.findOne({"usuario" : user} , function (err, even) {
        if (err) {
            return res.json({
                "success": false,
                "msg": "Error while retrieving events",
                "error": err
            });
        }
    
        bcrypt.compare(pass, even.contrasena ,function(err,eq){
            res.status(200).send({
                "satisfactorio": eq
            });
    
        });
    }).select('contrasena');

    
});


//Route para crear un usuario
app.post('/usuario', function (req, res) {
    if (req.body.usuario == ' '|| req.body.usuario == null||req.body.contrasena == ' '|| req.body.contrasena == null||req.body.codigo == ' '|| req.body.codigo == null||req.body.nombre == ' '|| req.body.nombre == null||req.body.primerApellido == ' '|| req.body.primerApellido == null) {
        return res.status(400).send({
            "success": false,
            "msg": "Error necesitas llenar todos los campos "
        });

    }
    var newUsuario = new User({
        usuario: req.body.usuario,
        contrasena : req.body.contrasena,
        correo : req.body.usuario+'@eafit.edu.co',
        codigo: req.body.codigo,
        calificacion: 0,
        nombre: req.body.nombre,
        primerApellido: req.body.primerApellido
    });
    newUsuario.save(function (err) {
        if (err) {
            console.log("Some error", err);
            return res.json({
                "success": false,
                "msg": "El usuario ya existe",
                "error": err
            });
        }
        res.status(201).send({ "success": true, "msg": "user created" });
    });

});

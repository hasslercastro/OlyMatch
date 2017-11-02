var express = require('express');
var app = module.exports = express.Router();
var User = require('../models/usuario');
var bcrypt = require('bcrypt-nodejs');

app.get('/usuario', function (req, res) {
    User.find({}, function (err, even) {
        if (err) {
            return res.json({
                "success": false,
                "msg": "Error while retrieving events",
                "error": err
            });
        }
        res.status(200).send({
            "success": true,
            "result": even
        });
    });
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



app.post('/usuario', function (req, res) {
    console.log('estamos en post de usuario')
    if (req.body.usuario == ' ') {
        return res.status(400).send({
            "success": false,
            "msg": "Error you need to provide all fields"
        });
    }

    var newUsuario = new User({
        usuario: req.body.usuario,
        correo: req.body.correo,
        contrasena : req.body.contrasena,
        codigo: req.body.codigo,
        calificacion: 0,
        telefono: req.body.telefono,
        nombre: req.body.nombre,
        primerApellido: req.body.primerApellido,
        segundoApellido : req.body.segundoApellido,
        imagen_usuario : req.body.imagen_usuario,
        carrera : req.body.carrera
    });

    newUsuario.save(function (err) {
        if (err) {
            console.log("Some error", err);
            return res.json({
                "success": false,
                "msg": " already exist",
                "error": err
            });
        }
        res.status(201).send({ "success": true, "msg": "user created" });
    });

});

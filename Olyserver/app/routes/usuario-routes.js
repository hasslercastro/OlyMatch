var express = require('express');
var app = module.exports = express.Router();
var User = require('../models/usuario');
var evento = require('../models/evento');
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
    User.find({"usuario" : user}, function (err, even) {
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
                "msg": "Error while retrieving user",
                "error": err
            });
        }
        
        console.log("even", even)
        if(even != null){
            console.log("adentro del even")
        bcrypt.compare(pass, even.contrasena ,function(err,eq){
            res.status(200).send(eq);
    
          });
       }
       else{
           res.status(200).send({
               "satisfactorio": false 
           })
       }

    });

    
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

    
        bcrypt.hash(req.body.contrasena, null, null, function (err, hash) {
            if (err) return next(err);
            newUsuario.contrasena= hash;
            //next();
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


app.get('/calificar/:eventoId/:nombreUsuario', function(req, res){
    var eventoId = req.params.eventoId;
    var nombreUsuario = req.params.nombreUsuario;
   
        evento.findOne({"_id" : eventoId}, function (err, even) {
            if (err) {
                return res.json({
                    "success": false,
                    "msg": "No se encontro el usuario",
                    "error": err
                });
            }
            
            var fecha = even.fecha;
            fecha = fecha.split("-");
            var fechaActual = Date.now();
            var newFecha = fecha[1]+"/"+fecha[0]+"/"+fecha[2];
            var newDate = new Date(newFecha).getTime() + 86400000;
            var participantes = even.participantes;
            var esParticipante = participantes.indexOf(nombreUsuario);

            console.log('esPArticipante');
            console.log(esParticipante);
            
            console.log('participantes: ', participantes);
            console.log('nombreUsuario: ', nombreUsuario);
            console.log('fecha del evetno: ', fecha);
            console.log('fecha acutial: ', fechaActual);
            console.log('fecha newDate: ', newDate);
            if (esParticipante > 0) {
                console.log('entre a la calificacion porque estoy en el evento');
                if (fechaActual > newDate) {
                    console.log('entre a la calificacion porque estoy en la fecha correcta');
                    res.status(200).send(true);
                }
                else {
                    res.status(200).send(false);
                }
            }
            else {
                res.status(200).send(false);
            } 

        });
   
});


app.put('/calificar/:username/:nota', function(req, res){
    var username = req.params.username;
    var nota = req.params.nota;
    User.findOne({"usuario": username}, function(err, usuario){
        if (err) {
            return res.json({
                "success": false,
                "msg": "No se encontro el usuario",
                "error": err
            });
        }
    
        else{
    
            usuario.comentarios.push(nota);
            var notas = usuario.comentarios;
            var promedio = 0;
    
            for (var i = 0; i < notas.length; i++) {
                promedio = promedio + notas[i];
            }
    
            promedio = promedio / notas.length;
            usuario.calificacion = promedio;
            usuario.save((err, usuario) => {
                if (err) {
                    res.status(500).send(err)
                }
                res.status(200).send(usuario);
            });
        }
    });
    });
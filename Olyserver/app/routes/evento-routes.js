var express = require('express');
var app = module.exports = express.Router();
var Evento = require('../models/evento');
var Esce = require('../models/escenario');

// Recuperar todos los eventos
app.get('/evento', function (req, res) {
    Evento.find({}, function (err, even) {
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

// Crear evento en la base de datos
app.post('/evento', function (req, res) {
    console.log('estamos en post de evento')
    if (req.body.nombre == null || req.body.nombre == '' ||req.body.admin == null || req.body.admin == '' || req.body.lugar == null || req.body.lugar == '' || req.body.fecha == null || req.body.fecha == ''|| req.body.participantes == null || req.body.participantes == ''|| req.body.numMaxParticipantes == null || req.body.numMaxParticipantes == ''|| req.body.hora == null || req.body.hora == ''|| req.body.deporte.nombre == null || req.body.deporte.nombre == '') {
        return res.status(400).send({
            "success": false,
            "msg": "Error you need to provide all fields"
        });
    }

    var newEvent = new Evento({
        nombre: req.body.nombre,
        admin: req.body.admin,
        lugar: req.body.lugar,
        fecha: req.body.fecha,
        participantes: req.body.participantes,
        numMaxParticipantes : req.body.numMaxParticipantes,
        hora: req.body.hora,
        deporte :{nombre:req.body.deporte.nombre},
        imagen : req.body.imagen
    });

    newEvent.save(function (err) {
        if (err) {
            console.log("Some error", err);
            return res.json({
                "success": false,
                "msg": " already exist",
                "error": err
            });
        }
        res.status(201).send({ "success": true, "msg": "Event created" });
    });

});

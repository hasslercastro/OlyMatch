var express = require('express');
var app = module.exports = express.Router();
var disponible = require('../models/disponibilidad');

//get all places
app.get('/disponibilidad', function (req, res) {
    disponible.find({}, function (err, disponible) {
        if (err) {
            return res.json({
                "success": false,
                "msg": "Error while retrieving places",
                "error": err
            });
        }
        res.status(200).send({
            "success": true,
            "result": disponible
        });
    });
});

//create a place                                                           
app.post('/disponibilidad', function (req, res) {
    if (req.body.fecha == null || req.body.fecha == '' || req.body.hora == null || req.body.hora == '' || req.body.escenario == null || req.body.imagen_disponible == null) {
        return res.status(400).send({
            "success": false,
            "msg": "Error you need to provide all fields"
        });
    }

    var newdisponible = new disponible({
        fecha: req.body.fecha,
        hora: req.body.hora,
        escenario: req.body.escenario,
        disponible: req.body.disponible
    });

    newdisponible.save(function (err) {
        if (err) {
            console.log("Some error", err);
            return res.json({
                "success": false,
                "msg": "id already exist",
                "error": err
            });
        }
        res.status(201).send({ "success": true, "msg": "Place created" });
    });
});

//delete a comment                                                                                
app.delete('/disponibilidad/:disponibleId', function (req, res) {
    var lectionId = req.params.disponibleId;
    if (!lectionId || lectionId === "") {
        return res.json({
            "success": false,
            "msg": "Error, you need to send the Id of place",
            "error": err
        });
    }
    disponible.findByIdAndRemove(lectionId, function (err, removed) {
        if (err) {
            return res.json({
                "success": false,
                "msg": "Error while deleting place",
                "error": err
            });
        }
        return res.status(200).json({ "success": true, "msg": "place deleted" });
    });
});

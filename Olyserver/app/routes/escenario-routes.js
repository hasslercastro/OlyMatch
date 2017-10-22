var express = require('express');
var app = module.exports = express.Router();
var Esce = require('../models/escenario');

//get all places
app.get('/escenario', function (req, res) {
    Esce.find({}, function (err, esce) {
        if (err) {
            return res.json({
                "success": false,
                "msg": "Error while retrieving places",
                "error": err
            });
        }
        res.status(200).send({
            "success": true,
            "result": esce
        });
    });
});

app.get()
//create a place                                                           
app.post('/escenario', function (req, res) {
    if (req.body.id == null || req.body.id == '' || req.body.escenario == null || req.body.escenario == '' || req.body.deportes == null || req.body.deportes == ''|| req.body.imagen_escenario == null || req.body.imagen_escenario == '') {
        return res.status(400).send({
            "success": false,
            "msg": "Error you need to provide all fields"
        });
    }

    var newEsce = new Esce({
        id: req.body.id,
        escenario: req.body.escenario,
        imagen_escenario: req.body.imagen_escenario,
        deportes: req.body.deportes
    });

    newEsce.save(function (err) {
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
app.delete('/escenario/:esceId', function (req, res) {
    var lectionId = req.params.esceId;
    if (!lectionId || lectionId === "") {
        return res.json({
            "success": false,
            "msg": "Error, you need to send the Id of place",
            "error": err
        });
    }
    Esce.findByIdAndRemove(lectionId, function (err, removed) {
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

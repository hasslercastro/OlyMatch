var express = require('express');
var app = module.exports = express.Router();
var Esce = require('../models/escenario');
    


app.put('/escenario', function(req, esce){
    var lugar = req.body.nombre;
    var dia = req.body.dia;
    var hora = req.body.hora;
    Esce.findOne({ nombre : lugar, "disponibilidad.dia" : dia, "disponibilidad.hora" : hora }, (err, stage) => {
        
        if(err){
            esce.status(500).send(err);
        }
        else{
            stage.disponibilidad.disponible = true;
            
        stage.save((err, stage) => {
            if (err) {
                esce.status(500).send(err)
            }
            esce.status(200).send(stage);
        });
    }
        
    })

});
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


app.get('/escenario/:deporte', function(req, res){
    var deporte = req.params.deporte;
    Esce.find({ "deportes.nombre": deporte, "disponibilidad.disponible" : "true" }, function (err, esce) {
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
    }).select('nombre').select('ruta');
});


app.get('/escenario/lugar/:lugar/:dia', function(req, res){
    var lugar = req.params.lugar;
    var dia = req.params.dia;
    Esce.find({ "nombre": lugar, "disponibilidad.dia" : dia , 'disponibilidad.disponible' : true }, function (err, esce) {
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
    }).select('disponibilidad.hora');
});
//create a place                                                           
app.post('/escenario', function (req, res) {
    if (req.body.deportes == null || req.body.deportes == '') {
        return res.status(400).send({
            "success": false,
            "msg": "Error you need to provide all fields of escenario"
        });
    }

    var newEsce = new Esce({
        nombre : req.body.nombre,
        deportes: req.body.deportes,
        imagen_escenario : req.body.imagen_escenario,
        disponibilidad :  { dia: req.body.disponibilidad.dia, hora : req.body.disponibilidad.hora, disponible : req.body.disponibilidad.disponible }
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

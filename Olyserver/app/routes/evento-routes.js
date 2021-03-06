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

app.get('/filtrar/:deporte', function (req, res) {
    var dep= req.params.deporte;
    console.log("desde el server este es el deporte" , dep)
    Evento.find({"deporte.nombre" : dep}, function (err, even) {
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


app.put('/unirse/:username/:lugar/:fecha/:hora/:codigo',(req, res) =>{
    var foto = req.body.foto;
    var nombre = req.body.nombre;
    var primerApellido = req.body.primerApellido;
    lugar = req.params.lugar;
    fecha = req.params.fecha;
    hora = req.params.hora;
    codigo = req.params.codigo;
    username = req.params.username;
    console.log(lugar, fecha, hora, username)

    Evento.findOne({lugar: lugar, fecha : fecha, hora : hora}, (err, even) => {
        if(err){
            res.status(500).send(err);
        }

        else{
            console.log("Even: ", even)
            var noEsta = true;
            for (var index = 0; index < even.participantes.length; index++) {
                if(even.participantes[index].userName == username){
                    noEsta = false;
                }
                
            }
            // && even.participantes.indexOf(username) < 0
            if (even.numMaxParticipantes > 0 && (noEsta == true)) {

                var participante = { userName: username, fotoPerfil: foto, nombre: nombre, primerApellido: primerApellido, codigo: codigo }
                even.participantes.push(participante);
                even.numMaxParticipantes = even.numMaxParticipantes - 1;

            even.save((err, even) => {
                if (err) {
                    res.status(500).send(err)
                }
                console.log("unido exitosamente");
                res.status(200).send(true);
            });

            }

            else{
                console.log('no se puede unir');
                res.status(200).send(false);
            }   
        }

    });
});

app.get('/escenario/imagen/:nombre', function (req, res) {
    var nombre = req.params.nombre;
    Esce.distinct('imagen_escenario', { "nombre": nombre }, function (err, esce) {
        if (err) {
            return res.json({
                "success": false,
                "msg": "Error while retrieving places images",
                "error": err
            });
        }
        res.status(200).send({
            "success": true,
            "result": esce
        });
    }, function (err, nombre) {
    })
});

// Crear evento en la base de datos
app.post('/evento', function (req, res) {
    console.log('estamos en post de evento')
    if (req.body.nombre == null || req.body.nombre == '' || req.body.admin == null || req.body.admin == '' || req.body.lugar == null || req.body.lugar == '' || req.body.fecha == null || req.body.fecha == '' || req.body.numMaxParticipantes == null || req.body.numMaxParticipantes == '' || req.body.hora == null || req.body.hora == '' || req.body.deporte.nombre == null || req.body.deporte.nombre == '') {
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
        imagen: req.body.imagen,
        //participantes: req.body.participantes,
        numMaxParticipantes: req.body.numMaxParticipantes,
        hora: req.body.hora,
        deporte: { nombre: req.body.deporte.nombre }
        
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

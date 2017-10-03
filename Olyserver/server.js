//Set up
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');
var coment = require('./app/models/comentario');
var escen = require('./app/models/escenario');
var usuario = require('./app/models/usuario');
var evento = require('./app/models/evento');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

mongoose.connect('mongodb://localhost:27017/Oly', function (err) {
    if (err) {
        console.log('Not connected to database ' + err);
        throw err;
    } else {
        console.log('Successfully connected to mongoDB');
    }

});

app.use(morgan('dev'));
app.get('/home', function (req, res) {
    res.send('Hello from Oly home');
});

app.listen(port, function () {
    console.log('Running server on port ' + port);

});

//Prueba Modelos

// Comentarios
app.post('/comentarios', function (req, res) {
    var come = new coment();
    come.id = req.body.id;
    come.coment = req.body.coment;
    come.valor = req.body.valor;
    come.save(function (err) {
        if (req.body.id == null || req.body.id == '' || req.body.coment == null || req.body.coment == '' || req.body.valor == null || req.body.valor == '') {
            res.send('Asegurese que id, comentario y valor fueron dados');
        } else {
            if (err) {
                res.send('id ya existe');
            } else {
                res.send('Comentario creado');
            }
        }
    });

});


//Escenario

app.post('/escenarios', function (req, res) {
    var esce = new escen();
    esce.id = req.body.id;
    esce.escenario = req.body.escenario;
    esce.imagen_escenario = req.body.imagen_escenario;
    esce.save(function (err) {
        if (req.body.id == null || req.body.id == '' || req.body.escenario == null || req.body.escenario == '' || req.body.imagen_escenario == null || req.body.imagen_escenario == '') {
            res.send('Asegurese que id, escenario y imagen_escenario fueron dados');
        } else {
            if (err) {
                res.send('id ya existe');
            } else {
                res.send('Escenario creado');
            }
        }
    });

});

//Usuario

app.post('/usuario', function (req, res) {
    var usua = new usuario();
    usua.username = req.body.username;
    usua.correo = req.body.correo;
    usua.contrasena = req.body.contrasena;
    usua.telefono = req.body.telefono;
    usua.calificacion = req.body.calificacion;
    usua.nombre = req.body.nombre;
    usua.primerApellido = req.body.primerApellido;
    usua.segundoApellido = req.body.segundoApellido;
    usua.imagen_usuario = req.body.imagen_usuario;
    usua.comentarios = req.body.comentarios;
    usua.save(function (err) {
        if (req.body.username == null || req.body.username == '' || req.body.correo == null || req.body.correo == '' || req.body.nombre == null || req.body.nombre == '') {
            res.send('Asegurese que id, escenario y imagen_escenario fueron dados');
        } else {
            if (err) {
                res.send('id ya existe');
            } else {
                res.send('Usuario creado');
            }
        }
    });

});


//Evento

app.post('/evento', function (req, res) {
    var even = new evento();
    even.admin = req.body.admin;
    even.lugar = req.body.lugar;
    even.fecha = req.body.fecha;
    even.participantes = req.body.participantes;
    even.numMaxParticipantes = req.body.numMaxParticipantes;
    even.hora = req.body.hora;
    even.publico = req.body.publico;
    even.deporte = req.body.deporte;

    even.save(function (err) {
        if (req.body.admin == null || req.body.admin == '' || req.body.lugar == null || req.body.lugar == '' 
            || req.body.fecha == null || req.body.fecha == ''|| req.body.participantes == null || req.body.participantes == ''
            || req.body.numMaxParticipantes == null || req.body.numMaxParticipantes == ''|| req.body.hora == null || req.body.hora == ''
            || req.body.publico == null || req.body.publico == ''|| req.body.deporte == null || req.body.deporte == '') {
            res.send('Asegurese que todos los campos fueron llenados');
        } else {
            if (err) {
                res.send('id ya existe');
            } else {
                res.send('Usuario creado');
                //var x = new event();
                //var y = x.findOne({"admin":"Villa"});
                //console.log(y);
            }
        }
    });

});
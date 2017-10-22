var express = require('express');
var app = module.exports = express.Router();
var evento = require('../models/evento');

//get all events
app.get('/events', function (req, res) {
    evento.find({}, function (err, esce) {
        if (err) {
            return res.json({
                "success": false,
                "msg": "Error while retrieving events",
                "error": err
            });
        }
        res.status(200).send({
            "success": true,
            "result": esce
        });
    });
});


var express = require('express');
var app = module.exports = express.Router();
var Comen = require('../models/comentario');

//get all coments
app.get('/comentario', function (req, res) {
	Comen.find({}, function (err, comen) {
		if (err) {
			return res.json({
				"success": false,
				"msg": "Error while retrieving coments",
				"error": err
			});
		}
		res.status(200).send({
			"success": true,
			"result": comen
		});
	});
});

//create a comment                                                           
app.post('/comentario', function (req, res) {
	if (req.body.id == null || req.body.id == '' || req.body.coment == null || req.body.coment == '' || req.body.valor == null || req.body.valor == '') {
		return res.status(400).send({
			"success": false,
			"msg": "Error you need to provide all fields of coment"
		});
	}

	var newComent = new Comen({
		id: req.body.id,
		coment: req.body.coment,
		valor: req.body.valor
	});

	newComent.save(function (err) {
		if (err) {
			console.log("Some error", err);
			return res.json({
				"success": false,
				"msg": "id already exist",
				"error": err
			});
		}
		res.status(201).send({ "success": true, "msg": "Comment created" });
	});
});

//delete a comment                                                                                
app.delete('/comentario/:comId', function (req, res) {
    var lectionId = req.params.comId;
    if (!lectionId || lectionId === "") {
        return res.json({
            "success": false,
            "msg": "Error, you need to send the Id of comment",
            "error": err
        });
    }
    Comen.findByIdAndRemove(lectionId, function (err, removed) {
        if (err) {
            return res.json({
                "success": false,
                "msg": "Error while deleting comment",
                "error": err
            });
        }
        return res.status(200).json({ "success": true, "msg": "coment deleted" });
    });
});

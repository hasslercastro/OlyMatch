var cloudinary = require('cloudinary').v2;
var fs = require('fs');
var express = require('express');
var app = module.exports = express.Router();
var User = require('../models/usuario');

var uploads = {};

// set your env variable CLOUDINARY_URL or set the following configuration                                                                            
cloudinary.config({
    cloud_name: 'jsanch90',
    api_key: '791512534712525',
    api_secret: 'Pc-W-jb1MGxWcqB8ebHwdV-Rgrw'
});

console.log("** ** ** ** ** ** ** ** ** Uploads ** ** ** ** ** ** ** ** ** **");

app.put('/imagen/:username', (req, res) => {
    var user = req.params.username;
    var img = req.body.imagenURI;
    User.findOne({ usuario: user }, (err, users) => {
        if (err) {
            res.status(500).send(err);
        }

        else {
            // File upload   
            var x = '' ;                                                                                                                                     
             cloudinary.uploader.upload(img, { tags: 'basic_sample' }, function (err, image) {
                if (err) { console.warn(err); }
                //x= image.url;
                users.imagen_usuario = image.url;
                console.log(users.contrasena);
                users.save((err, users) => {
                    if (err) {
                        res.status(500).send(err)
                    }
                    res.status(200).send(users);
                });
            }).then(result =>  {return new Promise(result.image.url) }).then(x => users.imagen_usuario = x,console.log(x));
        }
    });
});


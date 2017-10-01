//Set up
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');
var User = require('./app/models/user');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

mongoose.connect('mongodb://localhost:27017/Prueba2', function (err) {
    if (err) {
        console.log('Not connected to database ' + err);
        throw err;
    } else {
        console.log('Successfully connected to mongoDB');
    }

});

app.use(morgan('dev'));
app.get('/home', function (req, res) {
    res.send('Hello from home');
});

app.listen(port, function () {
    console.log('Running server on port ' + port);

});

//Models

app.post('/users', function (req, res) {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.save(function (err) {
        if (req.body.username ==null || req.body.username =='' || req.body.password ==null || req.body.password =='' || req.body.email ==null || req.body.email =='' ){
            res.send('Ensure username, email and password were provided');
        } else {
            if (err) {
                res.send('Username or email already exists');
            } else {
                res.send('User created');
            }
        }
    });

});

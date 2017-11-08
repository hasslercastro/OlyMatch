//Set up
var logger = require('morgan'),
    cors = require('cors'),
    http = require('http'),
    express = require('express'),
    errorhandler = require('errorhandler'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    helmet = require('helmet'),
    config = require('./config.json');

var app = express();
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
    app.use(errorhandler());
}

var port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect(config.database, function (err) {
    if (err) {
        console.log('Not connected to database ' + err);
        throw err;
    } else {
        console.log('Successfully connected to mongoDB');
    }

});

app.use(require('./app/routes/comentario-routes'));
//app.use(require('./app/routes/escenario-routes'));
app.use(require('./app/routes/evento-routes'));
app.use(require('./app/routes/escenario-routes'));
app.use(require('./app/routes/usuario-routes'));
app.use(require('./app/routes/imagen-routes'));



http.createServer(app).listen(port,'0.0.0.0', function (err) {
    console.log('listeing in http://localhost:' + port);
});

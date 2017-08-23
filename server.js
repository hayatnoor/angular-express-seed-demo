var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var config = require('./config.json');
var routes = require('./routes/routes.js');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.json()); // for parsing application/json
app.use(routes); // references the routes file

var port = config.port;

// expose assets directory to express (this is all the front-end code)
app.use('/assets', express.static('assets'));
app.use('/dist', express.static('dist'));


// expose main index.html file which contains angular application
app.get('/*', function (req, res) {
	res.render(__dirname + '/views/index');
});

// listen on a port specified
app.listen(port, function () {
	console.log('Example app listening on port ' + port)
});
// External Dependencies
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/favicon.ico', function(req, res) {
	res.end();
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});

app.set('port', process.env.PORT || 3000);
var server = http.createServer(app);
server.listen(app.get('port'), function() {
	console.log('Server listening on port ' + app.get('port') + ' ...');
});

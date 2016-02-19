// External Dependencies
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var upload = multer();

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

app.post('/api/check', upload.any(), function(req, res){
	res.json({name: req.files[0].originalname, size: req.files[0].size})
});

app.set('port', process.env.PORT || 3000);
var server = http.createServer(app);
server.listen(app.get('port'), function() {
	console.log('Server listening on port ' + app.get('port') + ' ...');
});

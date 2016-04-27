var express  = require('express');
var app      = express();
var db       = require('./server/db');

// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/public');
// });

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('/pages/index.ejs');
});

app.set('view engine', 'ejs');

// app.use(express.static('public'));


app.listen(4000, function(){
	console.log("Listening on port 4000!");
});